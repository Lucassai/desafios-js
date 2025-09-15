function SomaDePares1(array: number[]) {
  let soma = 0;
  for (let i = 0; i < array.length; i++) {
    if (Number(array[i]) % 2 == 0) {
      soma = array[i] + soma;
    }
  }
  return console.log(soma);
}

let meuArraySoma1: number[] = [0, 3, 43, 13, 12, 412, 12, 123];

SomaDePares(meuArraySoma);
