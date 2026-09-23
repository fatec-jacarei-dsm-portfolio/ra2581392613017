(function () {
  "use strict";

  const SVG_NS = "http://www.w3.org/2000/svg";

  const ICONES = {
    github: {
      preenchido: true,
      d: "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
    },
    linkedin: {
      preenchido: true,
      d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
    },
    externo: { d: "M7 17 17 7M8 7h9v9" },
    play: { preenchido: true, d: "M8 5.14v13.72a1 1 0 0 0 1.52.85l11-6.86a1 1 0 0 0 0-1.7l-11-6.86A1 1 0 0 0 8 5.14z" },
    seta: { d: "m9 6 6 6-6 6" },
    sol: { d: "M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M17.66 6.34l1.41-1.41M4.93 19.07l1.41-1.41" },
    lua: { d: "M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" }
  };

  const ROTULO_STATUS = {
    concluido: "concluído",
    andamento: "em andamento",
    futuro: "a seguir"
  };

  // A mesma chave é lida pelo script do <head> em index.html, antes da primeira pintura.
  const CHAVE_TEMA = "portfolio-tema";

  const avisar = (...mensagem) => console.warn("[portfólio]", ...mensagem);

  document.documentElement.classList.add("js");

  const GRADE = window.GRADE;
  const DADOS = window.PORTFOLIO;
  const conteudo = document.getElementById("conteudo");

  if (!GRADE || !DADOS) {
    avisar("docs/dados/grade-dsm.js ou docs/dados/portfolio.js não foi carregado.");
    conteudo.prepend(el("p", { class: "aviso" }, "Conteúdo ainda não configurado. Verifique os arquivos em docs/dados/."));
    return;
  }

  const hoje = new Date();
  checarPlaceholders(DADOS, "PORTFOLIO");

  const perfil = DADOS.perfil || {};
  const inicio = lerInicio(perfil.inicio);
  const semestres = GRADE.semestres
    .slice()
    .sort((a, b) => a.numero - b.numero)
    .map((semestre) => {
      const periodo = periodoDoSemestre(semestre.numero, inicio);
      return { ...semestre, ...periodo, status: statusDoPeriodo(periodo) };
    });
  const referencia = semestres.find((s) => s.status === "andamento")
    || semestres.filter((s) => s.status === "concluido").pop()
    || null;
  const materias = indexarMaterias();
  const sociais = linksSociais(perfil.links || {});
  const atividadesPorSigla = agruparAtividades(DADOS.atividades);
  const abps = validarAbps(DADOS.abp);

  renderBarra();
  renderTema();
  renderApresentacao();
  renderInteresses(DADOS.interesses || {});
  renderTrajetoria();
  renderProjetos(DADOS.pessoais, DADOS.profissionais);
  renderComplementar(DADOS.complementar || {});
  renderRodape(DADOS.atualizadoEm);
  renderIndice();

  ativarBarra();
  ativarRevelacao();
  ativarIndice();
  ativarAncoras();
  animarProgresso();

  function renderBarra() {
    const alvo = document.querySelector("[data-sociais]");
    sociais.forEach((social) => {
      alvo.append(el("a", {
        class: "icone-link",
        href: social.url,
        target: "_blank",
        rel: "noopener noreferrer",
        title: social.nome,
        "aria-label": `${social.nome} (abre em nova aba)`
      }, icone(social.icone)));
    });
  }

  function renderTema() {
    const alvo = document.querySelector("[data-seletor-tema]");
    const botao = el("button", { class: "icone-link barra__tema", type: "button" });
    const situacao = el("span", { class: "sr-only", role: "status" });
    const sistemaEscuro = window.matchMedia("(prefers-color-scheme: dark)");
    // Sem data-tema no <html> ninguém fixou nada: quem decide é o sistema.
    const temaEmUso = () => document.documentElement.dataset.tema
      || (sistemaEscuro.matches ? "escuro" : "claro");

    const pintar = (anunciar) => {
      const atual = temaEmUso();
      const rotulo = `Ativar tema ${atual === "escuro" ? "claro" : "escuro"}`;
      botao.replaceChildren(icone(atual === "escuro" ? "sol" : "lua"));
      botao.setAttribute("title", rotulo);
      botao.setAttribute("aria-label", rotulo);
      if (anunciar) situacao.textContent = `Tema ${atual} ativado.`;
    };

    botao.addEventListener("click", () => {
      const escolhido = temaEmUso() === "escuro" ? "claro" : "escuro";
      document.documentElement.dataset.tema = escolhido;
      try {
        localStorage.setItem(CHAVE_TEMA, escolhido);
      } catch (erro) {
        // Armazenamento bloqueado (file:// em alguns navegadores): a escolha vale só nesta visita.
      }
      pintar(true);
    });

    // Enquanto o visitante não fixar um tema, o ícone acompanha a troca de tema do sistema.
    sistemaEscuro.addEventListener("change", () => pintar(false));

    pintar(false);
    anexar(alvo, botao, situacao);
  }

  function renderApresentacao() {
    const secao = document.getElementById("inicio");
    const nome = texto(perfil.nomeCurto) || texto(perfil.nome) || "";
    const situacao = referencia && referencia.status === "andamento"
      ? `cursando ${referencia.id}`
      : semestres.every((s) => s.status === "concluido") ? "curso concluído" : null;
    const turma = [texto(GRADE.instituicao), `Turma ${semestres[0].rotuloPeriodo}`, situacao].filter(Boolean).join(" · ");

    anexar(secao,
      fotoDoPerfil(nome),
      el("h1", { class: "apresentacao__nome" }, nome),
      el("p", { class: "apresentacao__curso" }, GRADE.curso),
      el("p", { class: "apresentacao__turma" }, turma),
      renderBio(),
      renderAcoes(),
      renderProgresso());
  }

  function fotoDoPerfil(nome) {
    const iniciais = nome.split(/\s+/).filter(Boolean).map((parte) => parte[0]).slice(0, 2).join("").toUpperCase();
    const reserva = () => el("div", {
      class: "apresentacao__foto apresentacao__foto--iniciais",
      role: "img",
      "aria-label": `Iniciais de ${nome}`
    }, iniciais);

    if (!texto(perfil.foto)) return reserva();

    const foto = el("img", {
      class: "apresentacao__foto",
      src: perfil.foto,
      alt: `Foto de ${nome}`,
      width: 112,
      height: 112,
      decoding: "async"
    });
    foto.addEventListener("error", () => foto.replaceWith(reserva()), { once: true });
    return foto;
  }

  function renderBio() {
    const paragrafos = lista(perfil.bio);
    return paragrafos.length ? el("div", { class: "apresentacao__bio" }, paragrafos.map((p) => el("p", {}, p))) : null;
  }

  function renderAcoes() {
    const pitch = linkSeguro(perfil.links && perfil.links.pitch, "perfil.links.pitch");
    const numeroPitch = referencia ? Math.max(2, referencia.numero - (referencia.numero % 2)) : 2;
    const botoes = sociais.map((social) => el("a", {
      class: "botao",
      href: social.url,
      target: "_blank",
      rel: "noopener noreferrer"
    }, icone(social.icone), social.nome, novaAba()));

    if (pitch) {
      botoes.push(el("a", {
        class: "botao botao--primario",
        href: pitch,
        target: "_blank",
        rel: "noopener noreferrer"
      }, icone("play"), `Pitch ${numeroPitch}DSM`, novaAba()));
    }

    return botoes.length ? el("div", { class: "acoes" }, botoes) : null;
  }

  function renderProgresso() {
    const itens = semestres.map((semestre) => {
      let fracao = 0;
      if (semestre.status === "concluido") fracao = 1;
      if (semestre.status === "andamento") fracao = (hoje - semestre.comeco) / (semestre.fim - semestre.comeco);

      return el("li", { class: `progresso__item progresso__item--${semestre.status}` },
        el("span", { class: "progresso__barra" },
          el("span", { class: "progresso__preenchido", "data-alvo": `${Math.round(fracao * 100)}%` })),
        el("span", { class: "progresso__rotulo" }, semestre.id),
        el("span", { class: "sr-only" }, `: ${ROTULO_STATUS[semestre.status]}`));
    });

    return el("div", { class: "progresso" },
      el("ol", { class: "progresso__lista", "aria-label": "Progresso no curso" }, itens),
      el("p", { class: "progresso__legenda" }, legendaProgresso()));
  }

  function legendaProgresso() {
    const total = semestres.length;
    if (semestres.every((s) => s.status === "concluido")) return `${total} de ${total} semestres concluídos`;
    if (referencia && referencia.status === "andamento") return `semestre ${referencia.numero} de ${total} · em andamento`;
    if (referencia) return `${referencia.numero} de ${total} semestres concluídos`;
    return `início em ${semestres[0].rotuloPeriodo}`;
  }

  function animarProgresso() {
    requestAnimationFrame(() => requestAnimationFrame(() => {
      document.querySelectorAll(".progresso__preenchido").forEach((barra) => {
        barra.style.setProperty("--p", barra.dataset.alvo);
      });
    }));
  }

  function renderInteresses(interesses) {
    const secao = document.getElementById("interesses");
    const grupos = [
      ["Áreas de estudo", lista(interesses.estudo)],
      ["Onde aplico", lista(interesses.aplicacoes)],
      ["Fora do código", lista(interesses.foraDoCodigo)]
    ].filter(([, itens]) => itens.length);

    if (!grupos.length) return esconder(secao);

    anexar(secao,
      cabecalho("t-interesses", "Interesses"),
      el("div", { class: "interesses" }, grupos.map(([titulo, itens]) => el("div", { class: "interesses__grupo" },
        el("h3", { class: "rotulo" }, titulo),
        el("ul", { class: "lista-simples" }, itens.map((item) => el("li", {}, item)))))));
  }

  function renderTrajetoria() {
    const secao = document.getElementById("trajetoria");
    const listaSemestres = el("ol", { class: "semestres", id: "lista-semestres" }, semestres.map(renderSemestre));
    const alternar = listaSemestres.querySelector("details")
      ? el("button", { class: "botao-texto", type: "button", "aria-controls": "lista-semestres" }, "Expandir tudo")
      : null;

    anexar(secao,
      cabecalho("t-trajetoria", "Trajetória acadêmica", alternar,
        el("p", { class: "secao__intro" }, "Matérias, atividades e projeto integrador (ABP) de cada semestre do curso.")),
      listaSemestres);

    if (!alternar) return;

    alternar.addEventListener("click", () => {
      const abrir = alternar.dataset.estado !== "aberto";
      listaSemestres.querySelectorAll("details").forEach((detalhes) => {
        detalhes.open = abrir;
      });
      alternar.dataset.estado = abrir ? "aberto" : "fechado";
      alternar.textContent = abrir ? "Recolher tudo" : "Expandir tudo";
    });
  }

  function renderSemestre(semestre) {
    const item = el("li", { class: `semestre semestre--${semestre.status}`, id: `s-${semestre.id.toLowerCase()}` },
      el("span", { class: `no no--${semestre.status}`, "aria-hidden": "true" }),
      el("div", { class: "semestre__cabeca" },
        el("h3", { class: "semestre__titulo" },
          semestre.id,
          el("span", { class: "semestre__periodo" }, ` – ${semestre.rotuloPeriodo}`)),
        selo(ROTULO_STATUS[semestre.status], semestre.status)));

    if (semestre.status === "futuro") return item;

    const projeto = abps.get(semestre.id) || null;
    const totalAtividades = semestre.materias
      .reduce((soma, materia) => soma + (atividadesPorSigla.get(materia.sigla) || []).length, 0);
    const aberto = !referencia || semestre.numero >= referencia.numero - 1;

    item.append(el("details", { class: "semestre__detalhes", open: aberto },
      el("summary", { class: "semestre__resumo" },
        el("span", { class: "sr-only" }, `Mostrar ou ocultar ${semestre.id}: `),
        `${plural(semestre.materias.length, "matéria", "matérias")} · ${plural(totalAtividades, "atividade", "atividades")}`,
        projeto ? el("span", { class: "semestre__resumo-abp" }, ` · ABP: ${projeto.nome}`) : null,
        icone("seta", "seta")),
      el("div", { class: "semestre__corpo" },
        renderAbp(semestre, projeto),
        el("ul", { class: "materias" }, semestre.materias.map(renderMateria)))));

    return item;
  }

  function renderAbp(semestre, projeto) {
    const id = `abp-${semestre.id.toLowerCase()}`;
    const topo = el("div", { class: "abp__topo" },
      el("span", { class: "rotulo" }, "Projeto integrador · ABP"),
      el("span", { class: "abp__semestre" }, `${semestre.id} – ${semestre.rotuloPeriodo}`));

    if (!projeto) {
      const mensagem = semestre.status === "andamento" ? "Em desenvolvimento neste semestre." : "Ainda não cadastrado.";
      return el("article", { class: "abp abp--vazia", id }, topo, el("p", { class: "abp__vazio" }, mensagem));
    }

    const contribuicao = texto(projeto.contribuicao);
    const descricao = texto(projeto.descricao);
    const repositorio = linkRepositorio(projeto);

    return el("article", { class: "abp", id, "aria-labelledby": `${id}-nome` },
      el("details", { class: "abp__detalhes" },
        el("summary", { class: "abp__resumo" },
          topo,
          el("div", { class: "abp__linha" },
            el("h4", { class: "abp__nome", id: `${id}-nome` }, projeto.nome),
            icone("seta", "seta"))),
        el("div", { class: "abp__corpo" },
          repositorio ? el("p", { class: "abp__repo" }, repositorio) : null,
          descricao ? el("p", { class: "abp__descricao" }, descricao) : null,
          contribuicao ? blocoContribuicao(contribuicao) : null,
          tecnologias(projeto.tecnologias),
          renderIntegracao(semestre.abp))));
  }

  function renderIntegracao(integracao) {
    if (!integracao || !integracao.conduz) return null;

    if (integracao.integraAteSemestre) {
      return el("p", { class: "abp__integra" },
        "conduzida por ",
        linkMateria(integracao.conduz),
        ` · integra as disciplinas do 1º ao ${integracao.integraAteSemestre}º semestre`);
    }

    const siglas = [integracao.conduz].concat(integracao.integra || []);
    return el("p", { class: "abp__integra" }, "integra ", intercalar(siglas.map(linkMateria), " · "));
  }

  function renderMateria(materia) {
    const atividades = atividadesPorSigla.get(materia.sigla) || [];
    const id = `m-${materia.sigla.toLowerCase()}`;
    const colunas = [
      el("span", { class: "materia__sigla" }, materia.sigla),
      el("span", { class: "materia__nome" }, materia.nome),
      el("span", { class: "materia__carga" }, `${materia.cargaHoraria} ${GRADE.unidadeCarga || "aulas"}`),
      contador(atividades.length)
    ];

    if (!atividades.length) {
      return el("li", { class: "materia-item materia-item--vazia", id },
        el("div", { class: "materia__linha" }, colunas, el("span", { "aria-hidden": "true" })));
    }

    return el("li", { class: "materia-item" },
      el("details", { class: "materia", id },
        el("summary", {}, el("span", { class: "materia__linha" }, colunas, icone("seta", "seta"))),
        el("ul", { class: "atividades" }, atividades.map(renderAtividade))));
  }

  function renderAtividade(atividade) {
    const nome = atividade.repo && !atividade.privado
      ? el("a", { class: "atividade__nome", href: atividade.repo, target: "_blank", rel: "noopener noreferrer" },
        atividade.nome, " ", icone("externo", "icone-externo"), novaAba())
      : el("span", { class: "atividade__nome" }, atividade.nome);
    const descricao = texto(atividade.descricao);

    return el("li", { class: "atividade" },
      el("div", { class: "atividade__topo" }, nome, atividade.privado ? selo("privado", "privado") : null),
      descricao ? el("p", { class: "atividade__descricao" }, descricao) : null,
      tecnologias(atividade.tecnologias));
  }

  function renderProjetos(pessoais, profissionais) {
    const secao = document.getElementById("projetos");
    const grupos = [
      ["Pessoais", validarProjetos(pessoais, "pessoais")],
      ["Profissionais", validarProjetos(profissionais, "profissionais")]
    ].filter(([, itens]) => itens.length);

    if (!grupos.length) return esconder(secao);

    anexar(secao,
      cabecalho("t-projetos", "Outros projetos"),
      grupos.map(([titulo, itens]) => el("div", { class: "grupo" },
        el("h3", { class: "rotulo grupo__titulo" }, titulo),
        el("ul", {}, itens.map(renderProjeto)))));
  }

  function renderProjeto(projeto) {
    const contribuicao = texto(projeto.contribuicao);
    const links = [linkRepositorio(projeto), projeto.demo ? linkExterno(projeto.demo, "demo") : null].filter(Boolean);

    return el("li", { class: "projeto" },
      el("details", { class: "projeto__detalhes" },
        el("summary", { class: "projeto__resumo" },
          el("div", { class: "projeto__topo" },
            el("h4", { class: "projeto__nome" }, projeto.nome),
            el("div", { class: "projeto__meta" },
              el("span", { class: "projeto__ano" }, String(projeto.ano)),
              icone("seta", "seta")))),
        el("div", { class: "projeto__corpo" },
          links.length ? el("div", { class: "projeto__links" }, links) : null,
          el("p", { class: "projeto__descricao" }, projeto.descricao),
          contribuicao ? blocoContribuicao(contribuicao) : null,
          tecnologias(projeto.tecnologias))));
  }

  function renderComplementar(complementar) {
    const secao = document.getElementById("complementar");
    const blocos = [
      ["Formação", lista(complementar.formacao), false],
      ["Cursos e certificações", cursos(complementar.cursos), false],
      ["Idiomas", lista(complementar.idiomas), false],
      ["Conhecimentos técnicos", lista(complementar.conhecimentos), true]
    ].filter(([, itens]) => itens.length);

    if (!blocos.length) return esconder(secao);

    anexar(secao,
      cabecalho("t-complementar", "Complementar"),
      el("dl", { class: "complementar" }, blocos.map(([titulo, itens, emLinha]) => el("div", { class: emLinha ? "complementar__item--largo" : null },
        el("dt", { class: "rotulo" }, titulo),
        el("dd", {}, emLinha
          ? el("p", { class: "tecnologias" }, itens.join(" · "))
          : el("ul", { class: "lista-simples" }, itens.map((item) => el("li", {}, item))))))));
  }

  function renderRodape(atualizadoEm) {
    const alvo = document.querySelector("[data-rodape]");
    const identificacao = [texto(perfil.nome), perfil.ra ? `RA ${perfil.ra}` : null].filter(Boolean).join(" · ");
    const data = formatarData(atualizadoEm);

    anexar(alvo, el("div", { class: "rodape__conteudo" },
      el("div", { class: "rodape__identidade" },
        identificacao ? el("p", {}, identificacao) : null,
        el("p", {}, `${GRADE.instituicao} — ${GRADE.curso}`)),
      el("div", { class: "rodape__lateral" },
        sociais.length
          ? el("p", {}, intercalar(sociais.map((social) => linkExterno(social.url, social.nome)), " · "))
          : null,
        data ? el("p", { class: "rodape__atualizado" }, `Atualizado em ${data}`) : null)));
  }

  function renderIndice() {
    const alvo = document.querySelector("[data-indice]");
    const secoes = [
      ["inicio", "Início"],
      ["interesses", "Interesses"],
      ["trajetoria", "Trajetória"],
      ["projetos", "Projetos"],
      ["complementar", "Complementar"]
    ].filter(([id]) => !document.getElementById(id).hidden);

    anexar(alvo, el("ul", { class: "indice__lista" }, secoes.map(([id, rotulo]) => el("li", {},
      el("a", { href: `#${id}` }, rotulo),
      id === "trajetoria"
        ? el("ul", { class: "indice__semestres" }, semestres.map((semestre) => el("li", {},
          el("a", { href: `#s-${semestre.id.toLowerCase()}` },
            el("span", { class: `indice__no indice__no--${semestre.status}`, "aria-hidden": "true" }),
            semestre.id,
            el("span", { class: "sr-only" }, `, ${ROTULO_STATUS[semestre.status]}`)))))
        : null))));
  }

  function ativarBarra() {
    const barra = document.getElementById("barra");
    const atualizar = () => barra.classList.toggle("barra--rolou", window.scrollY > 8);
    window.addEventListener("scroll", atualizar, { passive: true });
    atualizar();
  }

  function ativarRevelacao() {
    const reduzir = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduzir || !("IntersectionObserver" in window)) return;

    const secoes = [...document.querySelectorAll(".secao")].filter((secao) => !secao.hidden);
    const observador = new IntersectionObserver((entradas) => {
      entradas.forEach((entrada) => {
        if (!entrada.isIntersecting) return;
        entrada.target.classList.add("revelado");
        observador.unobserve(entrada.target);
      });
    }, { rootMargin: "0px 0px -8% 0px" });

    secoes.forEach((secao) => {
      secao.classList.add("revelar");
      observador.observe(secao);
    });
  }

  function ativarIndice() {
    if (!("IntersectionObserver" in window)) return;

    const links = new Map();
    document.querySelectorAll('[data-indice] a[href^="#"]').forEach((link) => {
      links.set(link.getAttribute("href").slice(1), link);
    });

    const observador = new IntersectionObserver((entradas) => {
      entradas.forEach((entrada) => {
        const link = links.get(entrada.target.id);
        if (entrada.isIntersecting) link.setAttribute("aria-current", "true");
        else link.removeAttribute("aria-current");
      });
    }, { rootMargin: "-40% 0px -55% 0px" });

    links.forEach((_, id) => {
      const alvo = document.getElementById(id);
      if (alvo) observador.observe(alvo);
    });
  }

  function ativarAncoras() {
    const abrirAlvo = (hash, rolar) => {
      if (!hash || hash.length < 2) return;
      let alvo;
      try {
        alvo = document.getElementById(decodeURIComponent(hash.slice(1)));
      } catch {
        return;
      }
      if (!alvo) return;

      for (let no = alvo; no; no = no.parentElement) {
        if (no.tagName === "DETAILS") no.open = true;
      }
      const detalhesDoSemestre = alvo.querySelector(":scope > details");
      if (detalhesDoSemestre) detalhesDoSemestre.open = true;
      if (rolar) alvo.scrollIntoView({ block: "start" });
    };

    abrirAlvo(window.location.hash, true);
    window.addEventListener("hashchange", () => abrirAlvo(window.location.hash, false));
    document.addEventListener("click", (evento) => {
      const link = evento.target.closest('a[href^="#"]');
      if (link) abrirAlvo(link.getAttribute("href"), false);
    });
  }

  function lerInicio(valor) {
    const partes = /^(\d{4})-(\d{2})$/.exec(valor || "");
    if (!partes) {
      avisar('perfil.inicio precisa estar no formato "AAAA-MM" (ex.: "2026-02").');
      return { ano: hoje.getFullYear(), semestre: 1 };
    }
    return { ano: Number(partes[1]), semestre: Number(partes[2]) >= 8 ? 2 : 1 };
  }

  // Fatec: 1º semestre letivo de 1/fev a 31/jul; 2º de 1/ago a 31/jan do ano seguinte.
  function periodoDoSemestre(numero, ingresso) {
    const deslocamento = ingresso.semestre - 1 + numero - 1;
    const ano = ingresso.ano + Math.floor(deslocamento / 2);
    const semestreDoAno = (deslocamento % 2) + 1;
    return {
      comeco: semestreDoAno === 1 ? new Date(ano, 1, 1) : new Date(ano, 7, 1),
      fim: semestreDoAno === 1 ? new Date(ano, 7, 1) : new Date(ano + 1, 1, 1),
      rotuloPeriodo: `${semestreDoAno}º Sem. ${ano}`
    };
  }

  function statusDoPeriodo({ comeco, fim }) {
    if (hoje >= fim) return "concluido";
    if (hoje >= comeco) return "andamento";
    return "futuro";
  }

  function indexarMaterias() {
    const mapa = new Map();
    semestres.forEach((semestre) => {
      semestre.materias.forEach((materia) => mapa.set(materia.sigla, materia));
    });
    return mapa;
  }

  function linksSociais(links) {
    return [
      { nome: "GitHub", icone: "github", url: linkSeguro(links.github, "perfil.links.github") },
      { nome: "LinkedIn", icone: "linkedin", url: linkSeguro(links.linkedin, "perfil.links.linkedin") }
    ].filter((social) => social.url);
  }

  function agruparAtividades(atividades) {
    const grupos = new Map();
    (Array.isArray(atividades) ? atividades : []).forEach((atividade, i) => {
      const caminho = `atividades[${i}]`;
      const ausentes = faltando(atividade, ["materia", "nome", "repo"]);
      if (ausentes.length) {
        avisar(`${caminho}: faltam ${ausentes.join(", ")} — item ignorado.`);
        return;
      }
      if (!materias.has(atividade.materia)) {
        avisar(`${caminho}: a sigla "${atividade.materia}" não existe na grade — item ignorado.`);
        return;
      }
      if (!grupos.has(atividade.materia)) grupos.set(atividade.materia, []);
      grupos.get(atividade.materia).push({ ...atividade, repo: linkSeguro(atividade.repo, `${caminho}.repo`) });
    });
    return grupos;
  }

  function validarAbps(abp) {
    const validas = new Map();
    Object.entries(abp || {}).forEach(([id, projeto]) => {
      const caminho = `abp["${id}"]`;
      if (!semestres.some((semestre) => semestre.id === id)) {
        avisar(`${caminho}: semestre inexistente na grade — item ignorado.`);
        return;
      }
      if (!projeto) return;
      const ausentes = faltando(projeto, ["nome", "repo", "descricao", "tecnologias"]);
      if (ausentes.length) {
        avisar(`${caminho}: faltam ${ausentes.join(", ")} — item ignorado.`);
        return;
      }
      if (faltando(projeto, ["contribuicao"]).length) avisar(`${caminho}: falta "contribuicao" (obrigatória pela Fatec).`);
      validas.set(id, { ...projeto, repo: linkSeguro(projeto.repo, `${caminho}.repo`) });
    });
    return validas;
  }

  function validarProjetos(projetos, grupo) {
    return (Array.isArray(projetos) ? projetos : []).flatMap((projeto, i) => {
      const caminho = `${grupo}[${i}]`;
      const ausentes = faltando(projeto, ["nome", "descricao", "tecnologias", "repo", "ano"]);
      if (ausentes.length) {
        avisar(`${caminho}: faltam ${ausentes.join(", ")} — item ignorado.`);
        return [];
      }
      if (faltando(projeto, ["contribuicao"]).length) avisar(`${caminho}: falta "contribuicao" (obrigatória pela Fatec).`);
      return [{
        ...projeto,
        repo: linkSeguro(projeto.repo, `${caminho}.repo`),
        demo: linkSeguro(projeto.demo, `${caminho}.demo`)
      }];
    });
  }

  function checarPlaceholders(valor, caminho) {
    if (ehPlaceholder(valor)) {
      avisar(`placeholder não preenchido em ${caminho}: ${valor}`);
    } else if (Array.isArray(valor)) {
      valor.forEach((item, i) => checarPlaceholders(item, `${caminho}[${i}]`));
    } else if (valor && typeof valor === "object") {
      Object.entries(valor).forEach(([chave, item]) => checarPlaceholders(item, `${caminho}.${chave}`));
    }
  }

  function linkSeguro(url, caminho) {
    if (url === undefined || url === null || url === "") return null;
    if (typeof url === "string" && url.startsWith("https://")) return url;
    avisar(`${caminho}: o link precisa começar com https:// — link não exibido.`);
    return null;
  }

  function faltando(item, campos) {
    return campos.filter((campo) => {
      const valor = item ? item[campo] : undefined;
      return valor === undefined || valor === null || valor === "" || (Array.isArray(valor) && !valor.length);
    });
  }

  function ehPlaceholder(valor) {
    return typeof valor === "string" && valor.trim().startsWith("<");
  }

  function texto(valor) {
    if (typeof valor !== "string") return null;
    const limpo = valor.trim();
    return limpo && !ehPlaceholder(limpo) ? limpo : null;
  }

  function lista(valores) {
    if (valores === undefined || valores === null) return [];
    return (Array.isArray(valores) ? valores : [valores]).map(texto).filter(Boolean);
  }

  // Cursos aceitam texto ou { nome, url }. Com url, o nome ganha um link curto
  // para a página de verificação, no mesmo padrão de "repositório ↗".
  function cursos(valores) {
    if (valores === undefined || valores === null) return [];
    return (Array.isArray(valores) ? valores : [valores]).flatMap((item, i) => {
      if (typeof item === "string") {
        const nome = texto(item);
        return nome ? [nome] : [];
      }
      const nome = item && typeof item === "object" ? texto(item.nome) : null;
      if (!nome) {
        avisar(`complementar.cursos[${i}]: falta "nome" — item ignorado.`);
        return [];
      }
      const url = linkSeguro(item.url, `complementar.cursos[${i}].url`);
      return [url ? [nome, " ", linkExterno(url, "certificado")] : nome];
    });
  }

  function formatarData(valor) {
    const partes = /^(\d{4})-(\d{2})-(\d{2})$/.exec(valor || "");
    return partes ? `${partes[3]}/${partes[2]}/${partes[1]}` : null;
  }

  function plural(total, singular, pluralTexto) {
    return `${total} ${total === 1 ? singular : pluralTexto}`;
  }

  function cabecalho(id, titulo, ...extras) {
    return el("div", { class: "secao__cabeca" }, el("h2", { class: "secao__titulo", id }, titulo), extras);
  }

  function esconder(secao) {
    secao.hidden = true;
    document.querySelectorAll(`.barra__links a[href="#${secao.id}"]`).forEach((link) => {
      link.parentElement.hidden = true;
    });
  }

  function selo(rotulo, variante) {
    return el("span", { class: `selo selo--${variante}` }, rotulo);
  }

  function contador(total) {
    return el("span", { class: "contador" },
      el("span", { "aria-hidden": "true" }, total ? String(total) : "—"),
      el("span", { class: "sr-only" }, total ? plural(total, "atividade", "atividades") : "nenhuma atividade"));
  }

  function tecnologias(valores) {
    const itens = lista(valores);
    return itens.length
      ? el("p", { class: "tecnologias" }, el("span", { class: "sr-only" }, "Tecnologias: "), itens.join(" · "))
      : null;
  }

  function blocoContribuicao(conteudoTexto) {
    return el("div", { class: "contribuicao" },
      el("span", { class: "rotulo" }, "Minha parte"),
      el("p", {}, conteudoTexto));
  }

  function linkRepositorio(item) {
    if (item.privado) return selo("privado", "privado");
    return item.repo ? linkExterno(item.repo, "repositório") : null;
  }

  function linkExterno(url, rotulo) {
    return el("a", { class: "link-externo", href: url, target: "_blank", rel: "noopener noreferrer" },
      rotulo, icone("externo", "icone-externo"), novaAba());
  }

  function linkMateria(sigla) {
    const materia = materias.get(sigla);
    if (!materia) {
      avisar(`grade: a sigla "${sigla}" citada na ABP não existe.`);
      return sigla;
    }
    return el("a", { href: `#m-${sigla.toLowerCase()}`, title: materia.nome, "aria-label": `${sigla} — ${materia.nome}` }, sigla);
  }

  function novaAba() {
    return el("span", { class: "sr-only" }, " (abre em nova aba)");
  }

  function intercalar(itens, separador) {
    return itens.flatMap((item, i) => (i ? [separador, item] : [item]));
  }

  function icone(nome, classe) {
    const definicao = ICONES[nome];
    const svg = document.createElementNS(SVG_NS, "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("focusable", "false");
    if (classe) svg.setAttribute("class", classe);

    if (definicao.preenchido) {
      svg.setAttribute("fill", "currentColor");
    } else {
      svg.setAttribute("fill", "none");
      svg.setAttribute("stroke", "currentColor");
      svg.setAttribute("stroke-width", "2");
      svg.setAttribute("stroke-linecap", "round");
      svg.setAttribute("stroke-linejoin", "round");
    }

    const caminho = document.createElementNS(SVG_NS, "path");
    caminho.setAttribute("d", definicao.d);
    svg.append(caminho);
    return svg;
  }

  function el(tag, atributos, ...filhos) {
    const elemento = document.createElement(tag);
    Object.entries(atributos || {}).forEach(([nome, valor]) => {
      if (valor === null || valor === undefined || valor === false) return;
      elemento.setAttribute(nome, valor === true ? "" : String(valor));
    });
    return anexar(elemento, filhos);
  }

  function anexar(alvo, ...filhos) {
    filhos.flat(Infinity).forEach((filho) => {
      if (filho === null || filho === undefined || filho === false) return;
      alvo.append(filho instanceof Node ? filho : String(filho));
    });
    return alvo;
  }
})();
