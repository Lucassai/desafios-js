const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Escolha um número para a soma : \n", (numero1) => {
  rl.question("Escolha outro número para a soma : \n", (numero2) => {
    console.log(`A soma dos números é ${Number(numero1) + Number(numero2)}`);
    rl.close();
  });
});
