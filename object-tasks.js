console.groupCollapsed("1 - https://edabit.com/challenge/nuXdWHAoHv9y38sn7");
{
  let drinks = [
    { name: "lemonade", price: 50 },
    { name: "lime", price: 10 },
  ];

  function sortDrinkByPrice(drink) {
    drink.sort(function (a, b) {
      return a.price - b.price;
    });
    console.log(drink);
  }
  sortDrinkByPrice(drinks);
}
console.groupEnd();

console.groupCollapsed("2 - https://edabit.com/challenge/9KEKJG5PZTFmG3Zau");
{
  function addName(obj, name, value) {
    obj[name] = value;
    console.log(obj);
    return obj;
  }
  addName({}, "Brutus", 300);
  addName({ piano: 500 }, "Brutus", 400);
  addName({ piano: 500, stereo: 300 }, "Caligula", 440);
}
console.groupEnd();

console.groupCollapsed("3 - https://edabit.com/challenge/48EJWLhF224na8po3");

function generation(x, y) {
  const generationn = {
    "-3": { f: "great grandmother", m: "great grandfather" },
    "-2": { f: "grandmother", m: "grandfather" },
    "-1": { f: "mother", m: "father" },
    0: { f: "me!", m: "me!" },
    1: { f: "daughter", m: "son" },
    2: { f: "granddaughter", m: "grandson" },
    3: { f: "great granddaughter", m: "great grandson" },
  };
  console.log(generationn[x][y]);
  return generationn[x][y];
}
generation(2, "f");
generation(-3, "m");
generation(1, "f");

console.groupEnd();

console.groupCollapsed("4 - https://edabit.com/challenge/i6YqzHcSiPiEQKjeX");
{
  function maximumScore(tileHand) {
    const suma = tileHand.reduce(function (start, scoree) {
      return start + scoree.score;
    }, 0);
    console.log(suma);
    return suma;
  }
  maximumScore([
    { tile: "N", score: 1 },
    { tile: "K", score: 5 },
    { tile: "Z", score: 10 },
    { tile: "X", score: 8 },
    { tile: "D", score: 2 },
    { tile: "A", score: 1 },
    { tile: "E", score: 1 },
  ]);

  maximumScore([
    { tile: "B", score: 2 },
    { tile: "V", score: 4 },
    { tile: "F", score: 4 },
    { tile: "U", score: 1 },
    { tile: "D", score: 2 },
    { tile: "O", score: 1 },
    { tile: "U", score: 1 },
  ]);
}
console.groupEnd();

console.groupCollapsed("5 - https://edabit.com/challenge/8s2jy9hR2TAeQinKD");
{
  function calculateDifference(obj, limit) {
    let sum = 0;
    Object.keys(obj).forEach((item) => (sum += obj[item]));
    return sum - limit, console.log(sum - limit);
  }

  calculateDifference({ "baseball bat": 20 }, 5);

  calculateDifference({ skate: 10, painting: 20 }, 19);

  calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400);
}
console.groupEnd();

console.groupCollapsed("6 - https://edabit.com/challenge/pPNAs5PvB3WvnDwDM");
{
  function toArray(obj) {
    let arr = [];
    Object.getOwnPropertyNames(obj).forEach((item) =>
      arr.push([`${item}`, obj[item]])
    );

    console.log(arr);
  }
  toArray({ a: 1 });

  toArray({ a: 1, b: 2 });

  toArray({ shrimp: 15, tots: 12 });

  toArray({});
}
console.groupEnd();

console.groupCollapsed("7 - https://edabit.com/challenge/QXWM2oo7rQNiyDsip");
{
  function inkLevels(inks) {
    console.log(Math.min(...Object.values(inks)));
    return Object.values(inks).reduce((a, b) => Math.min(a, b));
  }
  inkLevels({
    cyan: 23,
    magenta: 12,
    yellow: 10,
  });

  inkLevels({
    cyan: 432,
    magenta: 543,
    yellow: 777,
  });

  inkLevels({
    cyan: 700,
    magenta: 700,
    yellow: 0,
  });
}
console.groupEnd();

console.groupCollapsed("8 - https://edabit.com/challenge/pLNavsePxJ87t9Nak");
{
  function calculateLosses(obj) {
    return Object.values(obj).length == 0
      ? console.log("Lucky")
      : console.log(Object.values(obj).reduce((a, b) => a + b));
  }
  calculateLosses({
    painting: 20000,
  });
  calculateLosses({
    tv: 30,
    skate: 20,
    stereo: 50,
  });
  calculateLosses({});
}
console.groupEnd();
