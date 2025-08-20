//Возвращает количество гласных в заданной строке.
//В качестве гласных для этого ката мы будем рассматривать a, e, i, o, u (но не y).
//Входная строка будет состоять только из строчных букв и/или пробелов.

function getCount(str) {
  let count = 0;
  let vowelArray = ['a', 'e', 'i', 'o', 'u'];

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < vowelArray.length; j++) {
      if (vowelArray[j] === str[i]) {
        count++;
      }
    }
  }
  return count;
}
