---
arquivo: 02-tecnologia-e-seguranca.md
título: Tecnologia e segurança — stack, criptografia, retenção, BSP
status: rascunho — discutir com Jose antes de implementar
---

# Tecnologia e segurança

## Em uma frase

Use **WhatsApp Business API oficial via BSP gratuito** (360dialog ou Gupshup) + **Supabase Brasil** com criptografia em repouso e em trânsito + **Anthropic Claude API** com flag de "não treinar" ativada + **Vercel** pra landing — tudo configurado pra **não armazenar mídia, retenção curta de conversas, e logs de auditoria pra LGPD**. Isso te dá conformidade alta sem custo proibitivo na Fase 1-2.

## 1. Visão geral do stack

```
┌─────────────────────────────────────────────────────────────┐
│  USUÁRIA (mãe) — WhatsApp no celular dela                    │
└─────────────────────────────────────────────────────────────┘
                          ↓ ↑
┌─────────────────────────────────────────────────────────────┐
│  META (WhatsApp Cloud API)  — TLS, criptografia ponta-a-ponta │
└─────────────────────────────────────────────────────────────┘
                          ↓ ↑
┌─────────────────────────────────────────────────────────────┐
│  BSP (360dialog ou Gupshup) — webhook + envio de templates    │
└─────────────────────────────────────────────────────────────┘
                          ↓ ↑
┌─────────────────────────────────────────────────────────────┐
│  SUPABASE EDGE FUNCTIONS — orquestração, lógica do bot         │
│  - Recebe webhook do BSP                                       │
│  - Persiste mensagens (criptografia em repouso)                │
│  - Chama Claude API                                            │
│  - Envia resposta de volta via BSP                             │
└─────────────────────────────────────────────────────────────┘
                          ↓ ↑
        ┌──────────────────────────────────┐
        │  ANTHROPIC CLAUDE API              │
        │  (com flag "no training" ativada)  │
        └──────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  SUPABASE POSTGRES (BR ou EUA com adequação LGPD)             │
│  - Tabela: usuárias (telefone hash, email, palavra hash)      │
│  - Tabela: conversas (texto criptografado em repouso)         │
│  - Tabela: aceites de termos (timestamp, versão)              │
│  - Tabela: histórico arquivado (resumos pós-criptografia)     │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  VERCEL — landing pública (neuromae.com.br)                    │
│  - Estática, HTTPS, sem dados sensíveis                        │
│  - Página /termos, /privacidade, /contato                      │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  MERCADO PAGO — assinaturas recorrentes                        │
│  - Webhook avisa Supabase quando pago/cancelado                │
│  - Não armazena cartão de propriedade da NeuroMãe              │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  EMAIL TRANSACIONAL (Resend ou Brevo)                          │
│  - Envia palavra de acesso uma vez                             │
│  - Envia recibos, avisos                                       │
└─────────────────────────────────────────────────────────────┘
```

## 2. WhatsApp: API oficial vs Z-API (a decisão mais importante dessa rodada)

### A escolha

Você (ou o repo `jdutra/neuromae`) hoje está em Z-API. **Recomendação forte:** migrar pra WhatsApp Business API oficial via BSP gratuito **antes da Fase 2**.

### Comparação

| Critério | Z-API | WhatsApp Business API oficial |
|---|---|---|
| Custo | R$ 80-200/mês fixo | Templates: ~R$ 0,35/mensagem fora da janela 24h. Service messages: grátis. BSPs gratuitos no início. |
| Estabilidade | Workaround de WhatsApp Web — risco de banimento aleatório do número | Conexão oficial Meta — número não banido sem motivo |
| Compliance LGPD | Frágil — opera por scraping, sem DPA Meta | Forte — DPA oficial Meta + DPA BSP |
| ECA Digital (verificação de idade) | Não tem verificação | Meta facilita integração com KYC + janela de 24h ajuda controle |
| Múltiplos atendentes | OK | OK (com BSP) |
| Multidispositivo | OK | OK |
| Templates aprovados pela Meta | Não suporta | Suporta (mensagem fixada, boas-vindas, etc.) |
| Pra mostrar pra advogada | "É workaround" — argumento ruim | "É a única forma oficial" — argumento bom |

### Como migrar

1. **Criar conta Meta Business Manager** (gratuito) — business.facebook.com
2. **Verificar a empresa** (precisa de CNPJ — então é depois da Fase 2 abrir MEI)
3. **Escolher BSP gratuito** — recomendações:
   - **360dialog** — fácil setup, plano free pra começar, preços em euro. https://www.360dialog.com
   - **Gupshup** — alternativa, plano free generoso, preços em USD. https://www.gupshup.io
   - **Yalo, Take Blip, Wati** — mais caros, mais robustos. Pular por enquanto.
4. **Cadastrar template messages** (boas-vindas, lembretes, mensagem fixada) — Meta precisa aprovar (24-48h)
5. **Webhook** apontando pra Supabase Edge Function
6. **Cutover** — desativa Z-API, ativa API oficial. Janela de 1-2h, planejar fora de horário.

### Custos estimados WhatsApp API
- BSP free tier: R$ 0/mês (pra <1.000 mensagens)
- Mensagens fora da janela de 24h (templates de marketing/utility): ~R$ 0,35 cada
- Estimativa pra 100 assinantes com baixa frequência de templates iniciadas pelo bot: **R$ 50-150/mês**
- Quando crescer pra 500 assinantes: ~R$ 200-400/mês

> ⚠️ Antes de cancelar Z-API, **manter as duas rodando em paralelo por 1 semana** pra confirmar que o fluxo oficial não tem bug. Migração com regressão é catastrófica.

## 3. Supabase — banco e Edge Functions

### Por que Supabase
- Edge Functions Deno = bot serverless, escala automaticamente
- Postgres com extensões úteis (pgvector pra memória semântica)
- Authentication pronto (futuro)
- Storage com criptografia em repouso
- Free tier generoso (500MB DB, 2GB transfer, 500k edge function invocations)
- DPA disponível: https://supabase.com/legal/dpa
- Possibilidade de hospedar em região **South America (São Paulo)** — mantém dados em território nacional, ponto a favor pra LGPD

### Configuração obrigatória pra LGPD
- [ ] **Selecionar região São Paulo** ao criar o projeto (não US East — isso muda regime jurídico)
- [ ] **Encryption at rest** — Supabase já faz isso por padrão (AES-256)
- [ ] **Encryption in transit** — TLS obrigatório, já default
- [ ] **Row-Level Security (RLS)** em **todas** as tabelas — uma usuária só vê seus próprios dados
- [ ] **Backups automáticos** — Supabase Pro faz daily, 7 dias retenção. Pro plan = $25/mês (vale começar quando tiver 20+ assinantes)
- [ ] **Audit logs** — logar todo acesso a tabela de conversas (quem leu, quando, IP, quê)
- [ ] **Anonimização** — telefones e emails armazenados como hash + valor; nome da usuária pode ficar em claro porque é dado pessoal "comum"

### Esquema mínimo do banco

```sql
-- Usuárias
CREATE TABLE usuarias (
  id UUID PRIMARY KEY,
  telefone_hash TEXT UNIQUE NOT NULL,    -- hash do telefone pra busca; valor em coluna separada criptografada
  telefone_enc TEXT,                      -- criptografado com chave por usuária
  email TEXT,                             -- email claro (pra mandar recibo)
  nome TEXT,                              -- nome claro (a GABA chama pelo nome)
  palavra_acesso_hash TEXT,               -- bcrypt
  aceite_termos_versao TEXT,              -- ex: "v1.0-2026-05-12"
  aceite_termos_em TIMESTAMPTZ,
  aceite_termos_ip TEXT,
  idade_confirmada BOOLEAN DEFAULT FALSE,
  criado_em TIMESTAMPTZ DEFAULT NOW(),
  apagado_em TIMESTAMPTZ NULL             -- soft delete pra direito de exclusão LGPD
);

-- Conversas (mensagens individuais)
CREATE TABLE mensagens (
  id UUID PRIMARY KEY,
  usuaria_id UUID REFERENCES usuarias(id),
  origem TEXT CHECK (origem IN ('usuaria', 'gaba')),
  texto_enc TEXT NOT NULL,                -- TEXTO criptografado pela chave da usuária
  tipo TEXT,                              -- 'texto', 'imagem_recebida_descartada', etc.
  criado_em TIMESTAMPTZ DEFAULT NOW(),
  apagada_em TIMESTAMPTZ NULL
);

-- Histórico arquivado (resumos pós-conversa)
CREATE TABLE historico_arquivado (
  id UUID PRIMARY KEY,
  usuaria_id UUID REFERENCES usuarias(id),
  resumo_enc TEXT NOT NULL,
  periodo_inicio DATE,
  periodo_fim DATE,
  criado_em TIMESTAMPTZ DEFAULT NOW()
);

-- Auditoria
CREATE TABLE audit_log (
  id UUID PRIMARY KEY,
  ator TEXT NOT NULL,                     -- 'usuaria:UUID', 'sistema', 'admin:tatiana'
  acao TEXT NOT NULL,                     -- 'leu_conversa', 'apagou_dados', 'exportou_historico'
  alvo TEXT,                              -- 'usuaria:UUID', etc.
  ip TEXT,
  metadados JSONB,
  criado_em TIMESTAMPTZ DEFAULT NOW()
);
```

> ⚠️ **Schema acima é referência conceitual.** A implementação real fica com Jose no repo `jdutra/neuromae`. Detalhes (índices, RLS policies, migrations) lá.

## 4. Criptografia

### Em trânsito (always-on)
- TLS 1.3 entre tudo (Vercel ↔ Supabase ↔ BSP ↔ Meta ↔ Anthropic)
- Webhooks com **assinatura HMAC** validada (BSP e Mercado Pago oferecem isso)
- Nunca expor variável `SUPABASE_SERVICE_KEY` em código cliente — só Edge Functions

### Em repouso

**Camada 1: criptografia transparente do banco.** Supabase aplica AES-256 no disco automaticamente. Você não vê, não configura, é grátis. **Suficiente pra MVP.**

**Camada 2: criptografia em campo (column-level).** Você criptografa cada coluna sensível (`texto_enc`, `telefone_enc`) com uma chave **por usuária** derivada de uma master key (KMS). Vantagem: se alguém invadir o banco, ainda precisa quebrar AES por usuária. Trade-off: mais complexidade.

**Recomendação por fase:**
- **Fase 1-2 (até 100 usuárias):** Camada 1 só. Mais simples, "good enough".
- **Fase 3+ (>100 usuárias):** Adicionar Camada 2 pra colunas `texto_enc` e `historico_arquivado.resumo_enc`. Usar `pgcrypto` do Postgres + chaves no Supabase Vault.

### Chaves
- **Palavra de acesso:** bcrypt com cost factor 12 (padrão moderno). NUNCA armazenar em claro.
- **Senhas (se houver no futuro):** Argon2id ou bcrypt cost 12.
- **Master encryption key:** armazenada no Supabase Vault, **nunca** no código.
- **API keys (Anthropic, Mercado Pago, BSP):** Supabase Vault ou variável de ambiente Edge Function.

## 5. Anthropic Claude API

### Configuração obrigatória

1. **Plano comercial** (não usar Claude.ai consumer com login pessoal pra produção). Plano API.
2. **Flag "no training"** — por padrão a API comercial não treina com seus dados, mas confirmar nas configurações da organização.
3. **DPA assinado** — Anthropic Data Processing Addendum: https://www.anthropic.com/legal/dpa
4. **System prompt fixo da GABA** — em arquivo versionado, não inline em chamada. Carregar do banco ou config repo.
5. **Logging** — guardar request_id de cada chamada Claude pra auditoria.
6. **Rate limiting** — limitar gastos com cap mensal no painel Anthropic.

### Custos estimados
- Modelo: **Claude Sonnet 4.6** (custo-benefício ótimo, ~$3 input / $15 output por 1M tokens)
- Estimativa por conversa: ~3.000 tokens (input do system prompt + histórico recente + nova mensagem) e ~500 tokens output
- Custo por troca de mensagem: ~$0,015 USD = ~R$ 0,08
- 100 usuárias × 100 mensagens/mês = 10.000 mensagens = ~R$ 800/mês
- Otimizações: prompt caching da Anthropic reduz isso 50-80% se bem usado

### O que NÃO mandar pra Claude
- Telefone, email, CPF da usuária (não precisa)
- Nome de criança terceira (anonimizar — "seu filho", "ele")
- Foto/imagem nenhuma
- A palavra de acesso (jamais)

## 6. Retenção de dados

### Princípio LGPD: dados pelo tempo necessário, não mais

| Dado | Retenção | Justificativa |
|---|---|---|
| Mensagens da conversa (texto) | **90 dias** | Memória recente pra contexto |
| Resumo arquivado (após 90 dias, conversa vira resumo) | **2 anos** | Permite continuidade de relacionamento, e direito de acesso do titular |
| Aceite de termos | **5 anos após fim do contrato** | Defesa em ação consumerista (CDC prescreve em 5 anos) |
| Logs de auditoria | **3 anos** | Padrão LGPD pra demonstrar conformidade |
| Cadastro (nome, telefone, email) | **enquanto a conta existe + 5 anos após exclusão** | Defesa contra reclamação |
| Imagens recebidas | **descarte em ≤ 60 segundos** | Política da casa (regra 5 do #REGRA) |
| Backups | **30 dias** | Recuperação de desastre |
| Histórico de pagamento (NF, transações) | **5 anos** | Obrigação fiscal |

### Direito de exclusão (LGPD art. 18, VI)

A usuária pode pedir pra apagar tudo. Fluxo:
1. Pedido recebido (via GABA, email DPO ou WhatsApp)
2. Validar identidade (palavra de acesso ou outro)
3. **Soft delete** imediato (campo `apagado_em` = now)
4. Notificar Tatiana/Jose pra confirmar via email
5. **Hard delete** após 7 dias de carência (proteção contra arrependimento e ataque)
6. **Logs e backups:** preservados pelo prazo legal acima, mas com tag "titular solicitou exclusão" pra impedir uso futuro
7. Confirmar pra usuária com email + mensagem no WhatsApp

## 7. Logs e monitoramento

### O que logar
- Aceites de termos (timestamp + versão + IP)
- Acesso ao histórico arquivado (timestamp + sucesso/falha)
- Disparos de trigger de urgência (categoria + resposta da usuária)
- Erros de aplicação (Supabase Edge Functions tem isso)
- Latência de respostas Claude (pra qualidade)

### O que NÃO logar
- Texto bruto das mensagens da usuária (já está no banco criptografado)
- Palavra de acesso
- Token de autenticação BSP/Anthropic/Mercado Pago (mascarar nos logs)

### Ferramentas
- **Supabase Logs** — built-in, grátis
- **Sentry** (free tier) — pra erros do bot. https://sentry.io
- **Better Stack / Logtail** (free tier) — agregação de logs estruturados (opcional Fase 2+)

## 8. Backups e recuperação de desastre

### Backups
- Supabase Pro = backup automático diário (7 dias retenção). Free não tem.
- **Recomendação:** subir pra Supabase Pro ($25/mês) quando tiver 20+ usuárias.
- Backup adicional **manual** semanal — dump comprimido + criptografado em S3 ou Google Drive (gratuito até 15GB). Roteiro escrito em `docs/operacao/` (futuro).

### Disaster recovery
- RPO (recovery point objective): 24h aceitável na Fase 1-2, 1h na Fase 3+
- RTO (recovery time objective): 4h aceitável na Fase 1-2, 1h na Fase 3+
- Plano: se Supabase principal cair, levantar projeto novo na mesma região com último backup, reapontar webhook BSP. Documentar passos.

## 9. Mercado Pago — pagamentos

### O que usar
- **Planos de Assinatura** (recorrência automática mensal/anual)
- Aceita cartão de crédito (recomendado) e Pix (com renovação manual — não usar)
- Webhook configurado pra Edge Function processar pagamento/cancelamento

### O que NÃO armazenar
- Número do cartão (Mercado Pago tokeniza — você só recebe um token)
- CVV (nunca passa por você)
- Dados sensíveis do payment (use apenas o token de cobrança recorrente)

### PCI compliance
- Usando o fluxo de assinaturas, **você não precisa ser PCI-DSS compliant** — quem cumpre é o Mercado Pago. Você só armazena o ID da assinatura.

### Documentar isso na Política de Privacidade.

## 10. Domínio, DNS e email

### Domínio
- Mantenha o `neuromae.com.br` em uma conta sua (Registro.br, Namecheap, ou Google Domains). Renove 5 anos pra frente — investimento baixo, problema enorme se expirar.
- DNS apontando pra Vercel (landing).

### Email corporativo
- **Recomendação Fase 1:** Zoho Mail Lite — R$ 0 ou R$ 250/ano por 5 caixas (`contato@`, `dpo@`, `tatiana@`, `jose@`, `suporte@`)
- **Alternativa:** Google Workspace — R$ 30/mês por usuária. Mais caro mas vale se vocês já usam Google.
- **Importante:** o `dpo@neuromae.com.br` precisa estar **monitorado** — checagem diária. LGPD não tolera resposta lenta a direito do titular (prazo 15 dias).

### SPF/DKIM/DMARC
- Configurar autenticação de email no domínio pra evitar que emails do `dpo@` caiam no spam ou que alguém spoof seu domínio.
- Zoho/Google configuram automaticamente.

## 11. Segurança operacional (humana, não técnica)

### Senhas e 2FA
- Todas contas críticas (Meta Business, Mercado Pago, Supabase, Anthropic, GitHub, Registro.br) com **autenticação em 2 fatores** (TOTP — Google Authenticator, não SMS).
- Gerenciador de senhas: **Bitwarden** (grátis) — uma vault compartilhada Tatiana + Jose com senhas críticas.

### Acesso ao código
- GitHub com 2FA + signed commits
- Branches protegidas em `main`
- Token PAT em vez de senha (CLAUDE.md já documenta isso)

### O que fazer se um equipamento for roubado
- Revogar tokens GitHub, Supabase, Anthropic, Meta IMEDIATAMENTE
- Rotacionar API keys
- Trocar senhas críticas
- Plano completo em `04-operacao-e-incidentes.md`

## 12. Resumo das recomendações desta área

1. **Migrar de Z-API pra WhatsApp Business API oficial via BSP gratuito** (360dialog ou Gupshup) — investimento alto em valor, custo baixo. Antes da Fase 2.
2. **Supabase em região São Paulo, plano Free na Fase 1 → Pro ($25/mês) na Fase 2.** Encryption at rest e in transit automáticas.
3. **Anthropic API plano comercial com flag "no training" + DPA assinado.**
4. **Criptografia transparente do banco** na Fase 1-2; **column-level encryption** das mensagens na Fase 3+.
5. **Retenção curta** das conversas (90 dias texto, 2 anos resumo) + descarte imediato de imagens.
6. **Audit log** detalhado pra LGPD.
7. **Mercado Pago Assinaturas** — sem armazenar dado de cartão; PCI fica com eles.
8. **Email corporativo Zoho ou Google + 2FA em tudo + Bitwarden compartilhado.**

---

📎 Próximo doc: `03-go-to-market-e-pricing.md` — MVP, beta privado, captação das primeiras 50 usuárias, preço.
