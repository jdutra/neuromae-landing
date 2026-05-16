# RIPD — Relatório de Impacto à Proteção de Dados Pessoais

**Produto / serviço avaliado:** GABA — assistente de IA conversacional via WhatsApp da NeuroMãe
**Versão [VERSÃO]** · **Data de elaboração: [DATA DE PUBLICAÇÃO]**
**Status:** documento interno · uso restrito · arquivar em drive privado

> Este RIPD é elaborado conforme o art. 5º, XVII e art. 38 da Lei nº 13.709/2018 (LGPD) e segue a estrutura recomendada pela Autoridade Nacional de Proteção de Dados (ANPD) no documento "Modelo de Relatório de Impacto à Proteção de Dados Pessoais — RIPD". É de uso interno — **não publicar**.

---

## 1. Sumário executivo

A GABA é uma assistente conversacional de inteligência artificial, operada pela NeuroMãe via WhatsApp, voltada para **acolhimento, organização e apoio informacional** de mães e cuidadoras de crianças neurodivergentes. A operação trata **dados pessoais sensíveis** (Art. 5º, II da LGPD) e **dados pessoais de criança** (Art. 14 da LGPD), o que classifica a operação como de **risco elevado** e justifica a elaboração deste RIPD antes do lançamento público.

Os principais riscos identificados são: (a) vazamento ou acesso indevido a dados sensíveis de saúde; (b) exposição involuntária de dados de crianças; (c) interpretação clínica equivocada por parte da IA; (d) dependência emocional excessiva da usuária; (e) acesso ao dispositivo da usuária por terceiros (familiares, parceiros). Cada risco foi mapeado, classificado em probabilidade e impacto, e mitigado por uma combinação de medidas técnicas, organizacionais e contratuais.

A conclusão é que, **com as medidas mitigatórias aplicadas, o risco residual é aceitável para o estágio de MVP/beta fechado**. Algumas mitigações têm execução contínua e exigem reavaliação trimestral. A operação plena com cobrança pública ampla está condicionada à revisão jurídica especializada (LGPD + IA + infância), em alinhamento com a Prioridade 1 do plano interno.

---

## 2. Identificação do agente de tratamento

| Campo | Valor |
|---|---|
| **Controlador** | [RAZÃO SOCIAL] |
| **Nome fantasia** | NeuroMãe |
| **CNPJ / CPF** | [CNPJ OU CPF] |
| **Endereço** | [ENDEREÇO COMPLETO] |
| **Email de contato** | [EMAIL CONTATO GERAL] |
| **Setor de atividade** | Tecnologia / Saúde digital (apoio informacional, não-clínico) |

## 3. Identificação do encarregado (DPO)

| Campo | Valor |
|---|---|
| **Nome** | [NOME ENCARREGADO] |
| **Email** | [EMAIL ENCARREGADO] |
| **Vínculo** | Interno (fundadora atuando como encarregada na Fase 1 — MVP/beta. Avaliação para contratação de encarregado dedicado prevista para a Fase 2, após início da cobrança pública) |
| **Forma de comunicação com titulares** | Email, conversa direta com a GABA com encaminhamento ao encarregado, e link nos documentos públicos (Termo, Política) |

## 4. Descrição do tratamento

### 4.1. Finalidades

1. Acolhimento conversacional e apoio informacional à usuária (mãe ou responsável adulto).
2. Organização da rotina familiar e da memória de cuidados da criança.
3. Geração de resumos privados solicitados pela usuária (notas, organização para consultas, leitura assistida de documentos).
4. Operação da assinatura paga (cobrança, emissão de nota, atendimento).
5. Segurança da plataforma, prevenção a fraude e cumprimento de obrigações legais.

### 4.2. Categorias de dados tratados

| Categoria | Exemplos | Sensibilidade |
|---|---|---|
| Identificação básica da titular adulta | Nome ou apelido, número de WhatsApp, email | Comum |
| Conteúdo conversacional | Texto das mensagens, contexto compartilhado | Comum (mas pode conter dado sensível) |
| Dados de saúde | Suspeita ou diagnóstico (próprio ou da criança), descrição de sintomas, menção a medicamentos | **Sensível** (Art. 5º, II) |
| Dados de criança | Faixa etária, gênero, rotina, observações escolares, dificuldades, suspeita/diagnóstico (sensível) | **Especial** (Art. 14) — frequentemente também sensível |
| Documentos enviados pela usuária | Laudo, avaliação, relatório (processamento temporário) | **Sensível**, com fluxo de descarte imediato |
| Palavra-chave privada | Apenas hash criptográfico | Credencial — armazenamento seguro |
| Dados de pagamento | Nome, valor, status (sem número de cartão) | Financeiro |
| Dados técnicos | Logs de acesso, IP, identificador do WhatsApp, cookies da landing | Comum |

### 4.3. Fluxo de tratamento (alto nível)

```
Mãe / responsável (titular adulta)
        │
        ▼
WhatsApp (Meta / Z-API)  ←── canal de mensagens
        │
        ▼
NeuroMãe — função serverless (Supabase Edge Functions)
        │
        ├──→ Anthropic (modelo Claude) — geração de resposta
        │
        ├──→ Banco de dados (Supabase Postgres) — resumos curtos + cadastro
        │
        └──→ Mercado Pago — cobrança (apenas dados financeiros mínimos)

Documentos enviados → OCR temporário → resumo → DESCARTE IMEDIATO
```

### 4.4. Bases legais

| Tratamento | Base legal (LGPD) |
|---|---|
| Execução do serviço da GABA | Art. 7º, V — execução de contrato |
| Dado pessoal sensível (saúde) | Art. 11, I — consentimento específico e destacado |
| Dado pessoal de criança | Art. 14, §1º — consentimento específico de um dos pais ou responsável, no melhor interesse da criança |
| Cobrança e nota fiscal | Art. 7º, II — cumprimento de obrigação legal |
| Logs de acesso | Art. 7º, II — Marco Civil da Internet, Art. 15 |
| Segurança da plataforma | Art. 7º, IX — legítimo interesse |

## 5. Necessidade e proporcionalidade

A NeuroMãe adota o princípio da **coleta mínima** (Art. 6º, III da LGPD) e da **finalidade** (Art. 6º, I).

- O serviço **não funciona** sem coletar nome ou apelido + número de WhatsApp — esses são os dados mínimos para a conversa.
- O serviço **não exige** CPF da mãe, RG, endereço, nome completo da criança, plano de saúde, foto, ou biometria — esses dados são **proibidos** na operação.
- Documentos enviados pela usuária são tratados em fluxo **estritamente temporário**, com descarte imediato do original e retenção apenas de resumo textual minimalista.
- Conversas ativas têm retenção limitada a 90 dias; resumos só são mantidos até solicitação de exclusão pela usuária.
- Logs técnicos seguem o mínimo legal (6 meses, Marco Civil).

A proporcionalidade está demonstrada: a coleta é o **mínimo necessário** para entregar o serviço prometido (acolhimento + organização), e o tempo de retenção é o **menor possível** sem prejudicar a continuidade contextual da conversa.

## 6. Partes interessadas

- **Titulares dos dados:** mães, cuidadoras (titular adulta da conta) e crianças (titular indireta).
- **Equipe operacional:** fundadora, eventuais colaboradores autorizados (desenvolvimento, atendimento), submetidos a Termo de Confidencialidade.
- **Operadores / subprocessadores:** Anthropic (modelo Claude), Meta/Z-API (WhatsApp), Mercado Pago, Supabase, Vercel.
- **Autoridades:** ANPD, Conselho Tutelar, Ministério Público, autoridade policial (em casos previstos no ECA Art. 13).
- **Stakeholders externos:** especialistas em saúde mental, psicologia infantil, direito da infância (consultados informalmente antes do lançamento).

## 7. Ciclo de vida dos dados

| Fase | Descrição | Duração |
|---|---|---|
| Coleta | Mensagens enviadas pela usuária no WhatsApp da GABA | Contínua durante uso ativo |
| Tratamento | Geração de resposta pela IA, persistência de resumo curto, vinculação ao identificador da usuária | Em tempo real |
| Armazenamento | Banco criptografado em repouso, separação de dados sensíveis | Conforme tabela de retenção |
| Compartilhamento | Subprocessadores listados, sob contrato | Apenas o necessário, em tempo real |
| Eliminação | Descarte automático ao final do prazo de retenção; exclusão imediata mediante solicitação da titular | Conforme tabela de retenção |

A tabela de retenção completa está na Política de Privacidade pública e é vinculante para a operação.

## 8. Identificação de riscos

| ID | Risco | Origem |
|---|---|---|
| R1 | Acesso indevido ao banco de dados (vazamento) | Vulnerabilidade técnica, credencial comprometida |
| R2 | Acesso interno por curiosidade (colaborador) | Falha de controle de acesso, falta de auditoria |
| R3 | Compartilhamento do aparelho da usuária com terceiro (parceiro, familiar) | Risco externo, fora do controle direto da NeuroMãe |
| R4 | Interpretação clínica equivocada por parte da IA | Limitação inerente à tecnologia |
| R5 | Dependência emocional da usuária em relação à GABA | Limitação inerente ao formato conversacional |
| R6 | Vazamento via subprocessador (Anthropic, Meta, Supabase) | Operador externo |
| R7 | Coleta excessiva acidental (a GABA pedindo dado proibido) | Falha no prompt / treinamento do modelo |
| R8 | Exposição de dados de criança em prints usados internamente ou em marketing | Falha de política interna |
| R9 | Tratamento de dado sensível sem consentimento (gatilho falhou) | Bug no fluxo de consentimento |
| R10 | Identificação indireta da criança via dados agregados (rotina + escola + idade + cidade) | Risco de reidentificação |
| R11 | Inferência emocional automática inadequada (a IA "diagnosticando" emoção) | Limitação inerente / falha de prompt |
| R12 | Persistência indevida de documento original (não descarte) | Bug técnico no pipeline |
| R13 | Resposta inadequada a sinal de crise psicológica aguda | Limitação da IA + falha de fluxo de redirecionamento |
| R14 | Indício de violência/negligência contra a criança não tratado adequadamente | Falha de processo interno |
| R15 | Atraso ou omissão na resposta a solicitação de direito do titular (Art. 18) | Falha operacional |

## 9. Análise de riscos (probabilidade × impacto)

Escala: 1 (baixa/o) — 2 (média/o) — 3 (alta/o). Risco final = probabilidade × impacto, com classificação em **baixo (1-2)**, **médio (3-4)** e **alto (6-9)**.

| ID | Probabilidade | Impacto | Risco bruto | Classificação |
|---|---:|---:|---:|---|
| R1 | 2 | 3 | 6 | Alto |
| R2 | 2 | 3 | 6 | Alto |
| R3 | 3 | 2 | 6 | Alto |
| R4 | 3 | 2 | 6 | Alto |
| R5 | 2 | 2 | 4 | Médio |
| R6 | 1 | 3 | 3 | Médio |
| R7 | 2 | 2 | 4 | Médio |
| R8 | 2 | 3 | 6 | Alto |
| R9 | 2 | 3 | 6 | Alto |
| R10 | 1 | 3 | 3 | Médio |
| R11 | 2 | 2 | 4 | Médio |
| R12 | 1 | 3 | 3 | Médio |
| R13 | 2 | 3 | 6 | Alto |
| R14 | 1 | 3 | 3 | Médio |
| R15 | 2 | 2 | 4 | Médio |

## 10. Medidas mitigatórias

### Para R1 — Vazamento por acesso indevido ao banco
- Criptografia em repouso para dados sensíveis (AES-256 ou padrão equivalente).
- Criptografia em trânsito (TLS 1.2+).
- Credenciais em cofre (secrets manager), com rotação periódica.
- Princípio de menor privilégio em todas as conexões.
- Logs de auditoria de acesso ao banco.

### Para R2 — Acesso interno por curiosidade
- Termo de Confidencialidade obrigatório para qualquer pessoa com acesso.
- Política Interna da Equipe explicitamente proibindo acesso por curiosidade, com sanção de demissão / encerramento de contrato.
- Logs de cada consulta ao banco, com revisão amostral mensal.
- Treinamento de privacidade obrigatório no onboarding de cada colaborador.

### Para R3 — Compartilhamento do aparelho
- Palavra-chave privada como camada adicional de proteção para resumos sensíveis.
- Educação ativa da usuária (mensagens periódicas da GABA reforçando: "esse celular é seu? alguém mais lê?").
- Modo "ocultar conversa" sob solicitação.
- Recomendação explícita de bloqueio biométrico do celular.

### Para R4 — Interpretação clínica equivocada
- Limites duros no prompt do modelo: **não diagnosticar, não prescrever, não interpretar clinicamente**.
- Mensagens fixas de redirecionamento profissional em qualquer pergunta clínica.
- Avisos repetidos no Termo e nos consentimentos.
- Revisão periódica de logs de conversação (amostragem) para detecção de drift do modelo.

### Para R5 — Dependência emocional
- Mensagens periódicas reforçando o limite da IA ("eu não substituo apoio humano").
- Em sinais de uso excessivo / dependência, mensagem ativa sugerindo busca por profissional habilitado e rede de apoio humana.
- **Proibido** no prompt: "estou monitorando você", "estarei sempre aqui", "você pode contar só comigo".

### Para R6 — Vazamento via subprocessador
- Apenas subprocessadores com cláusula contratual de proteção de dados (DPA).
- Auditoria de termos e certificações dos subprocessadores antes de adoção.
- Para Anthropic e Meta: configuração de "no training" / "data not used for model training" quando disponível.
- Substituição de subprocessador em caso de incidente grave.

### Para R7 — Coleta excessiva acidental
- Lista de dados proibidos codificada no prompt do modelo.
- Filtro pós-resposta verificando se a IA pediu dado proibido (CPF da criança, RG, etc.).
- Treinamento contínuo do prompt.

### Para R8 — Prints internos / em marketing
- **Proibição absoluta** de uso de conversa real identificável em marketing — Política Interna da Equipe.
- Toda peça de marketing usa exemplos sintéticos ou conversas autorizadas explicitamente por escrito.
- Sanção administrativa interna em caso de violação.

### Para R9 — Tratamento sensível sem consentimento
- Verificação técnica: cada interação com classificação "saúde" exige flag de consentimento na base. Sem flag, a operação é bloqueada e o consentimento é re-solicitado.
- Testes automatizados regulares do fluxo de consentimento.

### Para R10 — Reidentificação
- Dados de criança coletados em granularidade baixa (faixa etária, não data de nascimento; gênero binário com opção de não informar; sem CEP nem escola por nome).
- Anonimização agressiva em métricas internas (agregação por faixas amplas).
- Política explícita de não cruzar dados para perfilamento.

### Para R11 — Inferência emocional inadequada
- Prompt explícito: a GABA **não** diz frases do tipo "vejo que você está com X emoção" sem que a usuária tenha nomeado a emoção primeiro.
- Reflexo de escuta limitado: a GABA repete o que a usuária disse, não infere o que ela "está sentindo por baixo".

### Para R12 — Persistência indevida de documento original
- Pipeline com descarte automático no final do processamento (TTL ≤ 5 minutos no storage temporário).
- Teste automatizado diário verificando ausência de documentos no storage além do TTL.
- Auditoria mensal manual.

### Para R13 — Resposta inadequada a crise aguda
- Detector de palavras-chave de crise no prompt (suicídio, autoagressão, violência iminente).
- Resposta fixa de redirecionamento: CVV 188, SAMU 192, Disque 100, Conselho Tutelar.
- Não aprofundar conversa de crise — interromper acolhimento "operacional" e direcionar.
- Revisão do fluxo por psicóloga clínica antes do lançamento público amplo (Prioridade 2 do plano interno).

### Para R14 — Indício de violência contra criança
- Política Interna define protocolo: identificação → registro interno → consulta ao encarregado e à fundadora → avaliação caso a caso → comunicação a Conselho Tutelar / autoridade competente, conforme art. 13 do ECA.
- Treinamento da equipe operacional para identificar sinais.

### Para R15 — Atraso em direito do titular
- SLA interno de 15 dias úteis (limite legal LGPD).
- Solicitações registradas em sistema com alerta automático ao se aproximar do prazo.
- Encarregado revisa fila semanalmente.

## 11. Risco residual

Aplicadas as medidas acima, o risco residual estimado é:

| ID | Risco bruto | Risco residual | Aceito? |
|---|---|---|---|
| R1 | Alto | Baixo | Sim |
| R2 | Alto | Baixo | Sim |
| R3 | Alto | Médio | Sim, com educação contínua da usuária |
| R4 | Alto | Médio | Sim, mitigado por avisos e direcionamento |
| R5 | Médio | Baixo | Sim |
| R6 | Médio | Médio | Sim, monitorar mudanças contratuais dos subprocessadores |
| R7 | Médio | Baixo | Sim |
| R8 | Alto | Baixo | Sim |
| R9 | Alto | Baixo | Sim |
| R10 | Médio | Baixo | Sim |
| R11 | Médio | Baixo | Sim |
| R12 | Médio | Baixo | Sim |
| R13 | Alto | Médio | **Condicional** — revisão por psicóloga clínica antes do público amplo |
| R14 | Médio | Médio | Sim |
| R15 | Médio | Baixo | Sim |

**Riscos altos remanescentes:** nenhum, após mitigação.
**Riscos médios remanescentes:** R3, R4, R6, R13, R14 — aceitos com plano de revisão contínua.

## 12. Conclusão

A operação da GABA, na configuração descrita, é **viável do ponto de vista de proteção de dados**, desde que:

a. todas as medidas mitigatórias da seção 10 estejam efetivamente implementadas antes do início público;
b. o fluxo de crise (R13) seja revisado por psicóloga clínica especializada antes do lançamento amplo;
c. este RIPD seja **reavaliado a cada trimestre** ou imediatamente após qualquer alteração relevante (novo subprocessador, nova finalidade, novo tipo de dado, novo público);
d. o registro de incidentes e o atendimento a direitos dos titulares sejam auditáveis em qualquer momento;
e. a revisão jurídica especializada da Prioridade 1 esteja concluída antes da cobrança pública ampla.

## 13. Histórico de revisões

| Versão | Data | Responsável | Alterações |
|---|---|---|---|
| 1.0 (rascunho) | [DATA DE PUBLICAÇÃO] | [NOME ENCARREGADO] | Versão inicial — pré-lançamento MVP/beta. |

---

*Documento interno. Arquivar em drive privado, com acesso restrito a: fundadora, encarregado de dados, advogado(a) responsável, eventuais consultores sob NDA.*
