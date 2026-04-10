import { MessageCircle, Star, Shield, Brain } from "lucide-react";

const WA_LINK = "https://wa.me/5543988264917?text=Oi%2C%20quero%20conhecer%20a%20Neuromae!";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden gradient-roxo">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-purple-400/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-pink-500/20 blur-3xl" />
      </div>

      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-5 max-w-6xl mx-auto w-full">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center">
            <Brain className="w-5 h-5 text-white" />
          </div>
          <span className="text-white font-bold text-xl tracking-tight">Neuromae</span>
        </div>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/30 text-white text-sm font-semibold px-4 py-2 rounded-full transition-all"
        >
          <MessageCircle className="w-4 h-4" />
          Falar agora
        </a>
      </nav>

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 py-16 max-w-5xl mx-auto w-full">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-white/90 text-sm font-medium">Disponível 24h pelo WhatsApp</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-6">
          A parceira que toda mãe<br />
          <span className="text-pink-300">neurodivergente</span> precisava
        </h1>

        <p className="text-white/80 text-lg sm:text-xl max-w-2xl mb-10 leading-relaxed">
          Orientação especializada pelo WhatsApp para mães de filhos com TDAH, TEA e dificuldades de aprendizagem.
          Baseada em evidências científicas. Disponível a qualquer hora — inclusive às 3h da manhã.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mb-14">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-white text-roxo-700 hover:bg-roxo-50 font-bold px-8 py-4 rounded-2xl text-lg shadow-2xl hover:shadow-white/20 hover:-translate-y-0.5 transition-all"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-green-500">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Falar com a Neuromae agora
          </a>
          <a
            href="#como-funciona"
            className="flex items-center justify-center gap-2 border border-white/40 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-2xl text-lg transition-all"
          >
            Ver como funciona
          </a>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-white/70 text-sm">
          <div className="flex items-center gap-1.5">
            <Shield className="w-4 h-4" />
            <span>Dados protegidos pela LGPD</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span>Baseada em ABA, TO e regulação emocional</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MessageCircle className="w-4 h-4" />
            <span>Sem app. Só WhatsApp.</span>
          </div>
        </div>
      </div>

      {/* Floating chat preview */}
      <div className="relative z-10 max-w-sm mx-auto pb-16 px-6 animate-float">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* WhatsApp header */}
          <div className="bg-[#075E54] px-4 py-3 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-roxo-600 flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-white text-sm font-semibold">Neuromae</p>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                <p className="text-green-400 text-xs">online</p>
              </div>
            </div>
          </div>
          {/* Chat */}
          <div className="bg-[#ECE5DD] px-3 py-4 space-y-3">
            <div className="flex justify-end">
              <div className="bg-[#DCF8C6] rounded-2xl rounded-tr-sm px-4 py-2 max-w-[85%] shadow-sm">
                <p className="text-gray-800 text-sm">Ele teve uma crise enorme na escola hoje e eu não sei o que fazer 😭</p>
                <p className="text-gray-400 text-[10px] text-right mt-1">08:47 ✓✓</p>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-2 max-w-[85%] shadow-sm">
                <p className="text-gray-800 text-sm">Que situação difícil — você passou por muito hoje. 💙</p>
                <p className="text-gray-800 text-sm mt-1">Me conta: ele ainda está agitado ou já acalmou?</p>
                <p className="text-gray-400 text-[10px] text-right mt-1">08:47</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60L1440 60L1440 30C1200 60 960 0 720 30C480 60 240 0 0 30L0 60Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
