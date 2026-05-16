---
arquivo: 05-custos-e-roadmap.md
título: Custos detalhados e roadmap por fase
status: rascunho — valores estimados, validar com contador antes de orçar
---

# Custos e roadmap

## Em uma frase

**Investimento inicial entre R$ 4.000 e R$ 6.000** (consultoria jurídica + reserva de operação) e **fluxo mensal abaixo de R$ 600 na Fase 1, R$ 1.500 na Fase 2 e R$ 4.000 na Fase 3** — todos os valores em reais, com câmbio Claude/Supabase calculado a R$ 5,50/USD pra margem de segurança.

## 1. Investimento inicial (one-time, antes da Fase 1)

| Item | Valor | Obrigatório? | Notas |
|---|---|---|---|
| Consultoria jurídica única (LGPD + digital, 4-6h) | R$ 2.000 – R$ 4.000 | **Sim** antes da Fase 2 | Pode adiar 30 dias após Fase 1; não pode adiar antes da Fase 2 |
| Reserva de operação (3 meses Fase 1) | R$ 1.800 | **Sim** | Capital de giro pra não cair se demorar |
| Domínio neuromae.com.br (2 anos) | R$ 80 | já tem | — |
| INPI já protocolado | já gastou | já tem | — |
| Logo/identidade | já tem | — | — |
| Email Zoho Lite (1 ano) | R$ 0 ou R$ 250 | recomendado | Free se quiser, Lite vale o trampo de troca |
| Conta PJ (taxa abertura) | R$ 0 | quando MEI | Banco digital — Inter, Nubank, C6 — todos gratuitos |
| Suba SSL | R$ 0 | tem com Vercel | — |
| **Total mínimo** | **R$ 3.880** | | Pra começar Fase 1 + cobrir Fase 2 |
| **Total recomendado** | **R$ 6.130** | | Inclui consultoria boa + email pago |

## 2. Custos mensais — Fase 1 (validação, 0-10 mães grátis)

| Item | Valor mensal | Obrigatório? |
|---|---|---|
| Supabase (Free tier) | R$ 0 | sim |
| Vercel (Free tier) | R$ 0 | sim |
| Anthropic Claude API (uso baixo, 10 mães × 100 mensagens/mês) | R$ 50 – R$ 100 | sim |
| WhatsApp Business API + BSP (Free tier) | R$ 0 – R$ 50 | sim |
| Z-API (se ainda não migrou — adiantar migração) | R$ 0 (idealmente migrar) | — |
| Email Zoho | R$ 0 – R$ 25 | recomendado |
| Resend/Brevo (email transacional) | R$ 0 (free tier) | sim |
| Sentry (monitoramento) | R$ 0 (free tier) | sim |
| Domínio (proporcional ao ano) | R$ 4 | sim |
| Notion (2 usuários) | R$ 0 | recomendado |
| **Total Fase 1** | **~R$ 60 – R$ 180/mês** | |

> ⚠️ Se você ainda está em **Z-API**, soma + R$ 100-200/mês. Mais um motivo pra migrar pra API oficial.

### Investimento total Fase 1 (3 meses)
- Custos mensais: R$ 180-540
- Inclui reserva de R$ 1.800 caso algo dê errado
- **Cabe em até R$ 2.500 nos 3 primeiros meses**

## 3. Custos mensais — Fase 2 (cobrança, 10-100 assinantes MEI)

| Item | Valor mensal | Notas |
|---|---|---|
| Supabase **Pro** ($25 USD = ~R$ 140) | R$ 140 | recomendado a partir de 20+ usuárias (backups, mais escala) |
| Anthropic Claude API (~100 mães × 100 msgs/mês) | R$ 400 – R$ 800 | varia bastante por uso real; otimização de prompt caching ajuda muito |
| WhatsApp Business API + BSP | R$ 100 – R$ 200 | templates iniciados pelo bot custam |
| Email Zoho | R$ 25 | |
| Email transacional (Resend Pago) | R$ 60 ($10 USD plan) | quando passar de 3k emails/mês free |
| Vercel (Free) | R$ 0 | landing ainda pequena |
| Sentry Pro | R$ 0 – R$ 150 | só se precisar, Free tier dá |
| MEI DAS | R$ 86 | obrigatório |
| Contador online (Contabilizei Plus, MEI Plus, etc.) | R$ 70 – R$ 100 | obrigatório |
| Bitwarden Family | R$ 0 (free) ou R$ 25 | recomendado |
| Notion (Team se crescer) | R$ 0 – R$ 50 | |
| Domínio | R$ 4 | |
| **Total Fase 2** | **~R$ 850 – R$ 1.600/mês** | |

### Receita estimada Fase 2 (mês 6)
- 50 assinantes × R$ 49 = **R$ 2.450/mês**
- Menos Mercado Pago (~5%) = **R$ 2.327/mês líquido**
- Menos custos (~R$ 1.500) = **margem mensal de R$ 827** (~35%)

**Break-even point Fase 2:** ~30 assinantes (R$ 1.470 MRR cobre R$ 1.400 de custos)

## 4. Custos mensais — Fase 3 (escala, 100-300 assinantes ME)

| Item | Valor mensal | Notas |
|---|---|---|
| Supabase Pro+ ($25 + uso extra) | R$ 200 – R$ 400 | depende de volume de dados/queries |
| Anthropic Claude API | R$ 1.500 – R$ 3.500 | 300 × 100 msgs/mês, modelos otimizados |
| WhatsApp Business API + BSP | R$ 300 – R$ 800 | escala linear com base de usuárias |
| Email Zoho ou Google Workspace | R$ 100 – R$ 150 | 3-5 caixas |
| Email transacional | R$ 100 – R$ 200 | mais volume |
| Vercel Pro | R$ 110 ($20) | se precisar — opcional |
| Sentry Team | R$ 150 ($26) | a partir de 50k events/mês |
| Plausible Analytics | R$ 50 ($9) | privacy-friendly analytics |
| Tributos Simples Nacional (~6% sobre faturamento) | R$ 600 – R$ 1.200 | obrigatório |
| Contador online avançado | R$ 200 – R$ 400 | |
| DPO externo terceirizado | R$ 500 – R$ 800 | recomendado a partir de 100 usuárias |
| Seguro de responsabilidade civil (cyber + erros) | R$ 200 – R$ 500 | recomendado a partir Fase 3 |
| Assistente virtual freelancer (PJ, R$ 1.500 base) | R$ 1.500 – R$ 2.500 | quando email passar de 22h frequente |
| Anúncios pagos Meta Ads (R$ 30/dia) | R$ 900 | opcional, otimizar |
| **Total Fase 3** | **~R$ 3.500 – R$ 7.700/mês** | |

### Receita estimada Fase 3 (mês 12)
- 250 assinantes × R$ 49 = **R$ 12.250/mês**
- Menos Mercado Pago (~5%) = **R$ 11.638/mês líquido**
- Menos custos (~R$ 5.500) = **margem mensal R$ 6.138** (~52%)

## 5. Roadmap detalhado — 12 meses

### Mês 0 (preparação, semana 1-2)

- [ ] Ler e discutir essa consultoria toda
- [ ] Marcar consultoria jurídica (mesmo que sessão futura)
- [ ] Criar email `dpo@neuromae.com.br`
- [ ] Listar 10-20 candidatas a beta privado
- [ ] Decidir CNAE (MEI) com contador online
- [ ] Verificar status de cada uma das marcas no INPI

### Mês 1 (preparação, semana 3-4)

- [ ] Migrar bot de Z-API pra WhatsApp Business API oficial (BSP)
- [ ] Escrever Termos de Uso + Política de Privacidade (rascunho)
- [ ] Implementar onboarding GABA com as 9 regras
- [ ] Configurar Supabase em região São Paulo
- [ ] Configurar logs, audit trail, RLS
- [ ] Teste interno: você + Jose conversando com a GABA por 1 semana

### Mês 2 (Fase 1 — beta privado)

- [ ] Convidar 10 mães da rede pra beta privado gratuito
- [ ] Onboarding individualizado (mandar mensagem pessoal antes do bot)
- [ ] Acompanhar uso semanalmente
- [ ] Sample de qualidade semanal
- [ ] Coletar feedback estruturado (form mensal)

### Mês 3 (Fase 1 → Fase 2)

- [ ] Iterar produto baseado no feedback
- [ ] Realizar consultoria jurídica (4-6h)
- [ ] Revisar Termos e Privacidade com advogada
- [ ] Abrir MEI
- [ ] Abrir conta PJ
- [ ] Cadastrar Mercado Pago PJ + configurar assinaturas
- [ ] Definir CNAE final + emissão NFS-e
- [ ] Contratar contador online
- [ ] Designar DPO formal (Tatiana, com email público)
- [ ] Cadastrar como controlador na ANPD

### Mês 4 (Fase 2 — primeiras pagantes)

- [ ] Lançar lista de espera pública
- [ ] Iniciar conteúdo Instagram orgânico (3 posts/semana)
- [ ] Convidar primeiras 10 inscritas com link de cadastro pago + trial 7 dias
- [ ] Sample de qualidade + revisão de urgências semanais
- [ ] Ensaio de plano de incidente (categoria A) — 2-3h com Jose

### Mês 5

- [ ] Convidar mais 20-30 inscritas
- [ ] Avaliar churn + NPS
- [ ] Primeira live mensal pra anuais (se já tem anuais)
- [ ] Tentar 1-2 parcerias com influenciadoras nicho

### Mês 6 (Fase 2 madura)

- [ ] 50+ assinantes ativos
- [ ] Faturamento R$ 2.000+/mês
- [ ] Revisão jurídica de 6 meses (1h, dúvidas que surgiram)
- [ ] Post de fim de fase: "Como foi os primeiros 6 meses da GABA"
- [ ] Avaliação pessoal: ainda quero isso? Vocês estão bem?

### Mês 7-9 (Fase 2 → Fase 3 transição)

- [ ] Aumentar ritmo de captação se Fase 2 sólida
- [ ] Avaliar contratação freelancer
- [ ] Preparar transição pra ME (Simples) — discutir com contador
- [ ] Testar canais novos (Meta Ads R$ 30/dia)
- [ ] Lançar funcionalidade pequena baseada em feedback (ex: notificações de check-in semanal)

### Mês 10-12 (Fase 3 — escala)

- [ ] Migrar pra ME se faturamento estabilizado
- [ ] Contratar assistente virtual PJ se necessário
- [ ] Contratar DPO externo
- [ ] Aumentar conteúdo orgânico (5x/semana)
- [ ] Considerar primeira aparição em mídia (podcast, blog grande)
- [ ] Avaliar parcerias estratégicas (associações de mães atípicas, clínicas)

### Pós ano 1 — visão estendida

- Funcionalidades novas baseadas em uso real (não em achismo)
- Mascote ganha presença visual (Instagram, papel timbrado)
- Talvez expansão pra cuidadora de adulto neurodivergente (mães de adolescente, esposa de adulto TDAH)
- Pelúcia, jogo, e-book — produto físico vinculado à marca registrada
- Cogitar Captação de investimento ou parceria estratégica (não antes)

## 6. Decisões financeiras chave

### Quando subir o preço
- Após 6 meses estável com NPS ≥ 40
- Aviso 30 dias antes pra usuárias atuais
- Quem assinou na Fase 1-2 ganha "preço early supporter" travado 12 meses

### Quando aumentar gastos
- Quando MRR cobrir custos + R$ 2k margem
- Priorize: backup automatico (Supabase Pro), DPO externo, seguro

### Quando reduzir gastos
- Se Z-API ainda está ligado E você já está em API oficial — cortar imediato
- Se Sentry/Notion Team está pagando sem usar — voltar pra Free
- Se Anthropic API gastou mais que o orçado por 2 meses — investigar prompt caching e modelos menores

## 7. Cenários

### Otimista (vai melhor que o esperado)

| Mês | Assinantes | MRR | Custos | Margem |
|---|---|---|---|---|
| 4 | 30 | R$ 1.470 | R$ 900 | R$ 570 |
| 6 | 80 | R$ 3.920 | R$ 1.500 | R$ 2.420 |
| 9 | 180 | R$ 8.820 | R$ 3.500 | R$ 5.320 |
| 12 | 350 | R$ 17.150 | R$ 6.500 | R$ 10.650 |

→ Migração pra ME no mês 8-9; faturamento anual ano 1 ≈ R$ 75-80k

### Esperado (cenário base)

| Mês | Assinantes | MRR | Custos | Margem |
|---|---|---|---|---|
| 4 | 15 | R$ 735 | R$ 900 | -R$ 165 |
| 6 | 50 | R$ 2.450 | R$ 1.300 | R$ 1.150 |
| 9 | 120 | R$ 5.880 | R$ 2.500 | R$ 3.380 |
| 12 | 220 | R$ 10.780 | R$ 4.500 | R$ 6.280 |

→ Break-even mês 5; faturamento anual ano 1 ≈ R$ 50k

### Pessimista (precisa iterar mais)

| Mês | Assinantes | MRR | Custos | Margem |
|---|---|---|---|---|
| 4 | 8 | R$ 392 | R$ 900 | -R$ 508 |
| 6 | 20 | R$ 980 | R$ 1.200 | -R$ 220 |
| 9 | 50 | R$ 2.450 | R$ 1.700 | R$ 750 |
| 12 | 100 | R$ 4.900 | R$ 2.300 | R$ 2.600 |

→ Break-even mês 8-9; faturamento anual ano 1 ≈ R$ 25k. Você ainda está no MEI.

**Em qualquer cenário, ano 1 não te enriquece — te ensina e cria o ativo.**

## 8. O que isso significa pra você financeiramente

- **Reserva mínima recomendada antes de começar Fase 1:** R$ 5.000 (3 meses operação + consultoria jurídica)
- **Você só vai tirar pró-labore consistente** a partir do mês 6-9 no cenário esperado
- **Não pare seu trabalho principal** (se tem outro) até passar de 100 assinantes regulares
- **Defina pessoalmente:** "Se eu não bater 50 assinantes até o mês 6, eu reavalio se vale continuar"

## 9. Resumo das recomendações desta área

1. **Investimento inicial entre R$ 4-6k**, dos quais 50-70% é consultoria jurídica.
2. **Fase 1 cabe em R$ 200/mês** com Z-API migrado ou R$ 350 com Z-API. Migrar é prioridade.
3. **Break-even no cenário esperado: mês 5-6** com ~30 assinantes.
4. **MEI suporta até ~140 assinantes** (R$ 6.860 MRR × 12 = R$ 82k — bem perto do teto). Migração pra ME planejada pra mês 8-12.
5. **Pré-condição pra começar:** R$ 5k de reserva pra operar 3 meses sem receita.
6. **Critério de saída honesta:** se até mês 6 não bater 30 assinantes pagantes, parar e iterar produto antes de gastar mais.

---

📎 Fim da consultoria. Próximo: leitura conjunta com Jose, discussão, e marcar a consultoria jurídica.
