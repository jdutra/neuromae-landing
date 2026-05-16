# Política de Segurança da Informação — NeuroMãe / GABA

**Versão [VERSÃO]** · **Em vigor desde [DATA DE PUBLICAÇÃO]**
**Status:** documento interno · uso restrito · arquivar em drive privado

> Esta política define os controles técnicos e organizacionais que a NeuroMãe adota para proteger dados pessoais — em especial dados sensíveis e de criança. É de uso interno, vincula toda a equipe e todo fornecedor com acesso a dados, e serve de evidência em caso de fiscalização da ANPD.

---

## 1. Princípios

A segurança da informação na NeuroMãe é baseada em três princípios:

a. **Privacy by Design** — privacidade é decisão de arquitetura, não acréscimo posterior.
b. **Menor privilégio** — cada pessoa e cada sistema acessa apenas o mínimo necessário para a função.
c. **Defesa em profundidade** — múltiplas camadas de controle, para que a falha de uma não comprometa o todo.

## 2. Classificação dos dados

| Classificação | Exemplos | Tratamento mínimo |
|---|---|---|
| **Pública** | Conteúdo da landing, materiais de marketing aprovados | Sem restrição de acesso |
| **Interna** | Documentos operacionais, métricas agregadas anônimas | Acesso por colaboradores autorizados |
| **Confidencial** | Cadastro de usuárias, conteúdo de conversa não-sensível, logs técnicos | Acesso por papel funcional, com auditoria |
| **Sensível** | Dado de saúde, dado de criança, palavra-chave (hash), documentos enviados, dados de pagamento | Acesso restrito, criptografia, auditoria reforçada |

Todo dado novo, ao entrar no sistema, recebe uma classificação. **Em caso de dúvida, classifica-se como Sensível.**

## 3. Controle de acesso

### 3.1. Identificação e autenticação

- Toda pessoa com acesso aos sistemas tem **conta nominal própria** — não há conta compartilhada.
- Autenticação obrigatória com **multi-fator (MFA)** para qualquer painel administrativo, banco de dados ou ferramenta com acesso a dados de usuárias.
- Senhas seguem padrão mínimo: 14 caracteres, com mistura de tipos, armazenadas em gerenciador de senhas (1Password, Bitwarden ou equivalente). Senha individual nunca trafega por email, Slack ou WhatsApp.
- Credenciais de serviço (chaves de API, tokens, credenciais de banco) ficam em **cofre de segredos** (Supabase Secrets, Vercel Environment Variables, ou equivalente). Nunca em código, nunca em repositório, nunca em mensagens.

### 3.2. Autorização

- Cada papel funcional (fundadora, desenvolvimento, atendimento, marketing) tem permissões definidas e documentadas.
- O acesso a dados sensíveis (saúde, criança) é **negado por padrão** e concedido apenas mediante necessidade operacional justificada.
- Revisão semestral de acessos: o que cada pessoa ainda precisa acessar?
- Acesso é **imediatamente revogado** no desligamento ou no fim do escopo do contrato.

### 3.3. Logs de auditoria

- Toda consulta a dado de usuária no banco gera log: quem, quando, qual usuária, qual operação.
- Logs são imutáveis por 12 meses.
- Revisão amostral mensal pelo encarregado para detectar acessos suspeitos.
- Acesso por curiosidade (sem ticket / sem necessidade operacional documentada) é violação grave da Política Interna da Equipe.

## 4. Criptografia

### 4.1. Em trânsito

- Todo tráfego com dados pessoais usa **TLS 1.2 ou superior**.
- Certificados gerenciados por provedor (Vercel, Supabase) com renovação automática.
- Não há endpoints HTTP em produção que aceitem dado pessoal.

### 4.2. Em repouso

- Banco de dados com **criptografia em repouso** ativada (padrão do provedor — AES-256).
- Dados especialmente sensíveis (hash de palavra-chave, conteúdo de documentos durante o processamento temporário) recebem **camada adicional** de criptografia em nível de aplicação, com chaves separadas do resto.
- Backups são criptografados pelos mesmos padrões.

### 4.3. Hash de credenciais

- A palavra-chave privada da usuária é armazenada apenas como **hash com algoritmo seguro** (Argon2id, bcrypt com fator ≥ 12, ou scrypt).
- Nunca trafega em texto puro depois do recebimento.
- Nunca é exibida em logs.

## 5. Segregação de dados

- Dados sensíveis (saúde, criança) ficam em **tabelas separadas** das demais, com permissões mais restritas.
- O ambiente de **desenvolvimento e homologação não recebe dados reais**. Apenas dados sintéticos ou anonimizados de forma irreversível.
- Backups de produção não podem ser restaurados em ambiente de dev/staging.

## 6. Gestão de fornecedores e subprocessadores

- Todo subprocessador com acesso a dados pessoais é avaliado antes da contratação: contrato de proteção de dados (DPA), localização, certificações, histórico de incidentes.
- Lista de subprocessadores ativos é mantida atualizada (e refletida na Política de Privacidade pública).
- Reavaliação anual de cada subprocessador.
- Substituição imediata em caso de incidente grave do fornecedor.

## 7. Gestão de vulnerabilidades

- Dependências de código (npm, pip, etc.) são monitoradas por ferramenta automática (Dependabot, Snyk, ou equivalente).
- Vulnerabilidades **críticas** são corrigidas em até **7 dias corridos**; **altas** em até **30 dias**; **médias** em até **90 dias**.
- Atualizações de dependência são testadas em homologação antes de produção, exceto correções emergenciais documentadas.

## 8. Desenvolvimento seguro

- Código-fonte versionado no GitHub, com revisão obrigatória (pull request) antes de merge para `main`.
- **Proibido** commitar segredos (chaves de API, tokens, senhas) no repositório — toda configuração sensível em variáveis de ambiente.
- Análise estática automática (linter, scanner de segredos) no pipeline de CI.
- Pen-test ou revisão de segurança externa antes do lançamento público amplo (Fase 2).

## 9. Backup e recuperação

- Backups automatizados diários do banco de produção.
- Retenção de backups por **30 dias** rotativos.
- Teste de restauração trimestral (procedimento documentado).
- Backups armazenados em região diferente da produção, com criptografia em repouso.
- Em caso de incidente, RTO objetivo (Recovery Time Objective): **24 horas**. RPO (Recovery Point Objective): **24 horas**.

## 10. Continuidade de negócio

- Documentação atualizada de como reiniciar / restaurar cada serviço (run-book interno).
- Acesso de emergência (break-glass account) disponível para a fundadora e o encarregado, com auditoria reforçada.
- Plano de comunicação a usuárias em caso de indisponibilidade prolongada (mensagem fixada, redes sociais).

## 11. Resposta a incidente de segurança

Conforme art. 48 da LGPD. Procedimento detalhado:

### 11.1. Detecção

Fontes possíveis: monitoramento automatizado, relato da equipe, relato de usuária, denúncia externa, comunicado de subprocessador.

### 11.2. Triagem (até 24h da detecção)

- Encarregado é notificado imediatamente.
- Avaliação preliminar: o que aconteceu, qual o escopo, quais dados foram afetados.
- Decisão: incidente confirmado? Risco aos titulares?

### 11.3. Contenção

- Interromper o vetor (revogar credencial, bloquear acesso, suspender funcionalidade).
- Preservar evidências para investigação posterior (logs, snapshots).
- Estimar volume e tipo de dado afetado.

### 11.4. Comunicação à ANPD

- Em caso de incidente que envolva **risco ou dano relevante aos titulares**, a ANPD é comunicada em **prazo razoável** conforme regulamentação vigente (atualmente, **3 dias úteis** conforme Resolução CD/ANPD nº 15/2024).
- Conteúdo da comunicação: descrição do incidente, dados envolvidos, número aproximado de titulares, medidas tomadas, riscos e mitigações.

### 11.5. Comunicação aos titulares

- Quando o risco é relevante, as titulares afetadas são comunicadas diretamente (WhatsApp, email), com:
  - descrição clara do que aconteceu;
  - dados envolvidos;
  - riscos para ela;
  - medidas que a NeuroMãe tomou;
  - canal de contato para dúvidas e para exercício de direitos.

### 11.6. Pós-incidente

- Relatório interno (root cause analysis) em até **15 dias** do encerramento.
- Plano de prevenção da recorrência.
- Atualização desta Política de Segurança se aplicável.

## 12. Operações sensíveis específicas

### 12.1. Processamento de documentos enviados pela usuária

- Documento original entra em storage temporário com **TTL ≤ 5 minutos** e descarte automático.
- OCR/leitura ocorre em função serverless isolada, sem persistência local.
- Resumo textual minimalista é o único output persistido.
- Teste automatizado diário valida que não há documentos remanescentes no storage temporário.

### 12.2. Inferência por IA (Anthropic / Claude)

- Configuração contratual com Anthropic para que **dados enviados via API não sejam usados para treinamento** do modelo.
- Prompt do sistema contém limites explícitos: não diagnosticar, não prescrever, não pedir dados proibidos.
- Filtro de saída verifica respostas suspeitas (pedido de dado proibido, frase clínica diagnóstica).
- Logs amostrais de conversas são revisados para detecção de drift do modelo (preservando privacidade da usuária — pseudonimização).

### 12.3. Pagamento

- Nenhum dado de cartão trafega ou é armazenado pela NeuroMãe.
- Toda cobrança usa o checkout do Mercado Pago, em fluxo redirecionado.
- Conciliação interna usa apenas identificador da transação e valor, sem dado financeiro completo.

## 13. Treinamento de equipe

- **Onboarding obrigatório** de proteção de dados para qualquer pessoa que vá ter acesso a sistemas, antes do primeiro acesso.
- Reciclagem **anual** ou imediata a cada mudança regulatória relevante.
- Material de treinamento inclui: LGPD, ECA, princípios da NeuroMãe, política interna, fluxo de incidente, fluxo de direitos do titular.

## 14. Auditoria e revisão

- Esta política é **revisada trimestralmente** ou a cada incidente / mudança regulatória relevante.
- Auditoria interna anual: amostragem de logs, teste de restauração, revisão de acessos, revisão de subprocessadores.
- Auditoria externa antes do lançamento público amplo (Fase 2).

## 15. Histórico de revisões

| Versão | Data | Responsável | Alterações |
|---|---|---|---|
| 1.0 (rascunho) | [DATA DE PUBLICAÇÃO] | [NOME ENCARREGADO] | Versão inicial — pré-lançamento MVP/beta. |

---

*Documento interno. Acesso restrito.*
