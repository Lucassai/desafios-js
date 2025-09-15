function ContadorDeVogais(texto) {
  texto.split(""); /* 
  console.log(texto[0]); */
  let vogais = 0;
  let consoantes = 0;
  for (let i = 0; i < texto.length; i++) {
    if (
      texto[i] == "A" ||
      texto[i] == "E" ||
      texto[i] == "I" ||
      texto[i] == "O" ||
      texto[i] == "U" ||
      texto[i] == "a" ||
      texto[i] == "e" ||
      texto[i] == "i" ||
      texto[i] == "o" ||
      texto[i] == "u"
    ) {
      vogais++;
    } else consoantes++;
  }
  return console.log(
    `O número de vogais é ${vogais} e o número de consoantes é ${consoantes} !`
  );
}

ContadorDeVogais("Teste para todo o tipo de frase");
