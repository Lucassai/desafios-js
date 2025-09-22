function RemoverDupiclatasArray(array) {
  array = array.sort()
  let resultado = []

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== array[i + 1]) {
      resultado.push(array[i])
    }
  }
  console.log(resultado)
}

let numeros = [4, 4, 4, 4, 3, 3, 3, 2, 2, 1]

RemoverDupiclatasArray(numeros)
