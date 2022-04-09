/* eslint-disable */ 

type Pet = { name: string; age: number };

//1- Assign a type to `Cat` by using a type intersection
type Cat = ??;

//2- Assign the arguments types and the return type of the function
function getCat(pet): Cat {

    return {
        name: pet.name,
        age: pet.age,
        color: 'black',
    }
}

type D = { d: boolean; }
type E = { e: string; }
type F = { f: number; }

type A = { x: D; }
type B = { x: E; }
type C = { x: F; }

type ABC = A & B & C;

//3- Assign a value to `abc` that fits ABC
let abc: ABC = ??;


