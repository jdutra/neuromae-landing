import { Hero } from "./components/Hero";
import { Problems } from "./components/Problems";
import { HowItWorks } from "./components/HowItWorks";
import { VideoSection } from "./components/VideoSection";
import { Testimonials } from "./components/Testimonials";
import { CTA, Footer } from "./components/CTA";

export default function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <VideoSection />
      <Problems />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
