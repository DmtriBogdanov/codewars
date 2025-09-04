//Даны два числа и арифметический оператор (его имя в виде строки), вернуть результат применения этого оператора к двум числам.
//a и b будут положительными целыми числами, причем a всегда будет первым числом в операции, а b всегда вторым.
//Четыре оператора: «сложение», «вычитание», «деление», «умножение».

function arithmetic(a, b, operator){
  switch(operator){
    case "add":
      return a + b;
      break;
    case "subtract":
      return a - b;
      break;
    case "divide":
      return a / b;
      break;
    case "multiply":
      return a * b;
      break;
  }
}

