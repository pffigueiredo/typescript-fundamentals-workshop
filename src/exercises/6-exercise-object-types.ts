// You should not need to change any JavaScript code in this file!

// 1- Create a type that fits this `dog` object
let dog = {
  color: 'brown',
  age: 5,
  name: 'Buddy',
};

// 2- Create a type fits to the `dog` parameter and assign it
type User = {
  name: string;
  age: number;
};

function getDogOwner(dog): User {
  return dog.owner;
}

// 3- Create a type fits to the `dogs` parameter and assign it
function getFirstDog(dogs): User {
  return dogs[0].owner;
}
