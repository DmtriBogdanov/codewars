//Дана строка str, переверните ее и исключите все неалфавитные символы.

const reverseLetter = str => str.split('').filter(x => /[a-z]/.test(x)).reverse().join('');

