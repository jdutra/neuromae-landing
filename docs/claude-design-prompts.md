# Prompts para Claude Design — Neuromae

Copie o **bloco de contexto de marca** primeiro (uma vez por conversa no Claude Design). Depois use os prompts específicos conforme a tarefa.

---

## 1. Bloco de contexto de marca (cole isto primeiro)

```
 
```

---

## 2. Prompts específicos

### Nova variação de Hero

```
Crie 3 variações de hero section para a landing da Neuromae. Mantenha o gradiente
roxo do bloco de contexto, a headline principal "A parceira que toda mãe
neurodivergente precisava" (com "neurodivergente" em rosa-300), e o mock de
WhatsApp flutuante à direita. Varie o layout: (1) chat à direita com headline à
esquerda, (2) chat embaixo centralizado (atual), (3) split 50/50 com ilustração
abstrata no lugar do chat. Mobile-first, 375px de largura como referência.
```

### Seção nova: preços / planos

```
Desenhe uma seção de planos para a Neuromae. Contexto: o pagamento acontece
externo (Mercado Pago, via WhatsApp) — a landing só apresenta o plano e joga
pro WhatsApp. Plano único, assinatura mensal, com 7 dias grátis. Card central
destacado com o gradiente roxo-rosa, cantos rounded-3xl, shadow forte. Lista
de benefícios com ícones lucide (Check em verde). CTA "Começar grátis pelo
WhatsApp" em botão branco com ícone do WhatsApp verde. Tom acolhedor: "Menos
que um café por dia pra ter alguém do seu lado 24h."
```

### Seção de FAQ

```
Crie uma seção de FAQ pra Neuromae com 6 perguntas em accordion. Fundo branco
com acento roxo-100 no card ativo. Perguntas reais do público: "A Neuromae
substitui a terapia do meu filho?", "Meus dados ficam seguros?", "Funciona se
meu filho ainda não tem laudo?", "Como cancelo?", "Ela atende de madrugada
mesmo?", "Os conselhos são baseados em quê?". Títulos em roxo-700, respostas
em cinza-600, divisor sutil cinza-100 entre itens.
```

### Mockup de feature do bot

```
Crie um mockup de celular (iPhone moderno, moldura fina) mostrando uma
conversa real de WhatsApp com a Neuromae. Interface fiel ao WhatsApp
(header #075E54, fundo #ECE5DD, bolhas do usuário em #DCF8C6 e da Neuromae em
branco). Conteúdo da conversa: mãe escreve "ele teve uma crise enorme na
escola hoje e eu não sei o que fazer 😭" às 08:47. Neuromae responde com
validação + pergunta acolhedora + 2 sugestões práticas em lista numerada.
Mostre 4 a 5 bolhas. Fonte do chat: system. Timestamp e checkmarks duplos.
```

### Post de Instagram (carrossel de 5 slides)

```
Monte um carrossel de 5 slides 1080×1080 pro Instagram da Neuromae sobre
"5 sinais de que seu filho pode ter TDAH (e o que isso significa)". Slide 1:
capa com gradiente roxo e título em font-black. Slides 2–6: um sinal por
slide, ícone lucide grande no topo, título curto, 2 linhas de explicação
acolhedora. Último slide: CTA "Converse com a Neuromae no WhatsApp" com
botão. Respeite o tom do bloco de contexto — nada de "você SABIA?!" ou
linguagem de click-bait.
```

### Email de onboarding (primeira mensagem depois do cadastro)

```
Desenhe um email responsivo de boas-vindas da Neuromae. Header com gradiente
roxo e logo. Corpo branco, tipografia Inter, largura máxima 600px. Conteúdo:
saudação calorosa pelo primeiro nome, 3 coisas que a Neuromae pode fazer
(com ícones), botão CTA roxo "Abrir conversa no WhatsApp" centralizado.
Rodapé discreto com logo pequena, aviso LGPD e link de descadastro. Tom do
texto do bloco de contexto.
```

---

## 3. Dicas de uso no Claude Design

- Sempre peça **viewBox/tamanho explícito** (ex: "mobile 375×812", "desktop 1440×900", "Instagram 1080×1080") — senão ele chuta.
- Para refinar, **aponte o elemento** com comentário inline em vez de descrever ("o CTA precisa ficar mais alto e o ícone maior" > "melhore o botão").
- Quando gostar de uma versão, peça **"exporta como JSX + Tailwind"** — ele devolve código pronto pra colar em `src/components/`.
- Para manter consistência entre sessões, cole de novo o bloco de contexto no início. Se você tiver conta Team/Enterprise, o onboarding de style guide faz isso automaticamente a partir deste repo.
