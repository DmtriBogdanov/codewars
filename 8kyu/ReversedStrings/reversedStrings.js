//Дополните решение так, чтобы оно перевернуло переданную в него строку.

function solution(str){
  let reversedStr = '';

  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str.charAt(i);
  }

  return reversedStr;
}

console.log(solution('world'))