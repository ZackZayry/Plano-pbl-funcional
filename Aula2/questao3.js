/* Pipeline 1: */
totalDeVendasTechAcimaDe500;
const totalDeVendasTechAcimaDe500 = pipe(
  filtrarPorCategoria("tech"),
  filtrarPorValorMinimo(500),
  totalPorCategoria,
);

/* Pipeline 2: */ top3ProdutosMaisCarosResumidos;
const top3ProdutosMaisCarosResumidos = pipe(
  pegarTop3MaisCaros,
  ordenarPorValor,
  resumir,
);
