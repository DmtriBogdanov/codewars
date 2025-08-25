function XO(str) {
  let countX = 0;
  let countO = 0;
  str = str.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "x") {
      countX++;
    } else if (str[i] === "o") {
      countO++;
    }
  }

  if (countX === countO) {
    return true;
  } else {
    return false;
  }
}
