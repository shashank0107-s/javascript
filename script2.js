const age_limit = 18;
const heavy_license_age_limit = 21;

let age = 4;

//conditional statements

if (age >= heavy_license_age_limit) {
    console.log('You are eligible to drive heavy vehicle');
}
else if(age >= age_limit){
    console.log('You are eligible to drive');
}
else{   
    console.log('You are not eligible to drive')
}

let choice = 1;
switch(choice){
    case 1:
        console.log('Juice');
        break;
    case 2:
        console.log('Bread omlet');
        break;
    default:
        console.log('hehehe');
}
//  Ternary operator `?`
// let x = <condition> ? expressionIfTrue : expressionIfFalse;
age = 30;
message  = age >= heavy_licence_age_limit ? "can drive heavy" : age >= age_limit ? 'Can drive' : 'Cannot drive' ;
console.log(message);

// Loops
// for loop
// syntax

    // for (initialization; termination_condition; increment/decrement){
    //     // statement
    // }

for (let i = 0; i <= 4; ++i){
    console.log(2," x ", i, '= ',i * 2);
}

// for... of loop >>> used for iterating over iterables
let array1 = [1,2,2,3,4,5]

for (let item of array1){
    console.log(item);
}

for (let char of "Hello world"){
    console.log(char);
}
// for... in... >>> Looping over properties of object, or  indices of array
let user = { 
    name: "Alice", 
    age: 25 
};

for (let key in user){
    console.log(`${key} - ${user[key]}`);
}

students = ['shivani','rashmi','jenil','deepak']
for (let student_index in students) {
    console.log(students[student_index]);
}


//  While loop

// while (condition ){
// // statement
// }
let count = 0;
while (count < 3){
    console.log(count);
    count++;
}
console.log("---------")
let x= 10;
do {
    console.log(x--);
}
while(x > 5)

//  loop control 
//  break, continue 
for (let i = 0; i <= 10; i++){

    if (i == 6) break; // breaks the loop when condition is met.
    if (i == 4) continue; // skips the iteration when condition is met.
    console.log(i);

}