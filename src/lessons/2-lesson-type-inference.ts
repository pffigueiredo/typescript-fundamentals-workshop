/* eslint-disable */

// TypeScript can infer types most of the times, without the need for us to
// provide any further information.

// Number =>  same as `let infNumber: number = 'four'.length;`
let infNumber = 'four'.length;

// String => same as `let infString: string = (123).toString();`
let infString = (123).toString();

// Boolean
let infBoolean = true;
