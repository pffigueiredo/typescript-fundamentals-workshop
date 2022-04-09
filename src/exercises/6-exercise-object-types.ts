// You should not need to change any JavaScript code in this file!

// 1- Create a type that fits this `dog` object and assign it
let dog = {
  color: 'brown',
  age: 5,
  name: 'Buddy',
};

type DogOwner = {
  name: string;
  age: number;
};

// 2- Create a type that fits to the `dog` parameter and assign it
function getDogOwner(dog): DogOwner {
  return dog.owner;
}

// 3- Create a type fits to the `dogs` parameter and assign it
function getFirstDogOwner(dogs): DogOwner {
  return dogs[0].owner;
}
