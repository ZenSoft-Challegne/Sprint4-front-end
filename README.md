# Sprint4-front-end

Projeto front-end desenvolvido como parte do Challenge “Sprint 4” pela organização **ZenSoft-Challegne**.

## 📋 Visão Geral  
Este projeto implementa a **jornada do paciente**, com sistema de agendamento de teleconsulta, acompanhamento das etapas do atendimento (como “Agendado”, “Link Recebido”, “Em andamento”, “Concluída”), geração automática de diagnóstico/feedback e histórico de consultas persistido localmente.

### Principais funcionalidades  
- Agendamento de nova consulta com dados de paciente e médico.  
- Persistência das consultas via `localStorage`, garantindo que o histórico seja mantido entre sessões.  
- Visualização de etapas da jornada: cada etapa muda o status (“ativa”, “concluída”, “pendente”) conforme o fluxo se desenvolve.  
- Geração automática de diagnóstico e feedback aleatórios ao concluir a consulta.  
- Exibição das consultas recentes e histórico completo, com status, diagnóstico e feedback.  
- Interface responsiva, moderna, implementada com React + TypeScript + Tailwind CSS (ou outras tecnologias que estiver usando).

## 🛠 Tecnologias  
- React  
- TypeScript  
- Tailwind CSS  
- Lucide-React (ícones)  
- React Router (navegação entre páginas)  
- `localStorage` para persistência simples  

## 🎯 Instalação & uso  
1. Clone o repositório  
   ```bash
   git clone https://github.com/ZenSoft-Challegne/Sprint4-front-end.git
Acesse o diretório

bash
Copiar código
cd Sprint4-front-end
Instale as dependências

bash
Copiar código
npm install
ou

bash
Copiar código
yarn
Inicie o servidor de desenvolvimento

bash
Copiar código
npm run dev
ou

bash
Copiar código
yarn dev
Abra seu navegador em http://localhost:3000 (ou a porta que seu ambiente configurar).

🎨 Estrutura de pastas (exemplo)
bash
Copiar código
/src  
  /components    → Componentes reutilizáveis (CardEtapa, FormConsulta, etc.)  
  /pages         → Páginas principais (Jornada, Consultas, etc.)  
  /types         → Definições de tipos (Paciente, Medico, Teleconsulta, EtapaJornada, etc.)  
  /styles        → Arquivos de estilo global ou tema (se aplicável)  
  /utils         → Funções utilitárias (por exemplo geração de strings aleatórias)  
🔁 Fluxo da aplicação
Usuário acessa a página e visualiza as etapas da jornada (inicialmente “Cadastro e Login” já concluída, outras pendentes).

Usuário agenda uma nova consulta via formulário.

A consulta é salva no localStorage e aparece na lista de “Consultas Recentes”.

Conforme o usuário interage (ex: “Recebi o link”, “Iniciar consulta”, “Finalizar consulta”), o status da consulta muda e as etapas da jornada ficam verdes automaticamente.

Ao concluir, são gerados diagnóstico e feedback, exibidos junto à consulta no histórico.

O histórico completo está acessível em outra rota (“Histórico de Consultas”), filtrando apenas as consultas do paciente logado.



📞 Contato
Projeto mantido por ZenSoft-Challegne. Para dúvidas ou sugestões, abra uma issue ou envie uma mensagem no GitHub.