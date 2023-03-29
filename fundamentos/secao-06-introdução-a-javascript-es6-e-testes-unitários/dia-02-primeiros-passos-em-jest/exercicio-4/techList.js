const techList = (array, string) => {
  let techs = [];
  if (array.length > 0) {
    for (let index in array) {
      techs.push({
        tech: array[index],
        name: string
      });
    }
  } else {
    return "Vazio!"
  }
  techs.sort(function (x, y) {
    let a = x.tech.toUpperCase(),
      b = y.tech.toUpperCase();
    return a == b ? 0 : a > b ? 1 : -1;
  });

  return techs;
}

module.exports = techList;
