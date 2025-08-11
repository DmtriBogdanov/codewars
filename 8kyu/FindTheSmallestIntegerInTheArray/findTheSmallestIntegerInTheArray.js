//Учитывая массив целых чисел, ваше решение должно найти наименьшее целое число.

function findSmallestInt(arr) {
  let minNumber = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minNumber){
      minNumber = arr[i];
    }
  }
  return minNumber;
}

console.log(findSmallestInt([78,56,232,12,8]));