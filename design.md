# design.md — Portfólio Acadêmico · Gabriel Travensolli

> **Desenvolvimento de Software Multiplataforma (DSM)** · Fatec Jacareí — Prof. Francisco de Moura
> RA 2581392613017 · Turma 1º Sem. 2026 · Publicação: `https://fatec-jacarei-dsm-portfolio.github.io/ra2581392613017/`
>
> Referência de design e de arquitetura de conteúdo do portfólio. Versão 1.1 — 2026-09-17.

## Sumário

1. [Visão e princípios](#1-visão-e-princípios)
2. [Conformidade com as orientações oficiais](#2-conformidade-com-as-orientações-oficiais)
3. [Mapa do site](#3-mapa-do-site)
4. [Design tokens](#4-design-tokens)
5. [Componentes base](#5-componentes-base)
6. [Componente Trajetória](#6-componente-trajetória)
7. [Movimento](#7-movimento)
8. [Acessibilidade e responsivo](#8-acessibilidade-e-responsivo)
9. [Arquitetura de conteúdo — o arquivo "de-para"](#9-arquitetura-de-conteúdo--o-arquivo-de-para)
10. [Grade DSM — siglas e carga horária](#10-grade-dsm--siglas-e-carga-horária)
11. [Conteúdo inicial](#11-conteúdo-inicial)
12. [Fluxo Git e padrão de commits](#12-fluxo-git-e-padrão-de-commits)
13. [Próximos passos](#13-próximos-passos)

---

## 1. Visão e princípios

**Conceito: caderno de curso.** O portfólio é uma página de leitura, bem diagramada, que conta a trajetória no DSM semestre a semestre. A **linha do tempo** é a espinha da página. Cada semestre mostra as matérias, as atividades feitas em cada matéria e o Projeto Integrador (ABP).

| Princípio | Na prática |
|---|---|
| **Conteúdo primeiro** | A trajetória é o destaque. Nenhum efeito decorativo compete com ela. |
| **Simples** | Uma página, uma coluna de leitura, uma cor de destaque. |
| **Fluido** | Transições curtas e naturais; o layout se reorganiza do celular ao desktop sem quebras. |
| **Zero dependência externa** | Fontes, ícones, imagens e dados ficam no repositório (regra oficial da Fatec). |
| **Fácil de manter** | Novo conteúdo = editar um único arquivo: `docs/dados/portfolio.js`. |

**O que o site não é:** vitrine de efeitos (partículas, parallax, gradientes, vidro fosco), currículo corporativo genérico ou uma lista solta de repositórios.

---

## 2. Conformidade com as orientações oficiais

Fonte: `github.com/fatec-jacarei-dsm-portfolio/informacoes` (Portfólio Digital — Orientações Oficiais).

| Requisito oficial | Como o design atende | Onde |
|---|---|---|
| Conteúdo em `/docs`, publicado no Pages institucional | Todo o site vive em `docs/` | §9.1 |
| README na raiz, no template, com link para o Pages | README reescrito no template oficial | §2.1, §13 |
| Apresentação: foto | Foto local `docs/img/foto.jpg` | §3.2 |
| Apresentação: breve apresentação pessoal | Bio de 2–3 frases | §3.2 |
| Objetivos profissionais ou áreas de interesse | Seção **Interesses** | §3.3 |
| Projetos **Acadêmicos** | Seção **Trajetória**: atividades por matéria + ABP por semestre | §6 |
| Projetos **Profissionais** e **Pessoais** | Seção **Outros projetos** (cada grupo aparece se tiver itens) | §3.5 |
| Nome, breve descrição, tecnologias, link do repositório | Campos `nome`, `descricao`, `tecnologias`, `repo` | §9.3 |
| **Contribuição pessoal** (item mais importante) | Bloco **"Minha parte"** em destaque na ABP e nos projetos pessoais/profissionais | §6.4, §3.5 |
| Semestre em que foi feito | Derivado da sigla da matéria ou da chave da ABP | §6, §9.3 |
| ABP indica o semestre: `1DSM – 1º Sem. 2026` | Formato usado no cabeçalho do semestre e no bloco ABP | §6.3, §6.4 |
| Informações complementares (formação, cursos, conhecimentos, idiomas, hobbies) | Seção **Complementar** + "Fora do código" em Interesses | §3.6, §3.3 |
| Contatos: apenas GitHub e LinkedIn | Apresentação e rodapé; sem e-mail ou telefone | §3.2, §3.7 |
| Vídeo pitch (2DSM, 4DSM, 6DSM) | Link "Pitch" na apresentação + README | §3.2 |
| Só HTML5, CSS3 e JavaScript, sem build | HTML + CSS + JS puros, abertos direto no navegador | §9 |
| Sem bibliotecas externas hospedadas por terceiros | Fonte `woff2` local, ícones SVG inline, nada de CDN | §4.2, §5.9 |
| Sem backend e sem APIs próprias | Dados em arquivos `.js` do próprio repositório | §9 |
| GitHub Actions bloqueado | Nenhum workflow; conferência manual no PR | §12 |

### 2.1 Pendências de conteúdo

- [ ] **README** no template oficial: aluno, curso, turma `1º Sem. 2026`, link do Pages e vídeos 2DSM/4DSM/6DSM.
- [ ] **Repositórios acadêmicos privados.** Quem avaliar verá 404. Tornar públicos (ou manter `privado: true` na config):
  `dev-web1-atv1`, `dev-web1-atv2`, `dev-web1-atv3`, `dev-web1-atv4`, `dev-web1-atv5`, `algoritmos-atividade7`, `backend-scrum-flow-abp`.
- [x] **"Minha parte"** da ABP 1DSM, dos três projetos pessoais e do projeto profissional (obrigatório e o item mais importante).
- [ ] **Vídeo pitch 2DSM** (~1 min): quem sou, áreas de interesse, contribuições nas ABPs 1DSM e 2DSM, principais tecnologias.
- [ ] **Foto** em `docs/img/foto.jpg`: quadrada, ≥ 400×400 px, ≤ 150 KB.
- [ ] Preencher os placeholders `<…>` restantes de `portfolio.js`: gostos pessoais e idiomas. As contribuições já estão preenchidas.

---

## 3. Mapa do site

Página única, nesta ordem:

| # | Seção | Âncora | Conteúdo |
|---|---|---|---|
| 1 | Barra fixa | — | Monograma, links âncora, botão de tema, GitHub/LinkedIn |
| 2 | Apresentação | `#inicio` | Foto, nome, curso, turma, bio, links, pitch, progresso |
| 3 | Interesses | `#interesses` | Áreas de estudo · Onde aplico · Fora do código |
| 4 | Trajetória acadêmica | `#trajetoria` | Linha do tempo 1DSM → 6DSM (núcleo, §6) |
| 5 | Outros projetos | `#projetos` | Pessoais · Profissionais |
| 6 | Complementar | `#complementar` | Formação, cursos, idiomas, conhecimentos técnicos |
| 7 | Rodapé | — | Identificação, contatos, data de atualização |

### Desktop (≥ 64rem)

```
┌────────────────────────────────────────────────────────────────────────────┐
│ GT                               Interesses  Trajetória  Projetos  ☾  ⌥ in │  barra fixa
└────────────────────────────────────────────────────────────────────────────┘

  ÍNDICE (fixo)        ┌──────────────────────────────────────────────────┐
                       │ ( foto )                                         │
  Início               │                                                  │
  Interesses           │ Gabriel Travensolli                              │
  Trajetória           │ Desenvolvimento de Software Multiplataforma      │
    ● 1DSM             │ Fatec Jacareí · Turma 1º Sem. 2026               │
    ◉ 2DSM             │                                                  │
    ○ 3DSM             │ Sou estudante de DSM na Fatec Jacareí. Gosto de  │
    ○ 4DSM             │ tecnologia, automação e inteligência artificial… │
    ○ 5DSM             │                                                  │
    ○ 6DSM             │ [⌥ GitHub]  [in LinkedIn]  [▶ Pitch 2DSM]        │
  Projetos             │                                                  │
  Complementar         │ ▰▰▰▰▰▰ ▰▰▰▱▱▱ ▱▱▱▱▱▱ ▱▱▱▱▱▱ ▱▱▱▱▱▱ ▱▱▱▱▱▱        │
                       │ 1DSM   2DSM   3DSM   4DSM   5DSM   6DSM          │
                       │ semestre 2 de 6 · em andamento                   │
                       └──────────────────────────────────────────────────┘

                       INTERESSES
                       Áreas de estudo     Onde aplico          Fora do código
                       IA aplicada         Assistentes com LLM  …
                       Automação           Ferramentas          …
                       Desenvolvimento web Integrações e APIs

                       TRAJETÓRIA ACADÊMICA                   (ver §6)
                       …
```

### Mobile (~400px)

```
┌──────────────────────────────────┐
│ GT  Interesses Trajetória Proj. ☾│
├──────────────────────────────────┤
│ ( foto )                         │
│ Gabriel Travensolli              │
│ DSM · Fatec Jacareí              │
│ Turma 1º Sem. 2026               │
│                                  │
│ Sou estudante de DSM na Fatec…   │
│                                  │
│ [⌥ GitHub]                       │
│ [in LinkedIn]                    │
│ [▶ Pitch 2DSM]                   │
│ ▰▰▰ ▰▱▱ ▱▱▱ ▱▱▱ ▱▱▱ ▱▱▱          │
│ semestre 2 de 6                  │
│                                  │
│ INTERESSES                       │
│ Áreas de estudo                  │
│ IA aplicada · Automação · Web    │
│ Onde aplico                      │
│ …                                │
│                                  │
│ TRAJETÓRIA ACADÊMICA             │
│ ● 1DSM – 1º Sem. 2026            │
│ │ concluído                      │
│ │ ┃ ABP · Scrum Flow — backend   │
│ │ ┃ MINHA PARTE …                │
│ │ IAL-010 Algoritmos e…     1 ›  │
│ │ ISW-028 Desenvolvimento…  5 ›  │
│ │ ISW-031 Design Digital    —    │
│ ◉ 2DSM – 2º Sem. 2026            │
│ │ em andamento                   │
│ ○ 3DSM – 1º Sem. 2027  a seguir  │
└──────────────────────────────────┘
```

### 3.1 Barra fixa

- Altura 56px, fundo `--papel` sólido. A borda inferior `1px --linha` aparece depois de 8px de rolagem.
- Esquerda: monograma **GT** em Fraunces, com link para `#inicio`.
- Direita: links `Interesses · Trajetória · Projetos` e, em seguida, o botão de tema (§5.10). A partir de 40rem entram também os ícones de GitHub e LinkedIn, sempre depois do botão de tema.
- Sem menu hambúrguer: os 3 links e o botão de tema cabem em 320px. Para isso, os espaçamentos da barra são `--e-3` abaixo de 40rem (e `--e-4` daí para cima) e os links caem para `--t-meta` abaixo de 22.5rem (§8.2).
- A partir de 64rem, o índice lateral (§8.3) assume a navegação e a barra mostra só o monograma, o botão de tema e os ícones.

### 3.2 Apresentação (`#inicio`)

- **Foto**: círculo de 112px (96px no mobile), borda `1px --linha`, `width`/`height` fixos.
- **Nome** (`h1`), depois o curso e a linha "Fatec Jacareí · Turma 1º Sem. 2026".
- **Bio**: 2 a 3 frases (`perfil.bio`), com no máximo 68ch.
- **Links**: GitHub e LinkedIn (botão secundário). "▶ Pitch 2DSM" (botão primário) só aparece se `perfil.links.pitch` estiver preenchido.
- **Progresso do curso**: 6 segmentos, um por semestre, alinhados à linha do tempo.
  - Concluído: preenchido em `--tinta-2`.
  - Em andamento: preenchido em `--caneta` na proporção dos dias já decorridos do semestre.
  - A seguir: `--linha`.
  - Legenda em texto: "semestre 2 de 6 · em andamento".
  - Marcação: `<ol aria-label="Progresso no curso">`, com cada `<li>` trazendo o status em texto oculto visualmente.

### 3.3 Interesses (`#interesses`)

Três listas curtas (`perfil` → `interesses`):

| Grupo | Campo | Exemplo |
|---|---|---|
| Áreas de estudo | `estudo` | IA aplicada, automação de processos, desenvolvimento web |
| Onde aplico | `aplicacoes` | Assistentes com LLMs, ferramentas de produtividade, integrações |
| Fora do código | `foraDoCodigo` | gostos pessoais e hobbies |

- Título de cada grupo como rótulo mono (§5.7); itens como lista simples, sem pílulas.
- 3 colunas a partir de 40rem; empilhado abaixo disso.

### 3.4 Trajetória acadêmica (`#trajetoria`)

É o núcleo do site. Ver [§6](#6-componente-trajetória).

### 3.5 Outros projetos (`#projetos`)

Dois grupos, **Pessoais** e **Profissionais**. Um grupo sem itens não é renderizado. O formato é de lista, não uma grade de cartões:

```
PESSOAIS

Roda da Vida App                                   2026   repositório ↗  demo ↗
Aplicação web para avaliar o equilíbrio pessoal nos 7 pilares…
MINHA PARTE  <sua contribuição>
TypeScript · React
─────────────────────────────────────────────────────────────────────────────
Assistente Financeiro WhatsApp                     2025   repositório ↗
…
```

- Nome em `h4`, com ano e links à direita (quebram para baixo no mobile).
- Descrição em `--tinta-2`, "Minha parte" (§6.4) e tecnologias (§5.3).
- Itens separados por `1px --linha`.

### 3.6 Complementar (`#complementar`)

Lista de definição (`<dl>`) com Formação · Cursos e certificações · Idiomas · Conhecimentos técnicos. Duas colunas a partir de 40rem. Conhecimentos técnicos aparecem como texto mono separado por " · ", sem ícones de marca.

Cada curso pode ser só texto ou um objeto `{ nome, url }`. Com `url`, o nome ganha depois dele um link curto "certificado ↗" para a página de verificação do emissor, no mesmo padrão do "repositório ↗" dos projetos (§5.1). O link fica fora do nome porque `.link-externo` não quebra linha, e um nome longo estouraria em tela estreita.

### 3.7 Rodapé

```
Gabriel Travensolli da Silva · RA 2581392613017
Fatec Jacareí — Desenvolvimento de Software Multiplataforma
GitHub · LinkedIn                                  Atualizado em 11/09/2026
```

---

## 4. Design tokens

### 4.1 Cores

Três situações: **automático** (padrão — segue o `prefers-color-scheme` do sistema), **claro** e **escuro**, escolhidos no botão de tema da barra (§5.10). A escolha vira `data-tema="claro"` ou `data-tema="escuro"` no `<html>` e é gravada em `localStorage["portfolio-tema"]`; enquanto não houver escolha, o atributo não existe e quem decide é o sistema. As cores são as mesmas nos dois caminhos — a tabela abaixo continua sendo a única fonte da paleta.

| Token | Uso | Claro | Escuro |
|---|---|---|---|
| `--papel` | Fundo da página | `#F7F4EC` | `#141412` |
| `--papel-2` | Superfícies (bloco ABP, hover) | `#EFEADF` | `#1D1C19` |
| `--tinta` | Texto principal | `#1C1B19` | `#EDE8DD` |
| `--tinta-2` | Texto secundário, descrições | `#57534B` | `#B7B1A5` |
| `--tinta-3` | Metadados, siglas, contadores | `#69645A` | `#9A9488` |
| `--linha` | Bordas e divisórias (**nunca texto**) | `#DDD6C8` | `#2E2C28` |
| `--caneta` | Destaque único (azul caneta): links ativos, semestre atual, ABP | `#2F4BC7` | `#8FA3FF` |
| `--caneta-suave` | Fundo de selo "em andamento", foco suave | `#E3E7F8` | `#1F2540` |
| `--ok` | Texto do status "concluído" | `#356E45` | `#7FBF8E` |

**Contraste verificado (WCAG 2.x, mínimo AA 4.5:1 para texto):**

| Par | Claro | Escuro |
|---|---|---|
| `--tinta` sobre `--papel` | 15.66 | 15.10 |
| `--tinta-2` sobre `--papel` / `--papel-2` | 6.96 / 6.38 | 8.65 / 7.99 |
| `--tinta-3` sobre `--papel` / `--papel-2` | 5.35 / 4.90 | 6.12 / 5.65 |
| `--caneta` sobre `--papel` / `--papel-2` | 6.47 / 5.93 | 7.77 / 7.18 |
| `--caneta` sobre `--caneta-suave` | 5.78 | 6.34 |
| `--papel` sobre `--caneta` (botão primário) | 6.47 | 7.77 |
| `--ok` sobre `--papel` / `--papel-2` | 5.51 / 5.05 | 8.56 / 7.91 |

Regra: **cor nunca é o único sinal**. Todo status tem texto ("concluído", "em andamento", "a seguir"). Vale também para o botão de tema: além do ícone, ele tem nome acessível descrevendo a ação ("Ativar tema escuro" / "Ativar tema claro").

```css
:root {
  color-scheme: light dark;
  --papel: #F7F4EC;
  --papel-2: #EFEADF;
  --tinta: #1C1B19;
  --tinta-2: #57534B;
  --tinta-3: #69645A;
  --linha: #DDD6C8;
  --caneta: #2F4BC7;
  --caneta-suave: #E3E7F8;
  --ok: #356E45;
}

/* Escuro automático: vale enquanto o visitante não fixar o claro no botão (§5.10). */
@media (prefers-color-scheme: dark) {
  :root:not([data-tema="claro"]) {
    --papel: #141412;
    --papel-2: #1D1C19;
    --tinta: #EDE8DD;
    --tinta-2: #B7B1A5;
    --tinta-3: #9A9488;
    --linha: #2E2C28;
    --caneta: #8FA3FF;
    --caneta-suave: #1F2540;
    --ok: #7FBF8E;
  }
}

/* Tema fixado pelo visitante, mesmo contrariando o sistema. */
:root[data-tema="claro"] { color-scheme: light; }

:root[data-tema="escuro"] {
  color-scheme: dark;
  --papel: #141412;
  --papel-2: #1D1C19;
  --tinta: #EDE8DD;
  --tinta-2: #B7B1A5;
  --tinta-3: #9A9488;
  --linha: #2E2C28;
  --caneta: #8FA3FF;
  --caneta-suave: #1F2540;
  --ok: #7FBF8E;
}
```

> A paleta escura aparece duas vezes de propósito: `@media` não se combina com um seletor de atributo na mesma regra. `light-dark()` resolveria a duplicação, mas foi descartada porque, em navegador sem suporte, a custom property fica inválida no cálculo e a página perde a paleta inteira. Ao mudar uma cor, mude nos dois blocos e na tabela acima.

### 4.2 Tipografia

| Papel | Família | Origem |
|---|---|---|
| Títulos (nome, seções, semestres, monograma) | **Fraunces** (variável, licença OFL) | `docs/fonts/fraunces-var-latin.woff2`, subset latin + latin-ext (acentos), alvo ≤ 80 KB |
| Texto corrido | Fonte do sistema | Nenhum download |
| Siglas, metadados, tecnologias, contadores | Monoespaçada do sistema | Nenhum download |

```css
@font-face {
  font-family: "Fraunces";
  src: url("../fonts/fraunces-var-latin.woff2") format("woff2");
  font-weight: 300 700;
  font-display: swap;
}

:root {
  --fonte-titulo: "Fraunces", Georgia, "Times New Roman", serif;
  --fonte-texto: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  --fonte-mono: ui-monospace, "SFMono-Regular", Menlo, Consolas, "Liberation Mono", monospace;
}
```

**Escala:**

| Token | Uso | Tamanho | Família / peso | Altura de linha |
|---|---|---|---|---|
| `--t-nome` | `h1` nome | `clamp(2.4rem, 1.6rem + 3.2vw, 3.6rem)` | Fraunces 600, `letter-spacing: -0.02em` | 1.05 |
| `--t-secao` | `h2` seções | `clamp(1.6rem, 1.2rem + 1.6vw, 2.2rem)` | Fraunces 600 | 1.15 |
| `--t-semestre` | `h3` semestres | `1.35rem` | Fraunces 600 | 1.25 |
| `--t-item` | `h4` ABP e projetos | `1.125rem` | Texto 600 | 1.35 |
| `--t-corpo` | Parágrafos, nomes de matéria | `1.0625rem` (17px) | Texto 400 | 1.65 |
| `--t-pequeno` | Descrições de atividade | `0.9375rem` | Texto 400 | 1.5 |
| `--t-meta` | Siglas, tecnologias, contadores | `0.8125rem` | Mono 400, `letter-spacing: 0.02em` | 1.4 |
| `--t-rotulo` | Rótulos de seção e de bloco | `0.75rem` | Mono 500, maiúsculas, `letter-spacing: 0.12em` | 1.2 |

- Parágrafos com `max-inline-size: 68ch` e `text-wrap: pretty`; títulos com `text-wrap: balance`.

### 4.3 Espaçamento (escala de 4px)

| Token | rem | px |
|---|---|---|
| `--e-1` | 0.25 | 4 |
| `--e-2` | 0.5 | 8 |
| `--e-3` | 0.75 | 12 |
| `--e-4` | 1 | 16 |
| `--e-5` | 1.5 | 24 |
| `--e-6` | 2 | 32 |
| `--e-7` | 3 | 48 |
| `--e-8` | 4.5 | 72 |
| `--e-9` | 7 | 112 |

Espaço entre seções: `--e-8` no mobile e `--e-9` a partir de 40rem.

### 4.4 Layout

| Token | Valor | Uso |
|---|---|---|
| `--coluna` | `44rem` | Largura máxima da coluna de leitura |
| `--margem` | `clamp(1rem, 4vw, 2rem)` | Margem lateral (mínimo 16px) |
| `--indice` | `12rem` | Largura do índice lateral (≥ 64rem) |

A partir de 64rem: `grid-template-columns: var(--indice) minmax(0, var(--coluna))`, com `gap: 4rem`, centralizado.

### 4.5 Bordas, raios e foco

| Token | Valor |
|---|---|
| `--raio-p` | `6px` (botões, selos) |
| `--raio-m` | `10px` (bloco ABP) |
| `--borda` | `1px solid var(--linha)` |
| Foco | `outline: 2px solid var(--caneta); outline-offset: 2px` |

Sem sombras. Sem gradientes. Sem `backdrop-filter`.

### 4.6 Movimento

| Token | Valor |
|---|---|
| `--dur-rapida` | `150ms` |
| `--dur-media` | `250ms` |
| `--dur-lenta` | `400ms` |
| `--curva` | `cubic-bezier(0.2, 0.7, 0.2, 1)` |

---

## 5. Componentes base

### 5.1 Link de texto

- Cor `--tinta`, sublinhado de `1px` em `--linha` com `text-underline-offset: 0.2em`.
- No hover, o sublinhado passa para `--caneta` (`--dur-rapida`).
- **Link externo**: ícone ↗ em SVG (0.8em) + `<span class="sr-only">(abre em nova aba)</span>`, `target="_blank" rel="noopener noreferrer"`.

### 5.2 Botão-link

| Variante | Visual | Uso |
|---|---|---|
| Secundário | Altura 40px (44px no mobile), `padding: 0 14px`, `--borda`, `--raio-p`, ícone 18px + texto. Hover: borda `--tinta-2`, fundo `--papel-2` | GitHub, LinkedIn |
| Primário | Fundo `--caneta`, texto `--papel`. Hover: `filter: brightness(1.08)` | Pitch |

### 5.3 Tecnologias

Texto mono `--t-meta` em `--tinta-2`, com itens separados por " · " (ex.: `Node.js · Express · PostgreSQL`). Sem pílulas coloridas nem logos.

### 5.4 Selo

Mono `0.75rem`, `padding: 2px 8px`, `border-radius: 999px`.

| Selo | Texto | Borda | Fundo |
|---|---|---|---|
| `concluído` | `--ok` | `--linha` | transparente |
| `em andamento` | `--caneta` | nenhuma | `--caneta-suave` |
| `a seguir` | `--tinta-3` | `1px dashed --linha` | transparente |
| `privado` | `--tinta-3` | `--linha` | transparente |

### 5.5 Contador

Mono `--t-meta` em `--tinta-3`, `min-inline-size: 2ch`, alinhado à direita. Mostra o número de atividades ou "—". Inclui `<span class="sr-only">atividades</span>`.

### 5.6 Seta de expansão

Chevron SVG de 16px em `--tinta-3`. Gira `90deg` quando o `<details>` está aberto (`--dur-rapida`).

### 5.7 Rótulo

Mono `--t-rotulo` em `--tinta-3` (em `--caneta` dentro do bloco ABP). Usado em "INTERESSES", "PROJETO INTEGRADOR · ABP", "MINHA PARTE" e nos títulos dos grupos.

### 5.8 Botão "Expandir tudo"

`<button type="button">` com aparência de link mono pequeno. Alterna entre "Expandir tudo" e "Recolher tudo" e abre ou fecha todos os `<details>` da Trajetória.

### 5.9 Ícones

SVG inline com `aria-hidden="true"` e `fill`/`stroke: currentColor`: GitHub, LinkedIn, ↗ externo, ▶ play, chevron, ☀ sol e ☾ lua. Os paths ficam fixos no `app.js`, nunca vêm dos dados. Nenhuma biblioteca de ícones.

### 5.10 Botão de tema

`<button type="button" class="icone-link barra__tema">` na barra fixa (§3.1), montado pelo `app.js` em `renderTema()` dentro de `<div data-seletor-tema></div>`: sem JavaScript o botão não existe e a página segue o tema do sistema.

| Parte | Especificação |
|---|---|
| Aparência | Mesma caixa dos ícones sociais (`.icone-link`): 40×40px, `--raio-p`, ícone de 20px em `--tinta-2`; no hover, fundo `--papel-2` e ícone `--tinta`. Um `::before` com `inset: -2px` amplia o alvo de toque para 44×44px (§8.1) sem alterar o layout |
| Ícone | ☾ lua quando o tema em uso é o claro; ☀ sol quando é o escuro — o ícone mostra para onde o clique leva |
| Nome acessível | `aria-label` e `title` com a ação: "Ativar tema escuro" / "Ativar tema claro", trocados a cada clique. Um `<span class="sr-only" role="status">` irmão anuncia "Tema escuro ativado." (vazio no carregamento, para não falar nada ao abrir a página) |
| Estado | `data-tema="claro"` ou `data-tema="escuro"` no `<html>`. Sem o atributo, vale o `prefers-color-scheme` (§4.1), e o ícone acompanha a troca de tema do sistema via `matchMedia` |
| Persistência | `localStorage["portfolio-tema"]` dentro de `try/catch`, sem aviso no console: em `file://` alguns navegadores bloqueiam o acesso e, nesse caso, a escolha vale só nesta visita. Valor inválido é ignorado |

- Um clique alterna claro ⇄ escuro. Sem menu, sem `<select>` e sem terceiro estado visível: "automático" é o estado inicial, antes do primeiro clique — depois dele só se volta ao automático limpando o armazenamento.
- Visível em todas as faixas, inclusive abaixo de 40rem, onde GitHub e LinkedIn somem: esses dois estão duplicados na apresentação e no rodapé, o botão de tema não tem duplicata.
- A troca não anima (§7): a paleta muda no mesmo quadro.

---

## 6. Componente Trajetória

### 6.1 Anatomia

```
TRAJETÓRIA ACADÊMICA                                           Expandir tudo

●  1DSM – 1º Sem. 2026                                              concluído
│  6 matérias · 6 atividades · ABP
│
│  ┃ PROJETO INTEGRADOR · ABP                         1DSM – 1º Sem. 2026
│  ┃ Scrum Flow — backend                                    repositório ↗
│  ┃ API REST para gestão de usuários, módulos, questões e exames…
│  ┃ MINHA PARTE
│  ┃ <contribuição pessoal>
│  ┃ Node.js · Express · PostgreSQL · JWT
│  ┃ integra  IES-011 · ISW-028 · ISW-031
│
│  IAL-010  Algoritmos e Lógica de Programação           80 aulas    1  ›
│  ISW-028  Desenvolvimento Web I                        80 aulas    5  ⌄
│  │        Atividade 1 — Aplicação Node.js + Express                  ↗
│  │        Primeira aplicação web da disciplina, com servidor em Express.
│  │        Node.js · Express
│  │        Atividade 5 — API Mega-Sena                                ↗
│  │        Carrega o CSV oficial de resultados no PostgreSQL…
│  │        Node.js · Express · PostgreSQL
│  ISW-031  Design Digital                               80 aulas    —
│  IES-011  Engenharia de Software I                     80 aulas    —
│  IBD-014  Modelagem de Banco de Dados                  80 aulas    —
│  ISO-011  Sistemas Operacionais e Redes de Computadores 80 aulas   —
│
◉  2DSM – 2º Sem. 2026                                           em andamento
│  6 matérias · 0 atividades
│
│  ┆ PROJETO INTEGRADOR · ABP
│  ┆ Em desenvolvimento neste semestre.
│
│  ILP-036  Técnicas de Programação I                    80 aulas    —
│  …
│
○  3DSM – 1º Sem. 2027                                               a seguir
○  4DSM – 2º Sem. 2027                                               a seguir
○  5DSM – 1º Sem. 2028                                               a seguir
○  6DSM – 2º Sem. 2028                                               a seguir
```

> Enquanto um repositório estiver privado, o ↗ é trocado pelo selo `privado` e o nome da atividade fica sem link.

### 6.2 Espinha e nós

- **Espinha**: linha vertical de `2px`, a 11px da borda esquerda da lista.
  - Em `--tinta-2` entre semestres concluídos.
  - Em `--linha` do semestre atual em diante.
- **Nó** (círculo de 14px centrado na espinha):

| Status | Nó | Visual |
|---|---|---|
| concluído | ● | Preenchido em `--tinta-2` |
| em andamento | ◉ | Preenchido em `--caneta` + anel pulsante em `--caneta-suave` (§7) |
| a seguir | ○ | Borda `2px --linha`, fundo `--papel` |

### 6.3 Cabeçalho do semestre

- `h3` com o id do semestre (`1DSM`) em Fraunces + " – 1º Sem. 2026" em `--tinta-2`, na mesma linha.
- Selo de status à direita; no mobile desce para baixo do título.
- Linha de meta em mono: `6 matérias · 6 atividades · ABP` ("· ABP" só se houver ABP preenchida).
- **Semestre a seguir**: uma única linha em `--tinta-3`, sem meta, sem matérias e sem interação.
- Âncora `#s-1dsm`.

**Recolhimento por semestre** (escala até o 6DSM):

| Semestre | Elemento | Estado inicial |
|---|---|---|
| Em andamento | `<details class="semestre" open>` | Aberto |
| Imediatamente anterior | `<details class="semestre" open>` | Aberto |
| Mais antigos | `<details class="semestre">` | Fechado; o resumo mostra o cabeçalho + nome da ABP |
| A seguir | `<div class="semestre semestre--futuro">` | Não expansível |

### 6.4 Bloco ABP

Primeiro item de todo semestre concluído ou em andamento. Âncora `#abp-1dsm`. Assim como a linha de matéria (§6.5), é um `<details class="abp__detalhes">` fechado por padrão: só o resumo fica visível até o clique, e a navegação para a âncora abre o bloco automaticamente.

| Parte | Especificação |
|---|---|
| Contêiner | Fundo `--papel-2`, `border-left: 3px solid var(--caneta)`, `border-radius: 0 var(--raio-m) var(--raio-m) 0`, `padding: var(--e-5)` (`--e-4` no mobile) |
| Resumo (`<summary class="abp__resumo">`) | Linha 1: rótulo `PROJETO INTEGRADOR · ABP` em `--caneta` + `1DSM – 1º Sem. 2026` em mono `--tinta-3`, à direita. Linha 2: nome (`h4`, `--t-item`) + seta (§5.6), sempre visíveis |
| Corpo (`<div class="abp__corpo">`, exibido ao expandir) | "repositório ↗" (ou selo `privado`), descrição, Minha parte, tecnologias e integra, nessa ordem |
| Descrição | `--t-corpo` em `--tinta-2` |
| **Minha parte** | Rótulo `MINHA PARTE` + parágrafo em `--tinta`, com `margin-block: var(--e-4)`. É o campo mais importante para a Fatec, por isso fica logo depois da descrição |
| Tecnologias | §5.3 |
| Integra | Rótulo "integra" + siglas como links `#m-ies-011`: o clique rola até a matéria e a abre. Nos semestres 4 a 6: "integra as disciplinas do 1º ao 4º semestre" |

**Estado vazio** (`abp["2DSM"]: null` em semestre concluído ou em andamento): sem fundo, `border: 1px dashed var(--linha)`, raio `--raio-m`, rótulo + "Em desenvolvimento neste semestre." em `--tinta-3`.

### 6.5 Linha de matéria

Matéria **com atividades**: `<details class="materia" id="m-isw-028">`.

```css
.materia > summary {
  display: grid;
  grid-template-columns: 5.5rem minmax(0, 1fr) auto 2.5ch 1rem;
  gap: var(--e-3);
  align-items: baseline;
  min-block-size: 44px;
  padding-block: var(--e-3);
  border-block-end: var(--borda);
  list-style: none;
  cursor: pointer;
}
.materia > summary::-webkit-details-marker { display: none; }
```

| Coluna | Conteúdo | Estilo |
|---|---|---|
| 1 | Sigla `ISW-028` | Mono `--t-meta`, `--tinta-3` |
| 2 | Nome da matéria | `--t-corpo`, `--tinta`; no hover `--caneta` |
| 3 | Carga horária `80 aulas` | Mono `--t-meta`, `--tinta-3`; oculta abaixo de 30rem |
| 4 | Contador (§5.5) | — |
| 5 | Seta (§5.6) | — |

Matéria **sem atividades**: `<div class="materia materia--vazia">`, mesmo grid, nome em `--tinta-2`, contador "—", sem seta e sem foco.

**Conteúdo aberto**: `<ul class="atividades">` com `padding-inline-start: calc(5.5rem + var(--e-3))`, alinhado sob o nome, a partir de 40rem. No mobile: `padding-inline-start: var(--e-4)` com `border-inline-start: var(--borda)`.

### 6.6 Item de atividade

```
Atividade 5 — API Mega-Sena                                              ↗
Carrega o CSV oficial de resultados no PostgreSQL e disponibiliza os dados via API REST.
Node.js · Express · PostgreSQL
```

- **Nome**: link para `repo` com ↗. Se `privado: true`, texto simples + selo `privado`.
- **Descrição** (opcional): `--t-pequeno` em `--tinta-2`, com no máximo 2 linhas.
- **Tecnologias** (opcional): §5.3.
- Espaço entre itens: `--e-4`. A ordem é a mesma do arquivo `portfolio.js`.

### 6.7 Regras de estado

**Status do semestre**, calculado pela data atual a partir de `perfil.inicio` (`"2026-02"`):

| Semestre | Período |
|---|---|
| Ímpar do ano (1º Sem.) | 1º de fevereiro a 31 de julho |
| Par do ano (2º Sem.) | 1º de agosto a 31 de janeiro do ano seguinte |

| Status | Condição |
|---|---|
| concluído | data ≥ fim do semestre |
| em andamento | início ≤ data < fim |
| a seguir | data < início |

- Rótulo gerado: `<n>DSM – <1º|2º> Sem. <ano>`, por exemplo `1DSM – 1º Sem. 2026` e `4DSM – 2º Sem. 2027`.
- Contadores: atividades por matéria; no semestre, soma das atividades + "ABP" se preenchida.

**Âncoras e links diretos:**

| Âncora | Efeito ao carregar ou ao mudar o hash |
|---|---|
| `#s-2dsm` | Abre o semestre e rola até ele |
| `#abp-1dsm` | Abre o semestre e rola até o bloco ABP |
| `#m-isw-028` | Abre o semestre e a matéria, e rola até ela |

A rolagem compensa a barra fixa com `scroll-margin-top: 72px`.

### 6.8 Ajustes no mobile (< 40rem)

- Grid da matéria: `5rem minmax(0,1fr) 2.5ch 1rem` (sem carga horária abaixo de 30rem).
- Selo de status abaixo do `h3`.
- Bloco ABP com `padding: var(--e-4)`; "repositório ↗" desce para uma linha própria.
- Nomes longos quebram com `overflow-wrap: anywhere`.

---

## 7. Movimento

**Fluido, nunca decorativo.** Todo movimento serve para orientar: mostrar que algo abriu, onde a pessoa está, qual semestre está em curso.

| Elemento | Efeito | Duração / curva | Com `prefers-reduced-motion: reduce` |
|---|---|---|---|
| `<details>` (semestre, matéria) | Altura de 0 → auto | `--dur-media`, `--curva` | Abre instantaneamente |
| Seta | `rotate(0 → 90deg)` | `--dur-rapida` | Troca de estado sem animação |
| Seções | `opacity 0→1` + `translateY(12px→0)`, uma vez, ao entrar na tela (IntersectionObserver, `threshold: 0.15`) | `--dur-lenta`, `--curva` | Visível direto |
| Nó "em andamento" | Anel pulsante (`box-shadow` de 0 → 8px, esmaecendo) | `2.4s ease-out infinite` | Anel estático |
| Segmento atual do progresso | Preenchimento de 0 → % ao carregar | `600ms`, `--curva` | Já no valor final |
| Rolagem para âncoras | `scroll-behavior: smooth` | Nativa | `auto` |
| Hover (links, linhas) | Cor | `--dur-rapida` | Mantido (não é movimento) |
| Troca de tema (§5.10) | Nenhuma: a paleta muda no mesmo quadro | — | Igual |

```css
@media (prefers-reduced-motion: no-preference) {
  :root { interpolate-size: allow-keywords; }
  html { scroll-behavior: smooth; }

  details::details-content {
    block-size: 0;
    overflow: clip;
    transition: block-size var(--dur-media) var(--curva),
                content-visibility var(--dur-media) allow-discrete;
  }
  details[open]::details-content { block-size: auto; }
}
```

- Navegadores sem suporte a `::details-content` abrem sem animação (melhoria progressiva).
- **Revelação sem risco**: o estado inicial oculto só vale com a classe `html.js`, aplicada pelo `app.js`. Se o JS falhar, nada fica invisível.
- **Troca de tema sem animação**: não há `transition` própria nem *crossfade* da página. As transições de cor existentes são de hover (`--dur-rapida`), então só esses poucos elementos fazem um fade de 150ms na troca.
- **Proibidos:** partículas, parallax, gradientes animados, texto "digitando", cursor customizado, scroll-jacking.

---

## 8. Acessibilidade e responsivo

### 8.1 Checklist

- [ ] `<html lang="pt-BR">`; `<title>Gabriel Travensolli — Portfólio DSM · Fatec Jacareí</title>`; `meta description`.
- [ ] Landmarks: `header` (barra), `nav` (barra e índice), `main`, `footer`.
- [ ] Link "Pular para a trajetória" como primeiro elemento focável.
- [ ] Hierarquia: um `h1` (nome), `h2` por seção, `h3` por semestre, `h4` para ABP e projetos.
- [ ] `<details>`/`<summary>` nativos: Enter e Espaço funcionam sem JS.
- [ ] Status sempre em texto; contador com texto oculto visualmente ("5 atividades").
- [ ] Foco visível em tudo que é interativo (§4.5); nunca `outline: none` sem substituto.
- [ ] Contraste AA verificado (§4.1).
- [ ] Alvos de toque com ≥ 44px de altura (linhas de matéria, botões, botão de tema).
- [ ] Links externos com `rel="noopener noreferrer"` + "(abre em nova aba)".
- [ ] Foto com `alt="Foto de Gabriel Travensolli"` e `width`/`height` definidos.
- [ ] `prefers-reduced-motion` (§7) respeitado.
- [ ] `prefers-color-scheme` (§4.1) respeitado como padrão, enquanto o visitante não escolher um tema no botão (§5.10).
- [ ] Botão de tema com nome acessível que descreve a ação, foco visível (§4.5) e contraste AA conferido nos dois temas, inclusive com a escolha contrária à do sistema.
- [ ] `<noscript>`: "A trajetória acadêmica precisa de JavaScript para ser exibida." + link para o GitHub.

### 8.2 Breakpoints

| Faixa | Mudanças |
|---|---|
| < 22.5rem (360px) | Links da barra em `--t-meta` para caber junto do botão de tema |
| < 30rem (480px) | Carga horária oculta; botões da apresentação empilhados |
| 30–40rem | Carga horária visível; Interesses e Complementar empilhados |
| ≥ 40rem (640px) | Interesses em 3 colunas; Complementar em 2 colunas; atividades alinhadas sob o nome; ícones na barra |
| ≥ 64rem (1024px) | Índice lateral fixo; barra superior só com monograma + botão de tema + ícones |

Regras gerais: nenhuma largura mínima maior que a tela, nada de rolagem horizontal, `img { max-width: 100% }`, `overflow-wrap: anywhere` em nomes de repositório. O botão de tema (§5.10) aparece em todas as faixas; abaixo de 40rem os espaçamentos da barra caem para `--e-3` para tudo continuar cabendo em 320px.

### 8.3 Índice lateral (≥ 64rem)

- `position: sticky; top: 5rem`.
- Links para as seções. Sob "Trajetória", uma sublista dos 6 semestres com os mesmos nós (● ◉ ○) e links `#s-1dsm`…
- Item ativo (seção visível): texto `--tinta` + barra de `2px` em `--caneta` à esquerda. Os demais em `--tinta-3`.
- Detecção via IntersectionObserver com `rootMargin: "-40% 0px -55% 0px"`.

---

## 9. Arquitetura de conteúdo — o arquivo "de-para"

**Regra de ouro:** para incluir uma atividade basta dizer **qual é, onde está o repositório e de qual matéria é**. O semestre, o rótulo `1DSM – 1º Sem. 2026`, o status e os contadores são calculados.

### 9.1 Estrutura de arquivos

```
ra2581392613017/
├── README.md                     template oficial da Fatec
├── design.md                     este documento (fora de docs/, não é publicado)
└── docs/                         publicado pelo GitHub Pages
    ├── .nojekyll
    ├── index.html                esqueleto: header, main vazio, noscript, script do tema
    ├── css/
    │   └── estilo.css            tokens (§4) + componentes (§5–§6)
    ├── js/
    │   └── app.js                valida os dados e monta a página
    ├── dados/
    │   ├── grade-dsm.js          grade oficial — quase nunca muda
    │   └── portfolio.js          ← O ARQUIVO QUE VOCÊ EDITA
    ├── fonts/
    │   └── fraunces-var-latin.woff2
    └── img/
        └── foto.jpg
```

No `<head>`, antes da folha de estilo, um script inline aplica o tema escolhido antes da primeira pintura — os scripts com `defer` rodam depois do parse e a página piscaria no tema do sistema:

```html
<script>
  try {
    const tema = localStorage.getItem("portfolio-tema");
    if (tema === "claro" || tema === "escuro") document.documentElement.dataset.tema = tema;
  } catch (erro) { /* armazenamento bloqueado em file://: segue o tema do sistema */ }
</script>
```

Ordem dos scripts no final do `<body>` de `index.html`:

```html
<script src="dados/grade-dsm.js" defer></script>
<script src="dados/portfolio.js" defer></script>
<script src="js/app.js" defer></script>
```

**Por que `.js` e não `.json`?** Ao abrir `index.html` direto do disco (`file://`), o navegador bloqueia `fetch()` de JSON. Um `.js` que define `window.GRADE` e `window.PORTFOLIO` funciona no disco e no GitHub Pages, sem servidor e usando só arquivos do repositório.

### 9.2 `docs/dados/grade-dsm.js`

Contém a grade oficial (§10). Formato:

```js
// docs/dados/grade-dsm.js — grade oficial do DSM (Fatec Jacareí).
// cargaHoraria em aulas semestrais, conforme o ementário.
window.GRADE = {
  curso: "Desenvolvimento de Software Multiplataforma",
  unidadeCarga: "aulas",
  semestres: [
    {
      id: "1DSM",
      numero: 1,
      // 1DSM a 3DSM: disciplina que conduz a ABP + disciplinas integradas
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
    // 2DSM e 3DSM seguem o mesmo formato (tabela completa na §10)
    {
      id: "4DSM",
      numero: 4,
      // 4DSM a 6DSM: o laboratório integra todas as disciplinas do 1º ao semestre atual
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
    }
    // 5DSM e 6DSM seguem o mesmo formato
  ]
};
```

### 9.3 `docs/dados/portfolio.js` — o "de-para"

É o único arquivo do dia a dia. Exemplo completo, já com o conteúdo inicial (§11):

```js
// docs/dados/portfolio.js — conteúdo do portfólio.
// É o único arquivo editado no dia a dia. Campos marcados "opcional" podem ser omitidos.
// Textos entre < > são placeholders: o app.js avisa no console enquanto não forem preenchidos.
window.PORTFOLIO = {
  atualizadoEm: "2026-09-11",

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
  // Obrigatórios: materia (sigla da grade, §10), nome, repo.
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
    cursos: [
      "Formação em Dados — DNC",                                                    // só texto
      { nome: "Curso básico de Git — Cursa (8 h, jun. 2026)", url: "https://cursa.com.br/certificate/5726f7073f" } // com verificação
    ],
    idiomas: ["<idioma — nível>"],
    conhecimentos: ["Python", "TypeScript", "JavaScript", "React", "Node.js", "Express", "PostgreSQL", "Git", "Playwright", "RabbitMQ", "APIs OpenAI e Gemini"]
  }
};
```

### 9.4 Regras do `app.js`

**Validação** (avisos com `console.warn`, prefixo `[portfólio]`; a página nunca quebra):

| Situação | Ação |
|---|---|
| `atividades[].materia` não existe na grade | Aviso + item ignorado |
| Chave de `abp` não existe na grade (ex.: `"7DSM"`) | Aviso + item ignorado |
| ABP, projeto pessoal ou profissional sem `contribuicao` | Aviso (campo obrigatório pela Fatec) |
| Qualquer texto começando com `<` | Aviso "placeholder não preenchido" |
| `repo`, `demo` ou `complementar.cursos[].url` sem `https://` | Aviso + link não renderizado |
| Item de `complementar.cursos` em objeto sem `nome` | Aviso + item ignorado |
| Campo obrigatório ausente | Aviso + item ignorado |

**Montagem:**
- Todo conteúdo dos dados entra no DOM com `textContent` e `setAttribute`, **nunca `innerHTML`** (evita injeção de HTML).
- Atividades aparecem na ordem do arquivo, agrupadas pela matéria da sigla.
- Status, rótulos e contadores são calculados (§6.7).
- Aplica `html.classList.add("js")` antes de renderizar (§7).
- Monta o botão de tema em `[data-seletor-tema]` e alterna `data-tema` no `<html>`, gravando em `localStorage["portfolio-tema"]` dentro de `try/catch` (§5.10). Com o armazenamento bloqueado, a escolha vale só nesta visita, sem aviso no console.
- Depois de renderizar, trata o hash da URL (§6.7).

### 9.5 Como adicionar uma atividade

1. Atualize e crie a branch (§12):
   ```bash
   git switch develop && git pull
   git switch -c content/tp1-atividade-2
   ```
2. Ache a sigla da matéria na [§10](#10-grade-dsm--siglas-e-carga-horária) (ex.: Técnicas de Programação I = `ILP-036`).
3. Acrescente um objeto em `atividades` no `docs/dados/portfolio.js`:
   ```js
   { materia: "ILP-036", nome: "Atividade 2 — Classes e herança", repo: "https://github.com/travensolli/<repositorio>" },
   ```
4. Abra `docs/index.html` no navegador: confira a matéria e veja se o console está sem avisos `[portfólio]`.
5. Faça o commit, envie e abra o PR para `develop`:
   ```bash
   git add docs/dados/portfolio.js
   git commit -m "content(2dsm): adiciona atividade 2 de técnicas de programação i"
   git push -u origin content/tp1-atividade-2
   gh pr create --base develop --title "content(2dsm): adiciona atividade 2 de técnicas de programação i"
   ```

**ABP do semestre:** troque `abp["2DSM"]: null` pelo objeto completo (nome, repo, descrição, contribuição, tecnologias) numa branch `content/abp-2dsm`.

---

## 10. Grade DSM — siglas e carga horária

Fonte: *Ementário do Curso de DSM da Fatec Jacareí* (PDF oficial). **Carga horária em aulas semestrais**; cada semestre soma **480 aulas**.

### 1DSM — 1º semestre

| Sigla | Matéria | Carga horária |
|---|---|---|
| IAL-010 | Algoritmos e Lógica de Programação | 80 aulas |
| ISW-028 | Desenvolvimento Web I | 80 aulas |
| ISW-031 | Design Digital | 80 aulas |
| IES-011 | Engenharia de Software I | 80 aulas |
| IBD-014 | Modelagem de Banco de Dados | 80 aulas |
| ISO-011 | Sistemas Operacionais e Redes de Computadores | 80 aulas |

**ABP:** conduzida por IES-011, integrando ISW-028 e ISW-031.

### 2DSM — 2º semestre

| Sigla | Matéria | Carga horária |
|---|---|---|
| ILP-036 | Técnicas de Programação I | 80 aulas |
| ISW-029 | Desenvolvimento Web II | 80 aulas |
| MAT-019 | Matemática para Computação | 80 aulas |
| IES-012 | Engenharia de Software II | 80 aulas |
| IBD-015 | Banco de Dados – Relacional | 80 aulas |
| IED-005 | Estrutura de Dados | 80 aulas |

**ABP:** conduzida por IES-012, integrando ISW-029 e IBD-015.

### 3DSM — 3º semestre

| Sigla | Matéria | Carga horária |
|---|---|---|
| ILP-037 | Técnicas de Programação II | 80 aulas |
| ISW-030 | Desenvolvimento Web III | 80 aulas |
| MAG-004 | Álgebra Linear | 80 aulas |
| AGO-021 | Gestão Ágil de Projetos de Software | 80 aulas |
| IBD-016 | Banco de Dados – Não Relacional | 80 aulas |
| IHC-004 | Interação Humano Computador | 40 aulas |
| ING-085 | Inglês I | 40 aulas |

**ABP:** conduzida por AGO-021, integrando ISW-030, IBD-016 e IHC-004.

### 4DSM — 4º semestre

| Sigla | Matéria | Carga horária |
|---|---|---|
| ISW-032 | Integração e Entrega Contínua | 80 aulas |
| ISW-033 | Laboratório de Desenvolvimento Web | 80 aulas |
| IAL-011 | Internet das Coisas e Aplicações | 80 aulas |
| ILP-038 | Programação para Dispositivos Móveis I | 80 aulas |
| MET-004 | Estatística Aplicada | 80 aulas |
| IHC-005 | Experiência do Usuário | 40 aulas |
| ING-086 | Inglês II | 40 aulas |

**ABP:** conduzida por ISW-033, integrando as disciplinas do 1º ao 4º semestre.

### 5DSM — 5º semestre

| Sigla | Matéria | Carga horária |
|---|---|---|
| ISW-034 | Computação em Nuvem I | 80 aulas |
| MAQ-024 | Aprendizagem de Máquina | 80 aulas |
| ISW-036 | Laboratório de Desenvolvimento para Dispositivos Móveis | 80 aulas |
| ILP-039 | Programação para Dispositivos Móveis II | 80 aulas |
| ISG-022 | Segurança no Desenvolvimento de Aplicações | 80 aulas |
| POR-040 | Fundamentos da Redação Técnica | 40 aulas |
| ING-087 | Inglês III | 40 aulas |

**ABP:** conduzida por ISW-036, integrando as disciplinas do 1º ao 5º semestre.

### 6DSM — 6º semestre

| Sigla | Matéria | Carga horária |
|---|---|---|
| ISW-035 | Computação em Nuvem II | 80 aulas |
| ISW-037 | Processamento de Linguagem Natural | 80 aulas |
| ISW-038 | Laboratório de Desenvolvimento Multiplataforma | 80 aulas |
| ISW-039 | Mineração de Dados | 80 aulas |
| IQS-004 | Qualidade e Testes de Software | 80 aulas |
| DDI-009 | Ética Profissional e Patente | 40 aulas |
| ING-088 | Inglês IV | 40 aulas |

**ABP:** conduzida por ISW-038, integrando as disciplinas do 1º ao 6º semestre.

---

## 11. Conteúdo inicial

### Acadêmicos (de-para)

| Semestre | Matéria | Atividade | Repositório | Visibilidade |
|---|---|---|---|---|
| 1DSM | IAL-010 | Atividade 7 — Prática de algoritmos | `travensolli/algoritmos-atividade7` | privado |
| 1DSM | ISW-028 | Atividade 1 — Aplicação Node.js + Express | `travensolli/dev-web1-atv1` | privado |
| 1DSM | ISW-028 | Atividade 2 — Consulta com requisição HTTP | `travensolli/dev-web1-atv2` | privado |
| 1DSM | ISW-028 | Atividade 3 — Cadastro de usuários | `travensolli/dev-web1-atv3` | privado |
| 1DSM | ISW-028 | Atividade 4 — Cadastro de jogos da Mega-Sena | `travensolli/dev-web1-atv4` | privado |
| 1DSM | ISW-028 | Atividade 5 — API Mega-Sena | `travensolli/dev-web1-atv5` | privado |
| 1DSM | **ABP** | Scrum Flow — backend | `travensolli/backend-scrum-flow-abp` | privado |
| 2DSM | **ABP** | — em desenvolvimento — | — | — |

### Pessoais

| Projeto | Repositório | Ano | Visibilidade |
|---|---|---|---|
| Assistente Financeiro WhatsApp | `travensolli/assistente-financeiro-whatsapp` | 2025 | público |
| CR2 → JPEG Converter | `travensolli/cr2-jpeg-converter` | 2026 | público |
| Roda da Vida App (+ demo) | `travensolli/roda-da-vida-app` | 2026 | público |

### Profissionais

| Projeto | Repositório | Ano | Visibilidade |
|---|---|---|---|
| Teacher Thaís — Site institucional (+ demo) | `travensolli/teacher-thais-site` | 2026 | privado |

### Fora do portfólio

| Repositório | Motivo |
|---|---|
| `netacad-extension`, `catalogo-editorial-monet` | Retirados do portfólio por decisão do autor |
| `projeto-integrador-series`, `serietrack-mc` | Material do curso técnico de Informática, não do DSM |

---

## 12. Fluxo Git e padrão de commits

### 12.1 Branches

| Branch | Papel | Sai de | Entra em |
|---|---|---|---|
| `main` | Produção: é o que o GitHub Pages publica (`main:/docs`) | — | — |
| `develop` | Integração: tudo passa por aqui antes da `main` | `main` | PR → `main` |
| `feature/<desc>` | Nova seção, componente ou funcionalidade | `develop` | PR → `develop` |
| `content/<desc>` | Atividades, ABP e textos em `dados/portfolio.js` | `develop` | PR → `develop` |
| `fix/<desc>` | Correção (bug, link errado, visual quebrado) | `develop` | PR → `develop` |
| `docs/<desc>` | README, `design.md` | `develop` | PR → `develop` |
| `chore/<desc>` | Manutenção (fontes, imagens, organização) | `develop` | PR → `develop` |

- `<desc>` em kebab-case curto: `feature/trajetoria`, `content/atividades-2dsm`, `fix/link-abp-1dsm`.
- **Nunca** commitar direto em `develop` ou `main`.
- **Sem atalho de hotfix**: correção urgente também vai de branch → `develop` → `main`.
- O branch padrão do GitHub é `main`, então todo PR de trabalho usa `--base develop` explícito.

### 12.2 Padrão de commit — Conventional Commits (descrição em pt-BR)

```
<tipo>(<escopo opcional>): <descrição no imperativo, minúscula, sem ponto final, até ~72 caracteres>

<corpo opcional: o porquê da mudança>
```

| Tipo | Quando usar |
|---|---|
| `feat` | Nova seção, componente ou funcionalidade |
| `fix` | Correção de bug, link ou visual |
| `content` | Conteúdo do portfólio: atividades, ABP, textos |
| `docs` | README, `design.md` |
| `style` | Só CSS/visual, sem mudar estrutura ou comportamento |
| `refactor` | Reorganização de código sem mudar comportamento |
| `chore` | Manutenção: fontes, imagens, arquivos auxiliares |

**Escopos:** `apresentacao`, `interesses`, `trajetoria`, `projetos`, `complementar`, `dados`, `grade`, `readme`, `1dsm` … `6dsm`.

**Exemplos:**

```
docs: adiciona design.md do portfólio
feat(trajetoria): cria linha do tempo por semestre
style(trajetoria): ajusta espaçamento das linhas de matéria no mobile
content(2dsm): adiciona atividade 3 de técnicas de programação i
content(1dsm): preenche contribuição pessoal da abp
fix(dados): corrige link do repositório da abp 1dsm
```

### 12.3 Pull Requests

| PR | Título | Merge | Depois |
|---|---|---|---|
| `<branch>` → `develop` | Mesmo padrão do commit | **Squash and merge** (1 commit convencional por entrega) | Apagar a branch |
| `develop` → `main` | `chore(release): publica <resumo>` | **Create a merge commit** (marca cada publicação) | Conferir o site no Pages |

Modelo de descrição do PR:

```md
## Resumo
- <o que mudou e por quê>

## Checklist
- [ ] Abri `docs/index.html` localmente e está funcionando
- [ ] Testei em ~400px de largura
- [ ] Testei nos dois temas: automático (pelo sistema) e alternando no botão
- [ ] Links conferidos
- [ ] Console sem avisos `[portfólio]`
```

Depois de cada merge, antes da próxima branch:

```bash
git switch develop && git pull
```

---

## 13. Próximos passos

Cada item em branch própria, seguindo a §12:

| # | Branch | Entrega |
|---|---|---|
| 1 | `feature/estrutura-base` | `index.html`, `estilo.css` com tokens, `app.js`, `grade-dsm.js` completo, fonte e ícones |
| 2 | `content/seed-1dsm-2dsm` | `portfolio.js` com o conteúdo da §11 |
| 3 | `docs/readme-template` | README no template oficial da Fatec |
| 4 | — (GitHub) | Tornar públicos os repositórios acadêmicos da §2.1 e remover `privado: true` numa branch `content/` |
| 5 | `content/contribuicoes` | Preencher os gostos pessoais e os idiomas. A "Minha parte" da ABP, dos projetos pessoais e do profissional já está feita |
| 6 | `content/pitch-2dsm` | Gravar o pitch 2DSM e adicionar o link em `perfil.links.pitch` e no README |
| 7 | `feature/seletor-de-tema` | Botão de tema na barra (§5.10), com persistência em `localStorage` |
