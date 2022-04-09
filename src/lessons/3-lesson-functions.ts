// Defining functions in typescript
// function [functionName]([parameterName]: [parameterType]): [returnType] {...}

// *** EXPLICIT TYPING ***
// Takes a number and returns a number
function double(x: number): number {
  return 2 * x;
}

// Takes a number and returns a string
function numberToString(x: number): string {
  return x.toString();
}

// Concat 2 strings
function concatStrings(x: string, y: string): string {
  return x + y;
}

// *** IMPLICIT TYPING ***
// Takes a number and returns a number
function triple(x: number) {
  return 2 * x;
}
