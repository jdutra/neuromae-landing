# Prompt pra ChatGPT — Logo unificada NeuroMãe + ícone GABA WhatsApp

Esse arquivo tem o prompt pronto pra você colar no ChatGPT depois de anexar 2 imagens. Sem as imagens, o resultado fica genérico — então o passo zero é importante.

---

## Passo 0 — Preparar os anexos

ChatGPT não lê SVG direto. Faça isso antes:

1. **`public/gaba-cafe.png`** — já existe no projeto, pode subir direto.
2. **`logo-neuromae-transparente.svg`** — precisa virar PNG. Caminho mais simples:
   - Abre o SVG no Chrome (arrasta o arquivo pra uma aba)
   - `Cmd+S` → salva como "Página da Web, completa" — ou
   - Usa <https://cloudconvert.com/svg-to-png> (5 segundos, sem cadastro)
   - Resultado: `logo-neuromae.png` em ~1024×1024

Os dois PNGs vão como anexos no chat com o ChatGPT.

---

## Passo 1 — Cole esse texto no ChatGPT (depois de anexar as 2 imagens)

```
Anexei duas imagens. Quero que você crie um símbolo gráfico novo baseado em ambas — um único ícone que vai funcionar simultaneamente como:

• Foto de perfil da GABA no WhatsApp Business (precisa ser legível dentro de um círculo de 192×192 px)
• Logo definitiva da NeuroMãe pra usar em landing page, redes sociais e materiais impressos

O que tem em cada anexo:

ANEXO 1 (gaba-cafe.png) — É a GABA, personagem da assistente. Um cérebro acolhedor segurando uma xícara de café. É o "rosto" simpático da marca.

ANEXO 2 (logo-neuromae.png) — É o símbolo gráfico da NeuroMãe (a marca-mãe). Estilo orgânico desenhado à mão, paleta sage/terracota/cremes.

DIRETRIZES VISUAIS:

• Estilo: flat, ilustrado, sem texturas, sem gradientes complexos. Pensa em como mascotes do Headspace, Calm ou apps de bem-estar funcionam em ícones pequenos — silhueta forte e poucas cores.
• Paleta (limitada e fiel ao Anexo 2):
   – Sage #BAC3AF (verde acinzentado)
   – Taupe #C1BBAB (bege quente)
   – Terracota suave #E7ACA5 (rosa-coral)
   – Off-white #F6F6F6 (papel)
   – Marrom escuro #5F3423 (só pra contornos quando precisar)
• Forma fechada, contida — composta pra entrar bem num círculo, sem elementos saindo das bordas.
• Sem texto ou letras na imagem. Só elementos gráficos.
• Mesmo nível de leitura num círculo claro E num círculo escuro.

COMO INTEGRAR GABA + NEUROMÃE NUM SÍMBOLO ÚNICO:

A GABA (cérebro + café) é o foco principal — visível e reconhecível mesmo em pequeno.
O símbolo da NeuroMãe (Anexo 2) entra de forma sutil — pode ser:
• Como base/abraço atrás da GABA
• Como detalhe do contorno do cérebro
• Como halo/auréola
• Outra abordagem que você considerar mais elegante

Você decide qual integração funciona melhor visualmente.

SIMPLIFICAÇÕES IMPORTANTES vs Anexo 1 (a GABA atual tem detalhe demais pra ícone):

• Reduzir detalhes internos do cérebro — só a silhueta + 1 ou 2 curvas identificadoras
• Xícara: forma simples com 1 fio de vapor (no máximo 3 linhas)
• Rosto: 2 olhinhos pequenos + sorriso curto, nada além disso
• Cores chapadas — no máximo 2 níveis de tom por elemento (ex: claro + sombra leve)
• Sem sombras realistas, sem brilhos especulares

QUERO 4 VARIAÇÕES NESTE PRIMEIRO PASSO:

1. Versão padrão — fundo transparente, 1024×1024 PNG
2. Mesma versão dentro de um círculo verde escuro #1F2C34 (simular WhatsApp dark mode)
3. Mesma versão dentro de um círculo cream #FFF8F1 (simular WhatsApp light mode)
4. Versão "minimalista extrema" — testar quão simples dá pra ir sem perder a identidade

Depois que eu escolher uma das variações, vou te pedir o equivalente em vetor SVG limpo pra adaptação final.
```

---

## Passo 2 — Iteração esperada

ChatGPT (com DALL-E 3 ou GPT-Image-1) costuma errar uma ou duas tentativas combinando duas referências específicas. Se a primeira leva não acertar:

- **Se ficar parecido demais só com a GABA** → "A integração com o símbolo do Anexo 2 ficou invisível. Faz outra rodada onde o símbolo NeuroMãe apareça mais claramente — como abraço atrás, ou como halo sage atrás do cérebro."
- **Se ficar com detalhe demais** → "Os detalhes ainda estão fortes. Reduz mais — vai pra ~5 cores totais, sem nenhuma textura, traços bem grossos."
- **Se a paleta sair errada** → "As cores ficaram saturadas demais. Volta pra paleta mais dessaturada do Anexo 2 — sage acinzentado, não verde brilhante."

## Passo 3 — Depois que você escolher

Quando tiver a versão final em PNG, me avisa que eu:

1. Salvo o arquivo em `public/gaba-icon.png` (ou nome que decidirmos)
2. Substituo nas referências da landing (Nav, Hero, favicon, mockup do WhatsApp)
3. Atualizo o `<title>` e meta tags se precisar

Se você conseguir o SVG limpo pelo ChatGPT (ou converter depois), melhor ainda — escala perfeito em qualquer tamanho.
