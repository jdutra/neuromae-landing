import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Conversa } from "./components/Conversa";
import { Produto } from "./components/Produto";
import { Funciona } from "./components/Funciona";
import { Transformacao } from "./components/Transformacao";
import { ParaQuem } from "./components/ParaQuem";
import { Fundadora } from "./components/Fundadora";
import { Seguranca } from "./components/Seguranca";
import { Pricing } from "./components/Pricing";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { MobileSticky } from "./components/MobileSticky";

export default function App() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Conversa />
        <Produto />
        <Funciona />
        <Transformacao />
        <ParaQuem />
        <Fundadora />
        <Seguranca />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
      <MobileSticky />
    </>
  );
}
