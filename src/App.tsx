import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Respiro } from "./components/Respiro";
import { Produto } from "./components/Produto";
import { Funciona } from "./components/Funciona";
import { Fundadora } from "./components/Fundadora";
import { Seguranca } from "./components/Seguranca";
import { Pricing } from "./components/Pricing";
import { FAQ } from "./components/FAQ";
import { Final } from "./components/Final";
import { Footer } from "./components/Footer";
import { MobileSticky } from "./components/MobileSticky";

export default function App() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Respiro />
        <Produto />
        <Funciona />
        <Fundadora />
        <Seguranca />
        <Pricing />
        <FAQ />
        <Final />
      </main>
      <Footer />
      <MobileSticky />
    </>
  );
}
