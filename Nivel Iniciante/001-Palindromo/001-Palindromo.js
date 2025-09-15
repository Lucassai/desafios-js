const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Escolha um número: \r", (numero) => {
  const numeroInvertido = Number(String(numero).split("").reverse().join(""));

  if (numero == numeroInvertido) {
    console.log(`O número ${numero} é um palindromo!`);
  } else {
    console.log(`O número ${numero} não é um palindromo!`);
  }

  rl.close();
});
