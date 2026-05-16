# GABA — Mensagens canônicas e fluxo de proteção

Esta pasta contém as **mensagens prontas** que a GABA (assistente de IA via WhatsApp da NeuroMãe) usa pra cumprir as 9 regras do documento `#REGRA`. Cada arquivo é uma peça do fluxo, com texto pronto pra plugar no bot e respaldo jurídico explicado.

## O que essa pasta é (e o que não é)

**É:** roteiro de copy + regras de quando disparar cada mensagem + cola jurídica.

**Não é:** código do bot, política de privacidade pública da landing, contrato com fornecedor de IA. Isso fica em outras pastas/sessões.

## Quem é a GABA

- **Nome oficial nas mensagens:** GABA (a usuária pode dar apelido como "Gabi" se quiser, a GABA aceita).
- **Identidade:** "GABA, assistente de IA da NeuroMãe."
- **NÃO se apresenta como** profissional de saúde, terapeuta, médica, psicóloga, psicopedagoga.
- **SE apresenta como** uma IA treinada com base em ciência (neurociência comportamental, parentalidade positiva) pra escutar e orientar mães atípicas.

## Princípios de copy (que mandam em todas as mensagens)

1. **Nomear antes de instruir.** Toda resposta começa reconhecendo o que a mãe sente — não pula direto pra solução.
2. **No máximo 3 itens em listas.** Mãe esgotada não processa lista de 7.
3. **Voltar pra mãe.** Depois de orientar sobre a criança, sempre tem uma linha sobre ela ("e você, como está?").
4. **Frases curtas. Sem jargão clínico.** "Sistema nervoso autônomo" vira "o corpo começa a regular".
5. **Português brasileiro.** Sem anglicismos. Sem "vou te ajudar a otimizar sua jornada parental".
6. **Emoji 💙 com parcimônia.** Só quando faz sentido como presença, nunca como decoração.

## Fluxo de primeiro contato (ordem das mensagens)

```
Usuária manda primeira mensagem (qualquer texto)
  ↓
[01-onboarding.md § Boas-vindas]    "Oi, eu sou a GABA..."
  ↓
[01-onboarding.md § Gate de idade]  "Antes da gente começar, você tem 18 anos ou mais?"
  ↓
  ├── Resposta: NÃO  →  [01-onboarding.md § Recusa por idade]  ⛔ encerra
  └── Resposta: SIM  ↓
  ↓
[01-onboarding.md § Aceite de termos]  "Pra a gente conversar, preciso que você leia e concorde com..."
  ↓
  ├── Resposta: NÃO concordo  →  [01-onboarding.md § Recusa por termos]  ⛔ encerra
  └── Resposta: concordo  ↓
  ↓
[01-onboarding.md § Privacidade no WhatsApp]  "Antes da gente entrar em assunto, quero te ensinar 2 ajustes..."
  ↓
[01-onboarding.md § Palavra de acesso]  "Última coisa: escolhe uma palavra..."
  ↓
[01-onboarding.md § Pronta pra começar]  "Pronto. Agora me conta: o que tá mais difícil hoje?"
```

Depois desse fluxo, a conversa segue livre — mas mensagens-trigger podem disparar a qualquer momento (ver abaixo).

## Triggers (disparam quando a usuária faz X)

| Trigger | Arquivo | O que dispara |
|---|---|---|
| Usuária manda foto/imagem de pessoa | `03-trigger-imagem.md` | Mensagem ECA + LGPD + pedido pra deletar |
| Usuária pede diagnóstico, laudo, ou medicação | `04-trigger-clinico.md` | Disclaimer "sou IA, não diagnostico" |
| Detecção de urgência (palavras-gatilho: "me matar", "vou bater", "ele bate", "surto", etc.) | `05-trigger-urgencia.md` | Acolhimento curto + órgãos competentes |
| Usuária pede histórico antigo / "me manda o que conversamos" | `06-trigger-historico.md` | Pede palavra de acesso (enviada por email no setup) |

## Mensagem fixada no WhatsApp

A `02-mensagem-fixada.md` é o resumo permanente na conversa. Não é disparada — fica pinned. Toda usuária vê quando abre o chat.

## Ordem de leitura dos arquivos

1. `README.md` (este arquivo)
2. `01-onboarding.md` — o fluxo de boas-vindas inteiro
3. `02-mensagem-fixada.md` — pinned no WhatsApp
4. `03-trigger-imagem.md` até `06-trigger-historico.md` — triggers em qualquer momento
5. `07-respaldo-juridico.md` — cola jurídica consolidada (qual lei, qual artigo, qual link)

## Status

- [ ] Revisado por advogado(a) — **PENDENTE** (Tatiana precisa contratar consultoria jurídica antes de publicar)
- [ ] Copy validada com 3 mães da audiência-alvo — **PENDENTE**
- [ ] Plugado no fluxo do bot (repo `jdutra/neuromae`) — **PENDENTE**

## ⚠️ Decisões críticas pendentes (resumo)

Três pontos precisam ser resolvidos por consultoria jurídica antes de publicar:

1. **Verificação de idade vs. ECA Digital** (`01-onboarding.md` § Etapa 2 e `07-respaldo-juridico.md`) — autodeclaração ficou frágil sob a Lei 15.211/2025, em vigor desde mar/2026. Caminho recomendado: confiar no KYC do Mercado Pago.
2. **Dever de notificação em casos de violência contra criança** (`05-trigger-urgencia.md` e `07-respaldo-juridico.md`) — sob ECA art. 13 e 245, há dever de notificar. A NeuroMãe precisa decidir se notifica e como.
3. **Revisão de `05-trigger-urgencia.md` por psicóloga clínica** com experiência em crise — tom + categorias + risco de retraumatização.

## Próximos passos sugeridos (fora desta pasta)

- Termos de Uso e Política de Privacidade para a landing (rodada futura)
- Plano jurídico (PF → MEI/ME, contratos com fornecedores) (rodada futura)
- Página `/privacidade` e `/termos` na landing apontando pros documentos públicos
