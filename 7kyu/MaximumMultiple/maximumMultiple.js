//Учитывая делитель и границу, найдите наибольшее целое число N, такое, что
//N делится на делитель N меньше или равно заданному значению N больше 0.

function maxMultiple(divisor, bound){
  let n = null;
  for (let i = bound; i >= divisor; i--) {
    if (i % divisor === 0) {
      n = i;
      break;
    }
  }
  return n > 0 ? n : 0;
}
