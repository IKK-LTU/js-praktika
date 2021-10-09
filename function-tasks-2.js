// ----------------------Užduotys--------------------------

/*
  Masyvas, tai tiesiog objektas, kuris sukonstruotas pagal gamyklinį JS prototipą 'Array'. Šis 'Array' prototipas,
  turi vidines funkcijas - metodus. Dalį iš metodų jau nagrinėjome:
    push - įdeda elementą į masyvo galą
    pop - išima elementą iš masyvo galo 
    shift - išima elementą iš masyvo priekio
    unshift - įdeda elementą į masyvo priekį
  Masyvas turi ir kitokio pabūdžio metodus - iteracinius metodus. Šie metodai reikalauja funkcijos,
  kuri bus iškviečiama su kiekvienu masyvo elementu. Priklausomai nuo masyvo iteracinio metodo, toji funkcija turi įgyvendinti
  reikalavimus, kurių dėka bus pasiekta iteracinio metodo esmė.
*/

// ___________________________________________________________________________FOREACH

/*
    forEach yra paprasčiausias 'Array' iteracinis metodas. Jo tikslas, tiesiog įvykdytį argumentu paduotą funkciją,
    su kiekvienu masyvo elementu. Funkcija neturi nieko grąžinti, ji tiesiog įsivykdo. Kviečiant argumentu
    perduotą funkciją su kiekvienu masyvo elementu, tai funkcijai yra siunčiami 3 argumentai, tokia tvarka:
      1. einamasis masyvo elementas,
      2. einamojo masyvo elemento indeksas
      3. masyvas per kurį yra iteruojama
    Priklausomai nuo vykdomos logikos, perduodamoji funkcija gali pasiimti atitinkamą siunčiamų parametrų kiekį. (1-3)
    Parametrų pavadinimus galite rinktis laisvai, geriausia vadinti
    juos taip, jog jie sufleruotų perduodamų argumentų prasmę. 
    Svarbu pastebėti, jog siunčiamų argumentų eiliškumas niekada nesikeičia, ir jeigu, perduodamos funkcijos logikoje reikia
    tik indekso (2.) reikšmės, vistiek turime priimti argumentu ir patį iteruojamą elementą (1.), nes indeksas visada bus
    perduodamas antruoju argumentu.
  */
// ___________________________________________________________________________ MAP

/*
    Array.prototype.map iteracinis metodas yra skirtas kurti naują masyvą, iš iteruojamo masyvo elementų. Iteruodamas per kiekvieną masyvo elementą,
    jis vykdo argumentu perduotą funkciją, su kiekvienu masyvo elmentu, jo indeksu ir iteruojamu masyvu. Tos funkcijos grąžintas rezultatas 
    dedamas į naują masyvą. Praiteravus per visus iteruojamo masyvo elementus iteracinis metodas 'map' grąžina suformuotą masyvą į iškvietimo vietą.
    
    Suformavus naują masyvą, jis visada turės tiek pat elementų kaip ir pradinis masyvas.
    Šis metodas dažniausiai naudojamas pradinio masyvo reikšmėms:
      * redaguoti
      * papildyti
      * sumažinti
      * keisti struktūrą, formą
    
    Kaip ir Array.prototype.forEach atveju, perduodamoji funkcija gali priimti 3 parametrus:
      1. einamasis elementas
      2. einamojo elemento indeksas
      3. iteruojamas masyvas
    Perduodamoji funkcija PRI-VA-LO grąžinti reikšmę, kuri bus dedama į naujai formuojamą masyvą.
  */

// ___________________________________________________________________________ FILTER
/*
    Array.prototype.filter iteracinis metodas yra skirtas kurti naują masyvą, ATRENKANT REIKŠMES PAGAL SALYGĄ iš iteruojamų masyvo elementų.
    Iteruodamas per kiekvieną masyvo elementą, jis vykdo parametru perduotą funkciją, perduodant jai einamajį elementą, jo indeksą ir 
    iteruojamajį masyvą. Jeigu perduotos funkcijos grąžinimo reikšmė yra 'true', einamasis elementas įdedamas į naujai formuojamą masyvą.
    Priešingu atveju, jeigu parametru perduotos funkcijos grąžinimo rezultatas su einamuolu elementu yra false, tuomet einamasis elementas
    NĖRA įdedamas į naujai formuojamą masyvą.
    
    Kaip ir Array.prototype.forEach atveju, perduodamoji (tikrinimo) funkcija gali priimti 3 parametrus:
      1. einamasis elementas
      2. einamojo elemento indeksas
      3. iteruojamas masyvas
    Perduodamoji funkcija PRI-VA-LO grąžinti BOOLEAN, kur priklausomai nuo jos grąžinimo:
      * true - elementas bus pridedamas į naujai formuojamą masyvą.
      * false - elementas NEBUS pridedamas į naujai formuojamą masyvą.
  */
// ___________________________________________________________________________ REDUCE
/*
  Array.prototype.reduce iteracinis metodas yra skirtas masyvo reikšmes sukaupti į vieną reikšmę.
  Iteruodamas per kiekvieną masyvo elementą, jis vykdo parametru perduotą funkciją, perduodant jai kaupiamajį kintamajį, einamajį elementą,
  jo indeksą ir iteruojamajį masyvą. Kaupiamojo kintamojo reikšmė yra tokia, kokią grąžina parametru perduodamoji funkcija.
  Antruoju parametru, galima perduoti pradinę kaupiamojo kintamojo reikšmę. Jeigu pradinė, kaupiamojo kintamojo reikšmė nėra perduota,
  ji lygi pirmajam masyvo elementui ir pradedama iteruoti nuo antrojo masyvo elemento.
  
  Perduodamosios funkcijos aprašas:
    1. kaupiamasis kintamasis
    2. einamasis elementas
    3. einamojo elemento indeksas
    4. iteruojamas masyvas
  Perduodamoji funkcija PRI-VA-LO grąžinti kaupiamojo kintamojo reikšmę.
*/

// const numbers = [1, 2, -2, 6, -5, 9, 1.02, 45, -69, 77, -12, 2, 8, -2, -4, 59, 7, -3];
const numbers = [1, -2, 3, -4, 5, -6];
console.log(numbers);
console.group(
  "1. Parašykite funkciją, kur grąžintų naują masyvą, kur kiekvienas elementas būtų dvigubai didesnis nei pradiniame masyve"
);
console.log("---");
{
  console.log({
    numbers,
    numbersDoubled: numbers.map((a) => a * 2),
  });
}
console.log("---");
console.groupEnd();
console.log();

console.group("2. Pakelti masyvo narius kvadratu");
console.log("---");
{
}
console.log("---");
console.groupEnd();
console.log(numbers.map((item) => item ** 2));

console.group("3. Padauginti masyvo narius iš jų index'o (vietos masyve)");
console.log("---");
{
}
console.log("---");
console.groupEnd();
console.log(numbers.map((item, index) => item * index));

console.group("4. Atrinkti tiktai teigimų elementų masyvą");
console.log("---");
{
}
console.log("---");
console.groupEnd();
console.log(numbers.filter((item) => item > 0));

console.group("5. Atrinkti tiktai neigiamų elementų masyvą");
console.log("---");
{
}
console.log("---");
console.groupEnd();
console.log(numbers.filter((item) => item < 0));

console.group("6. Atrinkti tiktai lyginių skaičių masyvą");
console.log("---");
{
}
console.log("---");
console.groupEnd();
console.log(numbers.filter((item) => item % 2 == 0));

console.group("7. Atrinkti tiktai nelyginių skaičių masyvą");
console.log("---");
{
  console.log(numbers.filter((item) => item % 2 != 0));
}
console.log("---");
console.groupEnd();

console.group("8. Visas neigiamas vertes masyve padaryti teigiamomis");
{
  console.log(numbers.map((item) => Math.abs(item)));
}
console.groupEnd();

console.group("9. Pakelti visas masyvo reikšmes laipsniu 'index'");
console.log("---");
{
  console.log(numbers.map((item, index) => item ** index));
}
console.log("---");
console.groupEnd();

console.group("10. Atrinkti tik natūralių skaičių masyvą");
console.log("---");
{
  console.log(numbers.filter((item) => Number.isInteger(item) && item > 0));
}
console.log("---");
console.groupEnd();

console.group("11. Suapvalinti visas masyvo reikšmes iki sveikų skaičių");
console.log("---");
{
  console.log(numbers.map((item) => Math.round(item)));
}
console.log("---");
console.groupEnd();

console.group("12. Atrinkti kas antrą elementą");
console.log("---");
{
  console.log(numbers.filter((_, index) => (index + 1) % 2 == 0));
}
console.log("---");
console.groupEnd();

console.group("13. Atrinkti kas penktą elementą");
console.log("---");
{
  console.log(numbers.filter((_, index) => (index + 1) % 5 == 0));
}
console.log("---");
console.groupEnd();

console.group(
  "14. Sukurti funkciją, kuri ima masyvą ir atspausdina kiekvieną jo reikšmę atskirai: [0] => 64. (nieko negrąžina)"
);
console.log("---");
{
  numbers.forEach((item, index) => console.log(`[${index}] => ${item}`));
}
console.log("---");
console.groupEnd();

console.group(
  "15. Sukurti funkciją, kuri ima masyvą ir grąžina visų elementų sumą"
);
console.log("---");
{
  console.log(numbers.reduce((acc, el) => acc + el));
}
console.log("---");
console.groupEnd();

console.group(
  "16. Sukurti funkciją, kuri ima masyvą ir grąžina visų elementų vidurkį"
);
console.log("---");
{
  console.log(numbers.reduce((acc, el, _, arr) => acc + el / arr.length, 0));
}
console.log("---");
console.groupEnd();

console.group(
  "17. Sukurti funkciją, kuri ima masyvą ir grąžina didžiausią skaičių masyve."
);
console.log("---");
{
  console.log(Math.max(...numbers));
}
console.log("---");
console.groupEnd();

console.group(
  "18. Sukurti funkciją, kuri ima masyvą ir grąžina mažiausią skaičių masyve."
);
console.log("---");
{
  console.log(Math.min(...numbers));
}
console.log("---");
console.groupEnd();
