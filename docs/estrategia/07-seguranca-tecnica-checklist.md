---
arquivo: 07-seguranca-tecnica-checklist.md
título: Segurança técnica — checklist operacional pro dev (Jose)
status: rascunho — implementar por fase, revisar com Tatiana antes de cada cutover
audiência: Jose (dev backend) — assume nível intermediário-sênior
---

# Segurança técnica — checklist do dev

## Em uma frase

Tudo que o programador (Jose) precisa fazer pra a NeuroMãe operar com segurança suficiente pra cumprir LGPD + ECA + ECA Digital + boas práticas modernas, em ordem por fase, com configurações concretas. Esse documento é a **extensão acionável** do `02-tecnologia-e-seguranca.md` — lá tem o porquê; aqui tem o como.

## Como usar

- Cada item é uma **tarefa terminável** (checkbox).
- Itens marcados ⚠️ exigem decisão/revisão com Tatiana antes de implementar.
- Itens marcados 🔐 são bloqueantes pra LGPD (não pode ir pra prod sem).
- Snippets são exemplos — não copiar cegamente, adaptar ao repo `jdutra/neuromae`.

---

## Pré-requisitos (antes de qualquer código novo)

- [ ] 🔐 Você tem 2FA ativado em **todas** as contas: GitHub, Supabase, Anthropic, Meta Business, Mercado Pago, Vercel, Resend, registro de domínio.
- [ ] 🔐 Bitwarden (ou outro vault) compartilhado com Tatiana, com **API keys mascaradas** (você guarda os valores reais, ela tem acesso de emergência).
- [ ] Repo `jdutra/neuromae` com branch protection em `main` (PR obrigatório, status checks obrigatórios).
- [ ] Todas as PRs com pelo menos auto-review (sua) antes do merge.
- [ ] `.env` no `.gitignore`. **Auditar histórico do git** com `git log --all --full-history -- .env*` pra garantir que nunca foi commitado. Se foi, rotacionar TUDO antes da Fase 1.
- [ ] Você tem ambiente de **staging** separado do prod (Supabase project separado, Anthropic API key separada, BSP sandbox separado).

---

## CHECKLIST FASE 1 — antes do beta privado

### A. Supabase

- [ ] 🔐 Projeto criado na região **South America (São Paulo)** — não US East. Verificar em `Project Settings → General → Region`.
- [ ] 🔐 Plano Free é OK pra Fase 1. **Pro ($25 USD) antes da Fase 2** (necessário pra backups automáticos).
- [ ] 🔐 PostgreSQL versão suportada (≥ 15). Não usar versões EOL.
- [ ] `service_role` key **nunca** exposta no cliente — só em Edge Functions ou backend.
- [ ] `anon` key OK no cliente, **mas RLS obrigatório** em toda tabela (próximo item).
- [ ] 🔐 **Row-Level Security (RLS) ATIVADO em todas as tabelas**. Default = recusar.

  ```sql
  ALTER TABLE usuarias ENABLE ROW LEVEL SECURITY;
  ALTER TABLE mensagens ENABLE ROW LEVEL SECURITY;
  ALTER TABLE historico_arquivado ENABLE ROW LEVEL SECURITY;
  -- ... idem todas as outras
  
  -- Policy: usuária só lê próprios dados
  CREATE POLICY "usuarias_select_proprio" ON usuarias
    FOR SELECT USING (id = auth.uid());
  
  -- Default deny: sem policy permissiva, ninguém lê nada
  ```

- [ ] Testar RLS: criar 2 usuárias dummy, conectar com token da A, tentar SELECT em mensagens da B. **Deve falhar.** Se não falhar, policy errada.
- [ ] Senhas/tokens de admin do Supabase rotacionados desde a criação do projeto (não usar a senha que veio no email de boas-vindas).
- [ ] Configurar `pg_stat_statements` pra ver queries lentas no Dashboard.
- [ ] Configurar `pgcrypto` extensão pra hash bcrypt e funções de encryption.

### B. Esquema do banco

- [ ] Migrations versionadas (Supabase CLI ou Drizzle/Prisma). **Nunca rodar ALTER TABLE direto em prod via SQL Editor.**
- [ ] Tabela `usuarias` com colunas mínimas:

  ```sql
  CREATE TABLE usuarias (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    telefone_hash TEXT UNIQUE NOT NULL,     -- hash sha256(telefone+sal)
    telefone_enc TEXT NOT NULL,             -- pgcrypto encrypted (texto)
    email TEXT,
    nome TEXT,
    palavra_acesso_hash TEXT,               -- bcrypt cost 12
    aceite_termos_versao TEXT NOT NULL,
    aceite_termos_em TIMESTAMPTZ NOT NULL,
    aceite_termos_ip TEXT,
    idade_confirmada BOOLEAN DEFAULT FALSE,
    criado_em TIMESTAMPTZ DEFAULT NOW(),
    atualizado_em TIMESTAMPTZ DEFAULT NOW(),
    apagado_em TIMESTAMPTZ NULL,
    apagado_motivo TEXT NULL                -- 'titular_solicitou', 'inativa_24m', etc.
  );
  
  CREATE INDEX idx_usuarias_telefone_hash ON usuarias(telefone_hash) WHERE apagado_em IS NULL;
  ```

- [ ] Tabela `mensagens` (texto criptografado em coluna):

  ```sql
  CREATE TABLE mensagens (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    usuaria_id UUID NOT NULL REFERENCES usuarias(id) ON DELETE CASCADE,
    origem TEXT NOT NULL CHECK (origem IN ('usuaria','gaba')),
    texto_enc TEXT NOT NULL,                -- pgcrypto: encrypted com chave por usuária
    tipo TEXT NOT NULL DEFAULT 'texto',     -- 'texto', 'imagem_descartada', 'audio_descartado'
    metadados JSONB,
    criado_em TIMESTAMPTZ DEFAULT NOW(),
    apagada_em TIMESTAMPTZ NULL
  );
  
  CREATE INDEX idx_mensagens_usuaria ON mensagens(usuaria_id, criado_em DESC) WHERE apagada_em IS NULL;
  ```

- [ ] Tabela `audit_log`:

  ```sql
  CREATE TABLE audit_log (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    ator_tipo TEXT NOT NULL,                -- 'usuaria','sistema','admin'
    ator_id TEXT,                           -- UUID ou identificador
    acao TEXT NOT NULL,                     -- 'leu_conversa','exportou_historico','apagou_dados'
    alvo_tipo TEXT,
    alvo_id TEXT,
    ip TEXT,
    user_agent TEXT,
    metadados JSONB,
    criado_em TIMESTAMPTZ DEFAULT NOW()
  );
  
  CREATE INDEX idx_audit_criado_em ON audit_log(criado_em DESC);
  CREATE INDEX idx_audit_acao ON audit_log(acao);
  ```

  Audit log **nunca apaga**. Retenção: 3 anos (LGPD). Após 3 anos, move pra arquivo cold.

- [ ] Tabela `aceites_termos` (separada — pra histórico de versões):

  ```sql
  CREATE TABLE aceites_termos (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    usuaria_id UUID NOT NULL REFERENCES usuarias(id) ON DELETE CASCADE,
    versao_termos TEXT NOT NULL,
    versao_privacidade TEXT NOT NULL,
    aceito_em TIMESTAMPTZ DEFAULT NOW(),
    ip TEXT,
    canal TEXT                              -- 'whatsapp','landing'
  );
  ```

### C. Criptografia em campo (texto das mensagens)

- [ ] Função `encrypt_message(texto, chave)` usando `pgp_sym_encrypt` do pgcrypto:

  ```sql
  -- Encrypt
  INSERT INTO mensagens (usuaria_id, origem, texto_enc)
  VALUES ($1, 'usuaria', pgp_sym_encrypt($2, current_setting('app.encryption_key')));
  
  -- Decrypt (só em Edge Function, com service_role)
  SELECT pgp_sym_decrypt(texto_enc::bytea, current_setting('app.encryption_key')) AS texto
  FROM mensagens WHERE id = $1;
  ```

- [ ] ⚠️ Estratégia de chave: pra Fase 1, **chave única do projeto** (em Supabase Vault). Fase 3+: chave **derivada por usuária** (mais complexo). Discutir com Tatiana antes da Fase 2.
- [ ] Chave de criptografia armazenada no **Supabase Vault** ou variável de ambiente da Edge Function, **NÃO em código**.
- [ ] Procedimento de rotação de chave documentado (mesmo que não rotacione na Fase 1).

### D. Hashing de palavra de acesso

- [ ] Usar `pgcrypto.crypt()` com bcrypt cost 12:

  ```sql
  -- Cadastro
  UPDATE usuarias 
  SET palavra_acesso_hash = crypt($1, gen_salt('bf', 12))
  WHERE id = $2;
  
  -- Verificação
  SELECT id FROM usuarias 
  WHERE id = $1 AND palavra_acesso_hash = crypt($2, palavra_acesso_hash);
  ```

- [ ] Bloqueio após 3 tentativas erradas, lock de 1h (implementar em Edge Function — não no banco direto):

  ```typescript
  // Pseudocódigo
  const tentativas = await getTentativasRecentes(usuariaId, '1 hour');
  if (tentativas >= 3) throw new Error('LOCK_PALAVRA_1H');
  ```

- [ ] Comparação **case-insensitive** e **sem acento** — normalizar antes:

  ```typescript
  function normalizarPalavra(s: string): string {
    return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  }
  ```

### E. Edge Functions (bot)

- [ ] Toda Edge Function valida o webhook secret (HMAC do BSP).

  ```typescript
  import { createHmac, timingSafeEqual } from 'node:crypto';
  
  function verificarHmac(payload: string, sigHeader: string, secret: string): boolean {
    const hmac = createHmac('sha256', secret);
    hmac.update(payload);
    const esperado = hmac.digest('hex');
    return timingSafeEqual(Buffer.from(esperado), Buffer.from(sigHeader));
  }
  ```

- [ ] Rate limiting nas Edge Functions: max 20 req/min por número de telefone. Implementar com `kv` ou tabela `rate_limits` no banco.
- [ ] Timeout de chamadas Claude API: 30s. Após, fallback "Tô pensando ainda, volta pra mim em 1 min?".
- [ ] Logging estruturado (JSON). **Nunca logar** texto bruto da mensagem da usuária. Logar: `request_id`, `usuaria_id (hash)`, `latencia_ms`, `tipo_resposta`, `modelo`, `tokens_in`, `tokens_out`.
- [ ] Sentry configurado pra exception capture (free tier OK). Filtros pra **não enviar** `texto_enc` ou outros dados sensíveis.

### F. WhatsApp BSP (360dialog ou Gupshup)

- [ ] Conta BSP criada e linked com Meta Business.
- [ ] Templates aprovados pela Meta:
  - Boas-vindas
  - Mensagem fixada (pinned)
  - Recuperação 24h (se a usuária some por mais de 24h)
- [ ] Webhook do BSP apontando pra Edge Function `/webhook/whatsapp` com **HMAC secret** ativado.
- [ ] Sandbox/Test number diferente do número de produção.
- [ ] Limite de envio configurado pra evitar gasto explodir (BSP geralmente permite teto mensal).

### G. Anthropic Claude API

- [ ] Conta organização Anthropic (não pessoal). Plano comercial.
- [ ] 🔐 Flag "Disable training on customer data" ATIVADA no painel Anthropic (geralmente já default em API comercial, mas confirmar).
- [ ] DPA (Data Processing Addendum) aceito formalmente: https://www.anthropic.com/legal/dpa
- [ ] API key separada por ambiente (dev, staging, prod). **Nunca compartilhar.**
- [ ] Spending limit mensal configurado no painel (ex: $200/mês na Fase 1 — alerta em $150).
- [ ] System prompt da GABA armazenado em **arquivo versionado no repo**, não inline. Carregar pela Edge Function.
- [ ] **NUNCA** mandar pra Claude API: telefone real da usuária, CPF, email pessoal, nome de criança terceiro (anonimizar: "seu filho" / "ele" / "ela"), foto.
- [ ] Logar `request_id` do Claude (header `request-id`) em audit_log pra rastreio.

### H. Email transacional (Resend ou Brevo)

- [ ] Conta criada com domínio próprio (não enviar de gmail).
- [ ] SPF/DKIM/DMARC configurados no DNS do `neuromae.com.br`. Validar com [mxtoolbox](https://mxtoolbox.com).
- [ ] Templates HTML versionados no repo:
  - "Sua palavra de acesso GABA"
  - "Sua palavra de acesso GABA — atualizada"
  - "Confirmação de cadastro"
  - "Aviso de exclusão de dados (LGPD)"
  - 4 templates de direitos do titular (acesso, correção, exclusão, portabilidade)
- [ ] Email transacional **nunca** vai pra `gmail.com` da Tatiana — vai pro `dpo@neuromae.com.br` real.

### I. Variáveis de ambiente / secrets

- [ ] `.env.example` no repo com **nomes** das variáveis (sem valores).
- [ ] Variáveis em produção via **Supabase Edge Function secrets** ou Vercel env vars:
  ```
  SUPABASE_URL=
  SUPABASE_SERVICE_ROLE_KEY=
  ANTHROPIC_API_KEY=
  ANTHROPIC_MODEL=claude-sonnet-4-6
  BSP_WEBHOOK_SECRET=
  BSP_API_KEY=
  BSP_API_URL=
  MERCADOPAGO_ACCESS_TOKEN=
  MERCADOPAGO_WEBHOOK_SECRET=
  RESEND_API_KEY=
  EMAIL_FROM=
  ENCRYPTION_KEY=
  SENTRY_DSN=
  ```
- [ ] Nenhum secret no repo. Auditar com `git secrets --scan` ou similar.
- [ ] Rotação documentada: como rotacionar cada secret em caso de comprometimento. Manter num runbook (próxima seção).

### J. Backup & disaster recovery (Fase 1 mínimo viável)

- [ ] Backup manual semanal: `pg_dump` → arquivo `.sql.gz` → upload Google Drive da Tatiana (em pasta privada).
- [ ] Script automatizado (cron simples ou GitHub Action) pra rodar toda segunda 02:00 BRT.
- [ ] Retenção do backup manual: 4 semanas no Drive, depois apagar.
- [ ] Procedimento de restore documentado em `docs/operacao/restore-banco.md` (criar agora).
- [ ] ⚠️ Antes da Fase 2: subir pra Supabase Pro pra backup automático diário. Manter o manual semanal como redundância.

### K. Logs e monitoramento

- [ ] Sentry conectado a Edge Functions + landing. Verificar que erros aparecem.
- [ ] Dashboard Supabase Logs olhando 1x/dia: erros, queries lentas, RLS denied (sinal de tentativa de acesso indevido).
- [ ] Alerta básico no Sentry: erros em produção mandam email pro Jose (não pro DPO da Tatiana — pra não saturar canal de privacidade).

### L. Testes de segurança (rodar antes do beta)

- [ ] **Teste de RLS**: criar 2 usuárias fake, tentar SELECT cruzado, validar que falha.
- [ ] **Teste de webhook HMAC**: mandar webhook com assinatura errada → deve recusar com 401.
- [ ] **Teste de injection**: tentar `'; DROP TABLE usuarias; --` em campo nome → deve ser tratado.
- [ ] **Teste de XSS na landing**: se tem qualquer input → output, escapar HTML.
- [ ] **Teste de palavra de acesso**: 3 erros → bloqueio 1h funciona.
- [ ] **Teste de exclusão LGPD**: usuária pede exclusão → soft delete imediato → hard delete em 7 dias.
- [ ] **Teste de retenção**: simular mensagem com 91 dias → deve estar movida pra resumo arquivado.

---

## CHECKLIST FASE 2 — antes da primeira cobrança paga

### A. Supabase Pro

- [ ] 🔐 Upgrade pra Pro ($25/mês). Verificar:
  - Backups automáticos diários ativados (7 dias retenção)
  - Compute size adequada (Small ou Medium)
  - Read replicas (não necessário ainda)

### B. Mercado Pago Assinaturas

- [ ] 🔐 Conta PJ ativada com CNPJ do MEI (depois que Tatiana abrir).
- [ ] Webhook de notificação configurado → Edge Function `/webhook/mercadopago`.
- [ ] 🔐 HMAC do webhook Mercado Pago validado em cada chamada.
- [ ] **NUNCA** armazenar dados do cartão. Você só recebe `subscription_id` e `payment_id`. PCI fica com o Mercado Pago.
- [ ] Webhook lida com eventos: `subscription.created`, `subscription.cancelled`, `payment.created`, `payment.failed`, `payment.refunded`.
- [ ] Idempotência: receber o mesmo webhook 2x não dobra a cobrança/ação. Usar `mp_event_id` como chave única.
- [ ] Tabela `assinaturas` no banco mapeando: `usuaria_id`, `mp_subscription_id`, `status`, `ultimo_pagamento_em`, `proxima_cobranca_em`.

### C. Plano de incidente (ensaiar uma vez)

- [ ] Runbook `docs/operacao/incidente-vazamento.md` criado, com passos exatos.
- [ ] Ensaio: Tatiana e Jose simulam vazamento, cronometram, ajustam.
- [ ] Lista de telefones críticos colada no runbook: ANPD, Sentry, Supabase support.
- [ ] Rotação de TODAS as credenciais em 1h: script ou checklist passo a passo.

### D. Auditoria pré-lançamento

- [ ] Rodar [Snyk](https://snyk.io) ou `npm audit` no repo — zerar vulnerabilidades críticas/altas.
- [ ] Verificar headers HTTP da landing com [securityheaders.com](https://securityheaders.com) — buscar nota A ou A+.
- [ ] Testar HTTPS com [SSL Labs](https://www.ssllabs.com/ssltest/) — A ou A+.
- [ ] Verificar CSP (Content Security Policy) na landing — restritivo, sem `unsafe-inline`.
- [ ] Audit RLS pela última vez antes do go-live.

### E. Direitos do titular (LGPD operacional)

- [ ] Implementar endpoints/comandos no bot:
  - `/meus-dados` → exporta JSON com tudo (acesso, art. 18 II)
  - `/corrigir` → fluxo de correção (art. 18 III)
  - `/apagar` → soft delete imediato, hard em 7 dias (art. 18 VI)
  - `/portabilidade` → JSON estruturado pra download (art. 18 V)
- [ ] Email `dpo@neuromae.com.br` com SLA interno de 5 dias (limite legal 15 dias).
- [ ] Template de resposta pra cada tipo de pedido (`docs/operacao/templates-dpo/`).

### F. Métricas mínimas de produção

- [ ] Dashboard simples (pode ser Notion + planilha) com:
  - Uptime da Edge Function (% últimas 24h)
  - Latência mediana e p95 das respostas
  - Taxa de erro Claude API
  - Triggers de urgência disparados/semana
  - Pedidos de exclusão LGPD/mês

---

## CHECKLIST FASE 3 — antes de escalar (100+ usuárias)

### A. Criptografia column-level com chave por usuária

- [ ] Implementar derivação de chave por usuária (HKDF a partir da master key + UUID da usuária).
- [ ] Migration cuidadosa: re-criptografar mensagens existentes (em batches, com checkpoint).
- [ ] Testar restore de dados em ambiente staging antes de rodar em prod.

### B. Rate limiting avançado

- [ ] Rate limit por IP além de por usuária.
- [ ] Bot detection básico (não responder a mensagens vindas de números que enviaram >100 msgs em 1h).
- [ ] Cloudflare (free tier) na frente do Vercel — proteção DDoS básica.

### C. Pentest externo (uma vez)

- [ ] Contratar pentest aplicação web + API. Faixa: R$ 3.000–10.000 dependendo do escopo.
- [ ] Empresa: HackerOne, Tempest Security, Conviso, Real Protect.
- [ ] Corrigir achados críticos antes de publicar relatório (ou divulgar privadamente).

### D. WAF e proteção de borda

- [ ] Cloudflare Pro (R$ 100/mês) com WAF ativo se receber tráfego de bot ou ataque.
- [ ] Geo-blocking opcional pra países sem usuárias (reduz superfície de ataque).

### E. SOC mínimo

- [ ] Alertas em Sentry/Slack pra: pico de erros, RLS denied repetido (sinal de ataque), latência Claude > 5s, falha de pagamento > 5%.

### F. Disaster recovery completo

- [ ] RPO 1h: backup contínuo via Point-in-Time Recovery do Supabase (Pro+ inclui).
- [ ] RTO 4h: procedimento testado de restore em região alternativa.
- [ ] Documentação versionada e ensaiada anualmente.

---

## Práticas contínuas (toda semana ou toda mudança)

### Toda semana
- [ ] Olhar Sentry dashboard (5 min)
- [ ] Olhar Supabase Logs — erros, RLS denied, queries lentas (10 min)
- [ ] Sample de 5 conversas pra verificar qualidade (junto com Tatiana, 15 min)
- [ ] Olhar gasto Anthropic/BSP/Supabase do mês (5 min)

### Toda mudança em prod
- [ ] PR review (auto-review se sozinho)
- [ ] CI passou
- [ ] Migration testada em staging primeiro
- [ ] Rollback plan escrito no PR
- [ ] Deploy fora de horário de pico (não 19h-22h dia útil)
- [ ] Monitorar Sentry por 30 min pós-deploy

### Toda quarta-feira (dia de manutenção)
- [ ] Update de dependências (`npm outdated`, `npm update` cuidadoso)
- [ ] Revisar PRs abertas
- [ ] Limpar branches mortas

### Todo mês
- [ ] Revisar audit_log: quem leu o quê, padrões suspeitos
- [ ] Revisar contas com acesso (deve ter só Jose + Tatiana)
- [ ] Revisar custos cloud
- [ ] Atualizar este checklist se algo mudou

### Todo trimestre
- [ ] Ensaiar restore de backup em staging
- [ ] Revisar lista de fornecedores e contratos
- [ ] Atualizar dependências críticas (não só patch — minor também)

---

## O que o dev NÃO faz sozinho

- ⚠️ **Mudar Termos de Uso ou Política de Privacidade** — sempre passa pela Tatiana (e advogada, se mudança material).
- ⚠️ **Decidir retenção de dado** — Tatiana define no `02-tecnologia-e-seguranca.md`. Você implementa.
- ⚠️ **Liberar acesso de terceiro** ao banco (mesmo freelancer) — Tatiana aprova por escrito.
- ⚠️ **Responder pedido de titular LGPD** — Tatiana lê e aprova resposta antes de mandar.
- ⚠️ **Decidir publicar status page público** em caso de incidente — Tatiana decide a comunicação.
- ⚠️ **Mudar prompt da GABA** em prod sem revisão — todo prompt change passa por Tatiana (ela revisa tom, conteúdo, edge cases).

---

## Glossário rápido

- **LGPD**: Lei Geral de Proteção de Dados (Lei 13.709/2018). Em vigor desde 2020.
- **DPO**: Data Protection Officer = Encarregado de Proteção de Dados. Pessoa que responde à ANPD em nome da empresa. Na Fase 1-2, é Tatiana.
- **ANPD**: Autoridade Nacional de Proteção de Dados. Órgão regulador da LGPD (e do ECA Digital).
- **RLS**: Row-Level Security do Postgres. Garante que uma usuária só lê seus próprios dados.
- **HMAC**: Hash-based Message Authentication Code. Usado pra validar que um webhook veio do remetente certo.
- **Bcrypt cost 12**: Algoritmo de hash de senha com 2^12 iterações. Padrão moderno seguro.
- **RIPD**: Relatório de Impacto à Proteção de Dados (LGPD art. 38). Documento interno.
- **ROT**: Registro de Operações de Tratamento (LGPD art. 37). Documento interno.
- **BSP**: Business Solution Provider — intermediário oficial Meta pra WhatsApp Business API.
- **WAF**: Web Application Firewall. Filtra requisições maliciosas antes de chegar ao app.
- **PCI-DSS**: padrão de segurança pra processamento de cartão. Você NÃO precisa cumprir porque o Mercado Pago cuida.

---

## Artefatos que devem existir no repo `jdutra/neuromae`

Ao final da Fase 2, o repo deve ter:

```
/migrations/                        ← migrations versionadas
/supabase/functions/                ← Edge Functions
  /webhook-whatsapp/
  /webhook-mercadopago/
  /gaba-message/
  /export-dados-lgpd/
  /apagar-dados-lgpd/
/prompts/
  /gaba-system-prompt-v1.0.md       ← versionado
  /gaba-system-prompt-changelog.md
/scripts/
  /backup-semanal.sh
  /restore-banco.sh
  /rotacionar-secrets.sh            ← playbook em script
/tests/
  /rls.test.ts                      ← teste de Row-Level Security
  /encryption.test.ts
  /webhook-hmac.test.ts
  /lgpd-fluxo.test.ts
/docs/
  /restore-banco.md
  /incidente-vazamento.md           ← runbook
  /rotacao-secrets.md
  /templates-dpo/                   ← respostas pra direitos do titular
/.env.example
/.github/workflows/
  /ci.yml                            ← lint, test, security audit
  /backup-semanal.yml                ← cron de backup
```

---

## Resumo das recomendações desta área

1. **RLS em tudo + service_role nunca no cliente** — base de tudo no Supabase.
2. **Texto da mensagem criptografado em campo** (pgcrypto), chave única do projeto na Fase 1-2, por usuária na Fase 3+.
3. **Bcrypt cost 12 + lock 1h após 3 erros** pra palavra de acesso.
4. **HMAC em todo webhook** (BSP, Mercado Pago).
5. **Logging sem dado sensível** + Sentry com filtros.
6. **Backup manual semanal** na Fase 1, **automático diário** na Fase 2 (Supabase Pro).
7. **2FA em todas as contas + Bitwarden compartilhado**.
8. **Direitos do titular implementados como comandos do bot**, não só via email.
9. **NUNCA mandar pra Claude API:** telefone real, CPF, email pessoal, nome de criança, imagem.
10. **Ensaiar plano de incidente uma vez** antes da Fase 2.

---

📎 Esse documento se conversa com `02-tecnologia-e-seguranca.md` (estratégia/o porquê) e com `04-operacao-e-incidentes.md` (plano de incidentes). Manter os 3 sincronizados quando mudar.
