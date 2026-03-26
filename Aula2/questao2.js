const filtrarPorValorMinimo = (min) => (lista) =>
  lista.filter(item => item.valor >= min);

const filtrarPorCategoria = (categoria) => (lista) =>
  lista.filter(item => item.categoria === categoria);

function resumir(lista) {
  return lista.map(({ produto, valor, categoria }) => ({
    produto,
    valor,
    categoria
  }));
}

function totalPorCategoria(lista) {
  return lista.reduce((acc, item) => {
    acc[item.categoria] = (acc[item.categoria] || 0) + item.valor;
    return acc;
  }, {});
}

function ordenarPorValor(lista) {
  return lista.toSorted((a, b) => a.valor - b.valor);
}

function pegarTop3MaisCaros(lista) {
  return lista.toSorted((a, b) => b.valor - a.valor).slice(0, 3);
}

const pipe = (...funcoes) => (valorInicial) =>
  funcoes.reduce((acc, fn) => fn(acc), valorInicial);

const vendas = [
  { produto: "Notebook", valor: 3500, categoria: "tech", estoque: 3 },
  { produto: "Mouse", valor: 120, categoria: "tech", estoque: 10 },
  { produto: "Cadeira", valor: 700, categoria: "moveis", estoque: 2 },
  { produto: "Mesa", valor: 150, categoria: "moveis", estoque: 5 },
  { produto: "Teclado", valor: 580, categoria: "tech", estoque: 4 },
  { produto: "Monitor", valor: 1100, categoria: "tech", estoque: 6 },
  { produto: "Estante", valor: 900, categoria: "moveis", estoque: 1 }
];

const totalDeVendasTechAcimaDe500 = pipe(
  filtrarPorCategoria("tech"),
  filtrarPorValorMinimo(500),
  totalPorCategoria
);

const top3ProdutosMaisCarosResumidos = pipe(
  ordenarPorValor,
  pegarTop3MaisCaros,
  resumir
);

console.log(totalDeVendasTechAcimaDe500(vendas));
console.log(top3ProdutosMaisCarosResumidos(vendas));
