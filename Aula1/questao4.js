//Dados base
const vendas = [
  { produto: "Notebook", valor: 3500, categoria: "tech" },
  { produto: "Mouse", valor: 120, categoria: "tech" },
  { produto: "Cadeira", valor: 700, categoria: "moveis" }
];

const vendasVazia = [];

const vendasUmItem = [
  { produto: "Teclado", valor: 200, categoria: "tech" }
];


// filtrarPorValorMinimo
const filtrar500 = filtrarPorValorMinimo(500);

// teste normal
console.assert(
  filtrar500(vendas).length === 2,
  "Erro: deveria retornar 2 itens com valor >= 500"
);

// lista vazia
console.assert(
  filtrar500(vendasVazia).length === 0,
  "Erro: lista vazia deveria retornar vazio"
);

// lista com um item
console.assert(
  filtrar500(vendasUmItem).length === 0,
  "Erro: item abaixo do mínimo não deveria aparecer"
);

// dados inesperados
const dadosInvalidos = [{ produto: "Teste" }];
console.assert(
  filtrar500(dadosInvalidos).length === 0,
  "Erro: itens sem valor não devem passar no filtro"
);

// verificar imutabilidade
const copiaOriginal1 = JSON.stringify(vendas);
filtrar500(vendas);
console.assert(
  JSON.stringify(vendas) === copiaOriginal1,
  "Erro: função alterou o array original"
);



// Filtrar por categoria
const filtrarTech = filtrarPorCategoria("tech");

// teste normal
console.assert(
  filtrarTech(vendas).length === 2,
  "Erro: deveria retornar 2 itens da categoria tech"
);

// lista vazia
console.assert(
  filtrarTech(vendasVazia).length === 0,
  "Erro: lista vazia deveria retornar vazio"
);

// lista com um item
console.assert(
  filtrarTech(vendasUmItem).length === 1,
  "Erro: deveria retornar o único item tech"
);

// dados inesperados
console.assert(
  filtrarTech([{ produto: "X" }]).length === 0,
  "Erro: item sem categoria não deve passar"
);

// imutabilidade
const copiaOriginal2 = JSON.stringify(vendas);
filtrarTech(vendas);
console.assert(
  JSON.stringify(vendas) === copiaOriginal2,
  "Erro: função alterou o array original"
);


//Teste resumido
const resumo = resumir(vendas);

console.assert(
  resumo.length === vendas.length,
  "Erro: resumo deveria manter quantidade de itens"
);

console.assert(
  resumo[0].produto === "Notebook" &&
  resumo[0].valor === 3500,
  "Erro: dados do resumo incorretos"
);

//  lista vazia
console.assert(
  resumir(vendasVazia).length === 0,
  "Erro: resumo de lista vazia deveria ser vazio"
);

// imutabilidade
const copiaOriginal3 = JSON.stringify(vendas);
resumir(vendas);
console.assert(
  JSON.stringify(vendas) === copiaOriginal3,
  "Erro: resumir alterou a lista original"
);

//Total por categoria
// teste normal
const totais = totalPorCategoria(vendas);

console.assert(
  totais.tech === 3620,
  "Erro: soma da categoria tech incorreta"
);

console.assert(
  totais.moveis === 700,
  "Erro: soma da categoria moveis incorreta"
);

// lista vazia
console.assert(
  Object.keys(totalPorCategoria(vendasVazia)).length === 0,
  "Erro: lista vazia deveria retornar objeto vazio"
);

// dados inesperados
const totaisInvalidos = totalPorCategoria([{ produto: "X" }]);
console.assert(
  Object.keys(totaisInvalidos).length === 1,
  "Erro: comportamento inesperado com dados inválidos"
);

// imutabilidade
const copiaOriginal4 = JSON.stringify(vendas);
totalPorCategoria(vendas);
console.assert(
  JSON.stringify(vendas) === copiaOriginal4,
  "Erro: totalPorCategoria alterou a lista original"
);


//Ordenar por valor
// teste normal
const ordenado = ordenarPorValor(vendas);

console.assert(
  ordenado[0].valor === 120,
  "Erro: primeiro item deveria ser o menor valor"
);

console.assert(
  ordenado[2].valor === 3500,
  "Erro: último item deveria ser o maior valor"
);

// lista vazia
console.assert(
  ordenarPorValor(vendasVazia).length === 0,
  "Erro: ordenar lista vazia deveria retornar vazio"
);

// um item
console.assert(
  ordenarPorValor(vendasUmItem).length === 1,
  "Erro: lista com um item deveria permanecer igual"
);

// verificar que NÃO muta o original
const copiaOriginal5 = JSON.stringify(vendas);
ordenarPorValor(vendas);

console.assert(
  JSON.stringify(vendas) === copiaOriginal5,
  "Erro: ordenarPorValor alterou o array original"
);
