let age: number;

age = 12;

let userName: string | string[];

userName = "MAX";
userName = ["Max", "Tom"];

let isInstructor: boolean;

isInstructor = true;

let hobbies: string[];

hobbies = ["sports", "Cooking"];

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: "Max",
  age: 32,
};

// person = {
//   isEmployee: true,
// };

let people: Person[];

let course: string | number = "React";
course = 1234;

// Functions & types

function add(a: number, b: number) {
  return a + b;
}

function print(value: any) {
  console.log(value);
}
