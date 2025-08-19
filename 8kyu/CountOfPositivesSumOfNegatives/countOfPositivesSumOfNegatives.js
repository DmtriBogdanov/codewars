//Верните массив, где первый элемент — количество положительных чисел, а второй элемент — сумма отрицательных чисел.
// 0 не является ни положительным, ни отрицательным.
//Если входные данные являются пустым массивом или равны нулю, вернуть пустой массив.

function countPositivesSumNegatives(input) {
  let countPositivesNum = 0;
  let sumNegativesNum = 0;

  if (input && input.length !== 0) {
    for (let i = 0; i < input.length; i++) {
      if (input[i] > 0) {
        countPositivesNum++;
      } else {
        sumNegativesNum += input[i];
      }
    }
  }

  if(countPositivesNum === 0 && sumNegativesNum === 0) {
    return [];
  }

  return [countPositivesNum, sumNegativesNum];
}
