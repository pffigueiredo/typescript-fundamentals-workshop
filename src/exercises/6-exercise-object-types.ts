// 1- Change `Doggy` to fit the dog variable
type Doggy = ??;

type DogOwner = {
    name: string;
    age: number;
};

let dog: Doggy = {
  color: 'brown',
  age: 5,
  name: 'Buddy',
};

// 2- Change `doggy` to have this function properly typed ( you might have to fix `dog` variable)
function getDogOwner(dog: Doggy): DogOwner {
  return dog.owner;
}

// 3- Create a type fits to the `dogs` parameter and assign it
function getFirstDogOwner(dogs): DogOwner {
  return dogs[0].owner;
}
