/* eslint-disable */

// We can declare our own names for types using the type keyword.
// It looks similar to declaring a variable with let.
// By convention, user-defined type names are UpperCamelCased.

// Creating a type alias and assigning it to a variable
type MyStringType = string;
let aliasS: MyStringType = 'hello';

// We can assign a `string` to a `MyStringType` and vice-versa.
// Think of `MyStringType` as a new name for `string`, rather than a whole new type.
let aliasS1: string = 'hello';
let aliasS2: MyStringType = aliasS1;

type MyBoolean = boolean;
type MyBoolean1 = boolean;
let aliasS3: MyBoolean = true;
let aliasS4: MyBoolean1 = aliasS3;

// The type declarations only contains TypeScript syntax. There's no JavaScript there!
// After the TypeScript compiler runs, we're left with the JavaScript parts of the code.
// **Let's try it!**

// The particulars of our system aren't important to you, of course.
// But the fact that the TypeScript compiler throws the types away is important.
// Most notably, it means that there's no way to inspect types at runtime.
// Types are only used during type checking, then they're thrown away.

// The technical term for this is "type erasure": the types are used for type checking,
// then erased from the compiled output.
