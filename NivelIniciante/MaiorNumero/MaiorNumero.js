function MaiorNumero(array) {
  let maior = Math.max.apply(null, array);
  console.log(maior);
}

let meuArray = [0, 3, 43, 13, 12, 412, 12, 123];

MaiorNumero(meuArray);
