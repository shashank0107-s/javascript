//single line comment
/*
multi line comment  
la la a ala 
lamlaka la a; aal
*/

console.log('Hello, world!'); //equivalent to print in python.
// variable declaration
let fname = 'John';
var age = 25;
const age_limit = 18; // values declared using this keyword cannot be changed during runtime
//const - stands for constant

console.log("welcome to Earth", fname);

age++; //equivalent to age = age + 1
console.log(age);
//with var , we can also redeclare the variable , not with let and const

var age = 30;
console.log(age);
//let fname = 'Jane'; //this will throw an error as fname is already declared
//reassignment is okay
fname = 'Jane';
console.log(fname);

console.log('a value:', a); //at this stage, a is declared, but value is not defined yet
a = 19; //defining the value of a
console.log('a value:', a); //now,here, value of a is defined.
console.log(a);

let b;
b = 20;

var c;
c = 30;

var a; // this declaration will be 'hoisted' to the top of the script while running
// so that it is run before initialisation/assignment of the same.

//scope in JS is declared using curly braces: {}

{
    let v1 = 40; // variable declared with let will be available only within the block
    const c1 = 15;
    var v2 = 50; // variable declared with var will be available in global scope
}
console.log(v2);
//console.log(v1); //this will throw an error as v1 is not available outside the block
//console.log(c1); //this will throw an error as c1 is not available outside the block

//----------------------------------------------------------------------------------------------------//
//Data types in JS
//Primitive data types
//1. Number
let i = 10;
console.log(typeof i); // equivalent to print(type(i)) in python

//2. String
i = 'a';
console.log(typeof i);

//3. Boolean
i = true;
console.log(typeof i);

//4. Undefined;
let j;
console.log(typeof j);

//5. Null
let k = null;
console.log(typeof k);  //even though null datatype exist, it exists as an object in JS

//6. Symbol

let uniqueID = Symbol('id');
console.log(typeof uniqueID);

//non-primitive data types
//1. Object
// There are built in and user-defined objects in JS.
// Built in objects => objects, arrays, dates, maps, sets, intarrays, floatarrays, promises, etc

// User defined objects can be created with or without class.
// In JS, objects can be created without a predefined class to construct it from.
// The structure of declaration resembles the python dictionary datatype.
let user = { 
    name: "Alice", 
    age: 25 
};
console.log(typeof user); 
console.log('name : ',user.name);

// Operators in JS

// Arithmetic
let a1 = 10, b1 = 3;
console.log(a1 + b1); // 13
console.log(a1 - b1); // 7
console.log(a1 * b1); // 30
console.log(a1 / b1); // 3.333...
console.log(a1 % b1); // 1
console.log(a1 ** b1); // 1000 // ES2016

    // increment operator
    // post increment
    console.log(a1++); //10 --> increments the value of a1 after this statement has executed.
    // pre increment
    console.log(++a1); //12 --> increments the value of a1 before execution of current statement.
    // Similarly decrement operator exists --> --x, x--

    // Shorthand operators or assignment operator
    //  Just like in python, JS also supports shorthand operators
    let x = 1;
    // -> x = x + 1; => 
    x += 1;
    // -> x = x * 2; => 
    x *= 2;


// Comparison Operator
let y = 10, z = '10';

console.log(y == z); // true -> checks loose equality 
// -> checks only value, converts and checks if possible.

console.log(y === z); // false -> checks strict equality -> checks type

// Logical Operator

t1 = true;
t2 = false;

console.log(t1 && t2); // and operator // false
console.log(t1 || t2); // or operator // true

console.log(!t1);     // not operator // false
