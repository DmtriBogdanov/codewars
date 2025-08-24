//На этот раз без истории и теории. Примеры ниже показывают, как написать функцию accum:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
//Параметр accum — это строка, которая включает только буквы из диапазона a..z и A..Z.

function accum(s) {
  let strArr = []
  for (let i = 0; i < s.length; i++) {
    strArr.push(s[i].toUpperCase() + s[i].repeat(i).toLowerCase())
  }
  return strArr.join('-')
}
