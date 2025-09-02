//Вы, вероятно, знакомы с системой «лайков» на Facebook и других страницах.
//Люди могут ставить отметки «Нравится» публикациям в блогах, фотографиям и другим материалам.
//Мы хотим создать текст, который будет отображаться рядом с таким материалом.
//Реализуйте функцию, которая принимает массив имён людей, которым понравился товар.
//Функция должна возвращать отображаемый текст, как показано в примерах:
//   []                                -->  "no one likes this"
//   ["Peter"]                         -->  "Peter likes this"
//   ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
//   ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
//   ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
//Примечание: для 4 и более имен число в колонке «и 2 других» просто увеличивается.

function likes(names) {
  if (names.length === 0) {
    return "no one likes this"
  } else if (names.length === 1) {
    return `${names[0]} likes this`;
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}

