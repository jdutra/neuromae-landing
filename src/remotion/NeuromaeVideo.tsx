import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
  Sequence,
} from "remotion";

// ── Helpers ──────────────────────────────────────────────────────────────────

function useFadeIn(start: number, duration = 20) {
  const frame = useCurrentFrame();
  return interpolate(frame, [start, start + duration], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
}

function useSpring(frame: number, start: number) {
  const { fps } = useVideoConfig();
  return spring({ frame: frame - start, fps, config: { stiffness: 80, damping: 16 } });
}

// ── Colors ────────────────────────────────────────────────────────────────────
const ROXO = "#7C3AED";
const ROXO_ESCURO = "#5B21B6";
const ROSA = "#EC4899";
const BRANCO = "#FFFFFF";

// ── Scene 1: Logo intro (0–90) ────────────────────────────────────────────────
function SceneLogo() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const logoScale = spring({ frame, fps, config: { stiffness: 60, damping: 14 } });
  const taglineOpacity = interpolate(frame, [30, 60], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(135deg, ${ROXO_ESCURO} 0%, ${ROXO} 60%, #A855F7 100%)`,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 24,
      }}
    >
      {/* Logo mark */}
      <div
        style={{
          transform: `scale(${logoScale})`,
          width: 120,
          height: 120,
          borderRadius: 32,
          overflow: "hidden",
          border: "2px solid rgba(255,255,255,0.3)",
        }}
      >
        <img src="/logoNM.jpeg" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>

      {/* Brand name */}
      <div
        style={{
          transform: `scale(${logoScale})`,
          textAlign: "center",
        }}
      >
        <div style={{ color: BRANCO, fontSize: 56, fontWeight: 900, letterSpacing: -2 }}>
          Neuromae
        </div>
      </div>

      {/* Tagline */}
      <div
        style={{
          opacity: taglineOpacity,
          color: "rgba(255,255,255,0.75)",
          fontSize: 22,
          textAlign: "center",
          maxWidth: 600,
          lineHeight: 1.5,
        }}
      >
        A parceira que toda mãe neurodivergente precisava
      </div>
    </AbsoluteFill>
  );
}

// ── Scene 2: Problem (90–210) ─────────────────────────────────────────────────
function SceneProblem() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const items = [
    { emoji: "😭", text: "Filho em crise às 19h", delay: 0 },
    { emoji: "🏫", text: "Escola que não entende", delay: 15 },
    { emoji: "📄", text: "Laudo chegou — e agora?", delay: 30 },
    { emoji: "😮‍💨", text: "Exaustão sem fim", delay: 45 },
  ];

  const titleOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: "#0F0A1E",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 40,
        padding: "0 80px",
      }}
    >
      <div
        style={{
          opacity: titleOpacity,
          color: "rgba(255,255,255,0.5)",
          fontSize: 20,
          textTransform: "uppercase",
          letterSpacing: 4,
          fontWeight: 700,
        }}
      >
        Você conhece bem essa sensação
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 16, width: "100%", maxWidth: 640 }}>
        {items.map((item) => {
          const s = spring({ frame: frame - item.delay, fps, config: { stiffness: 70, damping: 15 } });
          const opacity = interpolate(frame, [item.delay, item.delay + 20], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });
          return (
            <div
              key={item.text}
              style={{
                opacity,
                transform: `translateX(${interpolate(s, [0, 1], [-60, 0])}px)`,
                display: "flex",
                alignItems: "center",
                gap: 20,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 16,
                padding: "18px 24px",
              }}
            >
              <span style={{ fontSize: 36 }}>{item.emoji}</span>
              <span style={{ color: BRANCO, fontSize: 24, fontWeight: 600 }}>{item.text}</span>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
}

// ── Scene 3: Chat demo (210–390) ──────────────────────────────────────────────
type Bubble = {
  side: "right" | "left";
  text: string;
  delay: number;
  isAI?: boolean;
};

function ChatBubble({ bubble, frame }: { bubble: Bubble; frame: number }) {
  const { fps } = useVideoConfig();
  const s = spring({ frame: frame - bubble.delay, fps, config: { stiffness: 80, damping: 16 } });
  const opacity = interpolate(frame, [bubble.delay, bubble.delay + 12], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const isRight = bubble.side === "right";

  return (
    <div
      style={{
        opacity,
        transform: `translateY(${interpolate(s, [0, 1], [20, 0])}px)`,
        display: "flex",
        justifyContent: isRight ? "flex-end" : "flex-start",
        marginBottom: 12,
      }}
    >
      <div
        style={{
          maxWidth: "75%",
          background: isRight ? "#DCF8C6" : BRANCO,
          borderRadius: isRight ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
          padding: "14px 18px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        {bubble.isAI && (
          <div style={{ fontSize: 11, color: ROXO, fontWeight: 700, marginBottom: 4 }}>
            Neuromae
          </div>
        )}
        <p style={{ color: "#111", fontSize: 16, lineHeight: 1.5, margin: 0 }}>
          {bubble.text}
        </p>
      </div>
    </div>
  );
}

function SceneChat() {
  const frame = useCurrentFrame();

  const bubbles: Bubble[] = [
    { side: "right", text: "Ele teve uma crise enorme na escola hoje 😭 não sei o que fazer", delay: 5 },
    { side: "left",  text: "Que situação difícil — você passou por muito hoje. 💙", delay: 35, isAI: true },
    { side: "left",  text: "Ele ainda está agitado ou já acalmou um pouco?", delay: 50, isAI: true },
    { side: "right", text: "Ainda agitado, ficou no quarto. Não quer falar", delay: 80 },
    { side: "left",  text: "Perfeito que ele foi pro quarto — é o cérebro dele buscando regulação. Não force contato agora. Fica perto sem falar. Se tiver uma música calma, pode colocar baixinho.", delay: 105, isAI: true },
  ];

  return (
    <AbsoluteFill
      style={{
        background: "#ECE5DD",
        flexDirection: "column",
      }}
    >
      {/* WhatsApp header */}
      <div
        style={{
          background: "#075E54",
          padding: "16px 24px",
          display: "flex",
          alignItems: "center",
          gap: 16,
        }}
      >
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: "50%",
            overflow: "hidden",
          }}
        >
          <img src="/logoNM.jpeg" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <div>
          <div style={{ color: BRANCO, fontWeight: 700, fontSize: 18 }}>Neuromae</div>
          <div style={{ color: "#4ADE80", fontSize: 13 }}>● online</div>
        </div>
      </div>

      {/* Messages */}
      <div style={{ flex: 1, padding: "20px 24px", overflowY: "hidden" }}>
        {bubbles.map((b) => (
          <ChatBubble key={b.text.slice(0, 20)} bubble={b} frame={frame} />
        ))}
      </div>
    </AbsoluteFill>
  );
}

// ── Scene 4: Resolution (390–510) ─────────────────────────────────────────────
function SceneResolution() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const s = useSpring(frame, 0);
  const tagOpacity = useFadeIn(20);
  const ctaOpacity = useFadeIn(50);

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(135deg, ${ROXO_ESCURO}, ${ROXO}, ${ROSA})`,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 32,
        padding: "0 80px",
        textAlign: "center",
      }}
    >
      <div style={{ transform: `scale(${s})`, fontSize: 80 }}>🤍</div>

      <div
        style={{
          transform: `translateY(${interpolate(s, [0, 1], [30, 0])}px)`,
          color: BRANCO,
          fontSize: 48,
          fontWeight: 900,
          lineHeight: 1.2,
          letterSpacing: -1,
        }}
      >
        Você não está<br />
        <span style={{ color: "#FDE68A" }}>sozinha nisso.</span>
      </div>

      <div
        style={{
          opacity: tagOpacity,
          color: "rgba(255,255,255,0.8)",
          fontSize: 22,
          maxWidth: 560,
          lineHeight: 1.6,
        }}
      >
        A Neuromae está disponível 24h pelo WhatsApp — acolhendo, orientando e organizando tudo por você.
      </div>

      <div
        style={{
          opacity: ctaOpacity,
          background: BRANCO,
          color: ROXO,
          borderRadius: 20,
          padding: "18px 40px",
          fontSize: 22,
          fontWeight: 800,
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}
      >
        <span style={{ fontSize: 28 }}>💬</span>
        Começar pelo WhatsApp
      </div>
    </AbsoluteFill>
  );
}

// ── Root composition ───────────────────────────────────────────────────────────
export function NeuromaeVideo() {
  return (
    <AbsoluteFill style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
      <Sequence from={0} durationInFrames={90}>
        <SceneLogo />
      </Sequence>
      <Sequence from={90} durationInFrames={120}>
        <SceneProblem />
      </Sequence>
      <Sequence from={210} durationInFrames={180}>
        <SceneChat />
      </Sequence>
      <Sequence from={390} durationInFrames={120}>
        <SceneResolution />
      </Sequence>
    </AbsoluteFill>
  );
}
