//Я новичок в программировании и теперь хочу получить сумму двух массивов... вернее, сумму всех их элементов. Буду благодарен за помощь.
// P.S. Каждый массив содержит только целые числа. Вывод тоже — число.

function arrayPlusArray(arr1, arr2) {
  let sum = 0;
  for (let i = 0; i<arr1.length; i++){
    sum += arr1[i];
  }
  for (let j = 0; j<arr2.length; j++){
    sum += arr2[j];
  }


  return sum;
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]))