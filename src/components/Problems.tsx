import { AlertCircle, BookOpen, FileX, HeartCrack, HelpCircle, Moon } from "lucide-react";

const problems = [
  {
    icon: AlertCircle,
    color: "bg-red-50 text-red-500",
    title: "Crise sem aviso",
    desc: "Meltdown às 19h, birra na escola, explosão no mercado. Você congela. Não sabe se grita, abraça ou chora junto.",
  },
  {
    icon: BookOpen,
    color: "bg-orange-50 text-orange-500",
    title: "Escola que não entende",
    desc: "A professora manda recados difíceis, a diretora sugere \"limite mais\". Seu filho é visto como problema, não como criança diferente.",
  },
  {
    icon: HelpCircle,
    color: "bg-yellow-50 text-yellow-600",
    title: "O laudo chegou — e agora?",
    desc: "TDAH, TEA, dislexia... O diagnóstico trouxe alívio e desespero ao mesmo tempo. O que muda? O que fazer primeiro?",
  },
  {
    icon: FileX,
    color: "bg-blue-50 text-blue-500",
    title: "Documentos espalhados",
    desc: "Laudos no e-mail, receitas na bolsa, relatórios da fono em alguma gaveta. Na hora da consulta, nada está onde devia estar.",
  },
  {
    icon: Moon,
    color: "bg-indigo-50 text-indigo-500",
    title: "3h da manhã, filho acordado",
    desc: "Insônia, ansiedade, hiperfoco noturno. Você também não dorme — mas nenhum especialista atende agora.",
  },
  {
    icon: HeartCrack,
    color: "bg-pink-50 text-pink-500",
    title: "\"Já tentei de tudo\"",
    desc: "Tabelas de rotina, punições, reforços, terapias. Às vezes nada funciona e você se pergunta se está fazendo errado.",
  },
];

export function Problems() {
  return (
    <section className="py-20 px-6 bg-white" id="problemas">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block bg-roxo-100 text-roxo-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Você não está sozinha nisso
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
            Ser mãe de filho neurodivergente<br />
            <span className="gradient-text">é um desafio real</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Cada uma dessas situações é exaustiva. E normalmente acontecem todas ao mesmo tempo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="group bg-white border border-gray-100 rounded-2xl p-6 hover:border-roxo-200 hover:shadow-lg hover:shadow-roxo-100/50 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl ${p.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            );
          })}
        </div>

        <p className="text-center text-gray-400 mt-10 text-sm italic">
          A Neuromae foi criada para estar presente em todos esses momentos.
        </p>
      </div>
    </section>
  );
}
