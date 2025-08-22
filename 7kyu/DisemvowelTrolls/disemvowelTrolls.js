//Тролли атакуют ваш раздел комментариев!
//Распространенный способ решения этой ситуации — удалить все гласные буквы из комментариев троллей, нейтрализовав угрозу.
//Ваша задача — написать функцию, которая принимает строку и возвращает новую строку, из которой удалены все гласные.
//Например, строка "This website is for losers LOL!" превратится в "Ths wbst s fr lsrs LL!".
//Примечание: в этой ката y не считается гласной.

function disemvowel(str) {
  let newStr = '';
  let vowelArray = ['a', 'e', 'i', 'o', 'u'];

  for (let i = 0; i < str.length; i++) {
    const vowelStr = str[i];

    if(!vowelArray.includes(vowelStr.toLowerCase())) {
      newStr += vowelStr;
    }
  }
  return newStr;
}
