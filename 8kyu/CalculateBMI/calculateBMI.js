//Напишите функцию ИМТ, которая рассчитывает индекс массы тела (ИМТ = вес / рост2).
//если ИМТ <= 18,5, верните «Недостаточный вес»
//если ИМТ <= 25,0 вернуть «Нормальный»
//если ИМТ <= 30,0 вернуть «Избыточный вес»
//если ИМТ > 30, верните «Ожирение»

function bmi(weight, height) {
  let bmi = weight / height ** 2;

  switch (true) {
    case bmi <= 18.5:
      return "Underweight";
      break;
    case bmi <= 25:
      return "Normal";
      break;
    case bmi <= 30:
      return "Overweight";
      break;
    case bmi > 30:
      return "Obese";
      break;
  }
}


