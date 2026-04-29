import { WA_LINK } from "../lib/links";

export function MobileSticky() {
  return (
    <a
      href={WA_LINK}
      className="fixed left-3 right-3 bottom-3 z-30 flex items-center justify-center rounded-full font-extrabold text-cream-2 md:hidden"
      style={{
        minHeight: "54px",
        background: "linear-gradient(180deg,#667254,#586348)",
        boxShadow: "0 16px 34px rgba(65,56,46,0.24)",
      }}
    >
      Começar 7 dias grátis
    </a>
  );
}
