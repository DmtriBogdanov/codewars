//В этом небольшом задании вам дана строка чисел, разделенных пробелами, и вам нужно выбрать наибольшее и наименьшее число.

function highAndLow(numbers){
  let numArr = numbers.split(' ').map(Number).sort((a, b) => a - b);
  return [numArr[numArr.length - 1], numArr[0]].join(' ');
}


