/**
 * Links legais reutilizáveis. Aponta para as páginas HTML estáticas em /public/.
 *
 * Use `variant="dark"` no Footer escuro, `variant="light"` em fundos claros.
 */

interface LegalLinksProps {
  variant?: "dark" | "light";
  includeContact?: boolean;
}

const CONTACT_EMAIL = "contato@neuromae.com.br";

export function LegalLinks({ variant = "dark", includeContact = true }: LegalLinksProps) {
  const baseColor = variant === "dark" ? "#C9B7A6" : "#77675B";
  const hoverColor = variant === "dark" ? "#FFF8F1" : "#40352E";

  const linkStyle = {
    color: baseColor,
  };

  const linkClass =
    "opacity-90 transition hover:opacity-100";

  return (
    <nav
      aria-label="Links legais"
      className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[13px] font-semibold"
      style={{ color: baseColor }}
    >
      {includeContact && (
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className={linkClass}
          style={linkStyle}
          onMouseEnter={(e) => (e.currentTarget.style.color = hoverColor)}
          onMouseLeave={(e) => (e.currentTarget.style.color = baseColor)}
        >
          Contato
        </a>
      )}
      <a
        href="/termos-de-uso/"
        className={linkClass}
        style={linkStyle}
        onMouseEnter={(e) => (e.currentTarget.style.color = hoverColor)}
        onMouseLeave={(e) => (e.currentTarget.style.color = baseColor)}
      >
        Termos de Uso
      </a>
      <a
        href="/politica-de-privacidade/"
        className={linkClass}
        style={linkStyle}
        onMouseEnter={(e) => (e.currentTarget.style.color = hoverColor)}
        onMouseLeave={(e) => (e.currentTarget.style.color = baseColor)}
      >
        Política de Privacidade
      </a>
    </nav>
  );
}

export { CONTACT_EMAIL };
