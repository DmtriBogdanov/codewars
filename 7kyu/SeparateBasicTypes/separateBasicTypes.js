//Дано: последовательность значений различных типов (число, строка, логическое значение).
//Необходимо вернуть объект с отдельными свойствами для каждого из представленных во входных данных типов.
//Каждое свойство должно содержать массив соответствующих значений.
//Сохраняйте порядок значений, как во входном массиве. Если тип не указан во входных данных, соответствующее свойство не ожидается.

function separateTypes(input) {
  const filterType = {
    number: [...input.filter(x => typeof x === 'number')],
    string: [...input.filter(x => typeof x === 'string')],
    boolean: [...input.filter(x => typeof x === 'boolean')],
  };
  for (const key in filterType) {
    if (filterType[key].length === 0) {
      delete filterType[key];
    }
  }
  return filterType;
}
