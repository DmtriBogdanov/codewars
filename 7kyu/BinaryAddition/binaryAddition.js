//Реализуйте функцию, которая складывает два числа и возвращает их сумму в двоичном формате. Преобразование может выполняться до или после сложения.
//Возвращаемое двоичное число должно быть строкой.

function addBinary(a,b) {
  let num = a + b;

  if (num === 0) { return 0; };
  let binary = [];

  while (num > 0) {
    let remainder = num % 2;
    binary.push(remainder);
    num = Math.floor(num / 2);
  }

  return binary.reverse().join("");
}
