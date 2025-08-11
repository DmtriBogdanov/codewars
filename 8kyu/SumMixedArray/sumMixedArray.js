//Дан массив целых чисел в виде строк и чисел. Верните сумму значений массива, как если бы все они были числами. Верните ответ в виде числа.

function sumMix(x){
  let sum = 0;
  for (let i = 0; i<x.length; i++){
    sum += Number(x[i]);
  }
  return sum;
}

console.log(sumMix([9, 3, '7', '3']))