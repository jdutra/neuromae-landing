# Consultoria estratégica de lançamento — NeuroMãe / GABA

Pasta com a consultoria completa pra lançar o produto cumprindo lei brasileira, protegendo a privacidade das mães e suas crianças, e cabendo no orçamento de uma fundadora iniciante com pouco capital.

## Como ler

Esses documentos foram pensados pra serem lidos **nessa ordem**, mas cada um se sustenta sozinho. Quando tiver dúvida específica de uma área, vai direto no documento dela.

1. **`00-resumo-executivo.md`** — Visão geral, 3 fases, decisões críticas e investimento. **Leia primeiro.**
2. **`01-empresarial-e-juridico.md`** — PF → MEI → ME, contratos, INPI, ANPD, DPO, advogada.
3. **`02-tecnologia-e-seguranca.md`** — Stack, WhatsApp API oficial, criptografia, retenção, backups.
4. **`03-go-to-market-e-pricing.md`** — Beta privado, lista de espera, R$ 49/mês, captação sem ad.
5. **`04-operacao-e-incidentes.md`** — Atendimento, monitoramento, plano de incidentes, limites pra Tatiana.
6. **`05-custos-e-roadmap.md`** — Custos mensais por fase, cenários, calendário de 12 meses.
7. **`06-consultoria-juridica-detalhada.md`** — Brief pronto pra advogada, como outros players brasileiros operam, lista de escritórios pra contactar, faixas de custo real, checklist.
8. **`07-seguranca-tecnica-checklist.md`** — Checklist operacional pro Jose (dev): Supabase, RLS, criptografia, HMAC, backups, secrets, fase 1/2/3 com snippets e comandos.

## Os três princípios

A consultoria foi escrita pra equilibrar:

1. **Não expor a privacidade de ninguém** — mães, crianças, Tatiana, Jose.
2. **Cumprir a lei brasileira** — LGPD, ECA, ECA Digital, Ato Médico, Lei de Psicologia, CDC.
3. **Conseguir lançar** — pragmatismo, não paralisia.

Quando os três conflitam: privacidade > preço · lei > velocidade · lançar > perfeição.

## Decisões críticas (resolver antes da Fase 2)

| Decisão | Onde | Recomendação |
|---|---|---|
| WhatsApp API oficial vs Z-API | `02` | Migrar pra oficial via BSP gratuito (360dialog/Gupshup) |
| Quando abrir MEI | `01` | Antes da primeira cobrança paga |
| Pricing | `03` | R$ 49/mês ou R$ 390/ano, 7 dias grátis |
| Quando consultoria jurídica | `01` | Antes da Fase 2 — R$ 2-5k investimento |
| Dever de notificar violência contra criança (ECA art. 13) | `04` + `docs/gaba/05-trigger-urgencia.md` | **Definir com advogada — decisão pendente** |
| Verificação de idade (ECA Digital) | `01` + `docs/gaba/01-onboarding.md` | KYC do Mercado Pago como proxy (não autodeclaração pura) |

## Próximos 5 passos (essa semana)

1. **Ler os 6 documentos** com calma — marcar o que discorda ou não entende.
2. **Marcar consulta jurídica** (Sebrae oferece 8h grátis/ano pra MEI iniciante — começar por aí).
3. **Abrir conta Meta Business + WhatsApp Business** (gratuito).
4. **Listar 10-20 mães da rede** pra beta privado da Fase 1.
5. **Decidir nome e preço definitivos** antes do beta — produto pode mudar, nome NÃO.

## O que essa consultoria NÃO cobre

- Conteúdo de marketing concreto (posts, vídeos, anúncios)
- Plano financeiro detalhado tipo DRE — quando tiver receita real, refazer com contador
- Estratégia de captação de investimento — Fase 4+
- Implementação técnica detalhada — fica no repo `jdutra/neuromae`

## Status

- [x] Consultoria escrita
- [ ] Lida e discutida por Tatiana
- [ ] Revisada por Jose (parte técnica)
- [ ] Revisada por advogada (parte jurídica)
- [ ] Atualizada com decisões pendentes resolvidas
- [ ] Comparada com `docs/gaba/` pra coerência (deve estar)

## Relação com a pasta `docs/gaba/`

Essa pasta (`docs/estrategia/`) é a **visão da empresa**: como abrir, como operar, como cobrar, como crescer.

A pasta `docs/gaba/` é a **execução do produto**: o que a GABA fala, como ela fala, quando ela escala pra urgência.

As duas se conversam: várias seções aqui referenciam arquivos de `docs/gaba/` (e vice-versa).

---

> Se em qualquer ponto você ler algo e pensar "isso é exagero pra meu momento" ou "isso é insuficiente pra meu momento", me fala — eu calibro. O objetivo é tirar você do limbo "tenho produto na cabeça, falta tudo" pra "produto rodando com confiança", sem te enterrar em burocracia que não move agulha.
