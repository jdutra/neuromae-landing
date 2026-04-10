import { Player } from "@remotion/player";
import { NeuromaeVideo } from "../remotion/NeuromaeVideo";

export function VideoSection() {
  return (
    <section className="py-20 px-6 bg-gray-950" id="video">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-roxo-900/50 text-roxo-300 border border-roxo-700/50 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Veja como funciona
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            De uma crise ao acolhimento<br />
            <span className="gradient-text">em segundos</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            É exatamente assim que a Neuromae se parece no seu WhatsApp.
          </p>
        </div>

        {/* Remotion Player */}
        <div className="rounded-2xl overflow-hidden shadow-2xl shadow-roxo-900/50 border border-roxo-800/30">
          <Player
            component={NeuromaeVideo}
            durationInFrames={510}
            fps={30}
            compositionWidth={1280}
            compositionHeight={720}
            style={{ width: "100%", aspectRatio: "16/9" }}
            controls
            autoPlay
            loop
          />
        </div>

        <p className="text-center text-gray-600 text-sm mt-4">
          Vídeo gerado com Remotion • conversa ilustrativa
        </p>
      </div>
    </section>
  );
}
