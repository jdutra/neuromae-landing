export function Respiro() {
  return (
    <section
      aria-label="Respiro"
      className="border-b border-brown/8"
      style={{ background: "rgba(255,248,241,0.4)", padding: "70px 0" }}
    >
      <div className="wrap grid items-center gap-10 md:grid-cols-2">
        <img
          src="/gaba-cafe.png"
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="mx-auto h-auto w-full md:justify-self-end"
          style={{
            maxWidth: "460px",
            opacity: 0.62,
            filter: "saturate(.55) brightness(1.06)",
          }}
        />
        <div
          className="flex flex-col gap-1.5 text-center text-brown italic md:text-left"
          style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontWeight: 400,
            fontSize: "clamp(36px,5.5vw,62px)",
            lineHeight: 1.02,
            letterSpacing: "-0.015em",
          }}
        >
          <span>aqui,</span>
          <span>você pode</span>
          <span style={{ color: "#B87967" }}>respirar.</span>
        </div>
      </div>
    </section>
  );
}
