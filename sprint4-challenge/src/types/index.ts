// src/types.ts

// 🧍 Paciente
export interface Paciente {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  cpf: string;
}

// 👨‍⚕️ Médico
export interface Medico {
  id: string;
  nome: string;
  especialidade: string;
  crm: string;
}

// 🇧🇷 Estados/status possíveis de uma teleconsulta
export type ConsultaStatus =
  | 'AGENDADA'
  | 'LINK_RECEBIDO'
  | 'EM_ANDAMENTO'
  | 'CONCLUIDA'
  | 'CANCELADA'
  | 'PENDENTE';

// 💻 Teleconsulta principal
export interface Teleconsulta {
  id: string;
  paciente: Paciente;
  medico: Medico;
  dataHora: string;      // ISO string
  icon?: string;         // opcional
  status: ConsultaStatus;
  sintomas?: string;
  diagnostico?: string;
  prescricao?: string;
  feedback?: string;
  avaliacao?: number;
}

// ➕ Criação de nova consulta (cliente/produto não fornece id nem status)
export type NovaConsulta = Omit<Teleconsulta, 'id' | 'status'>;

// 🔄 Atualização parcial de consulta (uso em PATCH/editar)
export type AtualizarConsulta = Partial<Omit<Teleconsulta, 'id'>>;

// 🔁 Etapas da jornada (para exibir progresso)
export interface EtapaJornada {
  id: number;
  titulo: string;
  descricao: string;
  icon?: string;
  status: 'concluida' | 'ativa' | 'pendente';
}
