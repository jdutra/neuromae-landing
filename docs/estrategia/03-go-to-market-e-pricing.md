---
arquivo: 03-go-to-market-e-pricing.md
título: Go-to-Market e pricing — MVP, beta, primeiras usuárias, preço
status: rascunho — discutir com Tatiana antes do beta
---

# Go-to-Market e pricing

## Em uma frase

Lance em **beta privado gratuito com 10 mães da sua rede pessoal**, evolua pra **lista de espera com 50-100 inscritas via Instagram**, e abra cobrança aos poucos com **preço de entrada R$ 49/mês** (ou R$ 390/ano com desconto), oferecendo **7 dias grátis sem cartão** e **um mês grátis por indicação** — sem gastar com ads na Fase 1-2.

## 1. Por que beta privado primeiro

Você é "expert inexperiente" — sabe do problema, é nova em execução. Beta privado resolve 4 coisas de uma vez:

1. **Valida o produto** com gente que confia em você o suficiente pra te dar feedback honesto.
2. **Te dá depoimentos reais** — moeda de marketing mais forte que existe na sua audiência.
3. **Encontra bug** que demo controlada não pega.
4. **Te treina operacionalmente** sem o estresse de cobrança + reclamação.

O custo de pular essa fase é **alto**: estouro de bot na cara da primeira cliente paga vira reclamação no Reclame Aqui antes de você existir como empresa direito.

## 2. Fase 1 — Beta privado gratuito (mês 1-2)

### Quem
- **10 mães** da sua rede pessoal — amigas, contatos do Instagram, parentes, grupos de WhatsApp que você já participa
- **Critério:** mãe de criança neurodivergente (TDAH, TEA, dificuldade de aprendizagem), maior de 18, fluente em português, dispostas a dar feedback 1-2x por semana
- **Não convide:** profissional da área (psicóloga, pedagoga) porque o uso delas distorce — viram "avaliadoras" não "usuárias". Convide se quiser, mas separado, com brief diferente.

### Como convidar

Mensagem direta no WhatsApp/Instagram:

> Oi, [nome] 💙
>
> Lembra que eu venho falando da NeuroMãe? Cheguei na versão beta da GABA — a assistente de IA que respondi via WhatsApp pra mãe atípica.
>
> Tô convidando 10 mães que conheço pra usar de graça por 30 dias e me dar feedback. Sem compromisso, sem assinatura, sem cartão. Só usar e me contar o que funciona e o que dá raiva.
>
> Topa? Se sim, me responde e eu te mando o link pra começar.

### O que você precisa entregar pro beta

- [ ] Landing pública em `neuromae.com.br` com landing + Termos + Privacidade
- [ ] Link "começar conversa" indo direto pro WhatsApp da GABA
- [ ] GABA com onboarding implementado (pasta `docs/gaba/`)
- [ ] Pelo menos 1 semana de uso simulado (você + Jose conversando com a GABA antes do beta)
- [ ] Formulário simples de feedback semanal (Tally ou Google Forms — gratuito)

### O que você NÃO precisa entregar pro beta

- Cobrança (gratuito)
- Dashboard analytics fancy
- 24/7 — você diz "respondo em até 24h" e tá bom
- App nativo, integração com escola, qualquer coisa de Fase 4

### Métrica de sucesso da Fase 1

- **6 das 10 mães** usaram a GABA pelo menos 3x por semana nos 30 dias
- **3 das 10** disseram espontaneamente "eu pagaria por isso"
- **Pelo menos 5 depoimentos por escrito** com permissão pra usar
- **Zero incidentes** (vazamento, crise mal atendida)

Se você não bate essas métricas, **NÃO PULA pra Fase 2**. Itera o produto/copy/onboarding e roda mais 30 dias com outras 10 mães.

## 3. Fase 2 — Lista de espera e primeiras pagantes (mês 3-6)

### Estratégia

Você não abre cobrança "geral" — você abre uma **lista de espera** com convite escasso, controlado.

**Por quê:**
- Escassez gera valor percebido
- Você cresce no ritmo que aguenta operar
- Você seleciona usuárias do perfil certo
- Bug que aparecer atinge poucas pessoas

### Como funciona

1. **Landing tem um botão "Entrar na lista de espera"** (substituindo o atual "Começar conversa")
2. **Formulário curto:** nome, email, telefone WhatsApp, faixa etária do(s) filho(s), tipo de neurodivergência (TDAH/TEA/dislexia/outro/em diagnóstico)
3. **Você manda convite escalonado** — 10 por semana, 4 semanas
4. **Cada convite:** link único de cadastro pra preencher dados de pagamento (Mercado Pago) e 7 dias grátis
5. **Após 4 semanas:** 40 inscritas convidadas; ajusta ritmo conforme operação aguenta

### Conteúdo orgânico (Instagram) pra alimentar a lista

**Frequência:** 3 posts por semana (Tatiana + Jose dividindo)

**Tipo de conteúdo (eixos rotativos):**
- **Educativo:** "3 jeitos de regular criança em pânico" (com a Gabi como ilustração)
- **Vulnerabilidade:** "Aos 38 anos eu descobri meu TDAH. Aqui vai o que ninguém me contou."
- **Bastidor:** "Como nasceu a NeuroMãe" (sua história — meningite, sequela, etc.)
- **Depoimento:** print/áudio de mãe do beta privado (com permissão)
- **Call-to-action:** "Já tem 70 mães na lista de espera da GABA. Quer entrar? Link na bio."

**Importante:** sua landing tem que ter um pixel/UTM pra você saber qual post traz mais inscritas.

### Captação alternativa (sem ad)

- **Indicação interna:** cada mãe paga ganha "1 mês grátis" se indicar outra mãe que pagar
- **Grupos de WhatsApp** de mães atípicas (vários públicos, alguns aceitam você compartilhar projeto — pesquisar primeiro)
- **Influenciadoras nicho:** identificar 3-5 perfis com 5-50k seguidoras em "maternidade atípica" e oferecer **assinatura vitalícia em troca de 1 post sincero** (não ser comercial, ser depoimento real após usar 30 dias)
- **Lives e podcasts:** você é boa fundadora-narradora. Aceitar convites de podcast de maternidade/saúde mental gera lista de espera muito mais qualificada que ad
- **Webinar gratuito** mensal: "Como entender a regulação emocional do filho atípico (em 45 minutos)" — você dá uma aula + final convida pra GABA. Aurora ferramenta (Streamyard ou Zoom). Gratuito.

### Métrica de sucesso da Fase 2 (final do mês 6)

- **50 assinantes pagantes** (R$ 2.450/mês de receita)
- **Churn mensal < 10%** (saída por mês)
- **NPS positivo** com pelo menos 20 respostas
- **5+ depoimentos públicos** em vídeo/print
- **2.000+ seguidoras** no Instagram da NeuroMãe

## 4. Fase 3 — Escala (mês 6-12)

### Quando entrar
Só quando Fase 2 bate as métricas E você está operando com folga (não exausta).

### Mudanças
- Cobrança aberta — qualquer mãe pode assinar direto na landing
- Anúncios pagos no Instagram/Facebook (Meta Ads) — começar com R$ 30/dia, otimizar
- Conteúdo: aumentar pra 5 posts/semana ou contratar social media freelancer (R$ 1.500-2.500/mês)
- Atendimento humano: se chegar em 200+ assinantes, contratar assistente virtual freelancer (R$ 1.000-2.000/mês) pra responder suporte

### Métrica de sucesso da Fase 3 (final do mês 12)
- **200-300 assinantes pagantes**
- **Faturamento mensal R$ 10.000-15.000**
- **Churn mensal < 5%**
- **CAC (custo de aquisição) < 30% do LTV (valor vida do cliente)**

## 5. Pricing

### Recomendação final: R$ 49/mês ou R$ 390/ano (desconto ~33%)

### Por que R$ 49

**Princípios de preço pra esse mercado:**
- A mãe atípica gasta R$ 200-500 por sessão de terapia (privado), R$ 60-150 por consulta psiquiátrica/psicológica, R$ 80-200 por consulta pediátrica especializada.
- Ela paga por **acesso e disponibilidade** — não por "minutos" como terapia.
- Substituto mental dela é "outro app de bem-estar" (R$ 15-50) ou "comunidade paga" (R$ 30-100).
- **Pesquisas com perfil similar** (apps de saúde mental no Brasil) mostram que R$ 39-59/mês é a faixa de aceitação. Abaixo de R$ 30 = parece serviço sem valor. Acima de R$ 80 = decide segurar e ir na terapia.

### Estrutura sugerida

| Plano | Preço | O que dá direito |
|---|---|---|
| Mensal | R$ 49/mês | Acesso completo à GABA |
| Anual | R$ 390/ano (≈ R$ 32,50/mês) | Acesso completo + 1 sessão ao vivo com Tatiana por bimestre (live em grupo, 1h) |

**7 dias grátis sem cartão** (não bloqueia primeira interação por checkout).

### Direito de arrependimento (CDC art. 49)
- Após assinar, a usuária tem 7 dias pra desistir e ter o valor totalmente devolvido. Não confundir com o "7 dias grátis" — esse é trial; o de arrependimento é após começar a pagar.

### Cancelamento
- A qualquer momento, sem multa.
- Acesso fica ativo até o fim do ciclo já pago.
- Histórico arquivado: usuária pode exportar antes; depois de cancelar, dados ficam por 30 dias pra reativação, depois apagam.

### O que NÃO oferecer
- **Plano "Premium" com terapia inclusa** — você não pode prestar serviço de psicologia. Fim.
- **Plano "Família" com acesso pra mais de uma pessoa** — Fase 4. Complica LGPD.
- **Pagamento em criptomoeda, boleto recorrente, etc.** — complica operação, atrasa lançamento.

### Aumento de preço ao longo do tempo
- Quem assinou na Fase 1-2 ganha preço travado por 12 meses ("preço early supporter")
- Reajuste anual no índice IGP-M ou IPCA (avisar com 30 dias)
- Quando passar pra ME (Fase 3), você pode subir tabela pra R$ 59 ou R$ 69 sem prejudicar reputação — fundadoras geralmente sobem preço e poucas saem

## 6. Posicionamento — o que dizer e o que NÃO dizer

### A copy DEVE dizer
- "Suporte 24/7 via WhatsApp" (com asterisco "respostas geradas por IA, instantâneas em sua maioria, sem garantia de SLA")
- "Conteúdo baseado em ciência: neurociência comportamental, parentalidade positiva"
- "Acolhimento sem julgamento"
- "Quem criou: Tatiana, mãe atípica, formada em Psicopedagogia + pós em Neurociência"
- "7 dias grátis"

### A copy NÃO PODE dizer
- "Vai resolver o sono do seu filho" — promessa de resultado clínico
- "Substitua a terapia" — direto contra a Lei de Psicologia
- "Diagnostico TDAH em minutos" — Ato Médico
- "100% de mães felizes" — sem base estatística
- "Garantido por médicos" se você não tem conselho médico assinando
- "Aprovado pela ANVISA" — você NÃO é dispositivo médico

### A landing atual (validar antes de lançar)
Conferir cada string do site contra essa lista. Risco: ação no Procon ou denúncia ao Procon-SP pode acabar com o projeto inteiro.

## 7. Métricas que você precisa medir desde o dia 1

### Operacionais
- Número de inscritas na lista de espera (semanal)
- Conversão lista → cadastro (mensal)
- Conversão trial → pagante (mensal)
- Churn mensal (% que cancelou)
- Tempo de resposta da GABA (mediana, p95)
- Disparos de trigger de urgência (semanal, com revisão de sample)

### Financeiras
- MRR (receita recorrente mensal)
- ARR (receita recorrente anual = MRR × 12)
- CAC (custo de aquisição, quando começar ads)
- LTV (valor de vida do cliente — R$ 49 × meses médios de assinatura)

### De produto/qualidade
- Mensagens por usuária por semana (uso)
- NPS mensal (1 pergunta por email/WhatsApp)
- Sample de 10 conversas/semana revisada por você

### Ferramentas
- Spreadsheet Google ou Notion no início — não precisa de stack analytics fancy
- Mais tarde, considerar **Plausible Analytics** (privacy-friendly, ~$9/mês) pra landing

## 8. Riscos comerciais e mitigações

| Risco | Probabilidade | Impacto | Mitigação |
|---|---|---|---|
| Churn alto (>15%/mês) | Média | Alto | Pesquisa pós-cancelamento; ajuste de produto; trial mais longo |
| Crítica viralizada negativa | Baixa-Média | Alto | Plano de incidente; resposta pública < 24h; transparência |
| Concorrente lança igual antes | Média | Médio | Velocidade > perfeição; primeiro a marcar lembra |
| Custo Claude API explode com crescimento | Média | Médio | Cap mensal Anthropic; prompt caching; modelos menores pra mensagem simples |
| Você ou Jose ficam doentes / esgotados | Alta | Crítico | Limites de horário; folga programada; assistente freelancer Fase 3 |
| WhatsApp banir o número (Z-API era esse risco) | Baixa (com API oficial) | Crítico | Migrar pra API oficial Fase 2 |
| Ação consumerista (Procon, Justiça) | Baixa | Alto | Termos sólidos; arquivar todos aceites; ouvidoria respondendo em 7 dias |

## 9. Resumo das recomendações desta área

1. **Beta privado primeiro** — 10 mães conhecidas, 30 dias, gratuito. Sem pular.
2. **Lista de espera com convite escalonado** na Fase 2 (10 por semana). Cresce no ritmo que aguenta.
3. **Conteúdo orgânico no Instagram** 3x/semana — vulnerabilidade + educativo + bastidor.
4. **R$ 49/mês ou R$ 390/ano**. 7 dias grátis sem cartão. Direito de arrependimento de 7 dias após assinar.
5. **Indicação:** 1 mês grátis pra quem trouxer mãe paga.
6. **Sem ad pago até Fase 3**, e mesmo aí começar com R$ 30/dia.
7. **Influenciadora nicho:** 3-5 perfis com 5-50k seguidoras, vitalício em troca de depoimento.
8. **Copy nunca promete diagnóstico, substituição de terapia ou resultado clínico.**

---

📎 Próximo doc: `04-operacao-e-incidentes.md` — suporte, qualidade, plano de incidente.
