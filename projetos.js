/* =====================================================
   ARQUIVO DE CONTEÚDO: é o único que você precisa editar.
   Salve, envie ao GitHub e o Netlify publica sozinho.
   Regra de ouro: entre um bloco { ... } e o próximo vai sempre uma vírgula.
   ===================================================== */

const PERFIL = {
  nome: "Junior Rabelo dos Santos",
  titulo: "Processos e Operações Industriais | Análise de Dados | Planejamento e Controle",
  resumo: [
    "Formado em Ciências Contábeis, com experiência em controle de estoque, rotinas fiscais, recebimento fiscal na indústria farmacêutica e suporte funcional a sistemas.",
    "Minha trajetória reúne análise de informações, organização de processos e atuação próxima às operações. Na indústria, utilizei SAP S/4HANA, analisei notas fiscais e pedidos de compra, acompanhei indicadores e trabalhei em interface com PCP, Suprimentos e Logística.",
    "Atualmente, aprofundo meus conhecimentos em PCP, análise de dados e melhoria de processos para ampliar minha atuação no planejamento, controle e eficiência das operações industriais."
  ],
  vagas: ["Analista de PCP Jr", "Analista de Logística Jr", "Analista Industrial Jr", "Analista de Produção Jr"],
  foto: "",
  local: "Luziânia-GO. Disponível para oportunidades presenciais ou híbridas na região.",
  email: "jr.contdata.ti@gmail.com",
  linkedin: "https://www.linkedin.com/in/junior-santos-47a08662/",
  github: "https://github.com/Jrcontdata"
};

const FORMACAO = [
  { curso: "Ciências Contábeis", instituicao: "", periodo: "Concluído" },
  { curso: "Técnico em Logística", instituicao: "", periodo: "Em andamento" }
];

const EXPERIENCIAS = [
  {
    titulo: "Suporte funcional a sistemas",
    empresa: "IMPLANTA INFORMÁTICA", periodo: "07/2025 - ATUAL",
    texto: "Atendimento e orientação a usuários de sistemas administrativos e de gestão. Análise de inconsistências, testes funcionais, documentação de ocorrências e levantamento de requisitos. Interface com a equipe de desenvolvimento para investigação e encaminhamento de problemas."
  },
  {
    titulo: "Recebimento fiscal (indústria farmacêutica)",
    empresa: "EMS PHARMA", periodo: "12/2023 - 07/2025",
    texto: "Análise de notas fiscais e pedidos de compra no SAP S/4HANA. Assumi individualmente as atividades do setor após a saída de uma integrante da equipe. Organizei a validação antecipada de notas e o acompanhamento de pendências, contribuindo para agilizar a liberação de materiais na portaria. Interface com PCP, Suprimentos e Logística para resolução de pendências. Estruturei e apresentei mensalmente indicadores da área, com dados do SAP tratados no Excel, gráficos e apresentações em PowerPoint."
  },
  {
    titulo: "Rotinas contábeis e fiscais | Encarregado de escritório",
    empresa: "GUIMARÃES CONTABILIDADE", periodo: "09/2014 - 07/2023",
    texto: "Atuação em escrituração e rotinas contábeis e fiscais. Contribuí para regularizar lançamentos acumulados e atualizar informações dos clientes, incentivando a entrega de documentos completos e confiáveis. Também acompanhei atividades dos setores e introduzi práticas de organização de demandas com ferramentas como Trello e ChatGPT."
  },
  {
    titulo: "Conferência de mercadorias e controle de estoque",
    empresa: "SUPERMERCADO GOYAZ", periodo: "06/2009 - 04/2012",
    texto: "Conferência de mercadorias recebidas e identificação de divergências. Organização e controle de estoque com aplicação do método FIFO, buscando reduzir perdas. Acompanhamento de níveis de estoque e comunicação de necessidades de reposição ao setor de Compras, contribuindo para o planejamento de abastecimento."
  }
];

/* Habilidades: cada grupo vira um quadro. Liste só o que você de fato domina ou está estudando. */
const HABILIDADES = [
  { grupo: "Ferramentas", itens: [
    { nome: "SAP S/4HANA", icone: "monitor",   cor: "#2a8fb8" },
    { nome: "Excel",       icone: "grade",     cor: "#1f9d62" },
    { nome: "Power BI",    icone: "grafico",   cor: "#d99a00" },
    { nome: "SQL",         icone: "banco",     cor: "#2f7fd1", nivel: "Em estudo" },
    { nome: "BPMN",        icone: "fluxo",     cor: "#d4503f", nivel: "Em estudo" },
    { nome: "Python",      icone: "codigo",    cor: "#7b5fd0", nivel: "Em estudo" }
  ] },
  { grupo: "Conhecimento de processos", itens: [
    { nome: "Recebimento fiscal",           icone: "documento", cor: "#c2562f" },
    { nome: "Fluxo de materiais e compras", icone: "caminhao",  cor: "#3d6fd9" },
    { nome: "Indicadores",                  icone: "alvo",      cor: "#c43d7a" },
    { nome: "PCP",                          icone: "relogio",   cor: "#0f9d8c", nivel: "Em estudo" }
  ] }
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
  titulo:"Mapeamento do recebimento fiscal — BPMN",
  descricao:"Mapeamento em BPMN do processo que executei na indústria farmacêutica: da chegada da nota fiscal à análise do pedido de compra, tratativa de pendências, conferência física e lançamento no ERP. Atuei em todas as etapas, exceto a conferência física, o lançamento da conferência no sistema e a assinatura do romaneio, feita pela Logística.",
  tags:["BPMN","Bizagi","Recebimento fiscal","SAP"],
  imagem:"img/bpmn-recebimento.png", alt:"Diagrama BPMN do recebimento fiscal de material de consumo",
  etapas:["Diagrama da situação atual feito no Bizagi","Duas raias: Recebimento Fiscal e Logística","Três decisões: pendência na nota, pendências solucionadas e divergência na conferência física","Próximo passo (ainda não executado): analisar gargalos, propor melhorias e definir indicadores de tempo de liberação e pendências"],
  arquivos:[{ texto:"Diagrama em PDF", url:"https://github.com/Jrcontdata/Portfolio-JuniorSantos/blob/main/bpmn-recebimento/Recebimento.pdf", tipo:"Diagrama" },
            { texto:"Descrição do processo (README)", url:"https://github.com/Jrcontdata/Portfolio-JuniorSantos/tree/main/bpmn-recebimento", tipo:"Documentação" }] },
  { tipo: "industria", status: "ok",
    titulo: "Planejamento de materiais — cobertura e ponto de pedido",
    descricao: "Estudo com 10 materiais fictícios para apoiar decisões de reposição. O painel em Excel calcula cobertura, ponto de pedido, folga e quantidade sugerida, classificando materiais em pedir agora, atenção ou OK. Permite identificar prioridades de compra e comparar cobertura com lead time. Modelo simplificado: não considera pedidos em aberto, material em trânsito, quarentena ou perdas.",
    aprendizado: "O estoque de segurança pode fazer um material entrar em “pedir agora” mesmo com cobertura maior que o lead time.",
    tags: ["Excel", "Estoque", "Ponto de pedido", "Lead time", "SAP"],
    imagens: [
      { src: "img/painel-cobertura.png",
        alt: "Painel em Excel com 10 materiais fictícios, mostrando cobertura, ponto de pedido e situação por cor.",
        legenda: "painel" },
      { src: "img/grafico-cobertura.png",
        alt: "Gráfico de colunas comparando a cobertura e o lead time, em dias, de 10 materiais fictícios.",
        legenda: "gráfico de cobertura x lead time" }
    ],
    etapas: [
      "Defini 10 insumos fictícios, com estoque, consumo por dia, lead time e estoque de segurança.",
      "Calculei a cobertura (estoque ÷ consumo por dia) e o ponto de pedido (consumo × lead time + estoque de segurança).",
      "Classifiquei cada material como pedir agora, atenção ou OK e calculei a folga (cobertura − lead time).",
      "Calculei a quantidade sugerida a pedir e montei um gráfico de cobertura contra lead time."
    ],
    arquivos: [
      { texto: "Planilha do painel, dados fictícios",
        url: "https://github.com/Jrcontdata/Portfolio-JuniorSantos/raw/main/pcp-cobertura/painel_cobertura_ponto_de_pedido.xlsx",
        tipo: "Excel" }
    ]
  },

  {
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
   { tipo: "industria", status: "todo", titulo: "Indicadores industriais: OEE, OTIF e giro",
    descricao: "O que cada indicador mede, como calcular e como interpretar.", tags: ["OEE", "OTIF", "Indicadores"], arquivos: [] },
  { tipo: "industria", status: "todo", titulo: "Lean e melhoria contínua",
    descricao: "Desperdícios, 5S e ciclo PDCA aplicados a recebimento e armazenagem.", tags: ["Lean", "5S", "PDCA"], arquivos: [] }
];