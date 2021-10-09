console.groupCollapsed("1. - https://edabit.com/challenge/ZngT4zDckDugt2JGY");
{
  class Player {
    constructor(name, age, height, weight) {
      this.name = name;
      this.age = age;
      this.height = height;
      this.weight = weight;
    }
    getAge() {
      console.log(`${this.name} is age ${this.age}`);
      return `${this.name} is age ${this.age}`;
    }
    getHeight() {
      console.log(`${this.name} is ${this.height}cm`);
      return `${this.name} is ${this.height}cm`;
    }
    getWeight() {
      console.log(`${this.name} weighs ${this.weight}kg`);
      return `${this.name} weighs ${this.weight}kg`;
    }
  }
  p1 = new Player("David Jones", 25, 175, 75);
  p1.getAge();
  p1.getHeight();
  p1.getWeight();
}
console.groupEnd();

console.groupCollapsed("2. - https://edabit.com/challenge/yxKoCKemzacK6PECM");
{
  class Calculator {
    add(a, b) {
      return a + b;
    }
    subtract(a, b) {
      return a - b;
    }
    multiply(a, b) {
      return a * b;
    }
    divide(a, b) {
      return a / b;
    }
  }
  var calculator = new Calculator();

  calculator.add(10, 5);
  calculator.subtract(10, 5);
  calculator.multiply(10, 5);
  calculator.divide(10, 5);
}
console.groupEnd();

console.groupCollapsed("3. - https://edabit.com/challenge/kGLhgwGaLJsCMS7wS");
{
  class Employee {
    constructor(firstname, lastname, fullname, email) {
      this.firstname = firstname;
      this.lastname = lastname;
      this.fullname = this.firstname + " " + this.lastname;
      this.email =
        this.firstname.toLowerCase() +
        "." +
        this.lastname.toLowerCase() +
        "@company.com";
    }
  }
}
console.groupEnd();

console.groupCollapsed("4. - https://edabit.com/challenge/iwdZiFucR5wkQsFHu");
{
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    compareAge(other) {
      if (this.age < other.age) {
        return `${other.name} is older than me.`;
      } else if (this.age > other.age) {
        return `${other.name} is younger than me.`;
      } else {
        return `${other.name} is the same age as me.`;
      }
    }
  }
}
console.groupEnd();

console.groupCollapsed("5. - https://edabit.com/challenge/Hgb38yhWGwJCMHbRQ");
{
  class Circle {
    constructor(r) {
      this.r = r;
    }
    getArea = () => Math.PI * this.r ** 2;
    getPerimeter = () => 2 * Math.PI * this.r;
  }

  // unquote and use run to test these cases:

  let q = new Circle(4.44);
  console.log(q.getArea());
  console.log(q.getPerimeter());
}
console.groupEnd();

console.groupCollapsed("6. - https://edabit.com/challenge/qNMtrtizgssAQqP2b");
{
   class Name {
     constructor(fname, lname, fullname, initials) {
       this.fname = fname;
       this.fname =
         this.fname.charAt(0).toUpperCase() + this.fname.slice(1).toLowerCase();
       this.lname = lname;
       this.lname =
         this.lname.charAt(0).toUpperCase() + this.lname.slice(1).toLowerCase();
       this.fullname = `${this.fname} ${this.lname}`;
       this.initials = `${this.fname[0].toUpperCase()}.${this.lname[0].toUpperCase()}`;
     }
   }
   a1 = new Name("john", "SMITH");
   console.log(a1);
}
console.groupEnd();

console.groupCollapsed("7. - https://edabit.com/challenge/HKmJFmZZCX53ff4ke");
{
  function sweetestIcecream(arr) {
    var sweetVal = {
      Plain: 0,
      Vanilla: 5,
      ChocolateChip: 5,
      Strawberry: 10,
      Chocolate: 10,
    };
    var result = arr.map(
      (element) => sweetVal[element["flavor"]] + element["numSprinkles"]
    );
    return Math.max(...result);
  }
}
console.groupEnd();

console.groupCollapsed("8. - https://edabit.com/challenge/9zwdrfW99zmdRhibi");
{
  class OnesThreesNines {
    constructor(number) {
    
      this.nines = Math.floor(number / 9);
      this.ones = Math.floor(number / 1);
      this.threes = Math.floor(number / 3);
    }
  }
  let one = new OnesThreesNines(11);

console.log(one.threes);
}
console.groupEnd();

console.groupCollapsed("9. - https://edabit.com/challenge/7PA4jhWqDYJT4ixLp");
{
  class User {
  // Static means that it's value will not be reseted while new object are created
  static userCount = 0;
  constructor(username) {
    this.username = username;
    User.userCount++;
  }
}
}
console.groupEnd();

console.groupCollapsed("10. - https://edabit.com/challenge/s5Sz2ovKsvtGxNGgn");
{
  function Book(title, author) {
    this.title = title;
    this.author = author;

    this.getTitle = function () {
      return `Title: ` + this.title;
    };
    this.getAuthor = function () {
      return `Author: ` + this.author;
    };
  }
  const PP = new Book("Pride and Prejudice", "Jane Austen");
  const H = new Book("Hamlet", "William Shakespeare");
  const WP = new Book("War and Peace", "Leo Tolstoy");

}
console.groupEnd();
