const Just = (valor) => ({
  map: (fn) => Just(fn(valor)),
  getOrElse: () => valor,
});

const Nothing = () => ({
  map: () => Nothing(),
  getOrElse: (valorPadrao) => valorPadrao,
});

const fromArray = (lista) => (lista.length > 0 ? Just(lista) : Nothing());
/* Adaptando o pipeline */
const filtrarPorCategoriaSeguro = (categoria) => (lista) =>
  fromArray(filtrarPorCategoria(categoria)(lista));

const pipelineSeguro = pipe(
  filtrarPorCategoriaSeguro("tech"),
  (maybe) => maybe.map(filtrarPorValorMinimo(500)),
  (maybe) => maybe.map(totalPorCategoria),
);

/* Uso */
pipelineSeguro(vendas).getOrElse({ erro: "Nenhum resultado encontrado" });
