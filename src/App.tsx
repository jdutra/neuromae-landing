import { useEffect, useRef, useState } from "react";

/* ════════════════════════════════════════════════════════════════════════
   GABAIA / NeuroMãe — landing v2
   Port 1:1 do v1_chat_interativo_v2.html (PR #4 da Tati) pra React.
   CSS canônico vive em src/index.css — este componente apenas renderiza
   os mesmos className do HTML original e fia a lógica dinâmica via hooks.

   Fluxos dinâmicos:
   1. Time-of-day → seta classe `tod-day`/`tod-night` no <body> + caption
   2. Hero chat tree (GABA conversa interativa) — streaming, mascote rotativo,
      input livre que abre WhatsApp pré-preenchido, intersection observer
   3. Produto-demo iPhone WhatsApp (4 cenários trocáveis, replay, iOS clock)
   ════════════════════════════════════════════════════════════════════════ */

const WA_BASE = "https://wa.me/5543988264917";

const MASCOT_PATHS: Record<string, string> = {
  cafe: "/gaba-cafe.png",
  respira: "/gaba-respira.png",
  acolhe: "/gaba-acolhe.png",
  escuta: "/gaba-escuta.png",
  organiza: "/gaba-organiza.png",
};
const AVATAR_DEFAULT = "/icon-gaba-coffe.svg";

interface ConvNode {
  mascot?: string;
  bot: string[];
  chips?: { text: string; next: string; mascot?: string }[];
  cta?: { line: string; contextLabel?: string; whatsappText: string };
}

const heroConv: Record<string, ConvNode> = {
  start: {
    mascot: "cafe",
    bot: ["Oi, mãe.", "Eu sou a GABA.", "O que tá mais pesado agora?"],
    chips: [
      { text: "meu filho teve uma crise", next: "crise", mascot: "respira" },
      { text: "tô esgotada", next: "esgotada", mascot: "respira" },
      { text: "me sinto culpada", next: "culpa", mascot: "acolhe" },
    ],
  },
  crise: {
    mascot: "respira",
    bot: [
      "Ouvi você. Respira fundo comigo primeiro.",
      "Crise não é birra. É sistema nervoso transbordando — o dele e provavelmente o seu também.",
      "Quer que eu te acompanhe na próxima, em tempo real, antes de virar tempestade?",
    ],
    cta: {
      line: "Os primeiros 7 dias são por minha conta. Sem cartão.",
      contextLabel: "crise",
      whatsappText: "Oi GABA, cheguei pelo site. Meu filho teve uma crise e queria entender o que fazer da próxima vez.",
    },
  },
  esgotada: {
    mascot: "respira",
    bot: [
      "Ouvi você. Isso não é fraqueza — é sinal.",
      "Quando o sistema fica em alerta por muito tempo, vira burnout materno. Não é falha sua. É carga sem suporte.",
      "Quer um caminho leve pra começar a tirar peso?",
    ],
    cta: {
      line: "Os primeiros 7 dias são por minha conta. Sem cartão.",
      contextLabel: "esgotamento",
      whatsappText: "Oi GABA, cheguei pelo site. Tô esgotada e queria começar com você.",
    },
  },
  culpa: {
    mascot: "acolhe",
    bot: [
      "A culpa que você sente não é prova de erro.",
      "É prova de quanto você se importa.",
      "Mãe ruim não se culpa. Mãe ruim não chega aqui.",
    ],
    cta: {
      line: "Vamos desmontar essa culpa juntas. 7 dias por minha conta.",
      contextLabel: "culpa",
      whatsappText: "Oi GABA, cheguei pelo site. Carrego uma culpa que não passa, queria conversar.",
    },
  },
};

interface DemoMsg {
  from: "user" | "gaba";
  text: string;
  time: string;
  typingMs?: number;
}

const demoConv: Record<string, { flow: DemoMsg[]; waText: string }> = {
  crise: {
    flow: [
      { from: "user", text: "Que noite difícil. Meu filho morre de medo de trovão e tá uma tempestade. Em pânico, não dorme.", time: "22:55" },
      { from: "gaba", text: "Que noite pesada. Cuidando dele em pânico, exausta — é muito pra uma pessoa só aguentar.", time: "22:55", typingMs: 900 },
      { from: "gaba", text: "Respira. Vamos juntas:\n1. Cria um esconderijo seguro — cobertor grosso, canto fechado, luz baixa.\n2. Mascara o trovão com som de chuva ou ventilador.\n3. Fala pouco e baixo: \"estou aqui, você está seguro\".", time: "22:56", typingMs: 1400 },
      { from: "gaba", text: "Assim que ele dormir, para. 20 minutos antes do trabalho — você precisa disso também.", time: "22:56", typingMs: 700 },
    ],
    waText: "Oi GABA, cheguei pelo site. Meu filho teve uma crise e queria entender o que fazer da próxima vez.",
  },
  culpa: {
    flow: [
      { from: "user", text: "Carrego uma culpa que não passa. Acho que falho com ele todo dia.", time: "23:12" },
      { from: "gaba", text: "Essa culpa não é prova de erro. É prova do quanto você se importa.", time: "23:12", typingMs: 700 },
      { from: "gaba", text: "Mãe ruim não chega aqui. Mãe ruim não fica perdendo o sono pensando se faz o suficiente.", time: "23:13", typingMs: 1100 },
      { from: "gaba", text: "Me conta — o que aconteceu hoje que tá pesando mais?", time: "23:13", typingMs: 600 },
    ],
    waText: "Oi GABA, cheguei pelo site. Carrego uma culpa que não passa, queria conversar.",
  },
  esgotamento: {
    flow: [
      { from: "user", text: "Acordei cansada de novo. Choro fácil, irrito por nada. Não tô dando conta.", time: "06:48" },
      { from: "gaba", text: "Ouvi você. Isso não é fraqueza — é sinal.", time: "06:48", typingMs: 600 },
      { from: "gaba", text: "Quando o sistema fica em alerta por muito tempo, vira burnout materno. Não é falha sua. É carga sem suporte.", time: "06:49", typingMs: 1300 },
      { from: "gaba", text: "Antes de qualquer coisa: quando foi a última vez que você teve 30 minutos só seu, sem ninguém te chamar?", time: "06:49", typingMs: 900 },
    ],
    waText: "Oi GABA, cheguei pelo site. Tô esgotada e queria começar com você.",
  },
  escola: {
    flow: [
      { from: "user", text: "A escola ligou de novo. Reunião amanhã por causa do comportamento. Já sei como vai ser.", time: "17:32" },
      { from: "gaba", text: "Antes da reunião: você não vai pra ser julgada. Você vai como parte da solução.", time: "17:32", typingMs: 800 },
      { from: "gaba", text: "Leva 3 coisas:\n1. Algo concreto que ele fez bem na semana.\n2. Uma pergunta sobre estratégias da escola.\n3. Um pedido específico — não geral.", time: "17:33", typingMs: 1300 },
      { from: "gaba", text: "Você não tá sozinha nessa. Te lembro disso de novo amanhã se quiser.", time: "17:33", typingMs: 700 },
    ],
    waText: "Oi GABA, cheguei pelo site. Tenho reunião na escola e queria me preparar.",
  },
};

const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" } as Record<string, string>)[c]);

export default function App() {
  /* ──────── refs do hero chat ──────── */
  const heroChatBodyRef = useRef<HTMLDivElement | null>(null);
  const heroMascotFloatRef = useRef<HTMLImageElement | null>(null);
  const heroChatAvatarRef = useRef<HTMLImageElement | null>(null);
  const heroChatRef = useRef<HTMLDivElement | null>(null);
  const lastChipContextRef = useRef<string | null>(null);

  /* ──────── refs do iphone demo ──────── */
  const waChatRef = useRef<HTMLDivElement | null>(null);
  const ctaLinkRef = useRef<HTMLAnchorElement | null>(null);
  const iphoneStageRef = useRef<HTMLDivElement | null>(null);
  const iosTimeRef = useRef<HTMLSpanElement | null>(null);
  const demoTimersRef = useRef<number[]>([]);
  const demoTokenRef = useRef(0);
  const [activeScenario, setActiveScenario] = useState<keyof typeof demoConv>("crise");
  const [stageCaption, setStageCaption] = useState("uma presença pra te acolher na hora certa");

  /* ════════════════════════════════════════════
     EFEITO 1 — TIME OF DAY
     Define classe no body + caption do mascote
     ════════════════════════════════════════════ */
  useEffect(() => {
    const h = new Date().getHours();
    const isDay = h >= 5 && h < 18;
    document.body.classList.add(isDay ? "tod-day" : "tod-night");
    let bucket: "madrugada" | "manha" | "tarde" | "noite";
    if (h < 5) bucket = "madrugada";
    else if (h < 12) bucket = "manha";
    else if (h < 18) bucket = "tarde";
    else bucket = "noite";
    document.body.dataset.tod = bucket;
    const captions = {
      madrugada: "madrugada longa — ela tá acordada com você",
      manha: "bom dia, mãe — ela amanheceu aqui",
      tarde: "meio do dia — ela respira com você",
      noite: "quando a casa silencia, ela continua acordada",
    };
    setStageCaption(captions[bucket]);
    return () => {
      document.body.classList.remove("tod-day", "tod-night");
      delete document.body.dataset.tod;
    };
  }, []);

  /* ════════════════════════════════════════════
     EFEITO 2 — HERO CHAT (árvore de conversa GABA)
     ════════════════════════════════════════════ */
  useEffect(() => {
    const body = heroChatBodyRef.current;
    if (!body) return;

    const hScroll = () => { body.scrollTop = body.scrollHeight; };
    const hAddMom = (text: string) => {
      const m = document.createElement("div");
      m.className = "h-msg mom";
      m.textContent = text;
      body.appendChild(m);
      hScroll();
    };
    const hShowTyping = () => {
      const t = document.createElement("div");
      t.className = "h-typing";
      t.id = "hTypingNow";
      t.innerHTML = "<span></span><span></span><span></span>";
      body.appendChild(t);
      hScroll();
    };
    const hHideTyping = () => {
      const t = document.getElementById("hTypingNow");
      if (t) t.remove();
    };

    const hStreamBot = (text: string, onDone?: () => void) => {
      const m = document.createElement("div");
      m.className = "h-msg gaba streaming";
      body.appendChild(m);
      hScroll();
      if (prefersReducedMotion()) {
        m.textContent = text;
        m.classList.remove("streaming");
        hScroll();
        onDone?.();
        return;
      }
      let i = 0;
      const charDelay = 22;
      const punctPause = 140;
      const tick = () => {
        if (i >= text.length) {
          m.classList.remove("streaming");
          hScroll();
          onDone?.();
          return;
        }
        const ch = text[i];
        m.textContent += ch;
        i++;
        hScroll();
        const extra = /[.,!?—…]/.test(ch) ? punctPause : 0;
        setTimeout(tick, charDelay + extra);
      };
      tick();
    };

    const hShowChips = (chips: NonNullable<ConvNode["chips"]>) => {
      const row = document.createElement("div");
      row.className = "h-chips";
      row.id = "hChipsRow";
      chips.forEach((c) => {
        const b = document.createElement("button");
        b.className = "h-chip";
        b.textContent = c.text;
        b.onclick = () => hChipClick(c);
        row.appendChild(b);
      });
      body.appendChild(row);
      hScroll();
    };
    const hClearChips = () => {
      const r = document.getElementById("hChipsRow");
      if (r) r.remove();
    };

    const hShowCTA = (cta: NonNullable<ConvNode["cta"]>) => {
      lastChipContextRef.current = cta.contextLabel || null;
      const card = document.createElement("div");
      card.className = "h-cta-card";
      const url = WA_BASE + "?text=" + encodeURIComponent(cta.whatsappText);
      card.innerHTML = `
        <div class="h-cta-line">${cta.line}</div>
        <div class="h-cta-meta"><strong>R$ 69,90/mês</strong> depois dos 7 dias · cancele por mensagem</div>
        <a class="h-cta-go" href="${url}" target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.27-1.38a9.86 9.86 0 0 0 4.71 1.2h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.0z"/></svg>
          Continuar no WhatsApp →
        </a>
        <div class="h-cta-or">ou conta com suas palavras</div>
        <form class="h-free-form" id="hFreeForm" autocomplete="off">
          <input type="text" class="h-free-input" id="hFreeInput" placeholder="o que tá pesando aí…" aria-label="Conta pra GABA com suas palavras" maxlength="280" />
          <button type="submit" class="h-free-send" id="hFreeSend" aria-label="Enviar pra GABA no WhatsApp" disabled>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
          </button>
        </form>
        <span class="h-free-hint">abre no WhatsApp já com o que você escreveu</span>
      `;
      body.appendChild(card);
      const form = card.querySelector<HTMLFormElement>("#hFreeForm");
      const input = card.querySelector<HTMLInputElement>("#hFreeInput");
      const send = card.querySelector<HTMLButtonElement>("#hFreeSend");
      input?.addEventListener("input", () => {
        if (send) send.disabled = (input.value.trim().length < 2);
      });
      form?.addEventListener("submit", (e) => {
        e.preventDefault();
        const free = (input?.value || "").trim();
        if (free.length < 2) return;
        const ctxBit = lastChipContextRef.current ? ` (vim falando sobre ${lastChipContextRef.current})` : "";
        const message = `Oi GABA, cheguei pelo site${ctxBit}. ${free}`;
        const waUrl = WA_BASE + "?text=" + encodeURIComponent(message);
        window.open(waUrl, "_blank", "noopener");
      });
      const restart = document.createElement("button");
      restart.className = "h-cta-restart";
      restart.textContent = "começar de novo";
      restart.onclick = hRestart;
      body.appendChild(restart);
      hScroll();
    };

    const hSwapMascot = (key: string) => {
      const path = MASCOT_PATHS[key];
      if (!path) return;
      const float = heroMascotFloatRef.current;
      if (float && float.getAttribute("src") !== path) {
        if (prefersReducedMotion()) {
          float.src = path;
        } else {
          float.classList.add("swapping");
          setTimeout(() => {
            float.src = path;
            requestAnimationFrame(() => float.classList.remove("swapping"));
          }, 320);
        }
      }
      const avatar = heroChatAvatarRef.current;
      if (avatar) {
        const target = key === "cafe" ? AVATAR_DEFAULT : path;
        if (avatar.getAttribute("src") !== target) {
          if (prefersReducedMotion()) {
            avatar.src = target;
          } else {
            avatar.classList.add("swapping");
            setTimeout(() => {
              avatar.src = target;
              requestAnimationFrame(() => avatar.classList.remove("swapping"));
            }, 320);
          }
        }
      }
    };

    const hRestart = () => {
      body.innerHTML = "";
      lastChipContextRef.current = null;
      hSwapMascot("cafe");
      setTimeout(() => hNavigate("start"), 300);
    };

    const hPlayBotSeq = (messages: string[], onDone?: () => void) => {
      let i = 0;
      const next = () => {
        if (i >= messages.length) { onDone?.(); return; }
        hShowTyping();
        const baseTyping = prefersReducedMotion() ? 220 : Math.min(560 + messages[i].length * 9, 1100);
        setTimeout(() => {
          hHideTyping();
          hStreamBot(messages[i], () => {
            i++;
            setTimeout(next, prefersReducedMotion() ? 120 : 380);
          });
        }, baseTyping);
      };
      next();
    };

    const hNavigate = (key: string) => {
      const node = heroConv[key];
      if (!node) return;
      if (node.mascot) hSwapMascot(node.mascot);
      hPlayBotSeq(node.bot, () => {
        if (node.cta) setTimeout(() => hShowCTA(node.cta!), 500);
        else if (node.chips) setTimeout(() => hShowChips(node.chips!), 250);
      });
    };

    const hChipClick = (chip: { text: string; next: string; mascot?: string }) => {
      hClearChips();
      if (chip.mascot) hSwapMascot(chip.mascot);
      hAddMom(chip.text);
      setTimeout(() => hNavigate(chip.next), 600);
    };

    /* Auto-start quando o hero chat entra em viewport */
    const phoneEl = heroChatRef.current;
    if (!phoneEl) return;
    const obs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setTimeout(() => hNavigate("start"), 1100);
        obs.disconnect();
      }
    });
    obs.observe(phoneEl);
    return () => obs.disconnect();
  }, []);

  /* ════════════════════════════════════════════
     EFEITO 3 — IPHONE DEMO (4 cenários)
     ════════════════════════════════════════════ */
  useEffect(() => {
    const waChat = waChatRef.current;
    const ctaLink = ctaLinkRef.current;
    if (!waChat || !ctaLink) return;

    const isReduced = () => prefersReducedMotion();
    const clearTimers = () => { demoTimersRef.current.forEach((t) => clearTimeout(t)); demoTimersRef.current = []; };
    const pushTimer = (t: number) => demoTimersRef.current.push(t);
    const scrollChat = () => { waChat.scrollTop = waChat.scrollHeight; };
    const clearChat = () => { waChat.innerHTML = '<div class="wa-day"><span>hoje</span></div>'; };

    const appendUser = (text: string, time: string) => {
      const m = document.createElement("div");
      m.className = "wa-msg user";
      m.innerHTML = '<span class="wa-text">' + escapeHtml(text).replace(/\n/g, "<br>") + '</span><span class="wa-time">' + time + "</span>";
      waChat.appendChild(m);
      scrollChat();
    };
    const showTyping = () => {
      const t = document.createElement("div");
      t.className = "wa-typing";
      t.id = "waTypingNow";
      t.innerHTML = "<span></span><span></span><span></span>";
      waChat.appendChild(t);
      scrollChat();
    };
    const hideTyping = () => { const t = document.getElementById("waTypingNow"); if (t) t.remove(); };

    const streamGaba = (text: string, time: string, token: number, onDone?: () => void) => {
      const m = document.createElement("div");
      m.className = "wa-msg gaba streaming";
      m.innerHTML = '<span class="wa-text"></span><span class="wa-time">' + time + "</span>";
      waChat.appendChild(m);
      const textEl = m.querySelector<HTMLSpanElement>(".wa-text");
      scrollChat();
      if (isReduced()) {
        if (textEl) textEl.innerHTML = escapeHtml(text).replace(/\n/g, "<br>");
        m.classList.remove("streaming");
        scrollChat();
        onDone?.();
        return;
      }
      let i = 0;
      const charDelay = 20;
      const punctPause = 130;
      const tick = () => {
        if (token !== demoTokenRef.current) return;
        if (i >= text.length) {
          m.classList.remove("streaming");
          scrollChat();
          onDone?.();
          return;
        }
        const ch = text[i];
        if (textEl) {
          if (ch === "\n") textEl.innerHTML += "<br>";
          else textEl.innerHTML += escapeHtml(ch);
        }
        i++;
        scrollChat();
        const extra = /[.,!?—…]/.test(ch) ? punctPause : 0;
        pushTimer(window.setTimeout(tick, charDelay + extra));
      };
      tick();
    };

    const play = (scenario: keyof typeof demoConv) => {
      clearTimers();
      demoTokenRef.current++;
      const token = demoTokenRef.current;
      const data = demoConv[scenario];
      if (!data) return;
      ctaLink.href = WA_BASE + "?text=" + encodeURIComponent(data.waText);
      clearChat();
      let delay = 700;
      data.flow.forEach((msg) => {
        if (msg.from === "user") {
          pushTimer(window.setTimeout(() => {
            if (token !== demoTokenRef.current) return;
            appendUser(msg.text, msg.time);
          }, delay));
          delay += 1100;
        } else {
          const typingMs = isReduced() ? 250 : (msg.typingMs || 1000);
          pushTimer(window.setTimeout(() => {
            if (token !== demoTokenRef.current) return;
            showTyping();
          }, delay));
          delay += typingMs;
          pushTimer(window.setTimeout(() => {
            if (token !== demoTokenRef.current) return;
            hideTyping();
            streamGaba(msg.text, msg.time, token);
          }, delay));
          const streamMs = isReduced() ? 60 : (msg.text.length * 22 + ((msg.text.match(/[.,!?—…]/g) || []).length) * 130);
          delay += streamMs + 500;
        }
      });
    };

    /* Expor função pra os botões e replay reagirem */
    (window as unknown as { __gabaPlay?: (s: keyof typeof demoConv) => void }).__gabaPlay = play;

    /* Auto-play quando entra no viewport */
    const stage = iphoneStageRef.current;
    let obs: IntersectionObserver | null = null;
    if (stage && "IntersectionObserver" in window) {
      obs = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => play(activeScenario), 600);
          obs?.disconnect();
        }
      }, { threshold: 0.35 });
      obs.observe(stage);
    } else {
      setTimeout(() => play(activeScenario), 1500);
    }

    /* Relógio iOS — atualiza a cada minuto */
    const setIosClock = () => {
      const el = iosTimeRef.current;
      if (!el) return;
      const now = new Date();
      el.textContent = String(now.getHours()).padStart(2, "0") + ":" + String(now.getMinutes()).padStart(2, "0");
    };
    setIosClock();
    const clockInterval = window.setInterval(setIosClock, 60000);

    return () => {
      clearTimers();
      obs?.disconnect();
      clearInterval(clockInterval);
      delete (window as unknown as { __gabaPlay?: unknown }).__gabaPlay;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* Trocar cenário (chips) */
  const switchScenario = (s: keyof typeof demoConv) => {
    setActiveScenario(s);
    const fn = (window as unknown as { __gabaPlay?: (s: keyof typeof demoConv) => void }).__gabaPlay;
    fn?.(s);
  };
  const replay = () => {
    const fn = (window as unknown as { __gabaPlay?: (s: keyof typeof demoConv) => void }).__gabaPlay;
    fn?.(activeScenario);
  };

  /* ════════════════════════════════════════════════════════════════════════
     RENDER
     ════════════════════════════════════════════════════════════════════════ */
  return (
    <>
      {/* ── NAV ── */}
      <nav className="nav">
        <div className="wrap">
          <a className="brand" href="#top" aria-label="NeuroMãe">
            <span className="brand-logo" aria-hidden="true"></span>
            <div className="brand-text">
              <div className="brand-title">NeuroMãe</div>
              <div className="brand-tagline">
                ciência <span className="sep">*</span> acolhimento <span className="sep">*</span> transformação
              </div>
            </div>
          </a>
          <div className="navlinks">
            <a href="#produto">O que é</a>
            <a href="#como">Como funciona</a>
            <a href="#fundadora">Quem somos</a>
            <a href="#pricing">Plano</a>
            <a href="#faq">Dúvidas</a>
          </div>
          <a className="pill" href={WA_BASE} target="_blank" rel="noopener noreferrer">
            Falar com a <span className="gaba-word">GABA</span>
          </a>
        </div>
      </nav>

      {/* ── HERO + CHAT INTERATIVO ── */}
      <header className="hero" id="top">
        <div className="wrap hero-grid">
          <div className="hero-text">
            <h1>
              Você não é péssima.<br />
              <span className="accent">Você está esgotada.</span>
            </h1>
            <p className="hero-lede">A maternidade neurodivergente não vem com manual.</p>
            <p className="hero-copy">
              Conversa com a <span className="gaba-word">GABA</span> agora — sem cadastro, sem app extra. Ela atende aqui ao lado.
            </p>
            <div className="trust-row">
              <div className="trust-mini">
                <span className="ico" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" width="16" height="16"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg></span>
                <span><strong>24h no WhatsApp</strong>sempre que precisar</span>
              </div>
              <div className="trust-mini">
                <span className="ico" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" width="16" height="16"><path d="M12 3 4 6v6c0 4.5 3.4 8.4 8 9 4.6-.6 8-4.5 8-9V6l-8-3z" /><path d="m9 12 2 2 4-4" /></svg></span>
                <span><strong>100% confidencial</strong>suas conversas são seguras</span>
              </div>
              <div className="trust-mini">
                <span className="ico" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" width="16" height="16"><circle cx="12" cy="9" r="6" /><path d="m9 14-2 7 5-3 5 3-2-7" /></svg></span>
                <span><strong>Baseada em ciência</strong>e experiência real</span>
              </div>
              <div className="trust-mini">
                <span className="ico" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" width="16" height="16"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg></span>
                <span><strong>Feita por quem</strong>vive na pele</span>
              </div>
            </div>
          </div>

          <div className="hero-chat-wrap">
            <img ref={heroMascotFloatRef} className="gaba-mascot-float" src="/gaba-cafe.png" alt="" />
            <div ref={heroChatRef} className="hero-chat">
              <div className="hero-chat-head">
                <div className="hero-chat-avatar">
                  <img ref={heroChatAvatarRef} src="/icon-gaba-coffe.svg" alt="" />
                </div>
                <div className="hero-chat-meta">
                  <h4>GABA</h4>
                  <p>online · responde em segundos</p>
                </div>
              </div>
              <div ref={heroChatBodyRef} className="hero-chat-body" id="heroChatBody"></div>
            </div>
          </div>
        </div>
      </header>

      {/* ── PENSAMENTOS ── */}
      <section className="section thoughts" id="pensamentos">
        <div className="wrap">
          <div className="section-head">
            <h2>Talvez você já tenha pensado isso hoje...</h2>
            <div className="subtle-rule"></div>
          </div>
          <div className="thought-grid">
            <article className="thought-card">
              <div className="thought-icon">♡</div>
              <p className="thought">"A casa fica em silêncio depois de um dia exaustivo…<br />Eu só queria descansar — mas a culpa não deixa."</p>
              <hr />
              <p className="answer">Essa culpa não é verdade.<br />É o cansaço falando mais alto.</p>
              <p className="insight">Você não precisa de mais esforço.<br />Precisa de pausa — sem culpa.</p>
            </article>
            <article className="thought-card">
              <div className="thought-icon">♡</div>
              <p className="thought">"Saio de mais uma terapia me perguntando:<br />será que agora vai dar certo?"</p>
              <hr />
              <p className="answer">Não é sobre dar certo de uma vez.<br />É sobre pequenas mudanças que você ainda não percebeu.</p>
              <p className="insight">O progresso não acontece no salto.<br />Acontece no detalhe.</p>
            </article>
            <article className="thought-card">
              <div className="thought-icon">♡</div>
              <p className="thought">"O telefone toca. É a escola.<br />Mais uma reunião por conta do comportamento."</p>
              <hr />
              <p className="answer">Você não está sendo chamada para ser julgada.<br />Você é parte da solução.</p>
              <p className="insight">Você não precisa enfrentar isso sozinha.<br />Precisa de apoio — na hora certa.</p>
            </article>
          </div>

          <div className="reveal-box">
            <div className="mark">♡</div>
            <p>Você está lidando com culpa, dúvida e medo — ao mesmo tempo.<br />E mesmo assim, continua. Todos os dias.</p>
            <p className="strong">Você não precisa de perfeição.<br />Precisa de apoio.</p>
          </div>

          <div className="gaba-stage">
            <span className="stage-blob stage-blob-terra" aria-hidden="true"></span>
            <span className="stage-blob stage-blob-sage" aria-hidden="true"></span>
            <span className="stage-blob stage-blob-rose" aria-hidden="true"></span>
            <p className="reveal-line">
              <span className="reveal-rule" aria-hidden="true"></span>
              <span className="reveal-text">Pois é... essa é a <span className="gaba-word">GABA</span>.</span>
              <span className="reveal-rule" aria-hidden="true"></span>
            </p>
            <div className="gaba-scene">
              <span className="gaba-halo" aria-hidden="true"></span>
              <span className="gaba-spark gaba-spark-a" aria-hidden="true"></span>
              <span className="gaba-spark gaba-spark-b" aria-hidden="true"></span>
              <span className="gaba-spark gaba-spark-c" aria-hidden="true"></span>
              <figure className="gaba-mascot" aria-hidden="true">
                <span className="gaba-breath-ring" aria-hidden="true"></span>
                <span className="gaba-glow" aria-hidden="true"></span>
                <img src="/avatar-gaba-coffe-refinado-optimized.svg" alt="" />
                <span className="gaba-vapor" aria-hidden="true"><span></span><span></span><span></span></span>
              </figure>
            </div>
            <p className="gaba-stage-caption">
              <span id="gabaStageCaption">{stageCaption}</span>
            </p>
          </div>
        </div>
      </section>

      {/* ── PRODUTO + IPHONE DEMO ── */}
      <section className="section produto-demo" id="produto">
        <div className="wrap">
          <div className="section-head">
            <h2>Não é um curso. É uma conversa que te organiza.</h2>
            <div className="subtle-rule"></div>
            <p>
              Você fala com a <span className="gaba-word">GABA</span> quando precisar de clareza: no fim do dia, depois de uma situação difícil, antes de uma reunião na escola ou quando a cabeça está cheia demais.
            </p>
          </div>

          <ol className="process-strip" id="como" aria-label="Como funciona">
            <li className="ps-step">
              <span className="ps-num">01</span>
              <span className="ps-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.27-1.38a9.86 9.86 0 0 0 4.71 1.2h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.0z" /></svg></span>
              <h3>Você chama no WhatsApp</h3>
              <p>Quando bater dúvida, culpa ou desespero.</p>
            </li>
            <li className="ps-link" aria-hidden="true"></li>
            <li className="ps-step">
              <span className="ps-num">02</span>
              <span className="ps-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3z" /><path d="M19 13.5l.9 2.6L22.5 17l-2.6.9L19 20.5l-.9-2.6L15.5 17l2.6-.9L19 13.5z" /></svg></span>
              <h3>Ela entende seu contexto</h3>
              <p>E te faz as perguntas certas pra te orientar.</p>
            </li>
            <li className="ps-link" aria-hidden="true"></li>
            <li className="ps-step">
              <span className="ps-num">03</span>
              <span className="ps-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><path d="M21 12c0 4.42-4.03 8-9 8a9.7 9.7 0 0 1-3.85-.78L3 21l1.38-4.65A8 8 0 0 1 3 12c0-4.42 4.03-8 9-8s9 3.58 9 8z" /><path d="M12 14.5c-2-1.2-3-2.4-3-3.6 0-1 .8-1.6 1.6-1.6.6 0 1.1.3 1.4.8.3-.5.8-.8 1.4-.8.8 0 1.6.6 1.6 1.6 0 1.2-1 2.4-3 3.6z" fill="currentColor" /></svg></span>
              <h3>Você recebe orientação prática</h3>
              <p>Acolhedora, na hora certa, do jeito que precisa.</p>
            </li>
            <li className="ps-link" aria-hidden="true"></li>
            <li className="ps-step">
              <span className="ps-num">04</span>
              <span className="ps-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="10" r="3" /><path d="M6.4 18.5c.9-2.4 3.1-4 5.6-4s4.7 1.6 5.6 4" /><path d="M9.5 7.5c.5-1 1.5-1.5 2.5-1.5s2 .5 2.5 1.5" /></svg></span>
              <h3>Você se sente amparada</h3>
              <p>Mais leve, mais segura, com chão firme pra seguir.</p>
            </li>
          </ol>

          <div className="demo-bridge">
            <span className="kicker">A conversa real</span>
            <h3 className="bridge-title">É assim que ela responde — <span className="bridge-italic">quando ninguém mais responde.</span></h3>
            <p>Escolhe o que tá pesando agora. A <span className="gaba-word">GABA</span> mostra como ela responderia.</p>
          </div>

          <div className="scenario-chips" role="tablist">
            {(["crise", "culpa", "esgotamento", "escola"] as const).map((s) => (
              <button
                key={s}
                className={"sc-chip" + (activeScenario === s ? " is-active" : "")}
                role="tab"
                aria-selected={activeScenario === s}
                onClick={() => switchScenario(s)}
              >
                {s}
              </button>
            ))}
          </div>

          <div ref={iphoneStageRef} className="iphone-stage">
            <div className="iphone-frame" role="img" aria-label="Conversa com GABA no WhatsApp">
              <span className="iphone-island" aria-hidden="true"></span>
              <div className="iphone-screen">
                <div className="ios-statusbar" aria-hidden="true">
                  <span className="ios-time" ref={iosTimeRef}>23:47</span>
                  <div className="ios-icons">
                    <svg viewBox="0 0 18 12" width="18" height="12" fill="currentColor"><rect x="0" y="8" width="3" height="4" rx=".5" /><rect x="5" y="6" width="3" height="6" rx=".5" /><rect x="10" y="3" width="3" height="9" rx=".5" /><rect x="15" y="0" width="3" height="12" rx=".5" opacity=".4" /></svg>
                    <svg viewBox="0 0 16 12" width="16" height="12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M1.5 5.5C3.5 3 5.5 2 8 2s4.5 1 6.5 3.5" /><path d="M3.5 7.5C5 6 6.5 5.5 8 5.5s3 .5 4.5 2" /><circle cx="8" cy="9.8" r="1" fill="currentColor" /></svg>
                    <span className="ios-battery"><span className="ios-battery-fill"></span></span>
                  </div>
                </div>
                <div className="wa-app">
                  <header className="wa-header">
                    <button className="wa-back" aria-hidden="true">
                      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
                    </button>
                    <div className="wa-avatar"><img src="/icon-gaba-coffe.svg" alt="" /></div>
                    <div className="wa-info">
                      <span className="wa-name">GABA</span>
                      <span className="wa-status">online</span>
                    </div>
                    <div className="wa-actions" aria-hidden="true">
                      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" /></svg>
                      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                    </div>
                  </header>
                  <div ref={waChatRef} className="wa-chat">
                    <div className="wa-day"><span>hoje</span></div>
                  </div>
                  <footer className="wa-input-bar" aria-hidden="true">
                    <button className="wa-iconbtn"><svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 14a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm-1-9h2v4h4v2h-4v4h-2v-4H7v-2h4z" /></svg></button>
                    <div className="wa-input-wrap">
                      <span className="wa-input-text">Mensagem</span>
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="9" /><path d="M9 9h.01M15 9h.01" /><path d="M8 14s1.5 2 4 2 4-2 4-2" strokeLinecap="round" /></svg>
                    </div>
                    <button className="wa-iconbtn"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" /><circle cx="12" cy="13" r="4" /></svg></button>
                    <button className="wa-iconbtn wa-mic"><svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M12 14a3 3 0 0 0 3-3V5a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3zm5-3a5 5 0 0 1-10 0H5a7 7 0 0 0 6 6.92V21h2v-3.08A7 7 0 0 0 19 11z" /></svg></button>
                  </footer>
                </div>
              </div>
            </div>
            <button className="demo-replay" aria-label="Tocar a conversa de novo" onClick={replay}>
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="1 4 1 10 7 10" /><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" /></svg>
              <span>Tocar de novo</span>
            </button>
          </div>

          <div className="demo-cta">
            <a className="btn-wa" ref={ctaLinkRef} href={WA_BASE} target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.27-1.38a9.86 9.86 0 0 0 4.71 1.2h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.0z" /></svg>
              Continuar essa conversa no WhatsApp
              <span className="arrow">→</span>
            </a>
            <p className="demo-cta-fine">7 dias por minha conta · sem cartão · cancela por mensagem</p>
          </div>
        </div>
      </section>

      {/* ── MOMENTOS ── */}
      <section className="section" id="momentos">
        <div className="wrap">
          <div className="section-head">
            <span className="kicker">Para usar no dia a dia</span>
            <h2>O que você encontra quando fala com a GABA.</h2>
            <p>Acolhe, escuta, organiza e orienta — sem transformar sua rotina em mais uma tarefa.</p>
          </div>
          <div className="moments-grid">
            <article className="moment"><div className="moment-img"><img src="/gaba-acolhe.png" alt="" /></div><h3>Acolhe</h3><p>Quando você precisa falar sem se sentir julgada.</p></article>
            <article className="moment"><div className="moment-img"><img src="/gaba-escuta.png" alt="" /></div><h3>Escuta</h3><p>Quando a rotina pesa e você precisa organizar o que sente.</p></article>
            <article className="moment"><div className="moment-img"><img src="/gaba-organiza.png" alt="" /></div><h3>Organiza</h3><p>Quando há muita informação e pouca clareza.</p></article>
            <article className="moment"><div className="moment-img"><img src="/gaba-respira.png" alt="" /></div><h3>Orienta</h3><p>Quando você precisa pensar nos próximos passos.</p></article>
          </div>
        </div>
      </section>

      {/* ── TRANSFORMAÇÃO (compare) ── */}
      <section className="section compare" id="transformacao">
        <div className="wrap">
          <div className="section-head">
            <span className="kicker">O que muda</span>
            <h2>Não é virar outra mãe. É não se perder mais no meio do caminho.</h2>
            <p>A GABA não promete maternidade leve. Promete que, quando o difícil vier — e ele vem — você não carregue tudo sozinha.</p>
          </div>
          <div className="compare-grid">
            <article className="compare-card before">
              <span className="kicker">Hoje, talvez</span>
              <h3>A maternidade pesa assim:</h3>
              <ul>
                <li>Por mais que se esforce, parece que nada melhora.</li>
                <li>Quanto mais conhecimento tem, maior fica a culpa.</li>
                <li>A cada crise, a impotência aumenta e paralisa.</li>
                <li>Se sente isolada, ignorante e sem esperança.</li>
              </ul>
            </article>
            <article className="compare-card after">
              <span className="kicker">Com a GABA</span>
              <h3>Atravessar com chão firme:</h3>
              <ul>
                <li>Nomeia o que aconteceu, sem se afogar no caos.</li>
                <li>Escuta a culpa sem receber mais uma lista de tarefas.</li>
                <li>Conta com prática real e baseada em evidência.</li>
                <li>Sabe para onde ir quando a noite vira.</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="cta-band">
        <div className="wrap">
          <div className="cta-card">
            <div>
              <h2>Você não precisa passar por hoje sozinha.</h2>
              <p>Comece com 7 dias gratuitos. Sem cartão. Sem fidelidade. Sem promessa milagrosa.</p>
            </div>
            <a className="btn primary" href={WA_BASE} target="_blank" rel="noopener noreferrer">
              Quero a GABA comigo agora →
            </a>
          </div>
        </div>
      </section>

      {/* ── PARA QUEM ── */}
      <section className="section" id="para-quem">
        <div className="wrap">
          <div className="section-head">
            <span className="kicker">Antes de começar</span>
            <h2>Pra ser honesta — a GABA não é pra todo mundo.</h2>
            <p>Ela acompanha mães reais, em dias reais. Não substitui profissionais, não promete criança perfeita e não entrega fórmula mágica.</p>
          </div>
          <div className="fit-grid">
            <article className="fit yes">
              <h3>É pra você se:</h3>
              <ul>
                <li>Quer entender melhor como a neurodivergência funciona.</li>
                <li>Recebeu um diagnóstico e está perdida.</li>
                <li>Precisa desabafar sem mais julgamentos.</li>
                <li>Mesmo cansada, sabe que não vai desistir.</li>
              </ul>
            </article>
            <article className="fit no">
              <h3>Não é pra você se:</h3>
              <ul>
                <li>Acha que neurodivergência é algo a ser "consertado".</li>
                <li>Vê maternidade como disputa de melhor mãe.</li>
                <li>Espera substituir profissionais necessários.</li>
                <li>Não quer caminhar em parceria com escola, família e profissionais.</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* ── FUNDADORA ── */}
      <section className="section founder" id="fundadora">
        <div className="wrap">
          <div className="section-head">
            <span className="kicker">Quem está por trás</span>
            <h2>Por que a NeuroMãe existe.</h2>
          </div>
          <div className="founder-grid">
            <aside className="founder-card">
              <img className="portrait" src="/tatiana.jpg" alt="Tatiana Junco" />
              <h3>Tatiana Junco</h3>
              <p>psicopedagoga em formação · pós-graduada em neurociência comportamental</p>
              <a className="insta" href="https://instagram.com/neuromaeia" target="_blank" rel="noopener noreferrer">
                @neuromaeia ↗
              </a>
            </aside>
            <div className="founder-text">
              <p className="opener">Eu sou Tatiana. Mãe atípica, como você.</p>
              <p>Meu segundo filho nasceu bem. Aos 45 dias teve uma meningite hospitalar e ficou 21 dias internado. Sobreviveu — com sequelas. TDAH, disfunção sensório-motora, leve deficiência intelectual.</p>
              <p>Na pandemia, atravessei uma depressão grave. Foi nesse fundo que, aos 38 anos, descobri que eu também sou TDAH. Comecei a estudar psicopedagogia, neurociência comportamental e educação parental porque os profissionais que eu encontrava não conseguiam me responder.</p>
              <p><strong>Mas eu tive sorte.</strong> Rede de apoio, condições financeiras, acesso à informação. A maioria das mães atípicas não tem nada disso.</p>
              <p>A NeuroMãe nasceu para essas mães: para ser o lugar seguro que eu não tive — sem enxurrada de informação, sem comparação, sem mais um curso que você sabe que não vai fazer.</p>
              <blockquote className="quote">
                "Eu só consegui me reerguer quando integrei três coisas: ciência, práticas reais, estoicismo e fé. Não para não sofrer mais — mas para não me perder por tanto tempo quando o sofrimento vem."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ── SEGURANÇA ── */}
      <section className="section" id="seguranca">
        <div className="wrap">
          <div className="section-head">
            <span className="kicker">Confiança</span>
            <h2>Privacidade pensada para mães e crianças.</h2>
            <p>Princípios de proteção da LGPD e do ECA digital. Documentos, laudos e fotos são tratados com responsabilidade.</p>
          </div>
          <div className="security-grid">
            <article className="security-card">
              <div className="icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /><circle cx="12" cy="15.5" r="1" fill="currentColor" /></svg></div>
              <h3>LGPD</h3>
              <p>Dados protegidos pela lei brasileira de proteção de dados.</p>
            </article>
            <article className="security-card">
              <div className="icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><path d="M12 3 5 6v6c0 4.4 3 7.6 7 9 4-1.4 7-4.6 7-9V6l-7-3z" /><path d="M12 16s-3-1.7-3-3.7c0-1.1.8-1.8 1.7-1.8.5 0 .9.2 1.3.6.4-.4.8-.6 1.3-.6.9 0 1.7.7 1.7 1.8 0 2-3 3.7-3 3.7z" fill="currentColor" stroke="none" /></svg></div>
              <h3>ECA digital</h3>
              <p>Princípios de proteção infantil em todas as conversas.</p>
            </article>
            <article className="security-card">
              <div className="icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><path d="M2.5 12s3.5-7 9.5-7c2.4 0 4.4.8 6 2" /><path d="M21.5 12s-3.5 7-9.5 7c-2.4 0-4.4-.8-6-2" /><circle cx="12" cy="12" r="2.6" /><path d="M3.5 3.5l17 17" /></svg></div>
              <h3>Imagens de menores</h3>
              <p>Orientamos excluir da conversa após o envio.</p>
            </article>
            <article className="security-card">
              <div className="icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.27-1.38a9.86 9.86 0 0 0 4.71 1.2h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.0z" /></svg></div>
              <h3>Direto no WhatsApp</h3>
              <p>Sem app extra. No aplicativo que você já usa.</p>
            </article>
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="section pricing" id="pricing">
        <div className="wrap">
          <div className="section-head">
            <span className="kicker">Plano</span>
            <h2>Os primeiros sete dias são por minha conta.</h2>
            <div className="anchor">
              <div className="anchor-row">
                <span className="anchor-label">Uma consulta de neurodesenvolvimento</span>
                <span className="anchor-price">a partir de <strong>R$ 250</strong></span>
              </div>
              <div className="anchor-row">
                <span className="anchor-label">Um curso de parentalidade neuro</span>
                <span className="anchor-price">a partir de <strong>R$ 800</strong></span>
              </div>
              <div className="anchor-row featured">
                <span className="anchor-label">A <span className="gaba-word">GABA</span>, todos os dias, 24h</span>
                <span className="anchor-price"><strong>R$ 69,90</strong> / mês</span>
              </div>
            </div>
            <p>Ela não substitui terapia — preenche o espaço entre as consultas, na hora em que você precisar.</p>
          </div>
          <div className="price-card">
            <span className="kicker">Plano único · 7 dias grátis</span>
            <div className="price">
              <span className="cur">R$</span>
              <span className="num">69</span>
              <span className="cents">,90</span>
              <span className="per">/mês</span>
            </div>
            <p style={{ color: "var(--muted)" }}>Cobrado mensalmente. Sem fidelidade.</p>
            <ul className="includes">
              <li>Conversa ilimitada no WhatsApp</li>
              <li>Texto, áudio e foto de documentos</li>
              <li>Disponível 24h, todos os dias</li>
              <li>Memória de contexto entre conversas</li>
              <li>Cancelamento por mensagem · 1 minuto</li>
            </ul>
            <a className="btn primary" href={WA_BASE} target="_blank" rel="noopener noreferrer" style={{ marginTop: 28 }}>
              Começar 7 dias grátis →
            </a>
            <p style={{ color: "var(--muted)", fontSize: 13, marginTop: 14 }}>
              Sem cartão · você só paga depois dos 7 dias se decidir continuar.
            </p>
            <div className="guarantee">
              <div className="seal"><strong>7</strong><span>dias</span></div>
              <p style={{ margin: 0, color: "var(--muted)" }}>
                <strong style={{ color: "var(--brown)" }}>Cancele em 1 minuto, por mensagem.</strong>
                <br />Sem retenção, sem burocracia, sem ligação. Você manda "cancelar" no WhatsApp e pronto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section" id="faq">
        <div className="wrap">
          <div className="section-head" style={{ textAlign: "left", marginLeft: 0 }}>
            <span className="kicker">Perguntas honestas</span>
            <h2>O que é, o que não é, e como funciona.</h2>
          </div>
          <div className="faq-list">
            <details open>
              <summary>A GABA substitui meu terapeuta, psiquiatra ou neuropediatra?</summary>
              <div className="answer-faq">
                <strong>Não.</strong> Ela é apoio entre as consultas — para organizar pensamentos, lidar com a rotina e os momentos difíceis. Não diagnostica, não prescreve, não trata. Se você já tem profissionais acompanhando, ela complementa.
              </div>
            </details>
            <details>
              <summary>Qual linha de parentalidade a GABA segue?</summary>
              <div className="answer-faq">
                Conhecimento <em>milenar</em> — humano, que sobreviveu ao tempo, não modinha de verão. Prática <em>real</em> — que funciona às quintas-feiras às 19h, não só na teoria. Ela busca estar <em>sendo útil</em>: resolve o que você veio resolver, sem te entregar mais uma lista de tarefas. E é <em>nem rígida, nem permissiva</em> — firmeza com colo, limite com ternura. A proposta é formar seres humanos para atravessar a vida real.
              </div>
            </details>
            <details>
              <summary>Funciona para TDAH, TEA, deficiência intelectual e dificuldade de aprendizagem?</summary>
              <div className="answer-faq">
                Foi pensada para mães e cuidadoras de filhos neurodivergentes. Cada caso é único; quando o caminho exigir profissional especializado, a GABA orienta essa busca.
              </div>
            </details>
            <details>
              <summary>Posso mandar áudio?</summary>
              <div className="answer-faq">
                Sim. A conversa é no WhatsApp, então áudio funciona naturalmente. Manda do jeito que sair; ela organiza e responde com profundidade.
              </div>
            </details>
            <details>
              <summary>Posso usar para mim, ou é só sobre meu filho?</summary>
              <div className="answer-faq">
                Para você, em primeiro lugar. A GABA também acompanha sua exaustão, suas dúvidas, suas decisões e sua rotina emocional.
              </div>
            </details>
            <details>
              <summary>Posso conversar de madrugada?</summary>
              <div className="answer-faq">
                Sim, 24 horas por dia. Em emergências ou risco imediato, procure serviço humano local de urgência ou um profissional de saúde.
              </div>
            </details>
            <details>
              <summary>Por que pagar R$69,90/mês se posso usar uma IA generalista?</summary>
              <div className="answer-faq">
                Porque a GABA foi desenhada para maternidade atípica: contexto, memória entre conversas, freios para não sobrecarregar e linguagem de acolhimento prático.
              </div>
            </details>
            <details>
              <summary>Como cancelo?</summary>
              <div className="answer-faq">
                Você manda "cancelar" no WhatsApp. Sem ligação, sem formulário e sem retenção.
              </div>
            </details>
            <details>
              <summary>Como funciona o teste grátis?</summary>
              <div className="answer-faq">
                Você começa sem cartão. Antes dos 7 dias acabarem, a GABA pergunta se você quer continuar. Se não quiser, a conversa para sem cobrança automática surpresa.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="wrap">
          <div>
            <div className="footer-brand">
              <span className="brand-logo" aria-hidden="true"></span>
              <span className="brand-wordmark">NeuroMãe</span>
            </div>
            <p style={{ fontSize: 12, color: "#A99B8F", marginTop: 18 }}>
              NeuroMãe © 2026 · ciência, acolhimento e transformação
            </p>
          </div>
          <p className="legal">
            A NeuroMãe é uma inteligência artificial. Ela apoia você no dia a dia, mas não substitui acompanhamento médico, psicológico ou terapêutico. Em situações de risco, procure um profissional de saúde ou serviço de emergência.
          </p>
        </div>
      </footer>

      {/* ── STICKY MOBILE CTA ── */}
      <a className="sticky" href={WA_BASE} target="_blank" rel="noopener noreferrer">
        Me conta o que tá pesando
      </a>
    </>
  );
}
