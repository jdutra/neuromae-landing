import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Produto } from "./components/Produto";
import { Funciona } from "./components/Funciona";
import { Seguranca } from "./components/Seguranca";
import { Final } from "./components/Final";
import { MobileSticky } from "./components/MobileSticky";

export default function App() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Produto />
        <Funciona />
        <Seguranca />
        <Final />
      </main>
      <MobileSticky />
    </>
  );
}
