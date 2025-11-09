import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FAQItem {
  pergunta: string;
  resposta: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      pergunta: 'O que é a jornada do usuário em teleconsultas?',
      resposta:
        'É o mapeamento completo de todas as etapas que um paciente percorre ao utilizar serviços de teleconsulta, desde o cadastro inicial até o pós-atendimento e feedback.',
    },
    {
      pergunta: 'Como funciona o agendamento de teleconsultas?',
      resposta:
        'O paciente acessa a plataforma, seleciona o médico e especialidade desejados, escolhe data e horário disponíveis, e confirma o agendamento. Um link para a consulta é enviado por email.',
    },
    {
      pergunta: 'Quais são as principais etapas da jornada?',
      resposta:
        'As etapas incluem: Login/Cadastro, Agendamento, Preparação, Consulta Virtual, Prescrição/Diagnóstico, Feedback e Acompanhamento pós-consulta.',
    },
    {
      pergunta: 'Como posso visualizar meu histórico de consultas?',
      resposta:
        'Após fazer login, acesse a seção "Minha Jornada" onde você encontrará todas as suas consultas agendadas, realizadas e o histórico completo de atendimentos.',
    },
    {
      pergunta: 'É possível cancelar ou remarcar uma consulta?',
      resposta:
        'Sim, consultas podem ser remarcadas ou canceladas através da plataforma com até 24 horas de antecedência.',
    },
    {
      pergunta: 'Como funciona a integração com a API?',
      resposta:
        'A plataforma utiliza requisições HTTP (GET, POST, PUT, DELETE) para comunicação com o backend Java, garantindo sincronização em tempo real dos dados.',
    },
    {
      pergunta: 'Quais informações são necessárias para agendar uma consulta?',
      resposta:
        'São necessários: dados pessoais do paciente (nome, email, CPF, telefone), especialidade médica desejada, data e horário preferidos, e descrição dos sintomas.',
    },
    {
      pergunta: 'A plataforma é segura?',
      resposta:
        'Sim, utilizamos as melhores práticas de segurança para proteção de dados pessoais e informações médicas, em conformidade com a LGPD.',
    },
    {
      pergunta: 'Posso acessar a plataforma pelo celular?',
      resposta:
        'Sim, a plataforma é totalmente responsiva e pode ser acessada de qualquer dispositivo: smartphone, tablet ou computador.',
    },
    {
      pergunta: 'Como dar feedback sobre a consulta?',
      resposta:
        'Após a conclusão da consulta, você receberá um link para avaliar o atendimento e deixar comentários sobre sua experiência.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <HelpCircle className="h-16 w-16" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Perguntas Frequentes
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto text-center">
            Encontre respostas para as dúvidas mais comuns sobre nossa plataforma
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900 text-left">
                  {item.pergunta}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="h-6 w-6 text-blue-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-6 w-6 text-blue-600 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-700">{item.resposta}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ainda tem dúvidas?</h2>
          <p className="text-gray-700 mb-6">
            Entre em contato conosco e teremos prazer em ajudá-lo
          </p>
          <a
            href="/contato"
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Fale Conosco
          </a>
        </div>
      </section>
    </div>
  );
}
