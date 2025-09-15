const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Escolha a palavra e veja se é um palindromo \n", (nome) => {
  const nomeInvertido = String(nome).split("").reverse().join("");

  if (nome === nomeInvertido) {
    console.log(true);
  } else console.log(false);
  rl.close();
});
