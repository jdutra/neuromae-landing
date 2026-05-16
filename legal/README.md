# Documentos Jurídicos da NeuroMãe / GABA

Esta pasta contém os documentos legais públicos do ecossistema NeuroMãe — empresa-mãe — e do seu primeiro produto, a **GABA** (assistente de IA via WhatsApp para mães atípicas).

## Status

> **Rascunho técnico para revisão jurídica especializada.**
> Os documentos aqui são uma base sólida (LGPD + ECA + CDC + Marco Civil + boas práticas ANPD) gerada com apoio de IA, redigida para o estágio de **MVP/beta fechado**. Não substituem revisão por advogado(a) especializado(a) em LGPD, IA e direito da infância antes da cobrança pública ampla, conforme orientação do próprio documento estratégico interno (Prioridade 1).

## Arquivos

### Documentos públicos (vão pro site / pro bot)

| Arquivo | Para que serve | Onde aparece |
|---|---|---|
| `termos-de-uso.md` | Contrato entre NeuroMãe e usuária (regras do serviço, limites da IA, pagamento, cancelamento) | Rodapé da landing, onboarding do bot, link no checkout |
| `politica-de-privacidade.md` | Como tratamos dados pessoais conforme LGPD | Rodapé da landing, onboarding do bot, ponto único de verdade sobre dados |
| `politica-de-cookies.md` | Cookies usados na landing (curto e enxuto) | Rodapé da landing, banner de cookies |
| `aviso-consentimento.md` | Textos de consentimento separado para dado sensível (saúde) e dado de criança — para o fluxo do bot | Onboarding da GABA no WhatsApp |

### Documentos internos (`interno/`) — NÃO publicar

| Arquivo | Para que serve | Onde fica |
|---|---|---|
| `interno/ripd.md` | Relatório de Impacto à Proteção de Dados (LGPD Art. 5º, XVII e Art. 38) — análise de riscos da operação e mitigações | Drive privado da empresa; mostrado à ANPD em fiscalização; entregue a advogado em consultoria |
| `interno/politica-de-seguranca.md` | Diretrizes técnicas: criptografia, acesso, backup, resposta a incidente (LGPD Art. 48), continuidade de negócio | Drive privado da empresa; usada como norte pelo time técnico; mostrada à ANPD em fiscalização |
| `interno/politica-interna-equipe.md` | Código de conduta para todo colaborador/prestador + Anexo I: Termo de Confidencialidade (modelo) | Drive privado da empresa; **toda pessoa com acesso a dados deve assinar o Termo do Anexo I antes do primeiro acesso** |

> **Importante:** os 3 documentos da pasta `interno/` **não** são publicados no site. Eles ficam no drive da empresa e são apresentados sob demanda (fiscalização ANPD, due diligence de investidor, consultoria jurídica). Mantenha-os atualizados — eles são a **evidência** de que a NeuroMãe cumpre a LGPD na prática, não só no papel.

## Como usar

### 1. Preencher os placeholders

Todos os documentos usam placeholders entre colchetes maiúsculos. Antes de publicar, faça **find-and-replace** dos seguintes campos:

| Placeholder | Significado | Quando preencher |
|---|---|---|
| `[RAZÃO SOCIAL]` | Nome oficial registrado da empresa (ex: "Tatiana Junco" se pessoa física, ou "NeuroMãe Tecnologia LTDA" quando abrir PJ) | Antes do primeiro acesso público |
| `[NOME FANTASIA]` | Nome comercial ("NeuroMãe" ou "GABA by NeuroMãe") | Antes do primeiro acesso público |
| `[CNPJ OU CPF]` | Documento de inscrição. Use CPF na Fase 1 (pessoa física), CNPJ na Fase 2 (MEI/PJ) | Antes do primeiro acesso público |
| `[ENDEREÇO COMPLETO]` | Endereço de correspondência da empresa (pode ser endereço da MEI; **NÃO use residencial pessoal**) | Antes do primeiro acesso público |
| `[CIDADE/UF]` | Cidade e estado do foro escolhido | Antes do primeiro acesso público |
| `[EMAIL CONTATO GERAL]` | Email de atendimento geral (ex: `contato@neuromae.com.br`) | Antes do primeiro acesso público |
| `[EMAIL ENCARREGADO]` | Email específico do encarregado/DPO (ex: `lgpd@neuromae.com.br` ou `privacidade@neuromae.com.br`) | Antes do primeiro acesso público |
| `[NOME ENCARREGADO]` | Nome completo do encarregado de dados (DPO). Pode ser a própria Tatiana inicialmente, ou pessoa designada | Antes do primeiro acesso público |
| `[VALOR MENSAL]` | Preço do plano (ex: "R$ 29,90") | Quando definir o preço |
| `[NÚMERO WHATSAPP GABA]` | Número de WhatsApp pelo qual a GABA atende (ex: `+55 11 9XXXX-XXXX`) | Quando publicar o bot |
| `[DOMÍNIO LANDING]` | Domínio da landing (ex: `neuromae.com.br` ou `gabaia.com.br`) | Antes do primeiro acesso público |
| `[DATA DE PUBLICAÇÃO]` | Data em que a versão entrou em vigor (ex: "15 de junho de 2026") | A cada publicação |
| `[VERSÃO]` | Versão do documento (ex: "1.0") | A cada publicação |

### 2. Versionar

Toda alteração significativa nos documentos exige nova versão. Atualize `[VERSÃO]` e `[DATA DE PUBLICAÇÃO]` e mantenha as versões antigas no histórico do Git (não delete) — em caso de questionamento judicial ou da ANPD, você precisa conseguir reconstruir qual versão estava no ar em determinada data.

### 3. Publicar na landing

Renderize os arquivos em rotas próprias:

- `/termos` → `termos-de-uso.md`
- `/privacidade` → `politica-de-privacidade.md`
- `/cookies` → `politica-de-cookies.md`

Os avisos de consentimento (`aviso-consentimento.md`) **não vão pra landing** — vão pro fluxo de onboarding do bot, no WhatsApp.

### 4. Antes de cobrar publicamente, revisar com advogado

A versão final precisa passar por:

1. Advogado(a) com perfil LGPD + IA — revisar Política, Termos, RIPD e Política de Segurança
2. Advogado(a) com perfil ECA / infância — revisar especificamente o tratamento de dados de criança
3. Advogado(a) consumerista — revisar cláusula de cancelamento, arrependimento e foro
4. Psicóloga clínica / especialista em crise — revisar o fluxo de urgência (item R13 do RIPD) — Prioridade 2 do plano interno

### 5. Antes do primeiro acesso de qualquer colaborador

Toda pessoa que for ter acesso a sistemas/dados (você inclusive, formalmente):

a. lê a Política Interna da Equipe (`interno/politica-interna-equipe.md`);
b. lê a Política de Segurança (`interno/politica-de-seguranca.md`);
c. assina o Termo de Confidencialidade (Anexo I da Política Interna);
d. faz o treinamento básico de proteção de dados.

Guarde o Termo assinado em pasta dedicada do drive — em caso de fiscalização, ele é evidência forte de governança.

## Estrutura de marca usada nos textos

- **NeuroMãe** = empresa-mãe (a marca-guarda-chuva).
- **GABA** = nome oficial do produto chatbot, usado consistentemente em todos os documentos.
- **"Gabi"** = personagem/mascote (não aparece nos documentos jurídicos formais).
- **Usuária** = sempre no feminino, por default, porque o público é mães. Onde tecnicamente cabe outro gênero (responsável pai, cuidador), o documento diz "usuária ou usuário".

> **Sobre o nome "GABA":** "GABA" é o nome de um neurotransmissor (ácido gama-aminobutírico) — palavra de uso comum, com baixo potencial de registro como marca isolada no INPI. Antes do lançamento público amplo, recomenda-se uma busca de viabilidade de marca e considerar registrar a expressão composta **"GABA by NeuroMãe"** ou **"GABA da NeuroMãe"** como marca mista (figurativa + nominativa) — isso tende a ser registrável e protege a identidade visual.

## Histórico de versões

| Versão | Data | Alterações |
|---|---|---|
| 1.0 (rascunho) | 2026-05-12 | Versão inicial — rascunho técnico para revisão jurídica. |
