# GABAIA — Pacote final do logo

Identidade visual do **GABAIA** (assistente de IA via WhatsApp da NeuroMãe), versão **A.4 Delicada**.

Conceito: estilização do **receptor GABA-A** em vista de topo, com 5 subunidades em anel (composição real 2α + 2β + 1γ) e canal central de cloreto. Em paralelo, há um asset de marketing (`gabaia-receptor-3d-hero.svg`) com sensação 3D pra usar como hero da landing e posts educativos. Esse asset NÃO é o logo, é ilustração de apoio.

## Mascote (GABA)

A GABA — personagem da marca — fica fora deste pacote. Ela é fornecida como **ativo rasterizado** (PNG/JPG) gerado por IA generativa de imagem, com qualidade ilustrativa que vetor SVG matemático não atinge. Use os PNGs do brand book diretamente em landing, Instagram, slides e posts. Para variações futuras (Gaba feliz, dormindo, abraçando), use a mesma IA generativa que produziu a referência. Para SVG editável da Gaba (caso precise para pelúcia/jogo), contratar ilustradora freelancer no Workana ou 99Freelas é o caminho — fica entre R$ 200-500.

## Paleta

```
Rosa salmão (α)          #D8A7A1   suavizada como #E0B5B0
Sage (β)                 #A8B5A2   suavizada como #B5C0AE
Bege (γ destaque)        #C9B7A6   suavizada como #D5C4B4
Creme (fundo)            #EFE7DD
Marrom escuro (texto)    #6B5547   suavizado como #8B7565 no centro
```

## Tipografia

- **Wordmark**: Playfair Display Regular
- **Tagline e UI**: Inter Regular/Light

Para registro INPI, abrir o SVG no Inkscape (gratuito) e usar **Caminho > Objeto para Caminho** (Ctrl+Shift+C) para outline o texto.

## Arquivos e onde usar

### SVGs editáveis (vetor — escala infinita)

| Arquivo | Onde usar |
|---|---|
| `gabaia-symbol-full.svg` | Símbolo completo com pontinhos satélites e anel decorativo. Peças amplas: hero da landing, papel timbrado, posts grandes. |
| `gabaia-symbol-icon.svg` | Versão simplificada (sem satélites) pra escala pequena: favicon, ícone de app, qualquer coisa abaixo de 100px. |
| `gabaia-wordmark.svg` | Só o texto "GABAIA" + tagline. Pra rodapés, assinatura curta. |
| `gabaia-lockup-horizontal.svg` | **Versão padrão**. Símbolo + wordmark lado a lado. Cabeçalhos, e-mails, papel timbrado. |
| `gabaia-lockup-vertical.svg` | Símbolo em cima, wordmark embaixo. Instagram avatar, posts quadrados. |
| `gabaia-mono.svg` | Tudo em uma cor (#6B5547). Pra papel timbrado de fax, gravação a laser, registro INPI alternativo. |
| `gabaia-whatsapp-icon.svg` | Símbolo simplificado em fundo circular creme — pronto pra WhatsApp Business. |
| `gabaia-receptor-3d-hero.svg` | **Asset de marketing** com gradientes e profundidade. Hero da landing, slides de pitch. NÃO É O LOGO. |

### PNGs renderizados

| Arquivo | Tamanho | Onde usar |
|---|---|---|
| `gabaia-favicon-32.png` | 32×32 | Aba do navegador. |
| `gabaia-favicon-64.png` | 64×64 | Bookmark, retina. |
| `gabaia-whatsapp-192.png` | 192×192 | Foto de perfil WhatsApp Business. |
| `gabaia-whatsapp-640.png` | 640×640 | WhatsApp em alta qualidade. |
| `gabaia-symbol-2000-white.png` | 2000×2000 | **Registro INPI** marca figurativa. |
| `gabaia-symbol-2000-transp.png` | 2000×2000 | Símbolo em fundo transparente. |
| `gabaia-lockup-h-3000-white.png` | 4800×960 | **Registro INPI** marca mista. |
| `gabaia-lockup-h-3000-transp.png` | 4800×960 | Lockup horizontal fundo transparente. |
| `gabaia-lockup-v-1500-white.png` | 1750×1200 | Lockup vertical fundo branco. |
| `gabaia-lockup-v-1500-transp.png` | 1750×1200 | Lockup vertical fundo transparente. |
| `gabaia-mono-3000-white.png` | 4800×960 | Versão monocromática alta res. |
| `gabaia-wordmark-3200-white.png` | 3200×800 | Só wordmark, alta res. |
| `gabaia-receptor-3d-hero-cream.png` | 1600×1200 | Hero da landing fundo creme. |
| `gabaia-receptor-3d-hero-transp.png` | 1600×1200 | Hero da landing fundo transparente. |

## Para o registro INPI (classes 9 e 42)

1. **Busca de anterioridade** em https://busca.inpi.gov.br — procure "GABAIA", "GABA IA", "gabaia" como nominativa e figurativa.
2. **Marca mista** (símbolo + nome): use `gabaia-lockup-h-3000-white.png`.
3. **Marca figurativa** (só símbolo): use `gabaia-symbol-2000-white.png`.
4. **Outline o texto** dos SVGs antes de subir: Inkscape > Caminho > Objeto para Caminho.

## Não fazer

- Não esticar/distorcer o logo — manter aspect ratio.
- Não trocar cores fora da paleta oficial.
- Não usar `gabaia-receptor-3d-hero.svg` como logo — é asset de marketing.
- Para fundos escuros, trocar #6B5547 por #EFE7DD na versão mono.

## IMPORTANTE — controle de versão

Os arquivos desta pasta são **untracked no git**. Se rodar `git clean -fd`, eles serão removidos. Para preservar:

```bash
git add branding/final/
git commit -m "branding: pacote final do logo GABAIA (A.4 Delicada)"
```

## Conceitos descartados

Em `branding/conceitos/` ficam todos os esboços do processo (versões A.0 a A.6, conceitos B e C, vistas laterais). Histórico — pode apagar quando quiser.
