/* eslint-disable */

type MyPerson = { name: string; age: number };
type MyDog = { name: string; age: number; color: string };

// 1- Assign the arguments types and the return type of the function
function getOneOf(person, dog) {
  if (Math.random() > 0.5) {
    return person;
  } else {
    return dog;
  }
}

// 2- Define a type for "unionA" so that it doesn't have a type error
let unionA = '31';
unionA = 31;
unionA = true;
