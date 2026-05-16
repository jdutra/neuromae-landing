---
arquivo: 06-consultoria-juridica-detalhada.md
título: Consultoria jurídica — o que checar, onde achar, brief pronto e o que os concorrentes fazem
status: rascunho — usar como guia operacional pra contratar advogada
---

# Consultoria jurídica detalhada

## Em uma frase

Antes de gastar R$ 2-4k com advogada, **faça primeiro a consultoria gratuita do Sebrae (30 min) e leia as duas cartilhas do CFP de dez/2025 sobre chatbots+IA+saúde mental** — esses dois passos sozinhos vão te economizar 2 horas de relógio caro. Depois disso, contrate **uma advogada boutique de Direito Digital com atuação confirmada em startup de saúde digital** (não escritório grande, não generalista). Faixa de investimento: **R$ 2.000–4.500 pra pacote de constituição completo** (revisão GABA + Termos + Privacidade + RIPD + RoT). A NeuroMãe se posiciona juridicamente como **"plataforma de bem-estar e apoio, não tratamento clínico"** — modelo Cíngulo/Wysa, NÃO modelo Conexa/Vittude.

---

## 1. O que aprendi pesquisando como outros players fazem

Pesquisei 7 players brasileiros e 2 internacionais. Achado central: existem **três posicionamentos jurídicos** possíveis pra um serviço como o seu, e cada um tem peso regulatório diferente:

### Os três posicionamentos

```
LEVE                                                                       PESADO
←─────────────────────────────────────────────────────────────────────────→

[BEM-ESTAR/APOIO]      [ORIENTAÇÃO ONLINE]        [TELESSAÚDE FORMAL]
Cíngulo, Wysa,         Vittude, Zenklub,          Conexa Saúde,
Famivita, GABA         Psicologia Viva            Bem do Estar
                       (marketplace)              (telemedicina)
                                                  
Regulação:             Regulação:                 Regulação:
LGPD + CDC + ECA       LGPD + CDC + ECA           LGPD + CDC + ECA +
                       + CFP/CFM (parcial)        CFM 2.314/2022 +
                                                  Lei 13.787/2018 +
                                                  prontuário 20 anos
```

**A GABA precisa ficar no campo "BEM-ESTAR/APOIO"**, junto com Cíngulo e Wysa. Esse é o caminho que cumpre lei brasileira sem te forçar a virar telemedicina (cara, lenta, requer CFM).

### O que o CFP (Conselho Federal de Psicologia) disse em dez/2025

O CFP publicou **DUAS cartilhas em dezembro de 2025** especificamente sobre chatbots e IA em saúde mental. Esse é o material mais atualizado e mais relevante pra você no Brasil. **Leia antes de contratar advogada — você vai entrar mais preparada.**

- **Cartilha "Chatbot, IA e saúde mental"**: https://site.cfp.org.br/wp-content/uploads/2025/12/Cartilha_chatbot_IA_A5-1.pdf
- **Cartilha "Inteligência Artificial na Psicologia"**: https://site.cfp.org.br/wp-content/uploads/2025/12/Cartilha_IA_A5-1.pdf

Esse material é gratuito, atualizado, do órgão regulador. Vale ouro.

### Comparativo curto dos players brasileiros

| Player | Posicionamento jurídico | Usa IA? | Ponto forte LGPD | DPO público? |
|---|---|---|---|---|
| **Cíngulo** | Bem-estar/autoconhecimento (modelo a copiar) | Sim (conteúdo) | Termos+Política unificados | Não confirmado |
| **Wysa / Youper** | Apoio, NÃO clínico (modelo a copiar) | Sim (conversacional) | Disclaimers fortes "não diagnostica, não substitui" | — |
| Vittude | Marketplace, eximida do clínico | Não (humano) | DPO nominado (Everton Höpner, dpo@vittude.com) | ✅ |
| Zenklub | Orientação psicológica online | Parcial | Aviso 30 dias para mudanças nos Termos | Não confirmado |
| Psicologia Viva | Telepsicologia (CFP+LGPD) | Não | DPO Leandro Dionízio Ramos + compromisso notificação ANPD | ✅ |
| Conexa Saúde | Telemedicina formal (referência mais sofisticada) | Não | SLA 15 dias direitos LGPD | ✅ (dpo@conexasaude.com.br) |
| Famivita | Portal informativo + e-commerce | Não | (fraco — compartilha com Mercado Livre) | ❌ |

### Top 3 práticas que VOCÊ DEVE COPIAR

1. **DPO público, nomeado** (modelo Vittude + Psicologia Viva + Conexa). Mesmo enquanto você é PF: publicar nome + email `dpo@neuromae.com.br` na Política de Privacidade. **É exigência LGPD art. 41 já hoje.**

2. **Compromisso explícito de notificação à ANPD + titulares em incidente** (modelo Psicologia Viva). Texto curto, claro: "Em caso de incidente de segurança, notificaremos a ANPD em até 2 dias úteis e os titulares afetados em até 5 dias úteis."

3. **SLA de 15 dias para direitos de titulares** (modelo Conexa Saúde). Formaliza o que a LGPD já exige (art. 9º e 18) — transmite seriedade e te protege em eventual contencioso.

### Top 3 armadilhas que você DEVE EVITAR

1. **Confundir "apoio" com "telessaúde".** Conexa e Psicologia Viva carregam o peso regulatório do CFM/CFP. **A GABA NÃO faz isso.** Mantenha o posicionamento Cíngulo/Wysa em todos os textos.

2. **Termos vagos sobre IA.** Vários players nacionais escondem que usam IA. Wysa/Youper são transparentes — isso é o caminho. Sua Política precisa dizer: "usamos IA da Anthropic (Claude). Suas mensagens são processadas pela API com a flag 'no training' ativada. Não treinamos modelos com seus dados."

3. **Reter dados sem prazo claro** (vício do Cíngulo aparentemente). Sua Política precisa ter TABELA explícita de retenção (você já tem em `02-tecnologia-e-seguranca.md` — copiar pra Política pública).

### Links das políticas dos concorrentes pra você ler depois

- [Vittude — Privacidade](https://www.vittude.com/privacidade) · [Termos paciente](https://www.vittude.com/termos-paciente)
- [Zenklub — Privacidade](https://zenklub.com.br/privacidade/) · [Termos](https://zenklub.com.br/site/self-checkout/termos)
- [Cíngulo — Termos e Política unificados](https://accounts.cingulo.com/termos-e-politica.html)
- [Psicologia Viva — Privacidade](https://www.psicologiaviva.com.br/privacidade.html)
- [Conexa Saúde — Políticas e Termos](https://www.conexasaude.com.br/politicas-e-termos)

> ⚠️ **Não copiar texto literal de nenhum deles.** Inspiração e estrutura sim; cópia é caso jurídico. Sua advogada vai escrever do zero, com seu contexto.

---

## 2. O que verificar com a advogada (brief detalhado)

A maior parte dos escritórios entrega "kit LGPD genérico" — Termos + Política sem entender seu contexto. Você precisa entrar com **agenda específica** pra não pagar pacote padrão sub-utilizando seu R$ 4k.

### Os 9 pontos críticos pra fazer ela analisar

1. **Enquadramento jurídico.** GABA é "plataforma de bem-estar/apoio informacional" ou pode ser interpretada como serviço de saúde? Pedir parecer escrito de 1-2 páginas sobre isso. Esse parecer é seu escudo se Procon ou ANPD questionarem.

2. **Validade do consentimento sob LGPD + ECA Digital.** Revisão do fluxo de onboarding `docs/gaba/01-onboarding.md` — o aceite de Termos via WhatsApp é prova suficiente? Como melhorar?

3. **Verificação de idade.** Sob ECA Digital (Lei 15.211/2025, em vigor desde mar/2026), a autodeclaração ("você tem 18+?") basta pra GABA, ou preciso de KYC reforçado? Caminho recomendado: confiar no KYC do Mercado Pago no momento da assinatura. **Pedir confirmação dela.**

4. **Dever de notificação em violência contra criança.** Sob ECA art. 13 + 245, a NeuroMãe tem dever de notificar Conselho Tutelar quando a GABA detectar indício forte de violência contra criança? Em caso afirmativo, qual o procedimento padrão e como documentar a decisão?

5. **Termos de Uso completos.** Revisão de rascunho que você (ou ela) escrever — limite de responsabilidade, IA disclaimer, idade mínima, foro, lei aplicável, cancelamento, reembolso (7 dias CDC art. 49), suspensão.

6. **Política de Privacidade completa.** Revisão de rascunho — base legal por finalidade, retenção, DPO, direitos do titular, compartilhamento (Anthropic, Supabase, Mercado Pago, BSP), cookies, transferência internacional de dados (Claude API roda em servidores Anthropic — adequação?).

7. **RIPD — Relatório de Impacto à Proteção de Dados.** Documento interno que a ANPD pode pedir. Pra dado sensível + criança + saúde mental, é obrigatório. **Pedir que ela monte com você** (não delegar inteiro — você precisa entender).

8. **ROT — Registro de Operações de Tratamento.** Documento interno (planilha). Mapeamento "que dado eu trato, por qual finalidade, base legal, retenção". Pedir template e revisão.

9. **Mensagens críticas da GABA com respaldo jurídico.** Revisar especificamente:
   - `docs/gaba/03-trigger-imagem.md` (ECA + LGPD)
   - `docs/gaba/04-trigger-clinico.md` (Ato Médico + Lei Psicologia)
   - `docs/gaba/05-trigger-urgencia.md` (CVV, encaminhamentos)
   - `docs/gaba/02-mensagem-fixada.md` (disclaimers)

### Entregáveis que você DEVE exigir no contrato

- [ ] **Parecer escrito de enquadramento jurídico** (1-2 páginas)
- [ ] **Termos de Uso** versão pronta pra publicar
- [ ] **Política de Privacidade** versão pronta pra publicar
- [ ] **RIPD** (Relatório de Impacto) preenchido
- [ ] **ROT** (Registro de Operações) preenchido em planilha
- [ ] **Política de cookies** (curta) pra landing
- [ ] **Plano de resposta a incidente LGPD** (1-2 páginas)
- [ ] **Briefing executivo das mensagens GABA** com observações por arquivo
- [ ] **Procedimento de notificação Conselho Tutelar** (em caso de violência contra criança) — decisão sim/não documentada com base legal
- [ ] **Modelo de resposta a direito do titular** (acesso, correção, exclusão) — 4 templates de email

### O que NÃO contratar nessa primeira rodada

- Recurso administrativo a multa ANPD (você não tem)
- Defesa em processo judicial (você não tem)
- Registro de marca (você já tem com outro advogado)
- Constituição societária (faz com contador no MEI)
- Compliance trabalhista (irrelevante até ter funcionário CLT)

---

## 3. Que tipo de advogada procurar

### Três perfis viáveis (com prós e contras)

**Perfil A — Boutique de Direito Digital (RECOMENDADO)**

Escritório especializado em LGPD + Direito Digital, com 2-15 advogados. Atende startup pequena.

- ✅ Especialização real, preço razoável
- ✅ Conhece IA, plataformas, marketplaces
- ✅ Acostumado a estágio inicial (não exige retainer)
- ⚠️ Qualidade varia muito — entrevistar antes

**Perfil B — Advogada individual digital, atuação independente**

Profissional sozinha, 5-15 anos de experiência, escritório virtual.

- ✅ Preço mais barato (R$ 1.500-3.000)
- ✅ Acessível, ágil, sem burocracia
- ⚠️ Carga maior pra ela — pode atrasar
- ⚠️ Verificar se tem suplente em férias

**Perfil C — Consultoria modular online (LGPD-as-a-Service)**

Empresas tipo Implementando a LGPD, BL Consultoria, PDCA TI — vendem pacote padronizado.

- ✅ Preço fechado, sem surpresa
- ✅ Templates já testados em N clientes
- ⚠️ Pouco customizável — chatbot IA + criança não é caso padrão
- ⚠️ Você acaba precisando de advogada além pra os pontos sensíveis

### O que perguntar nos primeiros 15 minutos (call gratuita)

1. "Você já atendeu startup de chatbot/IA + dado sensível antes? Pode citar (sem nomes) qual setor?"
2. "Como você se mantém atualizada com ECA Digital? Já leu a Lei 15.211?"
3. "Você assina parecer escrito como entregável, ou só consultoria oral?"
4. "Qual o seu modelo de cobrança: hora, projeto fechado, mensalidade?"
5. "Você tem caso de cliente com chatbot que detecta urgência? Como vocês lidaram com dever de notificação no ECA?"
6. "Quanto tempo de mão pra entregar Termos+Privacidade+RIPD+ROT, com 4-6 reuniões de 1h?"

### Bandeiras vermelhas

- 🚩 "Posso te montar a LGPD inteira em 2 dias" — não pode. Boa LGPD leva 3-6 semanas.
- 🚩 "Tenho um pacote pronto que serve" — pode até servir, mas chatbot IA + criança não é caso padrão. Insistir nisso é sinal de pouco conhecimento.
- 🚩 "Não preciso ler os arquivos da GABA, vou só ajustar os Termos" — sem ler, não tem como fazer parecer enquadramento.
- 🚩 Não tem OAB ativa, ou nunca atuou em LGPD especificamente (consultoria genérica empresarial é diferente).
- 🚩 Recusa entregar nome de cliente referência (mesmo sob NDA, ela pode dizer "atendi 3 healthtechs com 5-50k usuárias").
- 🚩 Cobra retainer (mensalidade) antes de você ter receita.

---

## 4. Onde achar — canais concretos

### A. Sebrae (GRATUITO — fazer primeiro, na semana 1)

Não é advogada formal, mas **você ganha 30 minutos de consultoria com especialista** que pode te triar e te orientar bem antes de gastar R$ 4k.

- **Site:** [consultoria.sebrae.com.br](https://consultoria.sebrae.com.br/)
- **Telefone MEI:** 0800 570 0800
- **Atendimento startup:** [Sebrae/PR Startups](https://sebraepr.com.br/servicos/atendimento-online-startup/) — abre pra todo Brasil
- **Bônus:** Sebrae + ANPD firmaram em 2024 acordo de cooperação técnica pra orientar PME em LGPD. Cursos, guias e oficinas gratuitas.

**Roteiro pra primeira call Sebrae:**
> "Sou MEI/PF prestes a abrir microempresa de chatbot via WhatsApp pra apoiar mães. Uso IA, coleto dados sensíveis (saúde mental, criança), preciso fazer LGPD direito. Quero orientação sobre: enquadramento, melhores práticas pra startup com pouco capital, e indicação de profissional jurídico se precisar."

Geralmente sai com: triagem honesta + 2-3 indicações + acesso a material gratuito.

### B. Advogadas/escritórios identificados na pesquisa (a contactar e avaliar)

> ⚠️ Essas são opções que apareceram na pesquisa pública — **NÃO são indicação pessoal**. Você precisa fazer call de 15 min com cada uma antes de contratar. Estou listando pra te economizar o garimpo inicial.

| Nome / Escritório | Perfil | Onde | Observações |
|---|---|---|---|
| **Amanda Michelin** | Individual, ágil, foco startup early-stage | amandamichelin.com.br | Citada como "mais rápida que tradicional" — combina com seu ritmo |
| **Gisele Truzzi** (Truzzi Advogados) | Boutique digital, foco PME + segurança da informação | truzzi.com.br | Desde 2010, robusta. Pode ser mais cara — perguntar faixa |
| **Thifany Fiuza** | Individual, LGPD + IT + crimes cibernéticos + regulação startup | thifanyfiuza.com | Perfil bem aderente ao caso |
| **ACDR Advocacia** | Boutique LGPD especializada em Tecnologia/Saúde/Educação | acdradvocacia.com.br | Atua desde 2018 em LGPD especificamente em saúde — relevante |
| **Gundim & Ganzella** | Escritório LGPD focado | gundimganzella.com.br | Verificar perfil startup |
| **José Milagre** (Direito Digital) | Reconhecido em direito digital + cibernético | direitodigital.adv.br | Mais conhecido pra crime cibernético — pode ser overkill pra você |
| **Ágata Martins** | Direito pra startup, RJ | agatamartins.adv.br | Foco startup direto |
| **Implementando a LGPD** | Consultoria modular online | implementandoalgpd.com.br | Tem [artigo sobre custos](https://www.implementandoalgpd.com.br/blog/quanto-custa-uma-consultoria-de-lgpd/) que vale ler |
| **BL Consultoria Digital** | Consultoria empresarial digital | blconsultoriadigital.com.br | — |

**Estratégia recomendada:** contate **3 dessas** (eu sugiro Amanda Michelin + ACDR Advocacia + Thifany Fiuza) com o brief curto da próxima seção. Faça call de 15 min com cada. Compare propostas. Escolha.

### C. Comunidades de startup (gratuito ou barato — vale a pena)

- **ABStartups** — associação nacional, tem advogadas parceiras com desconto. [abstartups.com.br](https://abstartups.com.br)
- **Cubo Itaú** (SP) e **Distrito** (vários) — hubs físicos com advogadas parceiras
- **Tomatazos / Maratona BH** — comunidade de empreendedoras com indicações reais
- **LinkedIn** — buscar "advogada direito digital LGPD startup Brasil" e filtrar por publicações recentes (não basta título — leia o que ela escreve. Quem escreve regularmente sobre o assunto, conhece)

### D. Indicações via rede

Antes de contratar, pergunte em DOIS canais:

1. **Grupos de fundadoras brasileiras** (B2Mamy, Mulheres em Tech, etc.) — "alguém aqui contratou advogada LGPD pra startup com dado sensível? indicação?"
2. **Sua advogada de PI** (a que protocolou INPI) — peça que indique uma advogada de Direito Digital de confiança. Advogado bom indica advogada boa.

---

## 5. Quanto custa (mercado real, jun/2026)

### Faixas de investimento

| Modelo | Faixa | O que inclui | Pra quem |
|---|---|---|---|
| **Sessão pontual de diagnóstico** | R$ 300 – R$ 800 | 1-2h conversa + relatório curto | Triagem antes de decidir |
| **Pacote inicial completo (RECOMENDADO)** | **R$ 2.000 – R$ 4.500** | Parecer enquadramento + Termos + Privacidade + RIPD + ROT + Cookies + 4-6 reuniões | NeuroMãe na Fase 2 |
| **Mensalidade contínua (retainer)** | R$ 800 – R$ 2.500/mês | Consultoria sob demanda, sem retainer pra começo | Pular até virar ME |
| **Pacote LGPD-as-a-Service** | R$ 1.500 – R$ 6.000 (one-time) | Termos+Política templates customizados + RIPD básico | Se você não achar advogada boa em 30 dias |

### Variáveis que mudam o preço

- **Cidade da advogada:** SP/RJ são 30-50% mais caro que cidades médias.
- **Reputação:** escritório que aparece em mídia cobra premium.
- **Urgência:** "preciso pra próxima semana" custa 30% mais que "tenho 6 semanas".
- **Setor:** "saúde" e "IA" são premium em LGPD.

### Quanto VOCÊ deveria investir

Pra GABA na Fase 2, **R$ 2.500–3.500 é o ponto doce** — suficiente pra entregáveis completos, sem premium desnecessário. Acima de R$ 4.500 só faz sentido se for escritório com casos de chatbot+IA reais no portfólio.

### Sinais de bom valor

- Inclui pelo menos **6 horas de reunião**, não só "entrega de documento"
- Suporte de 30 dias pós-entrega (você pode mandar dúvida sem custo extra)
- Direito a 1 revisão dos entregáveis sem custo

---

## 6. Brief pronto (copia, cola, manda)

### A. Mensagem inicial pra LinkedIn ou primeiro email (curta, qualifica rápido)

> Oi, [Nome da advogada] 💙
>
> Sou Tatiana, fundadora da NeuroMãe — startup brasileira em fase pré-lançamento. Estou prestes a abrir MEI pra lançar a GABA: uma assistente de IA via WhatsApp que apoia mães de crianças neurodivergentes (TDAH, TEA, dislexia).
>
> Preciso de consultoria jurídica única pra constituir LGPD, Termos de Uso e Política de Privacidade — produto envolve dado pessoal sensível + criança + IA, então não é caso "padrão LGPD".
>
> Você atende esse tipo de caso (HealthTech / IA / startup early-stage)? Se sim, posso te mandar brief detalhado e marcamos 15 min pra conversar sobre escopo?
>
> Obrigada!
> Tatiana — neuromae.com.br

### B. Brief detalhado pra mandar depois (com NDA se ela pedir)

```
BRIEF NEUROMÃE — CONSULTORIA JURÍDICA INICIAL

CONTEXTO
- Startup pré-lançamento. Fundadora: Tatiana Junco (PF hoje, MEI nas próximas 4 semanas).
- Produto: GABA, assistente de IA via WhatsApp que apoia mães de crianças neurodivergentes.
- Posicionamento: "plataforma de bem-estar e apoio informacional, não tratamento clínico".
- Stack: WhatsApp Business API (via BSP) + Supabase (Brasil) + Anthropic Claude API + Mercado Pago Assinaturas.
- Tração planejada: 10 usuárias beta gratuito (mês 1-2), 50 pagantes (mês 6), 200+ (mês 12).
- Preço: R$ 49/mês ou R$ 390/ano, 7 dias grátis sem cartão.
- Localização: 100% Brasil (titulares e operação).

PROTEÇÕES EM ANDAMENTO
- INPI: marca NeuroMãe + marca GABA + mascote (em análise)
- Domínio neuromae.com.br registrado
- Termos e Privacidade NÃO PUBLICADOS ainda — preciso da sua consultoria pra fazer

POPULAÇÃO ATENDIDA
- Mulheres maiores de 18 anos, mães ou cuidadoras de crianças neurodivergentes
- Dados sensíveis envolvidos: saúde mental, dados de criança (terceiro), eventualmente violência doméstica
- Tom da conversa: acolhimento informacional, NÃO diagnóstico, NÃO prescrição, NÃO terapia

ESCOPO DA CONSULTORIA QUE QUERO CONTRATAR
1. Parecer escrito de enquadramento jurídico (não-prestação de saúde, não-dispositivo médico)
2. Termos de Uso completos
3. Política de Privacidade completa
4. Política de Cookies (curta, pra landing)
5. RIPD — Relatório de Impacto à Proteção de Dados
6. ROT — Registro de Operações de Tratamento (planilha + tutorial)
7. Plano de resposta a incidente LGPD
8. Decisão escrita sobre dever de notificação ECA art. 13 (violência contra criança)
9. Revisão das mensagens críticas do chatbot (4 arquivos curtos)

PRINCIPAIS DECISÕES JÁ TOMADAS (mas que quero validar com você)
- Não armazenar/processar imagens enviadas pela usuária (descarte em 60s)
- Palavra de acesso pra histórico arquivado (bcrypt hash)
- Retenção curta: 90 dias texto bruto, 2 anos resumos
- DPO interno: Tatiana, email dpo@neuromae.com.br
- Verificação de idade via KYC do Mercado Pago (sob ECA Digital Lei 15.211/2025)
- WhatsApp Business API oficial (não Z-API)

PRAZO E ORÇAMENTO
- Prazo desejado: 4-6 semanas
- Orçamento: até R$ 3.500 (negociável até R$ 4.500 se escopo justificar)
- Pagamento: 50% início + 50% entrega

DOCUMENTOS QUE POSSO TE MANDAR ASSIM QUE FECHAR
- Pasta /docs/gaba/ com 7 arquivos de mensagens canônicas do chatbot
- Pasta /docs/estrategia/ com 6 documentos da consultoria estratégica que já fiz
- Mock-ups da landing
- Stack técnico documentado

PROFISSIONAL DE PSICOLOGIA
- Vou contratar separadamente psicóloga pra revisar o fluxo de urgência. Você quer ver o relatório dela como insumo, ou prefere revisar independente?

PERGUNTA INICIAL PRA VOCÊ
1. Faz sentido pra você atender esse caso?
2. Qual o seu orçamento estimado e prazo pra esse escopo?
3. Quer que eu mande a pasta /docs/gaba/ antes de fechar contrato, ou prefere assinar NDA primeiro?
4. Você tem caso parecido no portfólio? (sob NDA, só perfil — não nome de cliente)
```

### C. Pergunta-chave pra fazer na call (eliminatória)

Antes de fechar contrato, peça:
> "Você está confortável em assinar um parecer escrito (com OAB) afirmando que, no seu entendimento, a GABA é plataforma de bem-estar/apoio e não atividade privativa de profissional de saúde, **desde que o produto siga as recomendações que você propuser**?"

Se ela hesitar muito — passa. Se ela diz "sim, com as adequações certas, dá pra fazer" — bom sinal.

---

## 7. Checklist final

### Antes de contratar
- [ ] Já fez 1 sessão Sebrae gratuita
- [ ] Já leu as 2 cartilhas CFP de dez/2025
- [ ] Já leu as Políticas de Cíngulo + Wysa (modelo)
- [ ] Já mandou brief pra 3 advogadas/escritórios
- [ ] Já fez call de 15 min com pelo menos 2
- [ ] Tem 2 orçamentos formais pra comparar
- [ ] Verificou OAB ativa da escolhida
- [ ] Contrato escrito (não verbal) com escopo, prazo, valor, entregáveis e SLA de resposta

### Durante a consultoria (4-6 semanas)
- [ ] Você mandou /docs/gaba/ e /docs/estrategia/ inteiros
- [ ] Pelo menos 4 reuniões de 1h (kickoff, enquadramento, revisão Termos+Privacidade, revisão RIPD+entrega final)
- [ ] Você está documentando cada decisão (em arquivo Notion ou similar)
- [ ] Você está perguntando "por que" cada vez que ela recomendar algo — quem não entende não fiscaliza depois

### Depois (entregáveis verificados)
- [ ] Parecer escrito de enquadramento assinado com OAB
- [ ] Termos de Uso v1.0 publicáveis (em .md ou .docx)
- [ ] Política de Privacidade v1.0 publicáveis
- [ ] Cookies (curto) publicável
- [ ] RIPD preenchido (PDF interno)
- [ ] ROT (planilha)
- [ ] Plano de incidente (PDF)
- [ ] Decisão escrita sobre notificação Conselho Tutelar
- [ ] 4 templates de email pra direitos do titular
- [ ] Suporte de 30 dias pós-entrega contratado
- [ ] Direito a 1 revisão sem custo

### Antes de publicar
- [ ] Você leu cada documento e entende cada cláusula
- [ ] Você consegue explicar o porquê de cada decisão pra terceira pessoa
- [ ] Você publicou os documentos versionados (data + versão no rodapé)
- [ ] Você atualizou MEMORY.md/notas pessoais com data da última revisão

---

## 8. Recursos GRATUITOS pra ler antes (essa semana)

Nessa ordem de prioridade:

1. **[Cartilha CFP "Chatbot, IA e saúde mental" (dez/2025)](https://site.cfp.org.br/wp-content/uploads/2025/12/Cartilha_chatbot_IA_A5-1.pdf)** — leitura obrigatória, é o material mais aderente ao seu caso.
2. **[Cartilha CFP "Inteligência Artificial na Psicologia" (dez/2025)](https://site.cfp.org.br/wp-content/uploads/2025/12/Cartilha_IA_A5-1.pdf)** — complemento da anterior.
3. **[Guia ANPD para pequenos negócios](https://www.gov.br/anpd/pt-br/documentos-e-publicacoes)** — leve, em linguagem clara.
4. **[Lei 15.211/2025 — ECA Digital (Planalto)](https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2025/lei/l15211.htm)** — só os artigos 1º a 10º bastam pra você ter base.
5. **[LGPD — Lei 13.709/2018 (Planalto)](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm)** — pular pros artigos 5º, 6º, 7º, 11, 14, 18, 41 e 46. O resto a advogada explica.
6. **Política de Privacidade do Cíngulo** (link acima) — modelo de plataforma de bem-estar.
7. **Política da Wysa em inglês** — modelo internacional de chatbot IA com disclaimer forte.

**Total de leitura:** 6-8 horas, distribuídas em uma semana. **Custo:** R$ 0. **Retorno:** consultoria jurídica 30-50% mais produtiva.

---

## 9. Resumo das recomendações desta área

1. **GABA = posicionamento "bem-estar/apoio" (modelo Cíngulo/Wysa)**, NÃO telessaúde — define toda a estratégia legal.
2. **Antes de contratar advogada: Sebrae gratuito + cartilhas CFP** (6-8h de leitura gratuita).
3. **Investimento ideal: R$ 2.500–3.500** pra pacote completo de constituição.
4. **Contactar 3 advogadas**, comparar propostas, escolher a que assinar parecer escrito de enquadramento.
5. **9 entregáveis exigidos**, não menos (parecer + Termos + Privacidade + Cookies + RIPD + ROT + plano incidente + decisão notificação Conselho Tutelar + templates email titular).
6. **Bandeiras vermelhas:** "tenho pacote pronto que serve"; "te entrego em 2 dias"; recusa parecer escrito.
7. **Top 3 práticas a copiar de concorrentes:** DPO público nomeado, compromisso notificação ANPD, SLA 15 dias direitos titular.
8. **Top 3 armadilhas a evitar:** confundir apoio com telessaúde, termos vagos sobre IA, retenção sem prazo claro.

---

📎 Esse documento substitui/expande a seção 6 do `01-empresarial-e-juridico.md`. Quando você terminar a consultoria, atualize com os entregáveis recebidos e suas observações.
