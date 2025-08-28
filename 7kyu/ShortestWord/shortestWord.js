//Просто, если задана строка слов, вернуть длину самого короткого слова(слов).
//Строка никогда не будет пустой, и вам не нужно учитывать различные типы данных.

function findShort(s){
  const lengthArr = s.split(' ').map(el => el.length).sort((a, b) => a - b);
  return lengthArr[0];
}
