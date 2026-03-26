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
