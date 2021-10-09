const people = [
  {
    name: "Jonas",
    surname: "Jonaitis",
    sex: "male",
    age: 26,
    income: 1200,
    married: false,
    hasCar: false,
  },
  {
    name: "Severija",
    surname: "Piktutytė",
    sex: "female",
    age: 26,
    income: 1300,
    married: false,
    hasCar: true,
  },
  {
    name: "Valdas",
    surname: "Vilktorinas",
    sex: "male",
    age: 16,
    income: 0,
    married: false,
    hasCar: false,
  },
  {
    name: "Virginijus",
    surname: "Uostauskas",
    sex: "male",
    age: 32,
    income: 2400,
    married: true,
    hasCar: true,
  },
  {
    name: "Samanta",
    surname: "Uostauskienė",
    sex: "female",
    age: 28,
    income: 1200,
    married: true,
    hasCar: true,
  },
  {
    name: "Janina",
    surname: "Stalautinskienė",
    sex: "female",
    age: 72,
    income: 364,
    married: false,
    hasCar: false,
  },
];
console.groupCollapsed("1. Atspausdinkite visus žmones eilutėmis");
{
  people.forEach((p) =>
    console.log(
      `${p.name} ${p.surname} - ${p.sex}, ${p.age},${p.income}, ${p.married}, ${p.hasCar}`
    )
  );
}
console.groupEnd();

console.groupCollapsed(
  "2. Atpausdinkite visus žmonių vardus ir pavardes, atskirtus brūkšneliu"
);
{
  people.forEach((p) => console.log(`${p.name}-${p.surname}`));
}
console.groupEnd();

console.groupCollapsed(
  "3. Atspausdinkite visų žmonių vardus ir pavardes bei santuokos statusus"
);
{
  people.forEach((p) => console.log(p.name, p.surname, p.married));
}
console.groupEnd();

console.groupCollapsed(
  "4. Sukurkite masyvą su lytimis ir uždirbamu pinigų kiekiu, pagal pradinį žmonių masyvą"
);
{
  const result = people.map((p) => {
    return {
      sex: p.sex,
      income: p.income,
    };
  });
  // const result = people.map(p => ({ sex: p.sex, income: p.income }));
  console.table(result);
}
console.groupEnd();

console.groupCollapsed(
  "5. Sukurtite masyvą su vardais, pavardėmis ir lytimi, pagal pradinį žmonių masyvą"
);
{
  const result = people.map((p) => ({
    name: p.name,
    surname: p.surname,
    sex: p.sex,
  }));
  console.table(result);
}
console.groupEnd();

console.groupCollapsed("6. Atspausdinkite visų vyrų vardus");
{
  const mans = people.filter(
    (item) => item.sex == "male" && console.table(item.name)
  );
}
console.groupEnd();

console.groupCollapsed("7. Atspausdinkite visų moterų atlyginimus");
{
  const womanSalary = people.filter((person) => {
    person.sex === "female" &&
      console.log(person.name + " " + person.surname, person.income);
  });
}
console.groupEnd();

console.groupCollapsed(
  "8. Atspausdinkite žmonių vardus ir pavardes, kurie turi mašinas"
);
{
  people.filter(
    (item) =>
      item.hasCar &&
      console.log(item.name + " " + item.surname + " turi automobili")
  );
}
console.groupEnd();

console.groupCollapsed("9. Atspausdinkite žmones kurie yra susituokę");
{
  people.filter(
    (item) =>
      item.married && console.log(item.name + " " + item.surname + " susituoke")
  );
}
console.groupEnd();

console.groupCollapsed(
  "10. Sukurkite objektą, kuriame būtų apskaičiuotas vairuojančių žmonių kiekis pagal lytį"
);
{
  // su Array.prototype.filter
  const drivers = {
    Vyrai: people.filter((person) => person.sex === "male" && person.hasCar)
      .length,
    Moterys: people.filter((person) => person.sex === "female" && person.hasCar)
      .length,
  };
  console.table(drivers);
  // su Array.prototype.map
  const drivingPeople = {
    Vyrai: people
      .map((person) => (person.sex === "male" && person.hasCar ? 1 : 0))
      .reduce((sum, el) => sum + el),
    Moterys: people
      .map((person) => (person.sex === "female" && person.hasCar ? 1 : 0))
      .reduce((sum, el) => sum + el),
  };
  console.log(drivingPeople);
  // su Array.prototype.reduce
  const driver = {
    Vyrai: people.reduce((sum, person, index, arr) => {
      if (person.sex === "male" && person.hasCar) {
        return sum + 1;
      } else {
        return sum;
      }
    }, 0),
    Moterys: people.reduce((sum, person, index, arr) => {
      if (person.sex === "female" && person.hasCar) {
        return sum + 1;
      } else {
        return sum;
      }
    }, 0),
  };
  console.log(driver);
}
console.groupEnd();

console.groupCollapsed(
  '11. Performuokite žmonių masyvą, jog kiekvieno žmogaus savybė "income", taptų "salary"'
);
{
  [...people].map(
    (person) => (person["salary"] = person["income"]) & delete person["income"]
  );
  console.log(people);
}
console.groupEnd();

console.groupCollapsed(
  "12. Suformuokite žmonių masyvą, kuriame nebūtų lyties, vardo ir pavardės"
);
{
  console.table(people);
  function fullName() {
    let anonymous = JSON.parse(JSON.stringify(people));
        anonymous.forEach(
          (person) =>
            delete person["sex"] &
            delete person["name"] &
            delete person["surname"]
    );
    console.log(anonymous);
    }

  fullName();
  
  console.table(people);
}
console.groupEnd();

console.groupCollapsed(
  '13. Suformuokite žmonių masyvą, kuriame "name" ir "surname" savybės, būtų pakeistos "fullname" savybe'
);
{
  console.table(people);
  const fullNameArray = [...people];
  console.log(fullNameArray);
  // ...sprendimas ir spausdinimas
}
console.groupEnd();
