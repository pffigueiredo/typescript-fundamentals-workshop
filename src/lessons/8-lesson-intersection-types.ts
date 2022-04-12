/* eslint-disable */

// Intersection Types - Intersection types, like union types,
// combine existing types to form a new type.

// An intersection type will have all the members from the types that it is based on.
// Intersection types don't just contain the common members from the types that it is based on,
// as you may first expect.

// An intersection type is constructed from existing types using the ampersand (&) character:

type LonelyPerson = { name: string; age: number };
type LonelyDog = { name: string; age: number };

// All the properties are "merged" into and create a new type
type DogWithOwner = LonelyPerson & { owner: LonelyDog };
let dogWithOwner: DogWithOwner = {
  name: 'Buddy',
  age: 5,
  owner: {
    name: 'Jack',
    age: 25,
  },
};

type NamelessDog = { name?: string | undefined; age: number; toy: string };
// "Intersects" all the properties of each type to create a new one
type MyNewDog = LonelyPerson & NamelessDog;
let myDog: MyNewDog = {
  name: 'Buddy',
  age: 5,
  toy: 'ball',
};
