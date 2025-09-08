//Дан двумерный (вложенный) список (массив, вектор, ..) размера m * n. Ваша задача — найти сумму минимальных значений в каждой строке.

function sumOfMinimums(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += Math.min(...arr[i]);
  }
  return sum;
}
