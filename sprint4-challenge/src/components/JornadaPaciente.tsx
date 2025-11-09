import type { EtapaJornada, Teleconsulta } from '../types';
import CardEtapa from './CardEtapa';

interface JornadaPacienteProps {
  consultas: Teleconsulta[];
}

export default function JornadaPaciente({ consultas }: JornadaPacienteProps) {
  const etapas: EtapaJornada[] = [
    { id: 1, titulo: 'Cadastro realizado', descricao: 'Seus dados foram registrados com sucesso no sistema.', status: 'concluida' },
    {
      id: 2,
      titulo: 'Consulta agendada',
      descricao: 'Você possui uma consulta marcada.',
      status: consultas.some(c => c.status === 'AGENDADA') ? 'concluida' : 'pendente',
    },
    {
      id: 3,
      titulo: 'Link recebido',
      descricao: 'Você já recebeu o link de acesso à sua teleconsulta.',
      status: consultas.some(c => c.status === 'LINK_RECEBIDO') ? 'concluida' : 'pendente',
    },
    {
      id: 4,
      titulo: 'Consulta em andamento',
      descricao: 'Sua consulta está acontecendo neste momento.',
      status: consultas.some(c => c.status === 'EM_ANDAMENTO') ? 'ativa' : 'pendente',
    },
    {
      id: 5,
      titulo: 'Consulta concluída',
      descricao: 'Seu atendimento foi finalizado com sucesso.',
      status: consultas.some(c => c.status === 'CONCLUIDA') ? 'concluida' : 'pendente',
    },
  ];

  return (
    <div className="flex flex-col items-center space-y-8 p-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Sua Jornada no IMREA</h1>
      {etapas.map((etapa, index) => (
        <CardEtapa key={etapa.id} etapa={etapa} isLast={index === etapas.length - 1} />
      ))}
    </div>
  );
}
