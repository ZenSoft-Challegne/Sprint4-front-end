
export interface Paciente {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  cpf: string;
}


export interface Medico {
  id: string;
  nome: string;
  especialidade: string;
  crm: string;
}


export type ConsultaStatus =
  | 'AGENDADA'
  | 'LINK_RECEBIDO'
  | 'EM_ANDAMENTO'
  | 'CONCLUIDA'
  | 'CANCELADA'
  | 'PENDENTE';


export interface Teleconsulta {
  id: string;
  paciente: Paciente;
  medico: Medico;
  dataHora: string;    
  icon?: string;       
  status: ConsultaStatus;
  sintomas?: string;
  diagnostico?: string;
  prescricao?: string;
  feedback?: string;
  avaliacao?: number;
}


export type NovaConsulta = Omit<Teleconsulta, 'id' | 'status'>;


export type AtualizarConsulta = Partial<Omit<Teleconsulta, 'id'>>;


export interface EtapaJornada {
  id: number;
  titulo: string;
  descricao: string;
  icon?: string;
  status: 'concluida' | 'ativa' | 'pendente';
}


export interface ContatoFormData {
  nome: string;
  email: string;
  assunto: string;
  mensagem: string;
}

export interface Integrante {
  nome: string;
  rm: string;
  turma: string;
  github?: string;
}