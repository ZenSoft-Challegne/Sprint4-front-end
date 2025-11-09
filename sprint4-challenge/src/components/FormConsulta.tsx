import { useState } from 'react';
import { Calendar, User, Stethoscope, FileText } from 'lucide-react';
import type { Medico, NovaConsulta, Paciente } from '../types';


interface FormConsultaProps {
    onSuccess?: () => void;
}

export default function FormConsulta({ onSuccess }: FormConsultaProps) {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

    const [formData, setFormData] = useState({
        pacienteNome: '',
        pacienteEmail: '',
        pacienteTelefone: '',
        pacienteCpf: '',
        medicoNome: '',
        medicoEspecialidade: '',
        medicoCrm: '',
        dataHora: '',
        sintomas: '',
    });


    const simularAgendamento = async (novaConsulta: NovaConsulta) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('Consulta simulada:', novaConsulta);
                resolve(true);
            }, 800);
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage(null);

        const paciente: Paciente = {
            id: crypto.randomUUID(),
            nome: formData.pacienteNome,
            email: formData.pacienteEmail,
            telefone: formData.pacienteTelefone,
            cpf: formData.pacienteCpf,
        };

        const medico: Medico = {
            id: crypto.randomUUID(),
            nome: formData.medicoNome,
            especialidade: formData.medicoEspecialidade,
            crm: formData.medicoCrm,
        };

        const novaConsulta: NovaConsulta = {
            paciente,
            medico,
            dataHora: formData.dataHora,
            sintomas: formData.sintomas,
        };

        try {
            await simularAgendamento(novaConsulta);
            setMessage({ type: 'success', text: 'Consulta agendada com sucesso!' });
            setFormData({
                pacienteNome: '',
                pacienteEmail: '',
                pacienteTelefone: '',
                pacienteCpf: '',
                medicoNome: '',
                medicoEspecialidade: '',
                medicoCrm: '',
                dataHora: '',
                sintomas: '',
            });
            if (onSuccess) onSuccess();
        } catch {
            setMessage({ type: 'error', text: 'Erro ao simular agendamento.' });
        }

        setLoading(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const inputStyle =
        'w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent';

    return (
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Agendar Teleconsulta</h2>

            {message && (
                <div
                    className={`mb-6 p-4 rounded-md ${message.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
                        }`}
                >
                    {message.text}
                </div>
            )}


            <div className="mb-6">
                <div className="flex items-center space-x-2 mb-4">
                    <User className="h-5 w-5 text-blue-600" />
                    <h3 className="text-lg font-semibold text-gray-700">Dados do Paciente</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        type="text"
                        name="pacienteNome"
                        value={formData.pacienteNome}
                        onChange={handleChange}
                        placeholder="Nome completo"
                        required
                        className={inputStyle}
                    />
                    <input
                        type="email"
                        name="pacienteEmail"
                        value={formData.pacienteEmail}
                        onChange={handleChange}
                        placeholder="Email"
                        required
                        className={inputStyle}
                    />
                    <input
                        type="tel"
                        name="pacienteTelefone"
                        value={formData.pacienteTelefone}
                        onChange={handleChange}
                        placeholder="Telefone"
                        required
                        className={inputStyle}
                    />
                    <input
                        type="text"
                        name="pacienteCpf"
                        value={formData.pacienteCpf}
                        onChange={handleChange}
                        placeholder="CPF"
                        required
                        className={inputStyle}
                    />
                </div>
            </div>

            <div className="mb-6">
                <div className="flex items-center space-x-2 mb-4">
                    <Stethoscope className="h-5 w-5 text-blue-600" />
                    <h3 className="text-lg font-semibold text-gray-700">Dados do Médico</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input
                        type="text"
                        name="medicoNome"
                        value={formData.medicoNome}
                        onChange={handleChange}
                        placeholder="Nome do médico"
                        required
                        className={inputStyle}
                    />
                    <input
                        type="text"
                        name="medicoEspecialidade"
                        value={formData.medicoEspecialidade}
                        onChange={handleChange}
                        placeholder="Especialidade"
                        required
                        className={inputStyle}
                    />
                    <input
                        type="text"
                        name="medicoCrm"
                        value={formData.medicoCrm}
                        onChange={handleChange}
                        placeholder="CRM"
                        required
                        className={inputStyle}
                    />
                </div>
            </div>


            <div className="mb-6">
                <div className="flex items-center space-x-2 mb-4">
                    <Calendar className="h-5 w-5 text-blue-600" />
                    <h3 className="text-lg font-semibold text-gray-700">Agendamento</h3>
                </div>
                <input
                    type="datetime-local"
                    name="dataHora"
                    value={formData.dataHora}
                    onChange={handleChange}
                    required
                    className={inputStyle}
                />
            </div>


            <div className="mb-6">
                <div className="flex items-center space-x-2 mb-4">
                    <FileText className="h-5 w-5 text-blue-600" />
                    <h3 className="text-lg font-semibold text-gray-700">Sintomas</h3>
                </div>
                <textarea
                    name="sintomas"
                    value={formData.sintomas}
                    onChange={handleChange}
                    placeholder="Descreva os sintomas..."
                    rows={4}
                    className={inputStyle}
                />
            </div>

            <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
                {loading ? 'Agendando...' : 'Agendar Consulta'}
            </button>
        </form>
    );
}
