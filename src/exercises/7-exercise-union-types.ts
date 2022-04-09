type Person = { name: string; age: number };
type Dog = { name: string; age: number; color: string };

// Assign the arguments types and the return type of the function
function getOneOf(person, dog) {
  if (Math.random() > 0.5) {
    return person;
  } else {
    return dog;
  }
}

// Define a type for "unionA" so that it doesn't have a type error
let unionA = '31';
unionA = 31;
unionA = true;
