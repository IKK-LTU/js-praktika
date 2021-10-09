const arr = [-1, 0, 1, 2, 3, 4];

console.groupCollapsed(
  "1. Parašykite funkciją, kuri grąžina pirmą masyvo elementą."
);
{
  function first(array) {
    console.log(array[0]);
  }
  first(arr);
}
console.groupEnd();

console.groupCollapsed(
  "2. Parašykite funkciją, kuri pašalina pirmą masyvo elementą ir jį grąžina."
);
{
  function firstMinus(array) {
    console.log(array);

    array.shift();
    console.log(array);

    array.unshift(-1);
    console.log(array);
  }
  firstMinus(arr);
}
console.groupEnd();

console.groupCollapsed(
  "3. Parašykite funkciją, kuri grąžina paskutinį masyvo elementą."
);
{
  function last(array) {
    console.log(array[array.length-1]);
  }
  last(arr);
}

console.groupEnd();

console.groupCollapsed(
  "4. Parašykite funkciją, kuri pašalina paskutinį masyvo elementą ir jį grąžina."
);
{
   function lastMinus(array) {
     console.log(array);

     array.pop();
     console.log(array);

     array.push(4);
     console.log(array);
   }
   lastMinus(arr);
}
console.groupEnd();

console.groupCollapsed(
  "5. Parašykite funkciją, kuri grąžina elementų kiekį masyve"
);
{
   function countElements(array) {
     console.log(array.length);
   }
   countElements(arr);
}
console.groupEnd();

console.groupCollapsed(
  "6. Parašykite funkciją, kuri atspausdina paskutinio masyvo elemento indeksą"
);
{
  function lastIndex(array) {
    console.log(array.indexOf(array[array.length-1]))
  }
  lastIndex(arr);
}
console.groupEnd();

console.groupCollapsed(
  "7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus eilutėmis"
);
{
  function allIndexes(array) {
    array.forEach((item, index) => {
      console.log(index);
    })
  }
  allIndexes(arr);
}
console.groupEnd();

console.groupCollapsed(
  "8. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes eilutėmis"
);
{
   function allValues(array) {
     array.forEach((item, index) => {
       console.log(item);
     });
   }
   allValues(arr);
}
console.groupEnd();

console.groupCollapsed(
  "9. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras eilutėmis, tokiu formatu:  "
);
{
  function allIndexesAndValues(array) {
    array.forEach((item, index) => {
      console.log(`${item} = > ${index}`);
    });
  }
  allIndexesAndValues(arr);
  // ... sprendimas ir spausdinimas
}
console.groupEnd();

console.groupCollapsed(
  "10. Parašykite funkciją, kuri atspausdina masyvo elementus atbuline tvarka eilutėmis, iš galo."
);
{
     function allValuesReversed(array) {
       array.reverse().forEach((item, index) => {
         console.log(item);
       });
     }
     allValuesReversed(arr);
}
console.groupEnd();

console.groupCollapsed(
  "11. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus vienoje eilutėje: 0 1 2 3 ..."
);
{
  function allIndexess(array) {
    let indexes=[];
    array.forEach((item, index) => {
      indexes.push(index);
    })
    console.log(`${indexes}`);
  }
  allIndexess(arr);
}
console.groupEnd();

console.groupCollapsed(
  "12. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes vienoje eilutėje: -111 2 -9 48"
);
{
   let s = "";
   arr.forEach((item, index) => {
     s += ` ${item} `;
   });
   console.log(s);
}
console.groupEnd();

console.groupCollapsed(
  "13. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras vienoje eilutėje, tokiu formatu:"
);
{
  let s = "";
  arr.forEach((item, index) => {
    s += `[${index}] => ${item} `;
  });
  console.log(s);
}
console.groupEnd();
