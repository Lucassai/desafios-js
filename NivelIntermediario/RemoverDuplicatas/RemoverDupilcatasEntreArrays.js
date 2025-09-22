function RemoverDupiclatas(array1, array2) {
  array1 = array1.sort()

  array2 = array2.sort()

  for (i = 0; i < array1.length; i++) {
    for (j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        array2.splice(j, 1)
        j--
      }
    }
  }
  console.log(array1)
  console.log(array2)
}

let nomes1 = ['Lucas', 'Maria', 'João', 'Ana', 'Pedro', 'Mariana']
let nomes2 = ['Carlos', 'Ana', 'Lucas', 'Fernanda', 'Pedro', 'Joana']

RemoverDupiclatas(nomes1, nomes2)
