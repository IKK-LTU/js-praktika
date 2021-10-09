const students = [
  {
    name: "Panatėja",
    surname: "Sulindytė",
    faculty: "Informatikos fakultetas",
    course: 2,
    modules: [
      {
        title: "Operacinės sistemos",
        credits: 6,
        marks: [10, 7, 7, 6, 9],
      },
      {
        title: "Algoritmų analizė",
        credits: 9,
        marks: [8, 8, 6, 4, 6],
      },
      {
        title: "Tikimybės ir Statistika",
        credits: 6,
        marks: [9, 7, 8, 9, 6],
      },
      {
        title: "Inžinerinis projektas",
        credits: 3,
        marks: [10, 8, 9, 8],
      },
      {
        title: "Kompiuterių architektūra",
        credits: 6,
        marks: [6, 8, 7, 8, 8],
      },
    ],
  },
  {
    name: "Serbentautas",
    surname: "Bordiūras",
    faculty: "Informatikos fakultetas",
    course: 1,
    modules: [
      {
        title: "Matematika",
        credits: 6,
        marks: [7, 6, 9, 10, 8],
      },
      {
        title: "Duomenų struktūros",
        credits: 6,
        marks: [7, 8, 9, 4, 8],
      },
      {
        title: "Skaitmeninė logika",
        credits: 6,
        marks: [6, 8, 10, 9, 9],
      },
      {
        title: "Objektinis programavimas",
        credits: 6,
        marks: [10, 8, 9, 8, 8],
      },
      {
        title: "Fizika",
        credits: 6,
        marks: [6, 7, 8, 8, 8],
      },
    ],
  },
  {
    name: "Laptokas",
    surname: "Klavianskas",
    faculty: "Informatikos fakultetas",
    course: 1,
    modules: [
      {
        title: "Matematika",
        credits: 6,
        marks: [9, 8, 10, 9, 10],
      },
      {
        title: "Duomenų struktūros",
        credits: 6,
        marks: [9, 9, 10, 10, 8],
      },
      {
        title: "Skaitmeninė logika",
        credits: 6,
        marks: [10, 10, 10, 9, 10],
      },
      {
        title: "Objektinis programavimas",
        credits: 6,
        marks: [9, 8, 9, 10, 10],
      },
      {
        title: "Fizika",
        credits: 6,
        marks: [8, 9, 8, 10, 8],
      },
    ],
  },
  {
    name: "Skaistė",
    surname: "Kolbaitė",
    faculty: "Chemijos fakultetas",
    course: 2,
    modules: [
      {
        title: "Organinė chemija",
        credits: 6,
        marks: [9, 9, 10, 9, 8],
      },
      {
        title: "Inžinerinės medžiagos",
        credits: 3,
        marks: [10, 10, 10, 9, 9],
      },
      {
        title: "Entalpija ir Entropija",
        credits: 6,
        marks: [9, 9, 9, 9],
      },
      {
        title: "Polimerų atmainos ir produktai",
        credits: 9,
        marks: [10, 9, 8, 10, 7],
      },
      {
        title: "Pramoninė chemija",
        credits: 6,
        marks: [9, 10, 10, 10, 9],
      },
    ],
  },
  {
    name: "Cilindras",
    surname: "Katalizatorius",
    faculty: "Chemijos fakultetas",
    course: 2,
    modules: [
      {
        title: "Organinė chemija",
        credits: 6,
        marks: [6, 8, 9, 4, 8],
      },
      {
        title: "Inžinerinės medžiagos",
        credits: 3,
        marks: [9, 8, 7, 8, 10],
      },
      {
        title: "Entalpija ir Entropija",
        credits: 6,
        marks: [7, 8, 9, 10, 6],
      },
      {
        title: "Polimerų atmainos ir produktai",
        credits: 9,
        marks: [8, 9, 6, 4],
      },
      {
        title: "Pramoninė chemija",
        credits: 6,
        marks: [8, 7, 9, 5, 9],
      },
    ],
  },
  {
    name: "Grandinius",
    surname: "Varžauskas",
    faculty: "Elektros ir elektronikos fakultetas",
    course: 1,
    modules: [
      {
        title: "Matematika",
        credits: 6,
        marks: [8, 9, 9, 9, 9],
      },
      {
        title: "Elektos grandinės",
        credits: 6,
        marks: [8, 7, 9, 9, 10],
      },
      {
        title: "Elektros tinklai",
        credits: 6,
        marks: [9, 9, 8, 8, 10],
      },
      {
        title: "Braižyba",
        credits: 6,
        marks: [6, 8, 9, 8, 7],
      },
      {
        title: "Fizika",
        credits: 6,
        marks: [9, 9, 9, 10, 8],
      },
    ],
  },
];

console.groupCollapsed(
  "1. Iš students masyvo atrinkti ir atspausdinti visų studentų vidurkius"
);

const averages = students.map((student) => {
  let studentsMarks = [];
  student.modules.forEach((module) => {
    [...studentsMarks];
    studentsMarks.push(...module.marks);
  });
  let studentAvg =
    studentsMarks.reduce(
      (prevValue, currentValue) => prevValue + currentValue
    ) / studentsMarks.length;
  return { vardas: student.name, vidurkis: Math.round(studentAvg) };
});
console.table(averages);
console.log(averages);

console.groupEnd();

console.groupCollapsed(
  "2. Atspausdinti visus Informatikos fakulteto studentus"
);

console.log("Informatikos fakulteto studentai:");
const informaticStudents = students
  .filter((student) => student.faculty === "Informatikos fakultetas")
  .map((student) => student.name);
console.table(informaticStudents);

console.groupEnd();

console.groupCollapsed("3. Atspausdinti visus Chemijos fakulteto studentus");

{
  console.log("Informatikos fakulteto studentai:");
  const chemistryStudents = students
    .filter((student) => student.faculty === "Chemijos fakultetas")
    .map((student) => student.name);
  console.table(chemistryStudents);
}
console.groupEnd();

console.groupCollapsed(
  "4. Atspausdinti visus Elektros ir elektronikos fakulteto studentus"
);
{
  console.log("Elektros ir elektronikos fakultetas:");
  const electronicsStudents = students
    .filter(
      (student) => student.faculty === "Elektros ir elektronikos fakultetas"
    )
    .map((student) => student.name);
  console.table(electronicsStudents);
}
console.groupEnd();

console.groupCollapsed(
  "5. Atspausdinti visų Informatikos fakulteto studentų vidurkius"
);

const averagesInformaticsAvg = students
  .filter((st) => st.faculty === "Informatikos fakultetas")
  .map((student) => {
    let studentsMarks = [];

    student.modules.forEach((module) => {
      [...studentsMarks];
      studentsMarks.push(...module.marks);
    });
    let studentAvg =
      studentsMarks.reduce(
        (prevValue, currentValue) => prevValue + currentValue
      ) / studentsMarks.length;
    return { vardas: student.name, vidurkis: Math.round(studentAvg) };
  });
console.table(averagesInformaticsAvg);

console.groupEnd();

console.groupCollapsed(
  "6. Atspausdinti visų Chemijos fakulteto studentų vidurkius"
);
const averagesChemistryAvg = students
  .filter((st) => st.faculty === "Chemijos fakultetas")
  .map((student) => {
    let studentsMarks = [];

    student.modules.forEach((module) => {
      [...studentsMarks];
      studentsMarks.push(...module.marks);
    });
    let studentAvg =
      studentsMarks.reduce(
        (prevValue, currentValue) => prevValue + currentValue
      ) / studentsMarks.length;
    return { vardas: student.name, vidurkis: Math.round(studentAvg) };
  });
console.table(averagesChemistryAvg);
console.groupEnd();

console.groupCollapsed(
  "7. Atspausdinti visų Elektros ir elektronikos fakulteto studentų vidurkius"
);
{
  const averagesElectronicsAvg = students
    .filter((st) => st.faculty === "Elektros ir elektronikos fakultetas")
    .map((student) => {
      let studentsMarks = [];

      student.modules.forEach((module) => {
        [...studentsMarks];
        studentsMarks.push(...module.marks);
      });
      let studentAvg =
        studentsMarks.reduce(
          (prevValue, currentValue) => prevValue + currentValue
        ) / studentsMarks.length;
      return { vardas: student.name, vidurkis: Math.round(studentAvg) };
    });
  console.table(averagesElectronicsAvg);
}
console.groupEnd();

console.groupCollapsed("8. Atspausdinti tik pirmo kurso studentus");
{
  const rookies = students
    .filter((student) => student.course === 1)
    .map((student) => student.name);
  console.table(rookies);
}
console.groupEnd();

console.groupCollapsed("9. Atspausdinti tik antro kurso studentus");
{
  const rookies2 = students
    .filter((student) => student.course === 2)
    .map((student) => student.name);
  console.table(rookies2);
}
console.groupEnd();

console.groupCollapsed("10. Atspausdinti tik trečio kurso studentus");
{
  const rookies3 = students
    .filter((student) => student.course === 3)
    .map((student) => student.name);
  console.table(rookies3);
}
console.groupEnd();

console.groupCollapsed("11. Atspausdinti tik ketvirto kurso studentus");
{
  const rookies4 = students
    .filter((student) => student.course === 4)
    .map((student) => student.name);
  console.table(rookies4);
}
console.groupEnd();
