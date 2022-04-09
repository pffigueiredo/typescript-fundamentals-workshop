// add the correct typing to `returnArrayOfNumbers`
type ArrayOfNumbers = ??;
function returnArrayOfNumbers(array) {
    return array;
}


// Define the return type of the function
// It should be an array of arrays of string
function returnsAnArrayOfArraysOfStrings(): /* Return type here */ {
    const array = [];
    array.push(['hello']);
    array.push(['world']);
    return array;
}