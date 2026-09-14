// docs/dados/grade-dsm.js — grade oficial do DSM (Fatec Jacareí), conforme o ementário.
// cargaHoraria em aulas semestrais. 1DSM a 3DSM: disciplina que conduz a ABP + integradas;
// 4DSM a 6DSM: o laboratório integra as disciplinas do 1º ao semestre indicado.
window.GRADE = {
  curso: "Desenvolvimento de Software Multiplataforma",
  instituicao: "Fatec Jacareí",
  unidadeCarga: "aulas",
  semestres: [
    {
      id: "1DSM",
      numero: 1,
      abp: { conduz: "IES-011", integra: ["ISW-028", "ISW-031"] },
      materias: [
        { sigla: "IAL-010", nome: "Algoritmos e Lógica de Programação", cargaHoraria: 80 },
        { sigla: "ISW-028", nome: "Desenvolvimento Web I", cargaHoraria: 80 },
        { sigla: "ISW-031", nome: "Design Digital", cargaHoraria: 80 },
        { sigla: "IES-011", nome: "Engenharia de Software I", cargaHoraria: 80 },
        { sigla: "IBD-014", nome: "Modelagem de Banco de Dados", cargaHoraria: 80 },
        { sigla: "ISO-011", nome: "Sistemas Operacionais e Redes de Computadores", cargaHoraria: 80 }
      ]
    },
    {
      id: "2DSM",
      numero: 2,
      abp: { conduz: "IES-012", integra: ["ISW-029", "IBD-015"] },
      materias: [
        { sigla: "ILP-036", nome: "Técnicas de Programação I", cargaHoraria: 80 },
        { sigla: "ISW-029", nome: "Desenvolvimento Web II", cargaHoraria: 80 },
        { sigla: "MAT-019", nome: "Matemática para Computação", cargaHoraria: 80 },
        { sigla: "IES-012", nome: "Engenharia de Software II", cargaHoraria: 80 },
        { sigla: "IBD-015", nome: "Banco de Dados – Relacional", cargaHoraria: 80 },
        { sigla: "IED-005", nome: "Estrutura de Dados", cargaHoraria: 80 }
      ]
    },
    {
      id: "3DSM",
      numero: 3,
      abp: { conduz: "AGO-021", integra: ["ISW-030", "IBD-016", "IHC-004"] },
      materias: [
        { sigla: "ILP-037", nome: "Técnicas de Programação II", cargaHoraria: 80 },
        { sigla: "ISW-030", nome: "Desenvolvimento Web III", cargaHoraria: 80 },
        { sigla: "MAG-004", nome: "Álgebra Linear", cargaHoraria: 80 },
        { sigla: "AGO-021", nome: "Gestão Ágil de Projetos de Software", cargaHoraria: 80 },
        { sigla: "IBD-016", nome: "Banco de Dados – Não Relacional", cargaHoraria: 80 },
        { sigla: "IHC-004", nome: "Interação Humano Computador", cargaHoraria: 40 },
        { sigla: "ING-085", nome: "Inglês I", cargaHoraria: 40 }
      ]
    },
    {
      id: "4DSM",
      numero: 4,
      abp: { conduz: "ISW-033", integraAteSemestre: 4 },
      materias: [
        { sigla: "ISW-032", nome: "Integração e Entrega Contínua", cargaHoraria: 80 },
        { sigla: "ISW-033", nome: "Laboratório de Desenvolvimento Web", cargaHoraria: 80 },
        { sigla: "IAL-011", nome: "Internet das Coisas e Aplicações", cargaHoraria: 80 },
        { sigla: "ILP-038", nome: "Programação para Dispositivos Móveis I", cargaHoraria: 80 },
        { sigla: "MET-004", nome: "Estatística Aplicada", cargaHoraria: 80 },
        { sigla: "IHC-005", nome: "Experiência do Usuário", cargaHoraria: 40 },
        { sigla: "ING-086", nome: "Inglês II", cargaHoraria: 40 }
      ]
    },
    {
      id: "5DSM",
      numero: 5,
      abp: { conduz: "ISW-036", integraAteSemestre: 5 },
      materias: [
        { sigla: "ISW-034", nome: "Computação em Nuvem I", cargaHoraria: 80 },
        { sigla: "MAQ-024", nome: "Aprendizagem de Máquina", cargaHoraria: 80 },
        { sigla: "ISW-036", nome: "Laboratório de Desenvolvimento para Dispositivos Móveis", cargaHoraria: 80 },
        { sigla: "ILP-039", nome: "Programação para Dispositivos Móveis II", cargaHoraria: 80 },
        { sigla: "ISG-022", nome: "Segurança no Desenvolvimento de Aplicações", cargaHoraria: 80 },
        { sigla: "POR-040", nome: "Fundamentos da Redação Técnica", cargaHoraria: 40 },
        { sigla: "ING-087", nome: "Inglês III", cargaHoraria: 40 }
      ]
    },
    {
      id: "6DSM",
      numero: 6,
      abp: { conduz: "ISW-038", integraAteSemestre: 6 },
      materias: [
        { sigla: "ISW-035", nome: "Computação em Nuvem II", cargaHoraria: 80 },
        { sigla: "ISW-037", nome: "Processamento de Linguagem Natural", cargaHoraria: 80 },
        { sigla: "ISW-038", nome: "Laboratório de Desenvolvimento Multiplataforma", cargaHoraria: 80 },
        { sigla: "ISW-039", nome: "Mineração de Dados", cargaHoraria: 80 },
        { sigla: "IQS-004", nome: "Qualidade e Testes de Software", cargaHoraria: 80 },
        { sigla: "DDI-009", nome: "Ética Profissional e Patente", cargaHoraria: 40 },
        { sigla: "ING-088", nome: "Inglês IV", cargaHoraria: 40 }
      ]
    }
  ]
};
