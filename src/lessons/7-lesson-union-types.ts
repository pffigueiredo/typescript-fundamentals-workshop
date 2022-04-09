/* eslint-disable */

// Union Types - As the name suggests, union types are types that we can combine to form a new type.
// A union type is constructed from existing types using the pipe (|) character:

type StringOrNumber = string | number;

type Person = { name: string; age: number };
type Dog = { name: string; age: number; owner: Person };
type DogOrPerson = Dog | Person;

function getAge(dogOrPerson: DogOrPerson): number {
  return dogOrPerson.age;
}
