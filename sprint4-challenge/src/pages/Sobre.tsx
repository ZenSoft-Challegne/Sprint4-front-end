import { Target, TrendingUp, Heart, Users } from 'lucide-react';

export default function Sobre() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre o Projeto</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Entenda o conceito de jornada do usuário e como a teleconsulta está transformando o
            acesso à saúde
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">O que é Jornada do Usuário?</h2>
          <p className="text-lg text-gray-700 mb-4">
            A jornada do usuário é o mapeamento de todas as interações que uma pessoa tem com um
            serviço ou produto, desde o primeiro contato até o pós-atendimento. No contexto da
            saúde digital, isso significa entender cada etapa que um paciente percorre durante uma
            teleconsulta.
          </p>
          <p className="text-lg text-gray-700">
            Este mapeamento é essencial para identificar pontos de melhoria, otimizar processos e
            garantir uma experiência positiva para todos os envolvidos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <Target className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Nosso Objetivo</h3>
            <p className="text-gray-700">
              Criar uma visualização clara e interativa da jornada do paciente em teleconsultas,
              facilitando a compreensão de cada etapa e seus pontos críticos.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <TrendingUp className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Impacto</h3>
            <p className="text-gray-700">
              Melhorar a qualidade do atendimento digital, reduzir barreiras de acesso e promover
              uma experiência mais humanizada na telemedicina.
            </p>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            O Impacto da Teleconsulta
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <Heart className="h-8 w-8 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Acessibilidade</h3>
                <p className="text-gray-700">
                  Permite que pacientes em áreas remotas ou com mobilidade reduzida tenham acesso a
                  atendimento médico de qualidade.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Users className="h-8 w-8 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Eficiência</h3>
                <p className="text-gray-700">
                  Reduz tempo de deslocamento, custos operacionais e facilita o agendamento de
                  consultas.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Target className="h-8 w-8 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Continuidade</h3>
                <p className="text-gray-700">
                  Facilita o acompanhamento contínuo de pacientes crônicos e a manutenção de
                  históricos médicos.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <TrendingUp className="h-8 w-8 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Inovação</h3>
                <p className="text-gray-700">
                  Impulsiona o desenvolvimento de novas tecnologias e práticas no setor de saúde
                  digital.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
