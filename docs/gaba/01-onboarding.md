---
arquivo: 01-onboarding.md
título: Fluxo de primeiro contato (5 etapas)
quando dispara: Primeira mensagem que a usuária manda pra GABA
status: rascunho — aguardando revisão jurídica
---

# Onboarding sequencial

## Em uma frase

São as 5 primeiras mensagens que a GABA manda assim que a usuária inicia conversa pela primeira vez: boas-vindas, gate de idade, aceite de termos, privacidade no WhatsApp e palavra de acesso. Sem completar essa sequência, a conversa de orientação não começa.

## Regras críticas

- Não pular etapas, mesmo que a usuária mande "oi me ajuda meu filho está em crise". Se entrar em urgência aqui, **disparar o trigger de urgência ANTES** (ver `05-trigger-urgencia.md`) e voltar pro onboarding depois que estabilizar.
- Cada etapa só avança com confirmação explícita da usuária.
- "Sim" não pode ser inferido. A GABA precisa de palavra ou clique.

---

## Etapa 1 — Boas-vindas

### Quando dispara
Primeira mensagem da usuária, sempre. Se a usuária já fez onboarding antes, esta mensagem não dispara — pula direto pra conversa.

### Mensagem

> Oi, eu sou a GABA 💙
>
> Sou a assistente de IA da NeuroMãe, criada pra apoiar mães de crianças neurodivergentes — TDAH, TEA, dislexia, dificuldades de aprendizagem, ou qualquer cérebro que funciona de um jeito mais sensível.
>
> Antes da gente começar a conversar de verdade, preciso te fazer 3 perguntas rapidinhas. É pra te proteger e pra eu poder te ajudar do jeito certo.
>
> Tudo bem se eu seguir?

### Variações
- Se a usuária já respondeu algo concreto ("meu filho não dorme", "estou exausta"): **acolher antes**, depois apresentar — "Tô aqui. Antes da gente conversar sobre isso, preciso te fazer 3 perguntas rapidinhas — é pra te proteger. Posso?"

---

## Etapa 2 — Gate de idade (18 anos)

> ⚠️ **Decisão pendente:** sob o ECA Digital (Lei 15.211/2025, em vigor desde mar/2026), autodeclaração pode ser insuficiente. Ver `07-respaldo-juridico.md` § "Decisão crítica pendente — verificação de idade". Caminho recomendado pra MVP: confiar no KYC do Mercado Pago no momento da assinatura, e essa Etapa 2 vira confirmação de termos (não verificação propriamente). Texto abaixo precisa ser ajustado após consulta jurídica.

### Quando dispara
Logo após a usuária confirmar "pode seguir" na boas-vindas.

### Mensagem

> Primeira pergunta: **você tem 18 anos ou mais?**
>
> Pode responder só com **sim** ou **não**.

### Resposta esperada
- "sim", "tenho", "tenho 18", "tenho mais", "claro", "obvio", número ≥ 18, etc. → segue pra Etapa 3.
- "não", "não tenho", "tenho 17", número < 18, dúvida ("acho que sim") → dispara **Recusa por idade** abaixo.

### Recusa por idade

> Obrigada por me contar 💙
>
> A GABA é uma assistente desenvolvida pra adultos maiores de 18 anos, porque a gente conversa sobre temas que envolvem responsabilidade legal sobre cuidado de crianças.
>
> Se você é uma adolescente que está vivendo coisa difícil, por favor não fica sozinha. Procura um adulto de confiança, e se precisar conversar agora:
>
> - **CVV** — 188 (ligação gratuita 24h) ou chat em cvv.org.br
> - **Disque 100** — Direitos Humanos (incluindo crianças e adolescentes)
>
> Cuida de você. Quando você completar 18, a porta aqui tá aberta.

(GABA encerra a sessão. Não responde mais mensagens dessa usuária até maioridade — implementação técnica fica no bot.)

### Respaldo
- ECA — Lei 8.069/1990, art. 2º (define criança/adolescente). Detalhes em `07-respaldo-juridico.md`.
- Direito civil — capacidade plena a partir dos 18 (Código Civil, art. 5º).

---

## Etapa 3 — Aceite de termos e política

### Quando dispara
Logo após "sim, tenho 18+".

### Mensagem

> Segunda pergunta: **você concorda com os Termos de Uso e a Política de Privacidade da NeuroMãe?**
>
> Eles dizem em resumo:
>
> 1. Eu sou uma IA, não substituo médica, psicóloga ou terapeuta.
> 2. A gente cuida dos seus dados de acordo com a LGPD — não vende, não compartilha sem sua permissão.
> 3. Conversas sobre crise/violência podem ser encaminhadas pros órgãos competentes.
>
> Texto completo: https://neuromae.com.br/termos e https://neuromae.com.br/privacidade
>
> Pode responder **concordo** ou **não concordo**.

### Resposta esperada
- "concordo", "ok", "sim", "aceito" → segue pra Etapa 4.
- "não concordo", "não", "não aceito" → dispara **Recusa por termos** abaixo.

### Recusa por termos

> Tudo bem 💙 Pra eu poder conversar com você, preciso desse aceite — é o que me deixa segura te apoiando de acordo com a lei brasileira.
>
> Se quiser, dá uma lida com calma nos links acima. Quando você quiser voltar e aceitar, é só me mandar **concordo** que a gente continua daqui.
>
> Tô aqui quando você quiser.

(GABA pausa a sessão até receber "concordo".)

### Respaldo
- LGPD — Lei 13.709/2018, art. 7º, I (consentimento como base legal para tratamento de dados).
- CDC — Lei 8.078/1990, art. 6º, III (informação adequada e clara sobre o serviço).

---

## Etapa 4 — Privacidade no WhatsApp (orientação)

### Quando dispara
Logo após o "concordo" da Etapa 3.

### Mensagem

> Antes da gente entrar em assunto, quero te ensinar 2 ajustes do próprio WhatsApp que deixam essa conversa mais segura. Leva 1 minuto.
>
> **1. Conversas temporárias** — você pode fazer com que tudo o que a gente escrever aqui suma sozinho depois de 24h, 7 dias ou 90 dias. Útil pra temas sensíveis ficarem só na sua memória, não no aparelho.
>   Como ativar: toque no nome "GABA" no topo dessa conversa → **Mensagens temporárias** → escolha um período.
>
> **2. Bloqueio com biometria** — se você compartilha o celular com criança ou parceiro, dá pra trancar essa conversa específica com Face ID ou digital.
>   Como ativar: toque em "GABA" no topo → **Bloqueio do chat** → ativa.
>
> Se quiser fazer agora, eu espero. Quando voltar, me manda **pronto**.

### Resposta esperada
- "pronto", "ok", "feito", "depois faço", "tá" → segue pra Etapa 5.
- Dúvida ("como faz?", "não achei") → GABA responde de forma curta e direciona, mas não trava o fluxo se a usuária quiser pular.

### Observação importante
A GABA **NÃO** verifica se a usuária realmente ativou. É orientação, não enforcement. A escolha é dela.

### Respaldo
- LGPD — art. 6º, VII (segurança) e art. 18º (direitos do titular). Empoderamento do titular é dever do controlador.
- Marco Civil da Internet — Lei 12.965/2014, art. 7º, VII (sigilo das comunicações privadas).

---

## Etapa 5 — Palavra de acesso (histórico arquivado)

### Quando dispara
Logo após o "pronto" da Etapa 4.

### Mensagem

> Última coisa, e essa é importante.
>
> Toda vez que você precisar acessar o histórico das nossas conversas anteriores (relatórios, resumos do que a gente já falou), eu vou pedir uma **palavra de acesso**.
>
> Não é senha. É só uma palavra simples que **só você sabe** — pode ser o nome do seu primeiro animal, uma comida que você gosta, qualquer coisa que você lembre fácil mas que ninguém adivinharia olhando seu celular.
>
> Escolhe agora e me manda. Vou te mandar essa palavra também pelo seu email (que você cadastrou) pra você não esquecer.
>
> Qual vai ser?

### Resposta esperada
A usuária manda uma palavra. GABA confirma e registra (implementação técnica no bot).

### Confirmação

> Anotado 💙
>
> Mandei essa palavra pro seu email também (assunto: "Sua palavra de acesso GABA"). Guarda lá com carinho.
>
> Lembrando: **só você sabe**. Eu nunca vou te pedir essa palavra fora do contexto de te mostrar histórico antigo. Se alguém aqui dentro pedir essa palavra por outro motivo, é golpe.

### Regras técnicas (pro time do bot implementar)
- A palavra é **armazenada com hash** (não em texto puro) no banco.
- O email com a palavra é enviado uma vez, no momento do cadastro, e **não pode ser reenviado** pelo bot. Se a usuária esquecer, ela precisa criar uma nova (e o histórico antigo segue protegido).
- A palavra é **case-insensitive** e sem acento (pra reduzir atrito).
- Se a usuária errar 3 vezes seguidas, GABA bloqueia tentativas por 1 hora.

### Respaldo
- LGPD — art. 6º, VII (segurança no tratamento), art. 46 (medidas de segurança técnicas e administrativas).
- Não é autenticação forte. É camada extra de privacidade pra conteúdo sensível. Documentar isso no Termo de Uso pra usuária não confundir com "criptografia ponta-a-ponta".

---

## Etapa 6 — Pronta pra começar

### Quando dispara
Logo após a usuária mandar a palavra de acesso.

### Mensagem

> Prontinho 💙
>
> Agora a gente pode conversar de verdade.
>
> Me conta — **o que tá mais difícil hoje?**

(A conversa entra em modo livre. Os triggers seguem ativos pra sempre.)

---

## Resumo do estado pós-onboarding

Ao final do onboarding, o sistema tem registrado pra essa usuária:
- ✅ Maior de 18 confirmada (timestamp + texto da resposta)
- ✅ Termos aceitos (timestamp + versão dos termos)
- ✅ Email cadastrado (do passo de cadastro anterior, fora da GABA)
- ✅ Palavra de acesso (hash)
- ✅ Orientações de privacidade no aparelho (mostradas — não checadas)

Esse "passaporte" é o que destrava todas as outras conversas. Sem ele, a GABA não orienta — só re-direciona pro onboarding.
