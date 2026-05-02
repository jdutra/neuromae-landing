import { useEffect, useState } from "react";
import { WA_LINK } from "../lib/links";

export function MobileSticky() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const target = document.querySelector("[data-hero-cta]");
    if (!target) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0.05 }
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className="fixed bottom-3 left-3 right-3 z-30 flex items-center justify-center rounded-full font-extrabold text-cream-2 md:bottom-6 md:left-auto md:right-6 md:px-7"
      style={{
        minHeight: "54px",
        background: "linear-gradient(180deg,#667254,#586348)",
        boxShadow: "0 16px 34px rgba(65,56,46,0.24)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(150%)",
        transition: "opacity 0.3s ease, transform 0.3s ease",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      Me conta o que tá pesando
    </a>
  );
}
