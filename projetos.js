/* =====================================================
   ARQUIVO DE CONTEÚDO: é o único que você precisa editar.
   Salve, envie ao GitHub e o Netlify publica sozinho.
   Regra de ouro: entre um bloco { ... } e o próximo vai sempre uma vírgula.
   ===================================================== */

const PERFIL = {
  nome: "Junior Rabelo dos Santos",
  titulo: "Análise de processos e dados aplicada à indústria",
  // Cada texto entre aspas vira um parágrafo.
  resumo: [
    "Profissional formado em Ciências Contábeis, com experiência nas áreas contábil e fiscal, indústria farmacêutica e suporte funcional a sistemas. Iniciei minha trajetória com escrituração, análise de lançamentos e rotinas fiscais, incluindo operações do Simples Nacional.",
    "Na indústria farmacêutica, atuei em Recebimento Fiscal, realizando análise de pedidos de compra e notas fiscais, liberação de materiais para recebimento físico e interface com PCP, Suprimentos e Logística, utilizando o SAP S/4HANA. Atualmente, atuo com suporte à usabilidade de sistemas desenvolvidos para Conselhos de Fiscalização Profissional, realizando atendimento aos usuários, análise de inconsistências, testes funcionais em bases de clientes e encaminhamento de demandas às equipes de desenvolvimento.",
    "Como direcionamento profissional, venho me preparando para estar apto a receber oportunidade nas áreas de Análise de Dados, PCP, Processos e Logística, por meio de estudos de conceitos, ferramentas e cases práticos. Busco uma oportunidade para transformar essa preparação em experiência profissional, aproveitando minha vivência com sistemas, informações, rotinas administrativas e ambiente industrial."
  ],
  vagas: ["Analista Industrial Jr", "Analista de PCP Jr", "Analista de Produção Jr", "Analista de Logística Jr"],
  foto: "",   // opcional: "img/foto.jpg" (deixe vazio para não mostrar foto)
  local: "Luziânia-GO. Disponível para oportunidades presenciais ou híbridas na região.",
  email: "jr.contdata.ti@gmail.com",
  linkedin: "https://www.linkedin.com/in/junior-santos-47a08662/",
  github: "https://github.com/Jrcontdata"
};

const FORMACAO = [
  { curso: "Ciências Contábeis", instituicao: "", periodo: "" }   // preencha a instituição e o período, se quiser
];

const EXPERIENCIAS = [
  { titulo: "Recebimento fiscal (indústria farmacêutica)",
    // empresa: "", periodo: "",   // opcional: remova as barras para usar
    texto: "Análise de dados de notas fiscais de matéria-prima, embalagem, material de consumo e manutenção e pedidos de compra para liberar o recebimento físico. Interface com time de suprimentos, PCP e Logística. Análise e apresentação de indicadores." },
  { titulo: "Suporte de usabilidade de sistemas",
    texto: "Suporte de usabilidade dos sistemas aos clientes, documentação, levantamento de requisitos e interface com a equipe de desenvolvimento na análise de dúvidas e erros no sistema apresentados pelos clientes." },
  { titulo: "Contabilidade",
    texto: "Análise de dados de notas fiscais, regularização de pendências, lançamento de despesas e receitas." },
  { titulo: "Conferência de mercadorias",
    texto: "Análise de dados de notas fiscais, conciliação de quantidades recebidas com nota fiscal, identificação de divergências, organização e controle do estoque." }
];

/* Habilidades: cada grupo vira um quadro. Liste só o que você de fato domina ou está estudando. */
const HABILIDADES = [
  { nome: "Excel",             icone: "grade",     cor: "#1f9d62" },
  { nome: "SQL",               icone: "banco",     cor: "#2f7fd1", nivel: "Em estudo" },
  { nome: "Power BI",          icone: "grafico",   cor: "#d99a00", nivel: "Em estudo" },
  { nome: "Python",            icone: "codigo",    cor: "#7b5fd0", nivel: "Em estudo" },
  { nome: "BPMN",              icone: "fluxo",     cor: "#d4503f" },
  { nome: "SAP S/4HANA",       icone: "monitor",   cor: "#2a8fb8" },
  { nome: "Recebimento fiscal",icone: "documento", cor: "#c2562f" },
  { nome: "Estoque",           icone: "caixa",     cor: "#a5762a" },
  { nome: "PCP",               icone: "relogio",   cor: "#0f9d8c", nivel: "Em estudo" },
  { nome: "Logística",         icone: "caminhao",  cor: "#3d6fd9", nivel: "Em estudo" },
  { nome: "Indicadores",       icone: "alvo",      cor: "#c43d7a", nivel: "Em estudo" },
  { nome: "Lean e PDCA",       icone: "ciclo",     cor: "#5a9e2d", nivel: "Em estudo" }
];

/* -----------------------------------------------------
   CURSOS E CERTIFICAÇÕES
   Se a lista estiver vazia, a seção e o item do menu somem sozinhos.
   Para adicionar, copie o exemplo abaixo para dentro da lista (fora do comentário) e troque pelos seus dados.
   status: "concluido" | "andamento"
   imagem e url são opcionais (imagem do certificado em img/, url do certificado ou da credencial)
   ----------------------------------------------------- */
const CURSOS = [
  // { nome: "Nome do curso", instituicao: "Instituição", ano: "2026", carga: "40 h",
  //   status: "concluido", imagem: "img/certificado-sql.png", alt: "Certificado do curso", url: "https://..." },
];

/* -----------------------------------------------------
   PROJETOS
   tipo:      "case" | "ferramenta" | "processo" | "industria"
   status:    "ok" (concluído) | "wip" (em construção) | "todo" (planejado)
   imagem:    (opcional) caminho dentro de img/, ex.: "img/bpmn-recebimento.png"
   alt:       (use com imagem) descrição curta da imagem
   arquivos:  (opcional) menu "Código e arquivos". Cada item: { texto, url, tipo }
              tipo é só um rótulo, ex.: "SQL", "Excel", "Power BI", "Notebook", "Diagrama".
              Com um item vira botão direto; com vários vira menu suspenso.
   etapas:    (opcional) lista que aparece em "Etapas"
   ----------------------------------------------------- */
const ITEMS = [
  { tipo:"case", status:"ok",
  titulo:"Case: recebimento fiscal de material de consumo (BPMN)",
  descricao:"Mapeamento em BPMN do processo que executei na indústria farmacêutica: da chegada da nota fiscal à análise do pedido de compra, tratativa de pendências, conferência física e lançamento no ERP. Atuei em todas as etapas, exceto a conferência física, feita pela Logística.",
  tags:["BPMN","Bizagi","Recebimento fiscal","SAP"],
  imagem:"img/bpmn-recebimento.png", alt:"Diagrama BPMN do recebimento fiscal de material de consumo",
  etapas:["Diagrama da situação atual feito no Bizagi","Duas raias: Recebimento Fiscal e Logística","Três decisões: pendência na nota, pendências solucionadas e divergência na conferência física","Próximo passo: proposta de melhoria e indicadores"],
  arquivos:[{ texto:"Diagrama em PDF", url:"https://github.com/Jrcontdata/Portfolio-JuniorSantos/blob/main/bpmn-recebimento/recebimento.pdf", tipo:"Diagrama" },
            { texto:"Descrição do processo (README)", url:"https://github.com/Jrcontdata/Portfolio-JuniorSantos/tree/main/bpmn-recebimento", tipo:"Documentação" }] },
  {,
    tipo: "case", status: "todo",
    titulo: "Case integrado: do pedido ao estoque",
    descricao: "Fluxo de compras, recebimento e estoque com base de dados simulada, consultas SQL, painel no Power BI e proposta de melhoria do processo.",
    tags: ["BPMN", "Excel", "SQL", "Power BI", "Estoque"],
    etapas: ["Modelagem do processo", "Base simulada e consultas SQL", "Painel: prazo de entrega, divergências e giro", "Conclusões e recomendações"],
    arquivos: []
  },
  { tipo: "ferramenta", status: "wip", titulo: "Excel: controle de estoque e curva ABC",
    descricao: "Planilha com classificação ABC, estoque de segurança e ponto de pedido.", tags: ["Excel", "Estoque", "Tabela dinâmica"], arquivos: [] },
  { tipo: "ferramenta", status: "wip", titulo: "SQL: consultas sobre pedidos e estoque",
    descricao: "Consultas para cruzar pedidos, notas e itens e identificar divergências.", tags: ["SQL", "JOIN", "Agregações"], arquivos: [] },
  { tipo: "ferramenta", status: "todo", titulo: "Power BI: painel logístico",
    descricao: "Painel de prazo de entrega, divergências e giro de estoque.", tags: ["Power BI", "DAX", "Indicadores"], arquivos: [] },
  { tipo: "ferramenta", status: "todo", titulo: "Python: análise de dados de produção",
    descricao: "Limpeza e análise exploratória de um conjunto de dados de produção.", tags: ["Python", "pandas", "Gráficos"], arquivos: [] },
  { tipo: "processo", status: "wip", titulo: "Modelagem de processos com BPMN",
    descricao: "Como mapear, medir e melhorar fluxos, com exemplos de recebimento e compras.", tags: ["BPMN", "Bizagi", "Situação atual e futura"], arquivos: [] },
  { tipo: "industria", status: "wip", titulo: "Fundamentos de PCP",
    descricao: "Planejamento da demanda, MRP, estoque de segurança e programação da produção.", tags: ["PCP", "MRP", "Lead time"], arquivos: [] },
  { tipo: "industria", status: "todo", titulo: "Indicadores industriais: OEE, OTIF e giro",
    descricao: "O que cada indicador mede, como calcular e como interpretar.", tags: ["OEE", "OTIF", "Indicadores"], arquivos: [] },
  { tipo: "industria", status: "todo", titulo: "Lean e melhoria contínua",
    descricao: "Desperdícios, 5S e ciclo PDCA aplicados a recebimento e armazenagem.", tags: ["Lean", "5S", "PDCA"], arquivos: [] }
];
