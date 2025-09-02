//Создайте функцию с именем divisors/Divisors, которая принимает целое число n > 1
// и возвращает массив со всеми делителями этого числа (за исключением 1 и самого числа), от наименьшего к наибольшему
//Если число является простым, вернуть строку '(целое число) является простым'

function divisors(integer) {
  const divisorsArr = [];
  for (let i = 2; i < integer; i++) {
    if (Number.isInteger(integer / i)) {
      divisorsArr.push(i);
    }
  }
  if (divisorsArr.length !== 0) {
    return divisorsArr;
  } else {
    return `${integer} is prime`;
  }
}
