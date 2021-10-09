// ------------------------------------ 1 Dalis ------------------------------------
// 1. Sukurti objektų(žmonių) masyvą su 8 elementais, kuriame būtų:
//   - name
//   - surname
//   - age
//   - height
//   - weight
//   - sex
// 2. Panaudojant array.foreach:
//   - Atspausdinti kiekvieną elementą
//   - Atspausdinti kiekvieno elemento pilną vardą
//   - Atspausdinti kiekvieno elemento kūno masės indeksą
// 3. Panaudojant array.filter atrinkti į naują masyvą ir po to atspausdinti žmones:
//   - kurių vardas ilgesnis nei 6 simboliai
//   - kurių svoris didesnis nei 80kg
//   - kurie aukštesni nei 185cm
// 4. Panaudojant array.map atrinkti į naują masyvą ir po to atspausdinti
//   - ūgius
//   - svorius
//   - ūgius, svorius ir amžius : [{height, weight, age}, ...]
//   - KMI indeksus
//   - KMI indeksus ir amžius
// 5. Panaudojant array.reduce suskaičiuoti ir po to atspausdinti
//   - svorių vidurkį
//   - ūgio vidurkį

const people = [
  {
    name: "Jonas",
    surname: "Jonaitis",
    age: 26,
    height: 190,
    weight: 80,
    sex: "male",
  },
  {
    name: "Petras",
    surname: "Petraitis",
    age: 32,
    height: 180,
    weight: 89,
    sex: "male",
  },
  {
    name: "Alfa",
    surname: "Betas",
    age: 46,
    height: 160,
    weight: 65,
    sex: "male",
  },
  {
    name: "Marija",
    surname: "Lelyja",
    age: 30,
    height: 175,
    weight: 55,
    sex: "female",
  },
  {
    name: "Kotryna",
    surname: "Morkyte",
    age: 25,
    height: 165,
    weight: 50,
    sex: "female",
  },
  {
    name: "Meavie",
    surname: "Mole",
    age: 35,
    height: 145,
    weight: 70,
    sex: "female",
  },
  {
    name: "Vivijana",
    surname: "Sinkaite",
    age: 45,
    height: 185,
    weight: 80,
    sex: "female",
  },
];

{
  console.log("2.2 Atspausdinti kiekvieno elemento pilną vardą.");
  people.forEach((person) => {
    console.log(`${person.name} ${person.surname}`);
  });
  console.log("---------");
}
{
  console.log("2.3 Atspausdinti kiekvieno elemento kūno masės indeksą");
  people.forEach((person) => {
    console.log(
      `${person.name} ${person.surname} KMI yra ${
        person.weight / (person.height / 100) ** 2
      }`
    );
  });
  console.log("---------");
}
{
  console.log("3.1 kurių vardas ilgesnis nei 6 simboliai");
  people
    .filter((person) => {
      return person.name.length > 6;
    })
    .forEach((person) => {
      console.log(`${person.name} ${person.surname}`);
    });

  console.log("---------");
}
{
  console.log("3.2 kurių svoris didesnis nei 80kg");
  people
    .filter((person) => {
      return person.weight > 80;
    })
    .forEach((person) => {
      console.log(`${person.name} ${person.surname}`);
    });

  console.log("---------");
}
{
  console.log("3.2 kurie aukstesnis nei 180");
  people
    .filter((person) => {
      return person.height > 185;
    })
    .forEach((person) => {
      console.log(`${person.name} ${person.surname}`);
    });

  console.log("---------");
}
console.log(
  "4. Panaudojant array.map atrinkti į naują masyvą ir po to atspausdinti"
);
{
  console.log("ūgius");
  const heights = people.map((person) => {
    return person.height;
  });
  console.log(heights);

  console.log("---------");
}
{
  console.log("ūgius, svorius ir amžius : [{height, weight, age}, ...]");
  const heightWeightAge = people.map((person) => {
    return [person.weight, person.height, person.age];
  });
  console.log(heightWeightAge);
  console.log("---------");
}
{
  console.log("KMI indeksus");

  const Kmis = people.map((person) => {
    return person.weight / (person.height / 100) ** 2;
  });
  console.log(Kmis);
  console.log("---------");
}
{
  console.log("KMI indeksus ir amžius");
  const KmisAge = people.map((person) => {
    return { KMI: person.weight / (person.height / 100) ** 2, age: person.age };
  });
  console.log(KmisAge);
  console.log("---------");
}
// 5. Panaudojant array.reduce suskaičiuoti ir po to atspausdinti
//   - svorių vidurkį
//   - ūgio vidurkį
{
  console.log("svorių vidurkį");
  const peopleLength = people.length;
  let weightsSum = people
    .map((item) => {
      return item.weight;
    })
    .reduce((a, b) => a + b);
  const weightAverage = weightsSum / peopleLength;
  console.log(weightAverage);
  console.log("---------");
}
{
  console.log("ūgio vidurkį");
  const peopleLength = people.length;
  let heightsSum = people
    .map((item) => {
      return item.height;
    })
    .reduce((a, b) => a + b);
  const heightAverage = heightsSum / peopleLength;
  console.log(heightAverage);
  console.log("---------");
}
// ------------------------------------ 2 Dalis ------------------------------------
// 0. Pasinaudojant 1 dalies elementų masyvu, sukurti Person prototipų(Class) masyvą:
//     Person klasėje:
//     - sukurti vidinį metodą: getBMI();     // suskaičiuoja kūno masės indeksą
//     - sukurti vidinį metodą: toString();   // atspausdina žmogų su esamom savybėm
// 1. Atrinkti moteris, kuriuos jaunesnės nei 20 metų ir svoris didesnis nei 70kg
// 2. Atrinkti vyrus, kurie vyresni nei 25 metai ir KMI mažesnis nei 18,5
// 3. Atrinkti vaikus, su antsvoriu (KMI > 30)
// 4. Atrinkti pensininkus, su antsvoriu (KMI > 30)
// 5. Atrinkti visus, kieno KMI nepatenka į rėžius [18.5; 25]

class Person {
  constructor({ name, surname, age, height, weight, sex }) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.height = height;
    this.weight = weight;
    this.sex = sex;
  }

  get bmi() {
    return Math.round((10 * this.weight) / (this.height / 100) ** 2) / 10;
  }

  get string() {
    const { name, surname, ...rest } = this;
    const propString = Object.entries(rest)
      .filter(([_, propVal]) => typeof propVal !== "function")
      .reduce(
        (propString, [name, val]) => propString + `\n\t${name}: ${val}`,
        ""
      );
    return `${name} ${surname}:` + propString;
  }

  getBMI = () => {
    return Math.round((10 * this.weight) / (this.height / 100) ** 2) / 10;
  };

  toString = () => {
    const { name, surname, ...rest } = this;
    const propString = Object.entries(rest)
      .filter(([_, propVal]) => typeof propVal !== "function")
      .reduce(
        (propString, [name, val]) => propString + `\n\t${name}: ${val}`,
        ""
      );
    return `${name} ${surname}:` + propString;
  };
}

const peopleArr = people.map((p) => new Person(p));
console.log(peopleArr);

peopleArr.forEach((item) => console.log(item.string));
console.log("---------");

// ------------------------------------ 3 Dalis -------------------------------------
// Peržiūrėti video:
// https://www.youtube.com/watch?v=JaMCxVWtW58

// Geras Žaidimas pasitreniravimui:
//   https://www.typing.com/student/game/tommyq

// Rekomenduoju pasikartoti greitasias komandas


  console.group('0. Pasinaudojant 1 dalies asmens apibūdinimu, sukurti Person klasę, kuri apipavidalina tokio tipo objektą');
  {
    console.table(peopleArr);
    peopleArr.forEach(p => console.log(p.getBMI()));
    // peopleArr.forEach(p => console.log(p.bmi));
    peopleArr.forEach(p => console.log(p.toString()));
    // peopleArr.forEach(p => console.log(p.string));
  }
  console.groupEnd();

  console.group('1. Atrinkti moteris, kuriuos jaunesnės nei 20 metų ir svoris didesnis nei 70kg ');
  {
    const result = peopleArr.filter(p => p.sex === 'female' && p.age < 20 && p.weight > 70);
    console.table(result);
  }
  console.groupEnd();

  console.group('2. Atrinkti vyrus, kurie vyresni nei 25 metai ir KMI mažesnis nei 18,5');
  {
    const result = peopleArr.filter(p => p.sex === 'male' && p.age > 25 && p.getBMI() < 18.5);
    console.table(result);
  }
  console.groupEnd();

  console.group('3. Atrinkti vaikus, su antsvoriu (KMI > 30)');
  {
    const result = peopleArr.filter(p => p.age < 18 && p.getBMI() > 30);
    console.table(result);
  }
  console.groupEnd();

  console.group('4. Atrinkti pensininkus, su antsvoriu (KMI > 30)');
  {
    const result = peopleArr.filter(p => p.age >= 65 && p.getBMI() > 30);
    console.table(result);
  }
  console.groupEnd();

  console.group('5. Atrinkti visus, kieno KMI nepatenka į rėžius [18.5; 25]');
  {
    const result = peopleArr.filter(p => {
      const bmi = p.getBMI();
      return bmi < 18.5 || bmi > 25;
    });
    console.table(result);
  }
  console.groupEnd();

console.groupEnd();