function SomaDePares(array) {
  var soma = 0;
  for (var i = 0; i < array.length; i++) {
    if (Number(array[i]) % 2 == 0) {
      soma = array[i] + soma;
    }
  }
  return console.log(soma);
}
var meuArraySoma = [2, 0, 3, 43, 13, 12, 412, 12, 123];

SomaDePares(meuArraySoma);
