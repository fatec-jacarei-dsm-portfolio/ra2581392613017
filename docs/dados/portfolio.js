// docs/dados/portfolio.js — conteúdo do portfólio.
// É o único arquivo editado no dia a dia. Campos marcados "opcional" podem ser omitidos.
// Textos entre < > são placeholders: o app.js avisa no console enquanto não forem preenchidos.
window.PORTFOLIO = {
  atualizadoEm: "2026-09-17",

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
      linkedin: "https://www.linkedin.com/in/gabrieltravensolli/",
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
      nome: "Atividade 1 — Estruturas de decisão e repetição while",
      repo: "https://github.com/travensolli/ial010-atividade1",
      descricao: "Dez programas de console que exercitam estruturas de decisão, repetição com while e geração de números aleatórios com a classe Math.",
      tecnologias: ["JavaScript", "Node.js"]
    },
    {
      materia: "IAL-010",
      nome: "Atividade 2 — Laço for, tabela ASCII e strings",
      repo: "https://github.com/travensolli/ial010-atividade2",
      descricao: "Dez programas com laço for aplicado a números, códigos ASCII, strings e arrays.",
      tecnologias: ["JavaScript", "Node.js"]
    },
    {
      materia: "IAL-010",
      nome: "Atividade 3 — Funções",
      repo: "https://github.com/travensolli/ial010-atividade3",
      descricao: "Dez funções que resolvem impressão de intervalos, operações aritméticas, concatenação de textos, somatório e fatorial.",
      tecnologias: ["JavaScript", "Node.js"]
    },
    {
      materia: "IAL-010",
      nome: "Atividade 4 — Arrays e matrizes",
      repo: "https://github.com/travensolli/ial010-atividade4",
      descricao: "Dez funções para criar e manipular arrays unidimensionais e bidimensionais a partir de strings e intervalos numéricos.",
      tecnologias: ["JavaScript", "Node.js"]
    },
    {
      materia: "IAL-010",
      nome: "Atividade 5 — Funções, arrays e JSON",
      repo: "https://github.com/travensolli/ial010-atividade5",
      descricao: "Dez funções que convertem textos em dados, sorteiam, ordenam e filtram arrays e devolvem resultados em JSON.",
      tecnologias: ["JavaScript", "Node.js", "JSON"]
    },
    {
      materia: "IAL-010",
      nome: "Atividade 6 — Algoritmos em TypeScript",
      repo: "https://github.com/travensolli/ial010-atividade6",
      descricao: "Dez algoritmos sobre strings, arrays e tipos: palíndromos, força de senha, filas, cifra de César, ranking e compactação RLE.",
      tecnologias: ["TypeScript", "Node.js"]
    },
    {
      materia: "IAL-010",
      nome: "Atividade 7 — Tipos e estruturas de dados em TypeScript",
      repo: "https://github.com/travensolli/ial010-atividade7",
      descricao: "Cinco algoritmos: análise estatística de notas, biblioteca de frases, triagem de mensagens suspeitas, histórico em pilha e lista de tarefas.",
      tecnologias: ["TypeScript", "Node.js"]
    },
    {
      materia: "IAL-010",
      nome: "Atividade 8 — Sistema de atendimento com fila preferencial",
      repo: "https://github.com/travensolli/ial010-atividade8",
      descricao: "Aplicação de terminal com fila normal e fila preferencial atendidas de forma alternada por um menu interativo.",
      tecnologias: ["TypeScript", "Node.js", "prompt-sync"]
    },
    {
      materia: "ISW-028",
      nome: "Atividade 1 — Servidor de páginas estáticas com Express",
      repo: "https://github.com/travensolli/isw028-atividade1",
      descricao: "Servidor Node.js com Express que expõe rotas dedicadas para home, login e cadastro, serve arquivos estáticos e devolve uma página 404 com o status HTTP correto.",
      tecnologias: ["Node.js", "Express", "HTML", "CSS"]
    },
    {
      materia: "ISW-028",
      nome: "Atividade 2 — Consulta de CEP com fetch",
      repo: "https://github.com/travensolli/isw028-atividade2",
      descricao: "Página que consulta endereços na API pública ViaCEP direto do navegador, com validação da entrada e estados de carregamento, sucesso e erro na interface.",
      tecnologias: ["JavaScript", "Node.js", "Express", "Fetch API"]
    },
    {
      materia: "ISW-028",
      nome: "Atividade 3 — CRUD de usuários com PostgreSQL",
      repo: "https://github.com/travensolli/isw028-atividade3",
      descricao: "API REST em Express com PostgreSQL para cadastrar, listar e excluir usuários, com SQL parametrizado e front-end que consome os endpoints via fetch.",
      tecnologias: ["Node.js", "Express", "PostgreSQL"]
    },
    {
      materia: "ISW-028",
      nome: "Atividade 4 — Registro de apostas da Mega-Sena",
      repo: "https://github.com/travensolli/isw028-atividade4",
      descricao: "Aplicação que registra e lista jogos da Mega-Sena, com validação das seis dezenas no front, API em Express e persistência em PostgreSQL.",
      tecnologias: ["Node.js", "Express", "PostgreSQL"]
    },
    {
      materia: "ISW-028",
      nome: "Atividade 5 — Consulta de resultados da Mega-Sena",
      repo: "https://github.com/travensolli/isw028-atividade5",
      descricao: "Consulta de concursos da Mega-Sena sobre uma base de 3.005 sorteios carregada de CSV no PostgreSQL, com endpoints para o último resultado e para busca por número.",
      tecnologias: ["Node.js", "Express", "PostgreSQL", "CSV"]
    },
    {
      materia: "ISW-028",
      nome: "Prática — Grade de horários com layout em CSS",
      repo: "https://github.com/travensolli/isw028-layout-css",
      descricao: "Página estática com a grade semanal de aulas dos seis semestres em tabelas, construída com Flexbox, variáveis CSS, gradientes e navegação interna por âncoras.",
      tecnologias: ["HTML", "CSS", "Flexbox"]
    },
    {
      materia: "ISW-031",
      nome: "BirdSpot — Protótipo de rede social de observação de aves",
      repo: "https://github.com/travensolli/isw031-birdspot",
      descricao: "Protótipo de alta fidelidade no Figma de um aplicativo móvel para registro e compartilhamento de avistamentos de aves, com telas de login, feed, lista de contatos e perfil.",
      tecnologias: ["Figma", "UI Design", "Prototipação"]
    }
  ],

  // Projeto Integrador (ABP): um por semestre. A chave é o id do semestre.
  // Obrigatórios: nome, repo, descricao, contribuicao, tecnologias. Opcional: privado.
  // As matérias integradas vêm da grade (grade-dsm.js) e não precisam ser repetidas aqui.
  abp: {
    "1DSM": {
      nome: "ScrumFlow — Portal de Certificação em Metodologias Ágeis",
      repo: "https://github.com/DEVassos/scrum-flow-abp",
      descricao: "Portal web de certificação interna em metodologias ágeis: o usuário se cadastra, responde avaliações em módulos de dificuldade crescente com questões sorteadas e, ao concluir todos, recebe um certificado digital validável por hash. Desenvolvido em três sprints por uma equipe de sete alunos, com front-end sem frameworks e API própria.",
      contribuicao: "Fui o Scrum Master nas três sprints: facilitei as dailies e as demais cerimônias, mantive o burndown e o Kanban, estruturei o repositório com Git Flow e produzi a documentação do projeto (atas, backlog, relatórios de contribuição, diagramas UML e modelos de banco). Como desenvolvedor, atuei no backend: criei o validador e sanitizador de CPF, o middleware de autenticação JWT, o repositório de usuários, as regras de validação do cadastro e a lógica de sorteio de questões, além dos scripts de inicialização e carga do PostgreSQL.",
      tecnologias: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "PostgreSQL", "JWT"]
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
    cursos: [],
    idiomas: ["<idioma — nível>"],
    conhecimentos: ["Python", "TypeScript", "JavaScript", "React", "Node.js", "Express", "PostgreSQL", "Git", "Playwright", "RabbitMQ", "APIs OpenAI e Gemini"]
  }
};
