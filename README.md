# Sprint4-front-end

Projeto front-end desenvolvido como parte do Challenge “Sprint 4” pela organização **ZenSoft-Challegne**.

## 👥 Equipe

| Nome | RM | Turma | GitHub |
|------|-------|-------|--------|
| Vinicius Romaguera Cardozo | RM562308 | 1TDSPY | [@Vircsss](https://github.com/Vircsss) |
| Nicolas de Oliveira Jacob | RM564205 | 1TDSPY | [@Nicolas-Jacob](https://github.com/Nicolas-Jacob) |
| Gustavo Barrios de Araújo | RM563358 | 1TDSPY | [@Gustavo-B-Araujo](https://github.com/Gustavo-B-Araujo) |

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
1. Clone o repositório:
```bash
git clone https://github.com/ZenSoft-Challegne/Sprint4-front-end
cd sprint4-challenge
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto:
```bash
npm run dev
```

4. Acesse no navegador:
```
http://localhost:5173
```

```bash
src/
├── components/          # Componentes reutilizáveis
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── JornadaPaciente.tsx
│   ├── CardEtapa.tsx
│   └── FormConsulta.tsx
├── pages/              # Páginas da aplicação
│   ├── Home.tsx
│   ├── Sobre.tsx
│   ├── FAQ.tsx
│   ├── Contato.tsx
│   ├── Integrantes.tsx
│   ├── Jornada.tsx
│   └── ConsultaDetalhes.tsx
├── types/              # Definições de tipos
│   └── index.ts
├── App.tsx             # Componente principal
└── main.tsx            # Entry point
```


🔁 Fluxo da aplicação
Usuário acessa a página e visualiza as etapas da jornada (inicialmente “Cadastro e Login” já concluída, outras pendentes).

Usuário agenda uma nova consulta via formulário.

A consulta é salva no localStorage e aparece na lista de “Consultas Recentes”.

Conforme o usuário interage (ex: “Recebi o link”, “Iniciar consulta”, “Finalizar consulta”), o status da consulta muda e as etapas da jornada ficam verdes automaticamente.

Ao concluir, são gerados diagnóstico e feedback, exibidos junto à consulta no histórico.

O histórico completo está acessível em outra rota (“Histórico de Consultas”), filtrando apenas as consultas do paciente logado.



📞 Contato
Projeto mantido por ZenSoft-Challegne. Para dúvidas ou sugestões, abra uma issue ou envie uma mensagem no GitHub.
