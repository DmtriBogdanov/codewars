//Напишите функцию, которая принимает число в качестве входных данных и возвращает сумму абсолютных значений каждой десятичной цифры числа.

function sumDigits(number) {
  if (Math.abs(number) < 10) {
    return Math.abs(number);
  } else {
    return Math.abs(number).toString().split('').reduce((a, b) => +a + +b);
  }
}
