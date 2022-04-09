/* eslint-disable */

// In JavaScript, myObject.someProperty will return undefined if someProperty doesn't exist.
// This has caused an uncountable number of errors in production applications.
// The most common symptom is the "undefined is not a function" error when we do myObject.someProperty().

// TypeScript's object types let us catch this type of error at compile time.
// No more finding these bugs because they fail in production!

// An object type specifies each property's name and type.

type User = {
  email: string;
  admin: boolean;
  dogName?: string;
};
let amir: User = {
  email: 'amir@example.com',
  admin: true,
  dogName: 'Buddy',
};

// `DogName` is optional, so we can omit it.
let cindy: User = {
  email: 'cindy@example.com',
  admin: true,
};

// Can access "admin"!
amir.admin;

// Assign property types to new variable
let cindyEmail = amir.email;

// Can have nested objects
type Reservation = {
  user: User;
  roomNumber: number;
};

let reservation: Reservation = {
  user: {
    email: 'email@example.com',
    admin: true,
  },
  roomNumber: 23,
};

// This also works, but is not recommended.
let reservation1: {
  user: User;
  roomNumber: number;
} = reservation;
