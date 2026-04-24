# Neuromae Landing — Guia para o Claude Code

## O que é este projeto

Landing page (site de apresentação e captura) da **Neuromae** — assistente de IA via WhatsApp para mães de crianças neurodivergentes (TDAH, TEA, dificuldades de aprendizagem).

Este repo é **somente a landing pública**. O bot WhatsApp, banco de dados, integração com Mercado Pago e lógica de conversa ficam em um repo separado (`jdutra/neuromae`, read-only para este time).

## Stack

- **React 18** + **TypeScript**
- **Vite 6** (build + dev server)
- **Tailwind CSS 3** (estilização)
- **Remotion 4** (animações/vídeos declarativos — usado em `src/remotion/`)
- **lucide-react** (ícones)

## Estrutura

```
src/
  App.tsx               ← composição das seções da landing
  main.tsx              ← entrypoint Vite
  index.css             ← Tailwind base
  components/
    Hero.tsx            ← seção hero / acima da dobra
    Problems.tsx        ← problemas que a Neuromae resolve
    HowItWorks.tsx      ← como o bot funciona
    VideoSection.tsx    ← seção de vídeo/demo
    Testimonials.tsx    ← depoimentos
    CTA.tsx             ← call-to-action + Footer (ambos exportados daqui)
  remotion/             ← composições Remotion (animações)
  assets/               ← imagens, ilustrações
public/
  favicon.svg
  logoNM.jpeg
index.html              ← shell HTML do Vite
```

## Comandos

```bash
npm install         # uma vez
npm run dev         # dev server (Vite)
npm run build       # build de produção (tsc + vite build → dist/)
npm run preview     # servir o build localmente
npm run remotion    # abrir Remotion Studio (edição de composições)
```

## Regras do produto

- **Público-alvo:** mães brasileiras de crianças neurodivergentes. Tom acolhedor, nunca clínico, nunca "coach motivacional".
- **Português brasileiro** em todo texto público. Sem anglicismos desnecessários.
- **Checkout é sempre externo** (link Mercado Pago) — a landing NÃO processa pagamento nem coleta cartão. CTA direciona pro fluxo WhatsApp que depois entrega o link MP.
- **Acessibilidade:** contraste suficiente, alt em imagens, aria-labels em ícones interativos.
- **Performance:** landing deve abrir rápido no celular (maioria do tráfego). Evite imagens não otimizadas; use lazy loading quando couber.

## Sobre o backend (leitura somente)

O repo `jdutra/neuromae` contém:
- Edge Functions do Supabase (bot WhatsApp, PDF de consulta, check-ins diários, etc.)
- Migrations do Postgres
- Integração com Z-API, Claude, Mercado Pago

Você tem **acesso de leitura** a ele apenas pra consulta/entendimento. Qualquer mudança de backend precisa ser proposta por PR lá — mas isso NÃO é escopo deste projeto (a landing).

## Fluxo de trabalho sugerido

1. Rode `npm run dev` e edite componentes com o dev server aberto (hot reload)
2. Commits diretos em `main` **não são permitidos** — abra Pull Request
3. Cada PR deve ter: título curto, descrição do que muda, e screenshot se for visual
4. O merge é aprovado pelo dono do repo (`@jdutra`)

## Deploy

*Ainda não configurado neste repo.* Quando for configurado (provavelmente Vercel ou Netlify), este bloco será atualizado.

## Coisas para NÃO fazer

- Não mexer no repo `neuromae` (backend) — você não tem permissão de escrita lá mesmo
- Não adicionar dependências pesadas sem conversar — landing precisa ficar leve
- Não fazer `git push --force` em `main`
- Não commitar `.env`, chaves de API, ou qualquer secret
- Não criar branches fora do padrão (use `feature/nome-curto` ou `fix/nome-curto`)
