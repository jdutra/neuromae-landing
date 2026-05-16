---
arquivo: 06-trigger-historico.md
título: Trigger — pedido de histórico arquivado (palavra de acesso)
quando dispara: Quando a usuária pede pra ver o que conversaram antes / resumo de sessão anterior
status: rascunho — aguardando revisão jurídica
---

# Trigger: histórico arquivado

## Em uma frase

Quando a usuária pede pra acessar histórico de conversas antigas, relatórios ou resumos do que já conversaram, a GABA pede a palavra de acesso definida no onboarding (Etapa 5 do `01-onboarding.md`). Sem a palavra correta, não libera o conteúdo. Cumpre a regra 8 do `#REGRA`.

## O que é o histórico arquivado

Conteúdo sensível das conversas anteriores que **não fica visível no chat por padrão**, mas que pode ser recuperado pela usuária quando ela quiser — por exemplo:
- Resumo das últimas 30 dias de conversa
- Padrões observados ("você mencionou exaustão 12 vezes nos últimos 15 dias")
- Tópicos discutidos
- Sugestões dadas

**Não inclui** transcrições literais das mensagens — só síntese. (A decisão de armazenar ou não transcrições literais é jurídica/de produto, e fica documentada no Termo de Uso.)

## O que dispara (palavras-gatilho)

- "me manda meu histórico"
- "o que a gente conversou ontem/semana passada/mês passado?"
- "tem como você me lembrar do que falamos?"
- "me passa um resumo do que a gente já viu"
- "quero ver minhas conversas antigas"
- "exporta nossas conversas"
- "tem relatório?"

## Fluxo da mensagem

### Pedido detectado

> Posso te mandar 💙
>
> Antes, me dá a sua **palavra de acesso** (aquela que você escolheu no nosso primeiro dia, que mandei pelo seu email também).

### Usuária digita a palavra

#### Caso 1: palavra correta

> Confere 💙 Aqui está:
>
> [conteúdo do histórico — formato definido pelo time do bot]
>
> Se quiser que eu te explique alguma parte com mais calma, me fala.

#### Caso 2: palavra errada (1ª ou 2ª tentativa)

> Não bateu. Tenta de novo? Lembra que é a palavra que **você escolheu** no primeiro dia (não é senha de email nem de cartão).

#### Caso 3: palavra errada (3ª tentativa)

> Não consegui validar. Por segurança, vou pausar essa tentativa por 1 hora 💙
>
> Se você esqueceu a palavra:
> 1. Procura no seu email pelo assunto **"Sua palavra de acesso GABA"** (chegou no dia do nosso primeiro contato).
> 2. Se não achar, dá pra **criar uma nova palavra** — mas isso apaga o histórico arquivado anterior (pra proteção sua). Quer fazer isso? Responde **nova palavra**.
>
> Se você acha que alguém está tentando acessar suas conversas, me avisa que a gente reforça segurança.

### Usuária pede pra criar nova palavra

> Tudo bem. Vou apagar o histórico arquivado anterior (porque a palavra antiga era a chave dele), e a gente recomeça.
>
> Me manda uma nova palavra — simples, fácil de lembrar, mas que ninguém adivinharia olhando seu celular.

(Bot zera o histórico anterior, registra timestamp, e cadastra hash da nova palavra. Reenvia por email a nova palavra.)

### Confirmação de nova palavra

> Anotado. Mandei pro seu email também (assunto: "Sua palavra de acesso GABA — atualizada").
>
> O histórico anterior foi apagado — daqui pra frente, o histórico arquivado começa de novo. Tudo bem?

## Variações específicas

### Se a conversa atual NÃO é a primeira sessão e o histórico arquivado está vazio

> Ainda não tem histórico arquivado pra te mostrar — a gente está nas primeiras conversas. Vai construindo memória juntas 💙

### Se a usuária pediu histórico durante uma urgência

A GABA **não pede palavra de acesso em meio à urgência**. Se a usuária pedir histórico durante crise (suicídio, violência, etc.), a GABA prioriza encaminhamento. Resposta:

> A gente puxa o histórico depois 💙 Agora foco em te apoiar [com o número da urgência atual].

## Princípios de design

- **Palavra de acesso ≠ senha.** É camada de privacidade adicional, não autenticação forte. Documentar isso no Termo de Uso pra usuária não confundir.
- **A GABA nunca revela a palavra.** Mesmo se a usuária pedir ("você lembra qual era?"), a resposta é "Não lembro mais por segurança — olha seu email, ou cria uma nova".
- **Lock de 1 hora após 3 erros.** Tempo curto o suficiente pra não ser frustrante, longo o suficiente pra desencorajar tentativa por terceiros.

## Regras técnicas (pro time do bot)

- Palavra armazenada com **hash + salt** (ex: bcrypt).
- Comparação **case-insensitive** e **sem acento** (normalizar antes de comparar) — reduz atrito sem prejudicar segurança nesse contexto.
- Lock de 1h após 3 erros consecutivos — contador zera após sucesso ou após o tempo.
- Email com palavra é enviado **uma única vez** no momento do cadastro inicial. Não pode ser reenviado por demanda — pra mitigar ataque de tomada de número.
- Log de cada acesso (sucesso ou falha) pra auditoria.
- Se a usuária trocar a palavra, o histórico anterior é **destruído** (não criptografado de novo — destruído). Isso é proteção: se alguém roubou a palavra antiga, não consegue mais nada com ela.

## Decisão pendente

**Qual o formato do "histórico arquivado"?** Opções:
- (A) Resumo gerado por LLM em texto corrido (PDF baixável ou texto inline)
- (B) Lista de tópicos + datas + insights
- (C) As duas (resumo + lista, escolha da usuária)

Sugestão pra MVP: (A) com botão "quero ver mais detalhes" que abre (B). Decidir com time de produto.

## Respaldo
- LGPD — art. 9º (acesso aos dados, em formato facilitado) e art. 18, II (direito de acesso).
- LGPD — art. 6º, VII (segurança).
- LGPD — art. 46 (medidas de segurança técnicas e administrativas).
- Detalhes em `07-respaldo-juridico.md`.
