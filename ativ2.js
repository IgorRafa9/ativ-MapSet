const myArray = [30, 30, 150, 50, 96, 85, 85]

function valoresUnicos(arr){
  const mySet = new Set(arr);

  return [...mySet];
}

console.log(valoresUnicos(myArray))