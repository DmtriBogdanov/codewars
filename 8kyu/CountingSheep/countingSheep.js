//Рассмотрим массив/список овец, в котором некоторые овцы могут отсутствовать на своих местах.
// Нам нужна функция, которая подсчитывает количество овец в массиве (true означает наличие).

function countSheeps(sheep) {
  let count = 0;

  for (let i = 0; i < sheep.length; i++) {
    if (sheep[i] === true) {
      count++
    }
  }
  return count;
}
