import { User, Github } from 'lucide-react';
import type { Integrante } from '../types';

export default function Integrantes() {
  const integrantes: Integrante[] = [
    {
      nome: 'Vinicius Romaguera Cardozo',
      rm: 'RM562308',
      turma: '1TDSPY',
      github: 'https://github.com/Vircsss',
    },
    {
      nome: 'Nicolas de Oliveira Jacob',
      rm: 'RM564205',
      turma: '1TDSPY',
      github: 'https://github.com/Nicolas-Jacob',
    },
    {
      nome: 'Gustavo Barrios de Araújo',
      rm: 'RM563358',
      turma: '1TDSPY',
      github: 'https://github.com/Gustavo-B-Araujo',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nossa Equipe</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Conheça os desenvolvedores responsáveis por este projeto
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {integrantes.map((integrante, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <User className="h-12 w-12 text-blue-600" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">{integrante.nome}</h3>

                <div className="text-center mb-4">
                  <p className="text-gray-600">
                    <span className="font-semibold">RM:</span> {integrante.rm}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">Turma:</span> {integrante.turma}
                  </p>
                </div>

                {integrante.github && (
                  <a
                    href={integrante.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                    <span>GitHub</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Sobre o Projeto</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              <strong>Instituição:</strong> FIAP - Faculdade de Informática e Administração
              Paulista
            </p>
            <p>
              <strong>Curso:</strong> Análise e Desenvolvimento de Sistemas
            </p>
            <p>
              <strong>Disciplina:</strong> Front-End Design Engineering
            </p>
            <p>
              <strong>Tema:</strong> Mapeamento da Jornada do Usuário em Teleconsultas
            </p>
            <p>
              <strong>Tecnologias:</strong> React, TypeScript, Vite, TailwindCSS, React Router
            </p>
          </div>
        </div>

        <div className="mt-8 bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Links do Projeto</h2>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a
              href="https://github.com/ZenSoft-Challegne/Sprint4-front-end"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
            >
              <Github className="h-5 w-5" />
              <span>Repositório GitHub</span>
            </a>
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Deploy Vercel
            </a>
        
          </div>
        </div>
      </section>
    </div>
  );
}
