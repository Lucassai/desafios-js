function Anagrama(frase1, frase2) {
  frase1 = frase1.split("").sort();

  frase2 = frase2.split("").sort();

  if (frase1.length != frase2.length) {
    return console.log("Não é um anagrama");
  } else {
    for (let i = 0; i < frase1.length; i++) {
      if (frase1[i] != frase2[i]) {
        return console.log("Não é um anagrama");
      }
    }
  }
  return console.log("É um anagrama! ");
}

Anagrama("fedcbacaco", "abcdefcaco");
