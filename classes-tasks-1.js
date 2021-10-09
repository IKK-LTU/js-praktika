/*
1. Sukurti klasę Automobilis
  - sukurti konstruktorių, su 3 argumentais:
    - marke, modelis, kaina
    

  - konstruktoriuje aprašyti, jog perduotus argumentus išsaugotume formuojame objekte savybėmis:
    - this.brand
    - this.model
    - this.price

2. Sukurkite 3 skirtingus objektus pagal klasę Automobilis kintamuosiuose:
  - const car1 = new Automobilis(..., ..., ...);
  - const car2 = new Automobilis(..., ..., ...);
  - const car3 = new Automobilis(..., ..., ...);

3. Atsispausdinkite car1, car2 ir car3 kintamuosius. Peržiūrėkite juos konsolėje, panagrinėkite kas yra tie objektai

4. Atspausdinkite visų kintamųjų (kurie rodo į klasės objektus):
  modelius:
    - console.log(car1.model);
    - console.log(car2.model);
    - console.log(car3.model);
  markes:
    - console.log(car1.brand);
    - console.log(car2.???);
    - console.log(???);
  kainas:
    - console.log(???);
    - console.log(???);
    - console.log(???);

5. Padidinkite Automobilis objektų kainas šimtu.
  car1.price = car1.price + 100;
  car2.price = ??? + 100;
  ???

6. Po padidinimo, vėl atsispausdinkite objektus ir pažiūrėkite pakitusias Automobilis objektų savybes.

*/
class Car {
  constructor(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
}
const car1 = new Car("Bmw", "X3", 14000);
const car2 = new Car("VW", "Passat", 10000);
const car3 = new Car("Audi", "Q3", 24000);
console.log(car1);
console.log(car2);
console.log(car3);

console.log(car1.model);
console.log(car2.model);
console.log(car3.model);

console.log(car1.brand);
console.log(car2.brand);
console.log(car3.brand);

console.log(car1.price);
console.log(car2.price);
console.log(car3.price);

car1.price += 100;
car2.price += 100;
car3.price += 100;

console.log(car1.price);
console.log(car2.price);
console.log(car3.price);
  

//                                           TEORIJA

// KLASĖS 
// tai šablonai objektų kurimui.Jie įtraukia duomenis į kodą, kad galėtu dirbti su tais duomenimis.
// Klasės yra sukurtos remiantis prototipais, bet turi ir tam tikrą sintaksę ir semantiką, kuri Nėra
// bendrinama su ES5 klasės(ES5 kitokia sintakse, nes paremta funkcijomis) semantika.

//KLASIŲ DEKLARAVIMAS 
// I Būdas.(Dažniausiai naudojamas)
{
  class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  }
}

//Pagrindinis skirtumas tarp KLASIŲ DEKLARAVIMo ir Funkciju deklaravimo yra tas, jog klasę reikia PIRMA deklaruoti, o tik tada naudoti.
//Toks naudojimas ismestu ERRORA:
{
  const p = new Rectangle();
  class Rectangle{
    //...
  }
}

//II Būdas. (nammed)

// named
{let Rectangle = class Rectangle2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
console.log(Rectangle.name);}
// output: "Rectangle2"

//III Būdas. (unnammed)

// unnamed
{let Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
console.log(Rectangle.name);}
// output: "Rectangle"

//KLASĖS BODY
//Tai klasės dali kuri yra laužtiniuose skliaustuose {}. Jos viduje aprašomi visi klasės kintamieji, metodai ir constructorius.
// Klasės body esantis kodas yra vykdomas naudojant 'STRICT MODE'.

//KLASĖS constructor metodas
// Tai specialus metodas, kuriame sukuriami klasės objektai. Constructor metodas klasėje gali buti tik VIENAS.

