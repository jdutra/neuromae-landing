---
arquivo: 04-operacao-e-incidentes.md
título: Operação dia-a-dia e plano de incidentes
status: rascunho — discutir com Jose, ensaiar o plano de incidente
---

# Operação e incidentes

## Em uma frase

Atendimento humano por **email** apenas (você + Jose dividindo), **monitoramento de qualidade por amostragem semanal** (10 conversas, 15 minutos), **plano de incidente escrito** com responsável claro e prazo LGPD (2 dias úteis), e **limites de horário** pra você e Jose não esgotarem. Sem stack de operação cara — Notion ou planilha resolvem na Fase 1-2.

## 1. Atendimento ao cliente

### Canais

| Canal | Quem usa | Resposta esperada |
|---|---|---|
| `contato@neuromae.com.br` | Dúvida geral, parceria, imprensa | até 48h dias úteis |
| `suporte@neuromae.com.br` | Bug, problema técnico, cobrança | até 24h dias úteis |
| `dpo@neuromae.com.br` | Direitos LGPD, vazamento, denúncia | até 15 dias corridos (limite LGPD, mas use 5 dias como meta interna) |
| Chat GABA (WhatsApp) | Conversa de produto (não suporte) | a GABA responde instantaneamente; suporte humano não é nesse canal |

### Princípios

- **NÃO ofereça suporte por WhatsApp pessoal.** Nem o seu, nem o do Jose. Toda comunicação oficial passa por email — gera histórico, tem prova LGPD, e te protege contra "fulano falou X comigo".
- **Não responda fora de horário.** Defina horário (ex: 9h-18h dias úteis). Auto-resposta avisa "fora desse horário, respondo no próximo dia útil". Critic para a sua saúde mental — sem isso, o produto te come.
- **Templates de resposta** prontos pra dúvidas frequentes (cancelamento, reembolso, esqueci minha palavra, como apago meus dados, etc.) — economiza tempo.

### Divisão Tatiana × Jose

| Área | Tatiana | Jose |
|---|---|---|
| Conteúdo, copy, posicionamento | ✅ | (revisa) |
| Atendimento a usuárias (email) | ✅ | (revisa) |
| Backend, bot, infra | (revisa) | ✅ |
| Pagamentos e financeiro | (compartilhado) | (compartilhado) |
| LGPD/DPO operacional | ✅ | (suporta) |
| Resposta a incidente técnico | (apoia) | ✅ líder |
| Resposta a incidente reputacional | ✅ líder | (apoia) |
| Marketing/redes sociais | ✅ | (apoia com câmera/edição) |

**Combinar:** quem responde quando o outro está doente, viajando ou indisponível. Esse é o ponto mais frágil de operação de duas pessoas — alguém sempre tem que estar "de plantão" pro DPO.

## 2. Monitoramento de qualidade

### O que monitorar

**Qualidade do bot (conversas)**
- 10 conversas aleatórias por semana
- 15 minutos de leitura
- Verificar: tom, ausência de jargão clínico, ausência de diagnóstico/medicação, gatilho de urgência funcionando, validação antes de instruir

**Disparos de trigger de urgência**
- TODOS os disparos por semana (mesmo se forem só 2-3)
- Verificar: falso positivo? Mensagem foi adequada? Usuária recebeu o número certo? Houve follow-up?

**Erros técnicos**
- Sentry dashboard 1x por dia (5 min)
- Verificar: erros novos, picos, regressões

**NPS**
- Pergunta única mensal: "De 0 a 10, o quanto você indicaria a GABA pra uma amiga mãe atípica?"
- Mandado por email no dia 28 de cada mês
- Acompanhar tendência: subindo, estável, descendo?

### Ferramenta

- **Notion** (free pra 2 pessoas): templates de revisão, log de incidentes, NPS responses
- **Google Sheets**: planilha de métricas mensais
- **Sentry**: erros (free tier)

## 3. Plano de incidente — categorias

### Categoria A — Vazamento de dado / acesso não autorizado

**Exemplo:** Supabase reporta acesso suspeito, credencial vazada, alguém pediu o histórico de outra pessoa e o bot mandou.

**Responsável líder:** Jose (técnico) com apoio Tatiana (comunicação)

**Passos (até 2h depois de detectar):**
1. Conter — revogar tokens, mudar senhas, desativar acesso suspeito
2. Avaliar impacto — quantas usuárias, que tipo de dado, há cópia externa?
3. Documentar timeline (depois exige na ANPD)

**Passos (até 48h):**
4. Notificar ANPD (via portal da ANPD) — descrição, números, medidas tomadas
5. Notificar titulares afetados — email direto, em linguagem clara
6. Publicar post explicativo (se vazamento amplo) — transparência aumenta confiança a longo prazo

**Passos (após 7 dias):**
7. Post-mortem — o que deu errado, o que vamos mudar pra não acontecer
8. Atualizar política, código, RIPD se necessário

### Categoria B — Bot fala algo grave/errado

**Exemplo:** GABA dá orientação médica errada que magoa criança, dá conselho que pode causar dano.

**Responsável líder:** Tatiana (conteúdo) com apoio Jose (código)

**Passos:**
1. Conter — desligar GABA pra usuária afetada (gerar resposta padrão "estamos verificando, volto em algumas horas")
2. Falar com a usuária — chamar pra conversa por email, escutar o impacto
3. Revisar prompt do system, código de trigger, treino do classificador
4. Se necessário, **derrubar a GABA pra todo mundo** até o fix estar deploiado — preferível 4h de downtime do que 4h de risco
5. Comunicar — email pra todas as usuárias se for impacto amplo

**Pra prevenir:** revisão semanal de samples; testar mudanças de prompt em sandbox primeiro; deploy de prompt nunca sexta-feira à noite.

### Categoria C — Incidente reputacional / crítica viralizada

**Exemplo:** Mãe posta no Twitter "GABA me deu conselho horrível", viraliza, jornalista pede comentário.

**Responsável líder:** Tatiana

**Passos (primeiras 4h):**
1. Não responder no momento de pico de raiva. **Espera 1h** antes de qualquer resposta pública.
2. Falar com a usuária diretamente, por email ou DM. Escutar. Pedir desculpa se for o caso.
3. Se a crítica é justa: corrigir o produto e comunicar publicamente o que mudou.
4. Se a crítica é injusta: resposta breve, respeitosa, com fatos. **Sem brigar.** Quem briga em rede social perde sempre.
5. Se virou matéria de jornal: responder por escrito, em texto curto, factual. **Não dar entrevista ao vivo** sem treino prévio.

**Pra prevenir:**
- Tom NeuroMãe consistente (sem oba-oba) reduz dissonância
- Trigger de urgência sólido reduz pior cenário (mãe em crise + resposta ruim)
- Testimonial real público antes de incidente cria reserva de boa vontade

### Categoria D — Suspeita de violência contra criança

**Exemplo:** GABA detecta na conversa indício forte de violência física contra criança.

**Responsável líder:** Tatiana (decisão), Jose (apoio técnico)

> ⚠️ **Decisão crítica pendente** com advogada: a NeuroMãe tem dever legal de notificar autoridades quando há **indício forte** (não confirmação) de violência contra criança? ECA art. 13 sugere que sim, mas o limite "indício" é interpretativo. RESOLVER ANTES DA FASE 1.

**Hipótese 1: você decide notificar (recomendação preliminar)**
- Documentar o que motivou (sample da conversa, anonimizada)
- Notificar o Conselho Tutelar da cidade da usuária (se você sabe — pelo IP, pelo DDD)
- Notificar a usuária que você notificou (em alguns casos isso é importante; em outros, perigoso pra ela — discutir com advogada)
- Logar a notificação

**Hipótese 2: você decide não notificar** (precisa argumentação legal sólida)
- Documentar a decisão e a base legal
- Reforçar conteúdo educativo na GABA pra direcionar a usuária aos canais

**Em qualquer caso:** logar internamente cada disparo, revisar com advogada periodicamente, e se a usuária descrever crime cometido contra criança, **não tem mais dúvida** — notificar.

### Categoria E — Downtime técnico

**Exemplo:** Supabase fora, Meta fora, BSP fora.

**Responsável líder:** Jose

**Passos:**
1. Confirmar status (status.supabase.com, status.meta.com, status do BSP)
2. Postar update no Instagram stories ("a GABA está fora do ar, equipe trabalhando, volto a postar quando voltar")
3. Após resolução, post-mortem rápido pra documentar
4. Em downtime > 4h, oferecer extensão de 1 dia gratuito automático pras assinantes ativas

## 4. Limites de horário (proteção pra você)

Você é mãe atípica, com TDAH, e fundou esse projeto justamente porque sabe o custo de não ter limite. Aplicar pra você mesma:

### Regras

- **Não responder mensagem de usuária fora do horário comercial.** Auto-resposta avisa.
- **Não responder mensagem de Jose sobre trabalho depois das 19h.** Wartung pode esperar.
- **Domingo é off-limits.** Sem exceção. Se incidente crítico A → escala via SMS (canal especial), não email.
- **Uma semana off a cada 3 meses.** Programar antes. Avisar usuárias com 7 dias de antecedência ("vou recarregar, GABA continua funcionando, suporte humano volta dia X").

### Quando os limites quebram
- Incidente Categoria A ou D — sim, vale ligar à noite/feriado pro Jose. Pra Tatiana, só A.
- Categorias B, C, E — esperam o próximo dia útil. O produto não cai por isso.

### Se você ou Jose ficarem esgotados
- Pausar a abertura de novas vagas (lista de espera)
- Comunicar publicamente: "estamos pausando novos cadastros por 2 semanas pra melhorar o atendimento"
- Buscar uma semana de descanso
- Avaliar se contratar assistente freelancer antes do previsto

## 5. Documentos operacionais a ter prontos

### Antes da Fase 1
- [ ] Playbook de atendimento: 10 templates de email respondendo perguntas comuns
- [ ] FAQ pública na landing: 10 perguntas + respostas
- [ ] Plano de incidente Categoria A (vazamento) — passo a passo com nomes e telefones
- [ ] Plano de incidente Categoria B (bot fala errado) — passo a passo
- [ ] Plano de incidente Categoria D (violência contra criança) — após consulta jurídica

### Antes da Fase 2
- [ ] Política de cancelamento publicada
- [ ] Política de reembolso publicada (mantém com CDC 7 dias após assinar)
- [ ] Termo de Confidencialidade (NDA) modelo, pra eventual freelancer/parceiro
- [ ] Manual do "DPO de bolso" — checklist semanal e mensal de Tatiana como DPO

### Antes da Fase 3
- [ ] Manual de onboarding pra contratado(a) freelancer
- [ ] Política de acesso e revogação (quem pode acessar o que)
- [ ] Plano de continuidade de negócio (o que acontece com a NeuroMãe se Tatiana ficar incapacitada)

## 6. Ensaio: faça uma simulação de incidente

**Antes do lançamento da Fase 2** (cobrança), faça uma simulação de incidente Categoria A:

1. Define: "Hoje, às 14h, alguém invadiu o Supabase. Tem 50 usuárias. O que a gente faz?"
2. Você e Jose seguem o plano, em tempo real, com cronômetro
3. Documente o que travou, o que faltou, quem fez o quê
4. Ajusta o plano

**Custo:** 2-3h. **Valor:** se algum dia acontecer de verdade, vocês têm a memória muscular.

## 7. Quando contratar primeira pessoa

### Sinais de que é hora
- Você está respondendo email depois das 22h regularmente
- Você está deixando NPS sem ler 3 meses seguidos
- Você cancelou 2+ planos com a família por causa do trabalho
- Faturamento estável > R$ 6k/mês (suporta pagar alguém)

### Primeira contratação
- **Assistente virtual freelancer** PJ — R$ 1.000-2.500/mês — atende email com seus templates, gerencia agenda, monitora NPS
- **Não contratar dev** ainda. Jose dá conta da Fase 1-3.

### Como contratar
- Buscar em comunidades como "Trampos.co", "Workana", grupos de Telegram de assistentes
- Período de teste 30 dias
- NDA e contrato PJ assinado
- Acesso limitado (não dar admin no Supabase de cara, dar acesso a Notion e ferramentas de atendimento)

## 8. Resumo das recomendações desta área

1. **Email é o canal oficial** — não WhatsApp pessoal pra suporte.
2. **Horário comercial respeitado**, auto-resposta avisa fora de horário, domingo é off.
3. **Monitoramento semanal de qualidade** — 10 conversas, 15 minutos, todo sábado por exemplo.
4. **5 categorias de incidente com plano escrito** — Vazamento, Bot fala errado, Reputacional, Violência contra criança, Downtime.
5. **Decisão pendente Categoria D** (violência contra criança) — resolver com advogada antes da Fase 1.
6. **Ensaio do plano de incidente uma vez antes do lançamento.**
7. **Limites pessoais** — proteção contra esgotamento. Você é mãe atípica criando produto pra mãe atípica; aplique no carbono o que prega na sílica.
8. **Primeira contratação freelancer** quando email passar de 22h com frequência ou faturamento estável > R$ 6k.

---

📎 Próximo doc: `05-custos-e-roadmap.md` — tabela financeira mensal por fase e roadmap detalhado.
