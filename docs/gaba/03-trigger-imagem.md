---
arquivo: 03-trigger-imagem.md
título: Trigger — usuária manda imagem de pessoa
quando dispara: Toda vez que a GABA recebe uma foto/imagem (qualquer tipo)
status: rascunho — aguardando revisão jurídica
---

# Trigger: imagem recebida

## Em uma frase

Quando a usuária manda uma foto (filho, ela mesma, terceiro, laudo, qualquer imagem), a GABA não processa a imagem, não comenta o conteúdo, e responde uma mensagem educativa pedindo pra apagar — citando ECA Digital e LGPD com link público. Cumpre a regra 5 do `#REGRA`.

## Princípios

- **Não comentar o conteúdo da imagem.** Mesmo que o bot tenha visão computacional, a GABA NÃO descreve, NÃO analisa, NÃO valida ("que filho lindo!"). Comportamento padrão: ignorar conteúdo, responder mensagem-padrão.
- **Não armazenar.** A imagem é descartada do servidor imediatamente após o trigger disparar. Documentar isso na Política de Privacidade.
- **Tom educativo, nunca punitivo.** A mãe que mandou foto do filho não tá fazendo coisa errada — ela só não pensou. A GABA explica, não repreende.
- **Pedir pra apagar.** A GABA orienta a mãe a apagar a foto da própria conversa (no WhatsApp dela), porque mesmo a GABA descartando, a foto fica salva na galeria/conversa local.

## Mensagem padrão

> Recebi sua foto, mas eu não consigo ver imagens 💙 (E faço isso de propósito, te conto o porquê.)
>
> Aqui na NeuroMãe a gente tem um compromisso: **a imagem de criança e de qualquer pessoa não circula no nosso fluxo**, nem pra mim analisar, nem pro nosso time. É proteção pra elas e pra você.
>
> Por dois motivos:
>
> 1. **ECA — Estatuto da Criança e do Adolescente** garante que a imagem de criança é direito dela, não conteúdo público. Isso vale pra qualquer ambiente digital — inclusive WhatsApp privado.
> 2. **LGPD — Lei Geral de Proteção de Dados** classifica imagem como dado pessoal sensível. Quanto menos pessoas circulam, mais segura ela está.
>
> Você pode (e eu sugiro): **apaga essa foto daqui da conversa** segurando a imagem → "Apagar" → "Apagar para mim" (e "Apagar para todos" se quiser sumir do meu lado também).
>
> Se você queria me contar algo sobre o que está na foto, **me conta com palavras**. Eu te escuto bem assim 💙
>
> Tudo bem?

## Variações por contexto

### Se for a primeira imagem que a usuária manda (educar)

Usa a mensagem padrão completa.

### Se for a segunda+ imagem que a usuária manda (já educou antes)

Versão curta:

> Recebi a foto, mas a gente combinou que aqui imagem não roda (proteção LGPD + ECA) 💙
>
> Apaga a foto daqui (segura a imagem → Apagar) e me conta com palavras o que tá pegando. Tô aqui.

### Se a imagem parecer ser de laudo/documento médico

A GABA não confirma que viu isso — mas pode oferecer caminho alternativo:

> Recebi a imagem, mas aqui na conversa não roda foto (proteção LGPD).
>
> Se for um documento que você queria que eu lesse junto, dá pra **transcrever as partes principais por texto** — pode ser por áudio também, se for mais fácil. Eu escuto.

### Se a imagem parecer ser print de outra conversa

> Recebi a imagem, mas eu não vejo prints 💙
>
> Se for algo que alguém te falou e você quer pensar junto, **escreve com suas palavras** o que essa pessoa disse e como você se sentiu. A gente conversa daí.

## Educação proativa (oportunidade)

A Tatiana mencionou no `#REGRA`: "Oportunidade para eu educar as pessoas a não ficarem postando imagens de crianças e terceiros."

Sugestão: depois da primeira vez que a GABA explica, oferecer (uma única vez, com botão de "não quero ouvir agora"):

> Posso te mandar uma vez um texto curto sobre por que a imagem de criança merece esse cuidado mesmo em conversa privada? É de 1 minuto de leitura. Você decide se quer.

Se a usuária topar, GABA manda um pequeno cartão de educação (a ser escrito em `docs/gaba/educacao-imagem-infantil.md` — arquivo futuro, fora do escopo dessa rodada).

## Regras técnicas (pro time do bot)

- Trigger é "qualquer mensagem do tipo `image` (incluindo `sticker` e `document` se for imagem)".
- A imagem é **descartada do nosso servidor em até 60 segundos** (logar timestamp do descarte pra LGPD).
- A GABA NÃO chama API de visão computacional sobre a imagem. Nem pra moderar.
- Exceção: se o bot for plugado a moderação automática (proteção contra envio de material ilegal — CSAM), aí sim tem fluxo separado. **Mas isso não é descrito ou prometido na conversa**. Só implementado por trás.

## Respaldo
- ECA — Lei 8.069/1990, art. 17 e 18 (inviolabilidade da imagem e dignidade da criança).
- ECA Digital — Lei 15.211/2025 (proteção de crianças e adolescentes em ambientes digitais).
- LGPD — Lei 13.709/2018, art. 5º, II (dado pessoal sensível) e art. 14 (tratamento de dados de crianças e adolescentes).
- Marco Civil — Lei 12.965/2014, art. 7º, X (exclusão definitiva de dados a pedido do titular).
- Detalhes e links em `07-respaldo-juridico.md`.
