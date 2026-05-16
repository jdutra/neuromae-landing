---
arquivo: 00-resumo-executivo.md
título: Consultoria de lançamento NeuroMãe/GABA — Resumo Executivo
status: rascunho — discutir e aparar com Tatiana antes de executar
---

# Resumo executivo

## Em uma frase

A NeuroMãe (empresa) lança a GABA (produto) em **3 fases ao longo de 6 meses**, partindo de **beta privado gratuito com 10 mães**, evoluindo pra **MEI cobrando R$ 49/mês com 50-100 assinantes** e culminando em **ME (Simples Nacional) com 200+ assinantes** — tudo usando ferramentas de baixo custo, infraestrutura grátis ou quase, e camadas progressivas de proteção jurídica conforme a receita cresce. Investimento inicial estimado entre **R$ 4.500 e R$ 8.000**, fluxo mensal de operação na Fase 1 abaixo de **R$ 600/mês**.

## Os três princípios-norte

Esta consultoria foi escrita pra equilibrar três coisas, nessa ordem quando entram em conflito:

1. **Não expor a privacidade de ninguém.** Nem da mãe, nem do filho, nem da Tatiana, nem do Jose.
2. **Cumprir a lei brasileira.** LGPD, ECA, ECA Digital, Ato Médico, Lei de Psicologia, CDC.
3. **Conseguir lançar.** Pragmatismo. Não dá pra esperar 12 meses pelo selo perfeito — a janela tá fechando.

Quando os três conflitam, esta consultoria opta por:
- **Privacidade > preço.** Pagar um pouco mais por uma camada de proteção: faz sentido.
- **Lei > velocidade.** Adiar lançamento 30 dias pra ter um aceite válido e Termos prontos: faz sentido.
- **Lançar > perfeição.** Não bloquear lançamento por feature secundária ("dashboard pra DPO", "auditoria de acesso fancy"): NÃO faz sentido na Fase 1.

## As 3 fases

```
Fase 1 — VALIDAÇÃO            Fase 2 — RECEITA           Fase 3 — ESCALA
0 a 60 dias                    60 a 180 dias              180+ dias
Status: PF (Tatiana)           Status: MEI                 Status: ME (Simples)
0-10 mães, gratuito            10-100 mães, pago           100-500+, pago
Foco: validar o produto        Foco: validar pricing       Foco: escala segura
Custo mensal: ~R$ 300-600      Custo mensal: ~R$ 800-1.500 Custo mensal: ~R$ 2-4k
```

**Por que não pular fases:**
- Pular Fase 1 e cobrar antes de validar = você não sabe se vai entregar valor + risco jurídico maior (cobrar de cliente significa contrato de prestação + LGPD em modo completo + nota fiscal).
- Pular Fase 2 e ir direto pra ME = paga R$ 800-1.500/mês de contabilidade + impostos sem ter receita pra cobrir.

## Decisões críticas que você precisa tomar AGORA (semana 1)

| Decisão | Recomendação | Doc detalhado |
|---|---|---|
| WhatsApp: API oficial (Meta via BSP) ou Z-API? | **API oficial via BSP gratuito (360dialog ou Gupshup)** — Z-API é workaround com risco de banimento e compliance frágil pra LGPD | `02-tecnologia-e-seguranca.md` |
| Pricing inicial | **R$ 49/mês ou R$ 39/mês com desconto anual (R$ 390/ano)** — 7 dias grátis (não cobra cartão antes) | `03-go-to-market-e-pricing.md` |
| Quando abrir MEI | **Antes da primeira cobrança** (Fase 2). Não da pra ficar cobrando como PF — Mercado Pago precisa de CNPJ pra liberar assinatura recorrente PJ | `01-empresarial-e-juridico.md` |
| Consultoria jurídica | **Sim, antes da Fase 2.** R$ 2-5k de session pontual pra revisar GABA + Termos + Privacidade. Pode ser jurídico digital remoto, não precisa escritório grande. | `01-empresarial-e-juridico.md` |
| Quem é o DPO | **Você mesma na Fase 1-2**, com email `dpo@neuromae.com.br`. Na Fase 3, contratar DPO externo terceirizado (~R$ 500-800/mês) | `01-empresarial-e-juridico.md` |

## Investimento inicial (one-time, até abrir MEI)

| Item | Custo | Quando |
|---|---|---|
| Consultoria jurídica LGPD/digital (sessão pontual 4-6h) | R$ 2.000–4.000 | Antes da Fase 2 |
| Registro INPI (já feito) | já gastou | — |
| Abertura MEI | grátis (Portal do Empreendedor) | Início Fase 2 |
| Domínio neuromae.com.br + .br (2 anos) | R$ 80 | Já tem |
| Email corporativo (Zoho Mail ou similar) | R$ 0–250/ano | Início Fase 1 |
| Selo SSL Vercel (HTTPS landing) | grátis | Já tem |
| Logo/marca registrada | já feito | — |
| Conta empresarial Meta + BSP setup | grátis | Início Fase 1 |
| Reserva pra primeiros 3 meses de operação | R$ 1.800 | Início Fase 1 |
| **Total estimado** | **R$ 3.900 – 6.130** | |

Detalhe completo (mensal por fase) está em `05-custos-e-roadmap.md`.

## Estratégia em uma frase por área

- **Empresarial/Jurídico:** PF até validar (10 mães grátis), depois MEI por 12-24 meses, depois ME quando receita ≥ R$ 6k/mês.
- **Tecnologia:** WhatsApp API oficial via BSP gratuito + Supabase free-tier → pago + Claude API + Vercel (grátis). **Tudo já tem certificado, contrato e processador no Brasil ou com adequação LGPD.**
- **Segurança:** TLS end-to-end (sem armazenar mídia, hash de palavra de acesso, criptografia em repouso no Supabase, retenção mínima, logs de auditoria, opt-out de treinamento na API do Claude/Anthropic).
- **GTM:** beta privado com 10 mães da sua rede → conteúdo Instagram gratuito → primeiras assinantes via lista de espera → indicação (você dá um mês grátis pra quem indica).
- **Operação:** atendimento humano só email (você + Jose) na Fase 1; monitoramento de qualidade por amostragem semanal; plano de incidente escrito e testado uma vez.
- **Custos:** Fase 1 abaixo de R$ 600/mês; Fase 2 abaixo de R$ 1.500/mês; Fase 3 abaixo de R$ 4.000/mês.

## O que essa consultoria NÃO cobre

- Conteúdo de marketing concreto (posts, vídeos, anúncios) — escopo de copy/criativo separado.
- Plano financeiro detalhado (DRE, fluxo de caixa, valuation) — quando você tiver receita real, refazer com contador.
- Estratégia de captação de investimento — Fase 4+, não relevante agora.
- Detalhes de implementação do bot — fica no repo `jdutra/neuromae`, com o time técnico.

## Como ler os outros documentos

```
docs/estrategia/
  00-resumo-executivo.md          ← você está aqui
  01-empresarial-e-juridico.md    ← contratos, PF→MEI→ME, INPI, ANPD, DPO
  02-tecnologia-e-seguranca.md    ← stack, criptografia, retenção, BSP
  03-go-to-market-e-pricing.md    ← MVP, beta privado, captação, preço
  04-operacao-e-incidentes.md     ← suporte, qualidade, plano de incidente
  05-custos-e-roadmap.md          ← tabela financeira + fases detalhadas
```

Os 6 documentos foram pensados pra serem lidos nessa ordem, mas cada um se sustenta sozinho. Quando tiver dúvida específica, vai direto no documento da área.

## Próximos 5 passos concretos (essa semana)

1. **Ler os 6 documentos** dessa pasta com calma — anota o que discorda ou não entende.
2. **Marcar consulta jurídica** (pode ser remota, 1h de diagnóstico — gratuita em muitos casos). Indicações: Direito Digital + LGPD.
3. **Abrir conta Meta Business + WhatsApp Business** (gratuito, vou explicar no doc 02).
4. **Listar 10-20 mães da sua rede** que toparia testar a GABA gratuitamente por 30 dias (essas são suas validadoras da Fase 1).
5. **Decidir nome e preço** definitivos antes do beta — você pode mudar preço depois, mas o nome do produto não.

---

> Se em qualquer ponto desta consultoria você ler algo e pensar "isso é exagero pra meu momento" ou "isso é insuficiente pra meu momento", me fala — eu calibro. O objetivo é tirar você do limbo PF→produto rodando, sem te enterrar em burocracia que não move agulha.
