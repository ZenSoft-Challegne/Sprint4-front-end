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


export interface Teleconsulta {
  id: string;
  paciente: Paciente;
  medico: Medico;
  dataHora: string;
  sintomas?: string;
  diagnostico?: string;
  prescricao?: string;
  feedback?: string;
  avaliacao?: number;
}