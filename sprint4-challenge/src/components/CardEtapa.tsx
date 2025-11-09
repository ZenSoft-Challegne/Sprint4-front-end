import { CheckCircle, Circle, Clock } from 'lucide-react';

interface EtapaJornada {
  id: number;
  titulo: string;
  descricao: string;
  status: 'concluida' | 'ativa' | 'pendente';
}

interface CardEtapaProps {
  etapa: EtapaJornada;
  isLast?: boolean;
}

export default function CardEtapa({ etapa, isLast }: CardEtapaProps) {
  const getStatusIcon = () => {
    switch (etapa.status) {
      case 'concluida':
        return <CheckCircle className="h-8 w-8 text-green-500" />;
      case 'ativa':
        return <Clock className="h-8 w-8 text-blue-500 animate-pulse" />;
      default:
        return <Circle className="h-8 w-8 text-gray-300" />;
    }
  };

  const getStatusColor = () => {
    switch (etapa.status) {
      case 'concluida':
        return 'border-green-500 bg-green-50';
      case 'ativa':
        return 'border-blue-500 bg-blue-50';
      default:
        return 'border-gray-300 bg-white';
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div
        className={`w-full max-w-sm p-6 rounded-lg border-2 ${getStatusColor()} transition-all duration-300 hover:shadow-lg`}
      >
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">{getStatusIcon()}</div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{etapa.titulo}</h3>
            <p className="text-sm text-gray-600">{etapa.descricao}</p>
          </div>
        </div>
      </div>

      {!isLast && (
        <div className="w-1 h-12 bg-gray-300 my-4 hidden md:block">
          <div
            className={`w-full ${
              etapa.status === 'concluida' ? 'bg-green-500 h-full' : 'h-0'
            } transition-all duration-500`}
          />
        </div>
      )}
    </div>
  );
}
