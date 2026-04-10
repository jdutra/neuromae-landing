import { Clock, FileText, BarChart2, CheckCircle, Mic, MessageCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Manda mensagem no WhatsApp",
    desc: "Sem app novo, sem cadastro complicado. É só salvar o número e começar a conversar. A Neuromae responde em segundos.",
    highlight: false,
  },
  {
    number: "02",
    icon: CheckCircle,
    title: "Ela entende o que você está passando",
    desc: "Primeiro acolhe — porque mãe exausta precisa ser ouvida. Depois orienta com estratégias práticas baseadas em ABA, terapia ocupacional e regulação emocional.",
    highlight: true,
  },
  {
    number: "03",
    icon: FileText,
    title: "Guarda seus documentos",
    desc: "Manda o laudo, a receita, o relatório da fono. A Neuromae lê e guarda tudo organizado. Na próxima consulta é só pedir.",
    highlight: false,
  },
];

const features = [
  {
    icon: Clock,
    title: "24 horas, 7 dias",
    desc: "Sem plantão, sem fila. Disponível quando você mais precisa — inclusive às 3h da manhã.",
  },
  {
    icon: Mic,
    title: "Mensagem de voz",
    desc: "Manda áudio que ela transcreve e responde. Sem precisar digitar quando você está com as mãos ocupadas.",
  },
  {
    icon: BarChart2,
    title: "Relatório de evolução",
    desc: "Gera planilha com crises, eventos e check-ins do último mês. Perfeito para levar ao neuropediatra.",
  },
  {
    icon: FileText,
    title: "PDF para consultas",
    desc: "Monta um resumo médico completo do seu filho para você não esquecer nada na próxima consulta.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 px-6 bg-gray-50" id="como-funciona">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-roxo-100 text-roxo-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Como funciona
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
            Simples como mandar um<br />
            <span className="gradient-text">áudio para uma amiga</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Só que essa amiga tem formação em neurodesenvolvimento, responde em segundos e nunca julga.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className={`relative rounded-2xl p-8 ${
                  step.highlight
                    ? "gradient-roxo text-white shadow-2xl shadow-roxo-300/40 scale-105"
                    : "bg-white border border-gray-100"
                }`}
              >
                <span className={`text-5xl font-black mb-4 block ${step.highlight ? "text-white/20" : "text-gray-100"}`}>
                  {step.number}
                </span>
                <Icon className={`w-7 h-7 mb-3 ${step.highlight ? "text-white" : "text-roxo-600"}`} />
                <h3 className={`font-bold text-xl mb-3 ${step.highlight ? "text-white" : "text-gray-900"}`}>
                  {step.title}
                </h3>
                <p className={`text-sm leading-relaxed ${step.highlight ? "text-white/80" : "text-gray-500"}`}>
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Feature grid */}
        <div className="bg-white rounded-3xl border border-gray-100 p-8">
          <h3 className="text-xl font-black text-gray-900 text-center mb-8">
            E ainda faz muito mais
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-roxo-100 flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-6 h-6 text-roxo-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1">{f.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
