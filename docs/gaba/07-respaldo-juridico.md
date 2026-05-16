---
arquivo: 07-respaldo-juridico.md
título: Cola jurídica — leis citadas nas mensagens da GABA
quando dispara: Não dispara — referência consolidada pros outros documentos
status: rascunho — REVISAR COM ADVOGADO antes de publicar
---

# Respaldo jurídico consolidado

## Em uma frase

Lista única de todas as leis brasileiras citadas nas mensagens da GABA, com artigo aplicável, link oficial, e qual arquivo desta pasta usa cada uma. Serve como cola pra Tatiana e pro advogado(a) revisarem juntos antes de publicar.

> ⚠️ **Importante:** este documento foi montado por uma IA com base em conhecimento público. NÃO substitui parecer jurídico. Antes de publicar qualquer mensagem da GABA, leve esse arquivo + os arquivos 01 a 06 a uma advogada especializada em LGPD/marketplace digital e em direito da criança e adolescente.

---

## 1. LGPD — Lei Geral de Proteção de Dados Pessoais

**Lei nº 13.709, de 14 de agosto de 2018.**

📜 Texto oficial: https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm
🏛️ Autoridade: ANPD — https://www.gov.br/anpd/pt-br

### Artigos relevantes pra GABA

| Artigo | Sobre o quê | Onde se aplica |
|---|---|---|
| Art. 5º, II | Define "dado pessoal sensível" (inclui dado de saúde, imagem biométrica) | `03-trigger-imagem.md`, `04-trigger-clinico.md` |
| Art. 6º, VII | Princípio da segurança no tratamento de dados | `01-onboarding.md` (palavra de acesso), `06-trigger-historico.md` |
| Art. 7º, I | Consentimento como base legal | `01-onboarding.md` (Etapa 3 — aceite de termos) |
| Art. 9º | Informação clara sobre tratamento | `02-mensagem-fixada.md`, Termos públicos |
| Art. 11, II, "f" | Tratamento de dado sensível pra proteção da vida, sem consentimento | `05-trigger-urgencia.md` |
| Art. 14 | Tratamento de dados de criança e adolescente | `03-trigger-imagem.md` (princípio: a NeuroMãe NÃO trata dado de criança no fluxo) |
| Art. 18 | Direitos do titular (acesso, correção, exclusão) | `06-trigger-historico.md`, Política de Privacidade |
| Art. 46 | Medidas de segurança técnicas e administrativas | `01-onboarding.md` (palavra de acesso), `06-trigger-historico.md` |

---

## 2. ECA — Estatuto da Criança e do Adolescente

**Lei nº 8.069, de 13 de julho de 1990.**

📜 Texto oficial: https://www.planalto.gov.br/ccivil_03/leis/l8069.htm

### Artigos relevantes pra GABA

| Artigo | Sobre o quê | Onde se aplica |
|---|---|---|
| Art. 2º | Define criança (até 12) e adolescente (12 a 18) | `01-onboarding.md` (gate de 18 anos) |
| Art. 13 | Notificação obrigatória de maus-tratos à autoridade competente | `05-trigger-urgencia.md` (decisão pendente: a NeuroMãe tem dever de notificar?) |
| Art. 17 | Direito ao respeito — inviolabilidade da imagem | `03-trigger-imagem.md` |
| Art. 18 | Dever de todos de velar pela dignidade da criança | `03-trigger-imagem.md` |
| Art. 245 | Pena pra quem omite notificação de violência contra criança | `05-trigger-urgencia.md` — revisar com advogado |

---

## 3. ECA Digital

**Lei nº 15.211, de 17 de setembro de 2025.**

📜 Texto oficial: https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2025/lei/l15211.htm
🏛️ Fiscalização: ANPD (mesma autoridade da LGPD)
📅 **Em vigor desde 17 de março de 2026** — está valendo agora.

### Pontos relevantes pra GABA

- Proteção de crianças e adolescentes em ambientes digitais (redes, jogos, apps, serviços online).
- **Fim da autodeclaração de idade** pra serviços com restrição etária — plataformas precisam **aferir** a idade, não só perguntar.
- Veda coleta excessiva de dados e perfilamento comportamental de menores.
- Empresas com >1 milhão de menores cadastrados precisam publicar relatórios de transparência (irrelevante pra NeuroMãe nos primeiros anos).
- Aplicável a aplicativos de mensagem? **Sim, pela leitura mais segura**, embora o foco maior da lei seja redes sociais públicas. A NeuroMãe se enquadra como "serviço digital com restrição etária (18+)" e está sujeita às obrigações de verificação.

### ⚠️ Decisão crítica pendente — verificação de idade

A `01-onboarding.md` Etapa 2 hoje faz **gate por autodeclaração** ("você tem 18 anos ou mais? sim/não"). Sob o ECA Digital, isso pode ser **insuficiente** pra um serviço com restrição etária formal.

**Caminhos a discutir com advogada:**

1. **Manter autodeclaração + reforço contratual** — a NeuroMãe argumenta que o serviço é pra adultas e que aceita o risco operacional. Frágil sob a nova lei.
2. **Verificação por documento** — pedir foto de RG/CNH no onboarding. Caro de operar, ruim pra conversão, **e contraditório com a regra "não aceitamos imagens"** do `03-trigger-imagem.md`. ❌
3. **Verificação por cadastro pago** (Mercado Pago) — se a usuária paga com cartão dela, a operadora já fez KYC. A GABA confia no fato de "tem cartão emitido em nome dela" como proxy. **Mais alinhado com o ECA Digital sem prejudicar UX.** ✅ Caminho recomendado.
4. **Parceria com provedor de verificação de idade** (ex: Idwall, Unico) — sofisticado, mas custa por verificação. Pra MVP de baixo orçamento, não recomendado.

**Recomendação pra MVP:** caminho 3 — a GABA confia que quem assinou já passou por KYC do Mercado Pago. O gate da Etapa 2 vira **confirmação de termos**, não verificação de idade propriamente. Texto precisa ser ajustado em `01-onboarding.md` depois da consulta jurídica.

---

## 4. Marco Civil da Internet

**Lei nº 12.965, de 23 de abril de 2014.**

📜 Texto oficial: https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2014/lei/l12965.htm

### Artigos relevantes pra GABA

| Artigo | Sobre o quê | Onde se aplica |
|---|---|---|
| Art. 7º, VII | Sigilo das comunicações privadas | `01-onboarding.md` (privacidade no aparelho) |
| Art. 7º, X | Direito à exclusão definitiva dos dados | `03-trigger-imagem.md`, `06-trigger-historico.md` |
| Art. 7º, VI | Informação clara sobre coleta e tratamento | `02-mensagem-fixada.md`, Termos |

---

## 5. Código de Defesa do Consumidor

**Lei nº 8.078, de 11 de setembro de 1990.**

📜 Texto oficial: https://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm

### Artigos relevantes

| Artigo | Sobre o quê | Onde se aplica |
|---|---|---|
| Art. 6º, III | Informação adequada e clara sobre o serviço | `02-mensagem-fixada.md`, Termos |
| Art. 31 | Oferta deve conter informação correta, clara, precisa | Landing page (`/produto`), Termos |
| Art. 39 | Práticas abusivas vedadas | Não fazer venda casada, não enganar |

---

## 6. Ato Médico

**Lei nº 12.842, de 10 de julho de 2013.**

📜 Texto oficial: https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2013/lei/l12842.htm

### Pontos relevantes pra GABA

- **Art. 4º, II e III** — diagnóstico nosológico e prescrição são **privativos de médico**.
- A GABA NUNCA diagnostica, nunca prescreve. Isso é o coração do `04-trigger-clinico.md`.
- Risco se descumprir: exercício ilegal da medicina (crime, art. 282 do Código Penal).

---

## 7. Lei do Exercício Profissional da Psicologia

**Lei nº 4.119, de 27 de agosto de 1962** + regulamentações do CFP.

📜 Texto oficial: https://www.planalto.gov.br/ccivil_03/leis/1950-1969/l4119.htm
🏛️ CFP: https://site.cfp.org.br

### Resoluções CFP relevantes

- **Resolução CFP 11/2018** — atendimento psicológico mediado por tecnologia. A GABA **não faz atendimento psicológico**. Documentar com clareza nos Termos.
- A NeuroMãe pode ser um serviço **complementar** ao psicológico, mas **não substituto**. Linguagem dos Termos precisa deixar isso explícito.

---

## 8. Lei Maria da Penha

**Lei nº 11.340, de 7 de agosto de 2006.**

📜 Texto oficial: https://www.planalto.gov.br/ccivil_03/_ato2004-2006/2006/lei/l11340.htm

Citada em `05-trigger-urgencia.md` (violência contra a usuária).

### Recursos relevantes
- Disque 180 — Central de Atendimento à Mulher
- Casas-abrigo (encaminhamento via 180)
- Medidas protetivas de urgência (não orientadas pela GABA — só direciona pra delegacia / 180)

---

## 9. ANVISA — RDC 222/2018 (e correlatas)

📜 Página oficial: https://www.gov.br/anvisa/pt-br/assuntos/regulamentacao

### Por que importa

A ANVISA regula **dispositivos médicos**, incluindo software como dispositivo médico (SaMD). A GABA **não é** dispositivo médico, mas isso precisa ficar claro:

- Não emite diagnóstico
- Não dá recomendação terapêutica
- Não monitora condição clínica

Documentar nos Termos: "A GABA não é dispositivo médico, não passa por aprovação ANVISA, e não substitui acompanhamento clínico."

---

## Quadro resumo — qual lei sustenta qual mensagem

| Arquivo | Leis principais |
|---|---|
| `01-onboarding.md` § Gate idade | ECA art. 2º, Código Civil art. 5º |
| `01-onboarding.md` § Aceite termos | LGPD art. 7º, I + CDC art. 6º, III |
| `01-onboarding.md` § Privacidade WhatsApp | LGPD art. 6º, VII + Marco Civil art. 7º |
| `01-onboarding.md` § Palavra de acesso | LGPD art. 6º, VII + art. 46 |
| `02-mensagem-fixada.md` | LGPD art. 9º + CDC art. 6º, III + Marco Civil art. 7º |
| `03-trigger-imagem.md` | ECA art. 17 e 18 + LGPD art. 5º, II + art. 14 + Marco Civil art. 7º, X |
| `04-trigger-clinico.md` | Lei 12.842 (Ato Médico) + Lei 4.119 (Psicologia) + Res. CFP 11/2018 + RDC ANVISA |
| `05-trigger-urgencia.md` | ECA art. 13 e 245 + Lei Maria da Penha + LGPD art. 11, II "f" + Res. CFP 11/2018 |
| `06-trigger-historico.md` | LGPD art. 18 + art. 46 |

---

## Checklist final antes de publicar

- [ ] Advogada especializada em LGPD revisou os 9 artigos da Lei 13.709 citados acima
- [ ] Advogada especializada em direito da criança revisou ECA + ECA Digital
- [ ] Profissional de saúde mental revisou `05-trigger-urgencia.md`
- [ ] Decisão tomada sobre dever de notificar (ECA art. 13) — sim/não, e como
- [ ] Termo de Uso público da landing reflete os limites (não é dispositivo médico, não diagnostica, etc.)
- [ ] Política de Privacidade pública da landing reflete o tratamento de dados (incluindo palavra de acesso e descarte de imagens)
- [ ] DPO (Encarregado de Dados) designado e contato publicado — pode ser a própria Tatiana no início, mas precisa estar nomeado formalmente

## Próximos passos sugeridos (fora desta pasta)

1. Contratar consultoria jurídica de LGPD (mesmo que sessão pontual, 4-6h, ~R$ 2-4k).
2. Escrever Termos de Uso e Política de Privacidade públicos pra landing (próxima rodada com Claude).
3. Inscrever-se na ANPD como controlador (gratuito, mas obrigatório acima de certo porte).
4. Criar email `dpo@neuromae.com.br` ou `privacidade@neuromae.com.br` pra solicitações da LGPD.
