# Neuromae Landing — Guia para o Codex

## O que é este projeto

Landing page (site de apresentação e captura) da **GABAIA by NeuroMãe** — assistente de IA via WhatsApp para mães atípicas (TDAH, TEA, dificuldades de aprendizagem).

> **GABAIA** é o nome do produto (a assistente). **NeuroMãe** é a empresa-mãe. O header da landing exibe os dois.

Este repo é **somente a landing pública**. O bot WhatsApp, banco de dados, integração com Mercado Pago e lógica de conversa ficam em um repo separado (`jdutra/neuromae`, read-only para este time).

## Stack

- **React 18** + **TypeScript**
- **Vite 6** (build + dev server)
- **Tailwind CSS 3** (estilização — paleta semântica em `tailwind.config.js`: `cream`, `latte`, `olive`, `terracotta`, `brown`, etc.)
- **Playfair Display** (serifa, headings) + **Inter** (sans, corpo) — via Google Fonts no `index.html`
- **Remotion 4** (preservado em `src/remotion/`, mas não usado na landing atual; acessível via `npm run remotion` para gerar vídeos quando precisar)
- **lucide-react** (ícones — disponível mas não usado no design atual)

## Estrutura

```
src/
  App.tsx                ← composição das seções da landing
  main.tsx               ← entrypoint Vite
  index.css              ← Tailwind base + body com gradiente cream
  lib/
    links.ts             ← constante WA_LINK (link único do WhatsApp)
  components/
    Nav.tsx              ← header sticky com brand "GABAIA / by NeuroMãe"
    Hero.tsx             ← acima da dobra: h1 + 2 CTAs + phone-card de mockup
    Produto.tsx          ← 3 cards numerados (01/02/03)
    Funciona.tsx         ← 4 momentos: Acolhe / Escuta / Organiza / Orienta
    Seguranca.tsx        ← trust-box com tags + preço "7 dias gratuitos"
    Final.tsx            ← CTA final + footer
    MobileSticky.tsx     ← CTA fixo no rodapé em mobile
  remotion/              ← composições Remotion (preservado para uso futuro)
  assets/                ← (vazio — adicione ilustrações aqui se necessário)
public/
  favicon.svg
  logoNM.jpeg
  avatar-cafe.svg        ← brand icon + watermark hero + card "Orienta"
  avatar-acolhe.svg      ← watermark card "Acolhe"
  avatar-escuta.svg      ← watermark card "Escuta"
  avatar-organiza.svg    ← watermark card "Organiza"
index.html               ← shell HTML do Vite (title, meta, fonts)
```

## Comandos

```bash
npm install         # uma vez
npm run dev         # dev server (Vite, http://localhost:5173)
npm run build       # build de produção (tsc + vite build → dist/)
npm run preview     # servir o build localmente
npm run remotion    # abrir Remotion Studio (edição de composições de vídeo)
```

## Regras do produto

- **Público-alvo:** mães brasileiras atípicas (filhos com TDAH, TEA, dislexia, etc.). Tom acolhedor, nunca clínico, nunca "coach motivacional".
- **Português brasileiro** em todo texto público. Sem anglicismos desnecessários.
- **Checkout é sempre externo** (link Mercado Pago via WhatsApp) — a landing NÃO processa pagamento nem coleta cartão. CTA direciona pro fluxo WhatsApp que depois entrega o link MP.
- **Acessibilidade:** contraste WCAG AA (texto `#40352E` em fundo `#F3ECE3`), `alt` em imagens, `aria-hidden` em decorativas.
- **Performance:** landing precisa abrir rápido no celular (maioria do tráfego). Build atual: ~50 kB JS gzip. Evite imagens pesadas; use lazy loading quando couber.

## Sobre o backend (leitura somente)

O repo `jdutra/neuromae` contém:

- Edge Functions do Supabase (bot WhatsApp, PDF de consulta, check-ins diários, etc.)
- Migrations do Postgres
- Integração com Z-API, Codex, Mercado Pago

Você tem **acesso de leitura** a ele apenas pra consulta/entendimento. Qualquer mudança de backend precisa ser proposta por PR lá — mas isso NÃO é escopo deste projeto (a landing).

---

## Setup inicial (primeira vez)

### 1. Clonar o repo (HTTPS — recomendado)

```bash
git clone https://github.com/jdutra/neuromae-landing.git
cd neuromae-landing
npm install
```

### 2. Configurar autenticação para `git push`

Desde **agosto/2021** o GitHub não aceita mais a senha da conta em operações Git. Você precisa de um **Personal Access Token (PAT)**.

**Passo a passo:**

1. Acesse <https://github.com/settings/tokens?type=beta> (logada na sua conta)
2. Clique em **"Generate new token" → "Fine-grained token"**
3. Configure:
   - **Token name:** `neuromae-landing-laptop` (ou o que quiser)
   - **Expiration:** 90 dias
   - **Repository access:** "Only select repositories" → `jdutra/neuromae-landing`
   - **Repository permissions:** `Contents: Read and write`, `Metadata: Read-only`, `Pull requests: Read and write`
4. Clique em **Generate token** e **copie o token** (começa com `github_pat_...`). **Você não vai conseguir ver de novo.**
5. Configure o git pra **salvar a senha** (assim você só digita uma vez):

   ```bash
   git config --global credential.helper store     # macOS / Linux
   # No Windows é automático (manager-core), pular esse passo
   ```

6. Tente o primeiro push numa branch de teste:

   ```bash
   git checkout -b teste-auth
   git commit --allow-empty -m "teste: validar autenticação"
   git push -u origin teste-auth
   ```

   Quando o git pedir:
   - **Username:** seu username do GitHub (ex: `tatianajunco`)
   - **Password:** **cole o token PAT** (não a senha da sua conta)

7. Push funcionou? Apaga a branch de teste:
   ```bash
   git push origin --delete teste-auth
   git checkout main
   git branch -D teste-auth
   ```

A partir daqui, próximos `git push` rodam sem pedir senha.

> **Alternativa via SSH** (mais técnica, opcional): siga <https://docs.github.com/en/authentication/connecting-to-github-with-ssh> e troque o remote com `git remote set-url origin git@github.com:jdutra/neuromae-landing.git`.

---

## Workflow de trabalho

### Cada coisa nova vira uma branch

Nunca commit direto em `main`. Antes de começar a editar:

```bash
git checkout main
git pull origin main                    # pega a versão mais recente
git checkout -b feature/nome-curto      # ou: tati/nome-curto, fix/nome-curto
```

### Push frequente — mesmo WIP

Ao final de cada sessão de trabalho (almoço, jantar, fechar o laptop):

```bash
git add -A
git commit -m "wip: o que você estava fazendo"
git push -u origin <nome-da-branch>
```

> **Regra de ouro:** *"Antes de fechar o laptop, push. Se está vivo só na sua tela, pra equipe não existe."*

### Vercel cria preview automático

Assim que você der `git push -u origin <branch>`:

1. O Vercel detecta a branch nova
2. Em ~1-2 min, cria um **preview URL** tipo `neuromae-landing-git-<branch>-jdutra.vercel.app`
3. O link aparece automaticamente no GitHub (na branch e em comentários de PR)
4. Você manda o link pro Jose ver no celular ANTES de mergear

### Pra mergear em `main`

1. Abra um PR no GitHub: <https://github.com/jdutra/neuromae-landing/compare>
2. **Selecione sua branch** como source, `main` como target
3. **Título curto** (ex: "atualizar texto do hero")
4. **Descrição:** o que mudou + por quê + screenshot se for visual
5. Marca o `@jdutra` como reviewer
6. Quando ele aprovar, **clique em "Merge pull request"**
7. O Vercel detecta o merge em `main` e atualiza o site Production em ~1-2 min
8. Apaga a branch já mergeada (botão "Delete branch" depois do merge)

---

## Erros comuns no `git push`

| Erro | Causa | Fix |
|---|---|---|
| `Authentication failed` / `Permission denied` | Você está usando senha do GitHub. Não funciona mais. | Siga o "Setup inicial > Configurar autenticação" acima e use PAT. |
| `! [rejected] main -> main (non-fast-forward)` | Você tentou push em `main` mas alguém pushou antes. | NÃO use `--force`. Salve sua mudança numa branch nova: `git stash`, `git pull --rebase`, `git checkout -b minha-branch`, `git stash pop`, `git add -A`, `git commit`, `git push -u origin minha-branch`. |
| `fatal: The current branch X has no upstream branch` | É o primeiro push da branch. | `git push -u origin <nome-da-branch>` (com `-u`). |
| `fatal: not a git repository` | Você está no terminal numa pasta que não é o repo. | `cd /caminho/para/neuromae-landing` e tenta de novo. |
| `failed to push some refs to '...'` | Conflito de histórico. | Não force. Pergunta antes — quase sempre dá pra resolver com branch nova. |

---

## Deploy

**Vercel** está conectado via GitHub App nativa (sem `vercel.json`):

- **Production:** push em `main` → deploy automático
- **Preview:** push em qualquer branch → preview URL automático
- **Domínio:** veja Vercel dashboard ou `vercel ls` (configurado pelo dono do repo)

## Coisas para NÃO fazer

- Não mexer no repo `neuromae` (backend) — você não tem permissão de escrita lá mesmo
- Não adicionar dependências pesadas sem conversar — landing precisa ficar leve
- Não fazer `git push --force` (especialmente em `main`)
- Não commitar `.env`, chaves de API, tokens, ou qualquer secret
- Não criar branches fora do padrão — use `feature/nome-curto`, `fix/nome-curto`, ou `<seu-usuario>/nome-curto`
- Não mergear o próprio PR sem revisão do `@jdutra` (mesmo que o GitHub permita tecnicamente)

## Imported Claude Cowork project instructions
