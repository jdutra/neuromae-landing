import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Camila R.",
    role: "Mãe do Enzo, 9 anos (TDAH)",
    text: "Às 2h da manhã ela me respondeu e me ajudou a atravessar a crise do meu filho. Ele estava em meltdown total e eu entrei em pânico. Em 10 minutos eu já sabia o que fazer. Nunca me senti tão acompanhada.",
    stars: 5,
    avatar: "C",
    avatarColor: "bg-purple-500",
  },
  {
    name: "Fernanda L.",
    role: "Mãe da Sofia, 7 anos (TEA)",
    text: "Ela guardou todos os laudos da Sofia e ainda me lembrou de levar na consulta com a neuropediatra. Minha vida organizou! Eu tinha o maior caos de documentos e agora é tudo no WhatsApp mesmo.",
    stars: 5,
    avatar: "F",
    avatarColor: "bg-pink-500",
  },
  {
    name: "Juliana M.",
    role: "Mãe do Miguel, 11 anos (Dislexia)",
    text: "Finalmente entendi o que é dislexia de verdade. Ela explicou de um jeito que eu consegui entender — sem termos técnicos, com exemplos do dia a dia. Minha relação com o Miguel mudou depois disso.",
    stars: 5,
    avatar: "J",
    avatarColor: "bg-indigo-500",
  },
  {
    name: "Priscila T.",
    role: "Mãe do Arthur, 6 anos (investigando TEA)",
    text: "Quando chegou o laudo eu entrei em desespero. A Neuromae me acolheu primeiro, depois foi me explicando o que cada coisa significava. Não me senti sozinha nem por um segundo nesse processo.",
    stars: 5,
    avatar: "P",
    avatarColor: "bg-teal-500",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block bg-roxo-100 text-roxo-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            O que as mães dizem
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
            Mães reais.<br />
            <span className="gradient-text">Histórias reais.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:border-roxo-200 hover:shadow-md transition-all"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 text-sm leading-relaxed mb-5 italic">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${t.avatarColor} flex items-center justify-center text-white font-bold text-sm`}>
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
