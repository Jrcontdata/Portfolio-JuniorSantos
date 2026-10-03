/* =====================================================
   ARQUIVO DE CONTEÚDO: é o único que você precisa editar.
   Salve, envie ao GitHub e o Netlify publica sozinho.
   ===================================================== */

const PERFIL = {
  nome: "Junior Rabelo dos Santos",
  titulo: "Análise de dados e processos para PCP, produção e logística",
  resumo: "Profissional formado em Ciências Contábeis, com experiência nas áreas contábil e fiscal, indústria farmacêutica e suporte funcional a sistemas. Iniciei minha trajetória com escrituração, análise de lançamentos e rotinas fiscais, incluindo operações do Simples Nacional. Na indústria farmacêutica, atuei em Recebimento Fiscal, realizando análise de pedidos de compra e notas fiscais, liberação de materiais para recebimento físico e interface com PCP, Suprimentos e Logística, utilizando o SAP S/4HANA. Atualmente, atuo com suporte à usabilidade de sistemas desenvolvidos para Conselhos de Fiscalização Profissional, realizando atendimento aos usuários, análise de inconsistências, testes funcionais em bases de clientes e encaminhamento de demandas às equipes de desenvolvimento.Como direcionamento profissional, venho me preparando para estar apto a receber oportunidade nas áreas de Análise de Dados, PCP,  Processos e Logística, por meio de estudos de conceitos, ferramentas e cases práticos. Busco uma oportunidade para transformar essa preparação em experiência profissional, aproveitando minha vivência com sistemas, informações, rotinas administrativas e ambiente industrial.",
  vagas: ["Analista Industrial Jr", "Analista de PCP Jr", "Analista de Produção Jr", "Analista de Logística Jr"],
  local: "Luziânia-GO. Disponível para oportunidades presenciais ou híbridas na região.",
  email: "jr.contdata.ti@gmail.com",
  linkedin: "https://www.linkedin.com/in/junior-santos-47a08662/",
  github: "https://github.com/Jrcontdata"
};

const EXPERIENCIAS = [
  { titulo: "Recebimento fiscal (indústria farmacêutica)",
    texto: "Análise de dados de notas fiscais de matéria-prima, embalagem, materiais de consumo e manutenção, bem como de pedidos de compra, para liberação do recebimento físico. Interface com as equipes de Suprimentos, PCP e Logística. Análise e apresentação de indicadores." },
  { titulo: "Suporte de usabilidade de sistemas",
    texto: "Suporte à usabilidade dos sistemas aos clientes, documentação, levantamento de requisitos e interface com a equipe de desenvolvimento na análise de dúvidas e erros apresentados pelos clientes no sistema." },
  { titulo: "Contabilidade",
    texto: "Análise de dados de notas fiscais, regularização de pendências, lançamento de despesas e receitas." },
  { titulo: "Conferência de mercadorias",
    texto: "Análise de dados de notas fiscais, conciliação das quantidades recebidas com as notas fiscais, identificação de divergências, organização e controle de estoque." },

   
];

/* -----------------------------------------------------
   PROJETOS
   tipo:    "case" | "ferramenta" | "processo" | "industria"
   status:  "ok" (concluído) | "wip" (em construção) | "todo" (planejado)
   imagem:  (opcional) caminho dentro da pasta img/, ex.: "img/bpmn-recebimento.png"
   alt:     (obrigatório se tiver imagem) descrição curta da imagem
   links:   (opcional) lista de { texto, url }, por exemplo para o GitHub
   etapas:  (opcional) lista de textos que aparece em "Etapas"
   ----------------------------------------------------- */
const ITEMS = [
  {
    tipo: "case", status: "ok",
    titulo: "Case: recebimento fiscal e importação (BPMN)",
    descricao: "Mapeamento em BPMN do processo de conferência de nota fiscal contra pedido de compra, usado para liberar o recebimento físico, incluindo o fluxo de importação.",
    tags: ["BPMN", "Bizagi", "Recebimento", "Compras"],
    // imagem: "img/bpmn-recebimento.png", alt: "Diagrama BPMN do recebimento fiscal",
    etapas: ["Diagrama feito no Bizagi", "Próximo passo: versão com melhorias", "Próximo passo: indicadores de divergência e tempo de liberação"],
    links: []
  },
  {
    tipo: "case", status: "todo",
    titulo: "Case integrado: do pedido ao estoque",
    descricao: "Fluxo de compras, recebimento e estoque com base de dados simulada, consultas SQL, painel no Power BI e proposta de melhoria do processo.",
    tags: ["BPMN", "Excel", "SQL", "Power BI", "Estoque"],
    etapas: ["Modelagem do processo", "Base simulada e consultas SQL", "Painel: prazo de entrega, divergências e giro", "Conclusões e recomendações"],
    links: []
  },
  { tipo: "ferramenta", status: "wip", titulo: "Excel: controle de estoque e curva ABC",
    descricao: "Planilha com classificação ABC, estoque de segurança e ponto de pedido.", tags: ["Excel", "Estoque", "Tabela dinâmica"], links: [] },
  { tipo: "ferramenta", status: "wip", titulo: "SQL: consultas sobre pedidos e estoque",
    descricao: "Consultas para cruzar pedidos, notas e itens e identificar divergências.", tags: ["SQL", "JOIN", "Agregações"], links: [] },
  { tipo: "ferramenta", status: "todo", titulo: "Power BI: painel logístico",
    descricao: "Painel de prazo de entrega, divergências e giro de estoque.", tags: ["Power BI", "DAX", "Indicadores"], links: [] },
  { tipo: "ferramenta", status: "todo", titulo: "Python: análise de dados de produção",
    descricao: "Limpeza e análise exploratória de um conjunto de dados de produção.", tags: ["Python", "pandas", "Gráficos"], links: [] },
  { tipo: "processo", status: "wip", titulo: "Modelagem de processos com BPMN",
    descricao: "Como mapear, medir e melhorar fluxos, com exemplos de recebimento e compras.", tags: ["BPMN", "Bizagi", "Situação atual e futura"], links: [] },
  { tipo: "industria", status: "wip", titulo: "Fundamentos de PCP",
    descricao: "Planejamento da demanda, MRP, estoque de segurança e programação da produção.", tags: ["PCP", "MRP", "Lead time"], links: [] },
  { tipo: "industria", status: "todo", titulo: "Indicadores industriais: OEE, OTIF e giro",
    descricao: "O que cada indicador mede, como calcular e como interpretar.", tags: ["OEE", "OTIF", "Indicadores"], links: [] },
  { tipo: "industria", status: "todo", titulo: "Lean e melhoria contínua",
    descricao: "Desperdícios, 5S e ciclo PDCA aplicados a recebimento e armazenagem.", tags: ["Lean", "5S", "PDCA"], links: [] }
];
