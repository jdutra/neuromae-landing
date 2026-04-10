
const WA_LINK = "https://wa.me/5543988264917?text=Oi%2C%20quero%20conhecer%20a%20Neuromae!";

export function CTA() {
  return (
    <section className="py-20 px-6 gradient-roxo relative overflow-hidden">
      {/* Blobs */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-pink-500/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-indigo-500/20 blur-3xl pointer-events-none" />

      <div className="relative max-w-3xl mx-auto text-center">
        <div className="w-16 h-16 rounded-2xl overflow-hidden mx-auto mb-6">
          <img src="/logoNM.jpeg" alt="Neuromae" className="w-full h-full object-cover" />
        </div>

        <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
          Você merece apoio de verdade.
        </h2>
        <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Não é só sobre o seu filho — é sobre você também. A Neuromae está aqui para as duas.
          Comece agora, de graça, pelo WhatsApp.
        </p>

        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-white text-roxo-700 hover:bg-roxo-50 font-black px-10 py-5 rounded-2xl text-xl shadow-2xl hover:shadow-white/20 hover:-translate-y-1 transition-all"
        >
          <svg viewBox="0 0 24 24" className="w-7 h-7 fill-green-500">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Começar agora pelo WhatsApp
        </a>

        <p className="text-white/50 text-sm mt-6">
          Sem cadastro. Sem cartão de crédito. Só você e a Neuromae.
        </p>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-gray-950 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-500 text-sm">
        <div className="flex items-center gap-2">
          <img src="/logoNM.jpeg" alt="Neuromae" className="w-6 h-6 rounded object-cover" />
          <span className="text-white font-semibold">Neuromae</span>
          <span>— Apoio a mães de filhos neurodivergentes</span>
        </div>
        <div className="flex gap-6">
          <span>LGPD</span>
          <span>Privacidade</span>
          <span>Contato</span>
        </div>
      </div>
      <p className="text-center text-gray-700 text-xs mt-6">
        A Neuromae é uma inteligência artificial. Não substitui médicos, psicólogos ou terapeutas.
      </p>
    </footer>
  );
}
