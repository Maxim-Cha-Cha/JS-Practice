"use strick";

//1
// const sum = function (num) {
//   if (num === 1) return 1;
//   else return num + sum(num - 1);
// }
// alert(sum(+prompt("Введите число ")));

//2
const student = {
  firstName: "Valera",
  lastName: "Valerovich",
  isMale: true,
  contact: {
    number: 1234567890,
    email: "valer4ik@gmail.com",
  },
};
const university = {
  name: "NYZP",
  faculty: "Классный",
  departament: "Вообще песня",
};
const userStudent = () => ({ ...student, ...university });

//3.1
// const array = [];
// for (let i = 0; i <= 25; i++) {
//   array[i] = i;
// }

//3.2
// array.forEach(num1)
// function num1(number, index){
//   if(index%2===0){
//     console.log(index)
//   }
// }

//3.3
// array.forEach(num2)
// function num2(number){
//   if(number%2===0)
//   {console.log(number)}
// }

//3.4 and 3.5
// array.forEach(num3);
// function num3(index) {
//   if (index === 0) {
//     console.log(index)
// console.log(num3.length)
//   }}

//4
class Book {
  constructor(author, title, yearOfPublication, publisher) {
    this.author = author;
    this.title = title;
    this.yearOfPublication = yearOfPublication;
    this.publisher = publisher;
  }
  get author() {
    return this._author;
  }

  set author(newAuthor) {
    if (typeof newAuthor !== "string") {
      throw TypeError("Error, author must be string");
    }
    this._author = newAuthor;
  }
  get title() {
    return this._title;
  }

  set title(newTitle) {
    if (typeof newTitle !== "string") {
      throw TypeError("Error, title must be string");
    }
    this._title = newTitle;
  }
  get yearOfPublication() {
    return this._yearOfPublication;
  }

  set yearOfPublication(newyearOfPublication) {
    if (typeof newyearOfPublication !== "number") {
      throw TypeError("Error, year of publication must be number");
    }
    this._yearOfPublication = newyearOfPublication;
  }
  get publisher() {
    return this._publisher;
  }

  set publisher(newPublisher) {
    if (typeof newPublisher !== "string") {
      throw TypeError("Error, publisher must be string");
    }
    this._publisher = newPublisher;
  }
}
class electrinicBook extends Book {
  constructor(
    author,
    title,
    yearOfPublication,
    publisher,
    format,
    electrinicNumber
  ) {
    super(format, electrinicNumber);
    this.format = format;
    this.electrinicNumber = electrinicNumber;
  }
  get electrinicNumber() {
    return this._electrinicNumber;
  }

  set electrinicNumber(newElectrinicNumber) {
    if (typeof newElectrinicNumber !== "number") {
      throw TypeError("Error, electrinic number must be string");
    }
    this._electrinicNumber = newElectrinicNumber;
  }
}

//5
const task5 = function (num) {
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    }
  }
};
