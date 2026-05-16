# Avisos de Consentimento — fluxo da GABA no WhatsApp

**Versão [VERSÃO]** · **Em vigor desde [DATA DE PUBLICAÇÃO]**

Esse documento reúne os **textos que a GABA precisa enviar** no momento de pedir consentimento. Eles cumprem os requisitos da LGPD (consentimento livre, informado, específico e em destaque — Art. 8º, §1º) e do ECA, mantendo a voz acolhedora da marca.

> **Como usar:** copie e cole esses textos no roteiro do bot. Cada bloco já vem com (a) o gatilho — quando aparecer; (b) a mensagem da GABA; (c) o que registrar no banco (audit trail do consentimento).

**Princípios obrigatórios em todos os consentimentos:**

1. **Em destaque** — mensagem própria, com pausa antes da pergunta, nunca embutida em meio a outra conversa.
2. **Específico** — cada finalidade tem seu consentimento próprio. Nunca "aceitar tudo" no mesmo botão.
3. **Informado** — explica em uma frase o que vai acontecer com o dado.
4. **Livre** — recusar não pode bloquear o uso da GABA, exceto para a funcionalidade específica.
5. **Registrável** — toda escolha (sim/não) vai com timestamp e versão do texto no banco.
6. **Revogável** — em qualquer momento, a usuária pode pedir "retirar consentimento" e a GABA precisa entender.

---

## 1. Consentimento inicial (Art. 8º) — primeira conversa

**Gatilho:** primeira mensagem da usuária no número da GABA, depois das mensagens de boas-vindas.

**Mensagem da GABA:**

> Oi, antes da gente começar de verdade, preciso te avisar de duas coisas — bem rápido.
>
> 1️⃣ **Eu sou uma IA.** Não sou psicóloga, médica, nem terapeuta. Eu acolho, ajudo a organizar e a entender — mas em qualquer decisão de saúde, quem fala é o profissional da sua filha ou do seu filho.
>
> 2️⃣ **Eu cuido dos seus dados.** Salvo só o mínimo necessário pra te ajudar (resumos curtos, não conversa inteira). Não compartilho com ninguém pra fazer propaganda nem pra treinar nada externo. Você pode pedir pra apagar tudo a qualquer hora — é só me dizer.
>
> Os detalhes estão aqui, leia com calma quando puder:
>
> 🔗 Termos de Uso: [DOMÍNIO LANDING]/termos
> 🔗 Política de Privacidade: [DOMÍNIO LANDING]/privacidade
>
> Você concorda em começar a conversa comigo nesses termos?
>
> 👉 Responda **"aceito"** para começar, ou **"não"** se preferir não seguir.

**Registrar no banco:**

- `user_id`, `numero_whatsapp`
- `tipo_consentimento`: `"inicial_v[VERSÃO]"`
- `resposta`: `"aceito"` ou `"recusado"`
- `timestamp_utc`
- `versao_termos`: `[VERSÃO]`
- `versao_privacidade`: `[VERSÃO]`

**Em caso de recusa:** a GABA agradece, lembra que pode voltar a qualquer momento, e encerra a conversa sem coletar mais nada além do número.

---

## 2. Consentimento para dado pessoal sensível (Art. 11) — saúde

**Gatilho:** a primeira vez que a usuária descreve diagnóstico, suspeita, sintoma, medicamento, ou qualquer outra informação que seja **dado de saúde** (dela ou da criança).

**Mensagem da GABA:**

> Antes da gente continuar, preciso te perguntar uma coisa importante.
>
> O que você está me contando agora envolve **informações de saúde** — diagnóstico, suspeita, sintoma, ou algo parecido. Pra lei brasileira (LGPD), esse tipo de informação tem proteção extra, e eu só posso continuar se você me der um "ok" específico pra isso.
>
> O que eu vou fazer com essas informações:
>
> ✅ usar pra te acolher e te ajudar a organizar o que está vivendo;
> ✅ guardar só um resumo curto, pelo menor tempo possível;
> ✅ nunca usar pra diagnosticar, nem pra trocar com terceiros, nem pra publicidade.
>
> O que eu **não** faço:
>
> ❌ não dou diagnóstico;
> ❌ não prescrevo nada;
> ❌ não substituo a profissional que cuida de vocês.
>
> Você consente que eu trate essas informações de saúde nesses termos, especificamente?
>
> 👉 Responda **"sim, consinto"** para seguir, ou **"prefiro não"** se quiser que eu trate só do lado organizacional, sem entrar nessa parte.

**Registrar no banco:**

- `user_id`
- `tipo_consentimento`: `"sensivel_saude_v[VERSÃO]"`
- `resposta`: `"sim"` ou `"nao"`
- `timestamp_utc`
- `contexto_mensagem_anterior_id` (para audit trail — vincular ao gatilho)

**Em caso de recusa:** a GABA agradece, registra a recusa, e segue a conversa **sem armazenar** os dados sensíveis. Pode continuar acolhendo de forma geral, mas não vai gravar nada relacionado a saúde nos resumos. Se a usuária trouxer dados sensíveis depois, a GABA repergunta o consentimento.

---

## 3. Consentimento para dado de criança (Art. 14) — melhor interesse

**Gatilho:** a primeira vez que a usuária compartilha informação que diz respeito a uma criança específica (rotina dela, observação escolar, dificuldades, suspeita ou diagnóstico).

**Mensagem da GABA:**

> Antes de continuar, preciso te confirmar uma coisa — é importante.
>
> O que você está me contando envolve sua filha ou seu filho. Pra lei brasileira, dados sobre crianças têm proteção especial: só podem ser tratados com consentimento específico de quem é responsável legal, e sempre no **melhor interesse da criança**.
>
> Eu preciso te perguntar:
>
> 1️⃣ Você é mãe, pai ou responsável legal da criança que você está me contando?
>
> 2️⃣ Você consente que eu trate, do jeito mínimo possível, as informações que você compartilhar sobre essa criança, exclusivamente pra te acolher e te ajudar a organizar os cuidados dela?
>
> Importante:
>
> ✅ eu **não peço** o nome completo, CPF, RG, foto, endereço, plano de saúde — nada disso da criança;
> ✅ guardo só o resumo necessário, pelo menor tempo possível;
> ✅ **nunca uso** os dados dela pra perfilamento, propaganda, ou decisão automatizada que afete ela;
> ✅ não compartilho com terceiros — exceto se houver indício concreto de risco grave à criança, situação em que tenho dever legal de comunicar autoridades (ECA, art. 13).
>
> 👉 Se você é responsável legal e concorda: responda **"sim, sou e consinto"**.
> 👉 Se não: responda **"não"**, e eu sigo cuidando só de você, sem entrar nessa parte.

**Registrar no banco:**

- `user_id`
- `tipo_consentimento`: `"crianca_v[VERSÃO]"`
- `declaracao_responsavel_legal`: `true`/`false`
- `resposta_consentimento`: `"sim"` ou `"nao"`
- `timestamp_utc`
- `contexto_mensagem_anterior_id`

**Em caso de recusa:** a GABA agradece, segue acolhendo a usuária **sem armazenar** dados da criança nos resumos. Se ela voltar a trazer dados da criança em seguida, a GABA repergunta.

**Em caso de declaração negativa de responsabilidade legal:** a GABA explica, com cuidado, que só pode tratar dados de criança com consentimento de responsável legal — e oferece acolher a usuária no que ela mesma está sentindo, sem entrar no detalhe da criança.

---

## 4. Consentimento para envio de documento (laudo, avaliação, relatório)

**Gatilho:** a usuária pergunta se pode mandar um PDF/imagem de documento, OU envia um arquivo direto.

**Mensagem da GABA:**

> Você está prestes a me mandar um documento sensível. Antes da gente seguir, preciso te avisar — em 3 linhas:
>
> 1. Eu vou **ler temporariamente** o documento só pra gerar um **resumo curto** pra você (na sua memória privada aqui comigo).
> 2. O **original é descartado automaticamente** logo depois do processamento. Eu não guardo PDF, não guardo imagem, não guardo assinatura nem CRM.
> 3. Eu **não valido** se o documento é autêntico, **não interpreto clinicamente** e **posso errar** na leitura. Em qualquer dúvida importante, fala com a profissional habilitada.
>
> Pode mandar o documento se você concorda com isso.
>
> 👉 Para confirmar e enviar, responda **"ok"** e em seguida mande o arquivo.
> 👉 Se preferir não, é só me dizer e seguimos sem essa parte.

**Registrar no banco:**

- `user_id`
- `tipo_consentimento`: `"upload_documento_v[VERSÃO]"`
- `resposta`: `"ok"` ou `"nao"`
- `timestamp_utc`
- `nome_arquivo_hash` (não o nome original — só hash, pra auditoria interna sem expor dados)

---

## 5. Consentimento para palavra-chave privada

**Gatilho:** quando a GABA oferece a criação da palavra-chave privada.

**Mensagem da GABA:**

> Eu posso criar uma **palavra-chave privada** com você. É uma camada a mais de proteção pra coisas mais delicadas — resumos sensíveis, memória histórica, exportação dos seus dados.
>
> Antes de você escolher, três coisas importantes:
>
> 🔐 Eu **não guardo** a palavra em si — só uma versão criptografada que serve só pra te reconhecer.
> 🔐 Eu **não consigo recuperar** a palavra se você esquecer. A redefinição apaga o que ela protegia.
> 🔐 Não compartilhe essa palavra com ninguém — nem com familiares.
>
> Você quer criar uma palavra-chave privada agora?
>
> 👉 **"sim"** — me manda a palavra na próxima mensagem.
> 👉 **"agora não"** — seguimos sem, você pode criar depois quando quiser.

**Registrar no banco:**

- `user_id`
- `tipo_consentimento`: `"palavra_chave_v[VERSÃO]"`
- `resposta`: `"criada"` ou `"recusada"`
- `timestamp_utc`
- `hash_palavra` (apenas o hash, nunca a palavra em texto puro)

---

## 6. Revogação de consentimento

**Gatilhos:** a usuária diz "quero parar", "quero apagar tudo", "retira meu consentimento", "não quero mais", "cancelar", "tira meus dados".

**Mensagem da GABA:**

> Entendi. Posso fazer agora mesmo. Você quer:
>
> 1️⃣ **Apagar tudo** — encerro a conta, apago seus dados (respeitando os prazos legais de logs e fiscais), e a gente se despede por aqui.
>
> 2️⃣ **Pausar** — paro de salvar coisas novas, mas mantenho o que já está aqui caso você queira voltar.
>
> 3️⃣ **Retirar consentimento específico** — você me diz o que quer parar (por exemplo, "não quero mais que você guarde dados de saúde"), e eu paro só essa parte.
>
> Pode me responder **1**, **2** ou **3** — e eu cuido daqui.

**Registrar no banco:**

- `user_id`
- `tipo_acao`: `"revogacao"` / `"pausa"` / `"revogacao_parcial"`
- `escopo`: se parcial, qual finalidade foi revogada
- `timestamp_utc`

**Após a confirmação:** a equipe ou o sistema automatizado executa o que foi pedido, dentro do prazo de **15 dias úteis** previsto na LGPD, com confirmação por mensagem à usuária.

---

## 7. Ordem recomendada de aparecimento no onboarding

```
1. Mensagem de boas-vindas (calor humano, sem coletar nada)
   ↓
2. Consentimento inicial (Seção 1)  ←  obrigatório antes de qualquer coleta
   ↓
3. Início da conversa real
   ↓
[se aparecer informação de saúde no que ela escreve]
   ↓
4. Consentimento sensível (Seção 2)
   ↓
[se aparecer informação sobre a criança]
   ↓
5. Consentimento criança (Seção 3)
   ↓
[se ela quiser mandar documento]
   ↓
6. Consentimento documento (Seção 4)
   ↓
[em algum momento, em uso continuado]
   ↓
7. Oferta palavra-chave privada (Seção 5)
```

A revogação (Seção 6) está disponível **a qualquer momento** do fluxo.

---

## 8. Boas práticas operacionais

- **Não usar dark patterns:** o botão de "aceitar" não pode ser mais fácil/visível que o de "recusar". Em texto, isso significa não destacar visualmente uma opção em detrimento da outra.
- **Registrar versão:** cada consentimento fica vinculado à versão do texto exibida. Se você atualizar os Termos, os consentimentos anteriores continuam válidos para a versão anterior; novos consentimentos podem ser solicitados nas próximas interações.
- **Linguagem clara:** se em algum momento a usuária responder algo que não seja "sim" ou "não" claro, a GABA repergunta sem assumir aceite.
- **Acessibilidade:** os textos foram pensados para serem lidos em celular pequeno, à noite, por uma mãe cansada — frases curtas, espaço respirável, sem termos jurídicos pesados.

---

*Última atualização: [DATA DE PUBLICAÇÃO] · Versão [VERSÃO]*
