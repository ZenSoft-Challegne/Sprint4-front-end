import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Users, BarChart3, Shield } from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: Calendar,
      title: 'Agendamento Simplificado',
      description: 'Agende sua teleconsulta de forma rápida e intuitiva',
    },
    {
      icon: Users,
      title: 'Acompanhamento Completo',
      description: 'Visualize toda a jornada do paciente em um só lugar',
    },
    {
      icon: BarChart3,
      title: 'Análise de Dados',
      description: 'Insights sobre o processo de atendimento digital',
    },
    {
      icon: Shield,
      title: 'Segurança Garantida',
      description: 'Seus dados protegidos com as melhores práticas',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Mapeamento da Jornada do Usuário
            <span className="text-blue-600"> ZenSoft</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Explore e visualize cada etapa da experiência do paciente durante o atendimento médico
            digital, desde o agendamento até o pós-atendimento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/jornada"
              className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Explorar Jornada
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/sobre"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-colors"
            >
              Saiba Mais
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Por que mapear a jornada?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-blue-600 text-white py-16 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto para começar?</h2>
          <p className="text-xl mb-8 opacity-90">
            Descubra como podemos melhorar a experiência das teleconsultas
          </p>
          <Link
            to="/jornada"
            className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Ver Jornada Completa
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
