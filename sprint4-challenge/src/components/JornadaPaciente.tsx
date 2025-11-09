
import type { EtapaJornada } from '../types';
import CardEtapa from './CardEtapa';

const etapas: EtapaJornada[] = [
  {
    id: 1,
    titulo: 'Cadastro realizado',
    descricao: 'Seus dados foram registrados com sucesso no sistema.',
    status: 'concluida',
  },
  {
    id: 2,
    titulo: 'Consulta agendada',
    descricao: 'Sua próxima consulta está marcada para 15/11/2025 às 14h.',
    status: 'ativa',
  },
  {
    id: 3,
    titulo: 'Consulta realizada',
    descricao: 'Aguarde o registro de informações do seu atendimento.',
    status: 'pendente',
  },
];

export default function JornadaPaciente() {
  return (
    <div className="flex flex-col items-center space-y-8 p-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Sua Jornada no IMREA</h1>
      {etapas.map((etapa, index) => (
        <CardEtapa key={etapa.id} etapa={etapa} isLast={index === etapas.length - 1} />
      ))}
    </div>
  );
}
