import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, List } from 'lucide-react';
import CardEtapa from '../components/CardEtapa';
import FormConsulta from '../components/FormConsulta';
import type { EtapaJornada, Teleconsulta } from '../types';

export default function Jornada() {
    const [showForm, setShowForm] = useState(false);
    const [consultas, setConsultas] = useState<Teleconsulta[]>([]);
    const pacienteLogadoId = '1'; 
    const diagnosticos = [
        'Paciente apresenta melhora significativa após o tratamento.',
        'Quadro estável, seguir com acompanhamento em 15 dias.',
        'Sinais leves de inflamação — prescrição de anti-inflamatório leve.',
        'Recomendado repouso e hidratação adequada.',
        'Sintomas compatíveis com alergia sazonal — tratamento sintomático.',
    ];

    const feedbacks = [
        'Atendimento excelente, muito atencioso.',
        'Consulta rápida e eficiente.',
        'Tudo ocorreu bem, médico explicou tudo com clareza.',
        'Boa experiência, recomendaria o serviço.',
        'Consulta ótima, me senti bem orientado.',
    ];

   
    useEffect(() => {
        const salvas = localStorage.getItem('consultas');
        if (salvas) {
            const todas = JSON.parse(salvas) as Teleconsulta[];
            setConsultas(todas.filter((c) => c.paciente.id === pacienteLogadoId));
        }
    }, []);

  
    useEffect(() => {
        const todas = JSON.parse(localStorage.getItem('consultas') || '[]');
        const semAsDoPaciente = todas.filter(
            (c: Teleconsulta) => c.paciente.id !== pacienteLogadoId
        );
        const atualizadas = [...semAsDoPaciente, ...consultas];
        localStorage.setItem('consultas', JSON.stringify(atualizadas));
    }, [consultas]);

 
    const atualizarStatus = (id: string, novoStatus: Teleconsulta['status']) => {
        setConsultas((prev) =>
            prev.map((c) => {
                if (c.id === id) {
                    if (novoStatus === 'CONCLUIDA') {
                        return {
                            ...c,
                            status: novoStatus,
                            diagnostico:
                                diagnosticos[Math.floor(Math.random() * diagnosticos.length)],
                            feedback:
                                feedbacks[Math.floor(Math.random() * feedbacks.length)],
                        };
                    }
                    return { ...c, status: novoStatus };
                }
                return c;
            })
        );
    };

  
    const handleDeletar = (id: string) => {
        if (confirm('Deseja realmente deletar esta consulta?')) {
            setConsultas((prev) => prev.filter((c) => c.id !== id));
        }
    };

    
    const etapas: EtapaJornada[] = [
        {
            id: 1,
            titulo: 'Cadastro e Login',
            descricao: 'O paciente cria sua conta ou faz login na plataforma.',
            status: 'concluida',
        },
        {
            id: 2,
            titulo: 'Agendamento',
            descricao:
                'Escolha do médico, especialidade, data e horário da consulta.',
            status: consultas.some((c) => c.status === 'AGENDADA') ? 'ativa' : consultas.some((c) => c.status !== 'PENDENTE') ? 'concluida' : 'pendente',
        },
        {
            id: 3,
            titulo: 'Preparação',
            descricao: 'Recebimento de confirmação e link de acesso.',
            status: consultas.some((c) => c.status === 'LINK_RECEBIDO') ? 'ativa' : consultas.some((c) => ['EM_ANDAMENTO', 'CONCLUIDA'].includes(c.status)) ? 'concluida' : 'pendente',
        },
        {
            id: 4,
            titulo: 'Consulta Virtual',
            descricao: 'Atendimento médico online.',
            status: consultas.some((c) => c.status === 'EM_ANDAMENTO') ? 'ativa' : consultas.some((c) => c.status === 'CONCLUIDA') ? 'concluida' : 'pendente',
        },
        {
            id: 5,
            titulo: 'Diagnóstico e Prescrição',
            descricao: 'O médico fornece diagnóstico e prescrição digital.',
            status: consultas.some((c) => c.status === 'CONCLUIDA') ? 'concluida' : 'pendente',
        },
        {
            id: 6,
            titulo: 'Feedback',
            descricao: 'Paciente avalia a experiência da teleconsulta.',
            status: consultas.some((c) => c.feedback) ? 'concluida' : 'pendente',
        },
        {
            id: 7,
            titulo: 'Acompanhamento',
            descricao: 'Monitoramento pós-consulta e possíveis retornos.',
            status: consultas.some((c) => c.status === 'CONCLUIDA') ? 'concluida' : 'pendente',
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Jornada do Paciente
                    </h1>
                    <p className="text-xl opacity-90 max-w-3xl">
                        Acompanhe o progresso de sua teleconsulta e veja cada etapa
                        concluída.
                    </p>
                </div>
            </section>

           
            <section className="max-w-7xl mx-auto px-4 py-16">
                <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
                    <button
                        onClick={() => setShowForm(!showForm)}
                        className="flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                        {showForm ? <List className="mr-2 h-5 w-5" /> : <Plus className="mr-2 h-5 w-5" />}
                        {showForm ? 'Ver Jornada' : 'Agendar Consulta'}
                    </button>

                    <Link
                        to="/consultas"
                        className="flex items-center justify-center px-6 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                    >
                        <List className="mr-2 h-5 w-5" />
                        Histórico de Consultas
                    </Link>
                </div>

                {showForm ? (
                    <FormConsulta
                        onSuccess={(novaConsulta?: Teleconsulta) => {
                            if (novaConsulta) {
                                setConsultas((prev) => [...prev, novaConsulta]);
                                setShowForm(false);
                            }
                        }}
                    />
                ) : (
                    <>
                   
                        <div className="mb-16">
                            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                                Etapas da Jornada
                            </h2>
                            <div className="flex flex-col items-center space-y-8">
                                {etapas.map((etapa, index) => (
                                    <CardEtapa
                                        key={etapa.id}
                                        etapa={etapa}
                                        isLast={index === etapas.length - 1}
                                    />
                                ))}
                            </div>
                        </div>

                
                        <div className="bg-white rounded-lg shadow-md p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                Consultas Recentes
                            </h2>

                            {consultas.length === 0 ? (
                                <p className="text-gray-600">Nenhuma consulta agendada ainda.</p>
                            ) : (
                                <div className="space-y-4">
                                    {consultas.map((consulta) => (
                                        <div
                                            key={consulta.id}
                                            className="border border-gray-200 rounded-lg p-4"
                                        >
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <h3 className="font-semibold text-lg">
                                                        {consulta.paciente.nome}
                                                    </h3>
                                                    <p className="text-gray-600">
                                                        Dr(a). {consulta.medico.nome}
                                                    </p>
                                                    <p className="text-sm text-gray-500">
                                                        {new Date(consulta.dataHora).toLocaleString('pt-BR')}
                                                    </p>

                                                    <span
                                                        className={`inline-block mt-2 px-3 py-1 rounded-full text-sm ${consulta.status === 'CONCLUIDA'
                                                            ? 'bg-green-100 text-green-800'
                                                            : consulta.status === 'EM_ANDAMENTO'
                                                                ? 'bg-blue-100 text-blue-800'
                                                                : consulta.status === 'LINK_RECEBIDO'
                                                                    ? 'bg-yellow-100 text-yellow-800'
                                                                    : 'bg-gray-100 text-gray-800'
                                                            }`}
                                                    >
                                                        {consulta.status}
                                                    </span>

                                                
                                                    {consulta.diagnostico && (
                                                        <p className="mt-3 text-gray-700">
                                                            <strong>Diagnóstico:</strong> {consulta.diagnostico}
                                                        </p>
                                                    )}
                                                    {consulta.feedback && (
                                                        <p className="text-gray-700">
                                                            <strong>Feedback:</strong> {consulta.feedback}
                                                        </p>
                                                    )}
                                                </div>

                                                <div className="flex flex-col items-end gap-2">
                                                    {consulta.status === 'AGENDADA' && (
                                                        <button
                                                            onClick={() =>
                                                                atualizarStatus(consulta.id, 'LINK_RECEBIDO')
                                                            }
                                                            className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-md hover:bg-yellow-200 transition-colors"
                                                        >
                                                            Recebi o link
                                                        </button>
                                                    )}

                                                    {consulta.status === 'LINK_RECEBIDO' && (
                                                        <button
                                                            onClick={() =>
                                                                atualizarStatus(consulta.id, 'EM_ANDAMENTO')
                                                            }
                                                            className="px-4 py-2 bg-blue-100 text-blue-800 rounded-md hover:bg-blue-200 transition-colors"
                                                        >
                                                            Iniciar Consulta
                                                        </button>
                                                    )}

                                                    {consulta.status === 'EM_ANDAMENTO' && (
                                                        <button
                                                            onClick={() =>
                                                                atualizarStatus(consulta.id, 'CONCLUIDA')
                                                            }
                                                            className="px-4 py-2 bg-green-100 text-green-800 rounded-md hover:bg-green-200 transition-colors"
                                                        >
                                                            Finalizar Consulta
                                                        </button>
                                                    )}

                                                    <button
                                                        onClick={() => handleDeletar(consulta.id)}
                                                        className="px-4 py-2 text-red-600 hover:bg-red-50 rounded-md transition-colors"
                                                    >
                                                        Deletar
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </>
                )}
            </section>
        </div>
    );
}
