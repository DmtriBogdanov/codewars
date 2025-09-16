//Дан двумерный массив целых чисел, вернуть сглаженную версию массива со всеми целыми числами в отсортированном (по возрастанию) порядке.


function flattenAndSort(array) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      result.push(array[i][j]);
    }
  }
  return  result.sort((a, b) => a - b);
}
