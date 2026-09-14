// docs/dados/portfolio.js — conteúdo do portfólio.
// É o único arquivo editado no dia a dia. Campos marcados "opcional" podem ser omitidos.
// Textos entre < > são placeholders: o app.js avisa no console enquanto não forem preenchidos.
window.PORTFOLIO = {
  atualizadoEm: "2026-09-14",

  perfil: {
    nome: "Gabriel Travensolli da Silva",
    nomeCurto: "Gabriel Travensolli",
    ra: "2581392613017",
    inicio: "2026-02", // ano-mês de ingresso: define o 1DSM e o status de cada semestre
    foto: "img/foto.jpg",
    bio: [
      "Sou estudante de Desenvolvimento de Software Multiplataforma na Fatec Jacareí.",
      "Gosto de tecnologia, automação e inteligência artificial, e busco aplicar o que aprendo em projetos reais com Python, TypeScript, React e Node.js."
    ],
    links: {
      github: "https://github.com/travensolli",
      linkedin: "https://linkedin.com/in/travensolli",
      pitch: null // opcional: link do vídeo pitch do semestre par mais recente
    }
  },

  interesses: {
    estudo: ["Inteligência artificial aplicada", "Automação de processos", "Desenvolvimento web"],
    aplicacoes: ["Assistentes com LLMs (OpenAI, Gemini)", "Ferramentas de produtividade", "Integrações entre sistemas e APIs"],
    foraDoCodigo: ["<hobby ou gosto pessoal>", "<outro gosto pessoal>"]
  },

  // Atividades feitas nas matérias: uma entrada por atividade.
  // Obrigatórios: materia (sigla da grade), nome, repo.
  // Opcionais: descricao, tecnologias, privado.
  atividades: [
    {
      materia: "IAL-010",
      nome: "Atividade 7 — Prática de algoritmos",
      repo: "https://github.com/travensolli/algoritmos-atividade7",
      descricao: "Exercícios de algoritmos resolvidos em TypeScript.",
      tecnologias: ["TypeScript"],
      privado: true
    },
    {
      materia: "ISW-028",
      nome: "Atividade 1 — Aplicação Node.js + Express",
      repo: "https://github.com/travensolli/dev-web1-atv1",
      descricao: "Primeira aplicação web da disciplina, com servidor em Express.",
      tecnologias: ["Node.js", "Express"],
      privado: true
    },
    {
      materia: "ISW-028",
      nome: "Atividade 2 — Consulta com requisição HTTP",
      repo: "https://github.com/travensolli/dev-web1-atv2",
      descricao: "Aplicação web que consulta dados por meio de requisições HTTP.",
      privado: true
    },
    {
      materia: "ISW-028",
      nome: "Atividade 3 — Cadastro de usuários",
      repo: "https://github.com/travensolli/dev-web1-atv3",
      descricao: "Aplicação web para cadastro, listagem e exclusão de usuários.",
      privado: true
    },
    {
      materia: "ISW-028",
      nome: "Atividade 4 — Cadastro de jogos da Mega-Sena",
      repo: "https://github.com/travensolli/dev-web1-atv4",
      descricao: "Front-end com fetch e validação consumindo uma API REST que grava no PostgreSQL.",
      tecnologias: ["JavaScript", "Node.js", "Express", "PostgreSQL"],
      privado: true
    },
    {
      materia: "ISW-028",
      nome: "Atividade 5 — API Mega-Sena",
      repo: "https://github.com/travensolli/dev-web1-atv5",
      descricao: "Carrega o CSV oficial de resultados no PostgreSQL e disponibiliza os dados via API REST.",
      tecnologias: ["Node.js", "Express", "PostgreSQL"],
      privado: true
    }
  ],

  // Projeto Integrador (ABP): um por semestre. A chave é o id do semestre.
  // Obrigatórios: nome, repo, descricao, contribuicao, tecnologias. Opcional: privado.
  // As matérias integradas vêm da grade (grade-dsm.js) e não precisam ser repetidas aqui.
  abp: {
    "1DSM": {
      nome: "Scrum Flow — backend",
      repo: "https://github.com/travensolli/backend-scrum-flow-abp",
      descricao: "API REST para gestão de usuários, módulos, questões e exames em ambientes educacionais, com autenticação JWT.",
      contribuicao: "<o que você fez: partes do código, decisões e responsabilidades no time>",
      tecnologias: ["Node.js", "Express", "PostgreSQL", "JWT"],
      privado: true
    },
    "2DSM": null // em desenvolvimento
  },

  // Obrigatórios: nome, descricao, contribuicao, tecnologias, repo, ano. Opcionais: demo, privado.
  pessoais: [
    {
      nome: "Assistente Financeiro WhatsApp",
      descricao: "Assistente financeiro pessoal que integra mensagens do WhatsApp a uma base de dados financeira, com IA para analisar gastos.",
      contribuicao: "<sua contribuição>",
      tecnologias: ["Python", "OpenAI"],
      repo: "https://github.com/travensolli/assistente-financeiro-whatsapp",
      ano: 2025
    },
    {
      nome: "CR2 → JPEG Converter",
      descricao: "Conversão em lote de imagens RAW (CR2) da Canon para JPEG, com controle de qualidade.",
      contribuicao: "<sua contribuição>",
      tecnologias: ["Python"],
      repo: "https://github.com/travensolli/cr2-jpeg-converter",
      ano: 2026
    },
    {
      nome: "Roda da Vida App",
      descricao: "Aplicação web para avaliar o equilíbrio pessoal nos 7 pilares do desenvolvimento pessoal, com gráfico radar e análise personalizada.",
      contribuicao: "<sua contribuição>",
      tecnologias: ["TypeScript", "React"],
      repo: "https://github.com/travensolli/roda-da-vida-app",
      demo: "https://roda-da-vida-app.vercel.app",
      ano: 2026
    }
  ],

  // Mesmo formato de "pessoais". Grupo vazio não aparece no site.
  profissionais: [],

  complementar: {
    formacao: ["Tecnólogo em Desenvolvimento de Software Multiplataforma — Fatec Jacareí (2026–2028, em andamento)"],
    cursos: ["Formação em Dados — DNC"],
    idiomas: ["<idioma — nível>"],
    conhecimentos: ["Python", "TypeScript", "JavaScript", "React", "Node.js", "Express", "PostgreSQL", "Git", "Playwright", "RabbitMQ", "APIs OpenAI e Gemini"]
  }
};
