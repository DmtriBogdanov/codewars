//Задайте строку, сделайте заглавными буквы, занимающие чётные и нечётные индексы, отдельно и вернитесь к результату, как показано ниже. Индекс 0 будет считаться чётным.
//Например, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']

const capitalize = s => [s.split('').map((x, i) => i % 2 === 0 ? x.toUpperCase() : x).join(''), s.split('').map((x, i) => i % 2 !== 0 ? x.toUpperCase() : x).join('')];


console.log(capitalize("abcdef"))

