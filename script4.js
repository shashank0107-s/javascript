// JS objects

// In JS, objects can be created in 3 different ways

    // 1. Object Literal Notation

    const student = {
        name : "Shivani",
        age : 10,
        // the below methods are object methods.
        learn : function (subject){
            console.log(`I'm ${this.name} and I'm learning ${subject}.`);
            },
        applyLeave : function (n) {
            console.log(`Student : ${this.name} is taking ${n} days leave`)
        }
        }

    student.learn('physics');
    student.applyLeave(2);

    // 2. Using the `Object` Constructor

    const s2 = new Object();
    s2.name = "Ayan";
    s2.age = 5;
    s2.learn = function () {
        console.log(`I am ${this.name} and I am not available at the moment...`)
    }
    s2.learn();

    // 3. Using Class definitions

// Object Oriented Programming in JS

class Student {
    // We need to declare all private variables inside class like below.
    #name; // declaring name as private => '#' symbol marks variables as private since 
    // JS 2022 update.

    // constructor method name in JS for any class is `constructor`
    constructor(name,age){
        this.#name = name;
        this.age = age;
    } 

    // Here, we have set the name variable as private 
    // We need getters and setters for accessing the datafield from the object
    getName(){
        return this.#name;
    }
    setName(new_name){
        this.#name = new_name;
    }

    learn(sub){ // object method
        console.log(`I'm ${this.#name} and I'm learning ${sub}.`);
        }    
    applyLeave(n) { // object method
        console.log(`Student : ${this.#name} is taking ${n} days leave`);
    }
}
    s = new Student(); // Object creation
    s.learn('physics'); // At this stage, 
    // name and age is undefined bcoz we called the constructor empty

    s = new Student("Deepak", 7); // Calling constructor with required parameters.
    s.learn('Maths');

    // Just like private variables, putting # symbol at method identifiers make them
    // private too since 2022 updations of JS.
    
    // Inheritance
    // We use `extends` keyword to inherit from one class.
    // Multiple parents are not allowed.
    // Only one parent per child class.

    class PhdStudent extends Student{ 
        
        constructor(name, age, project){ // redefining the constructor
            super(name,age); // Calling the parent class' constructor.
            this.project = project;
        }

    }
    const p = new PhdStudent('suraj',40,'Something');
    p.learn('maths');
    console.log(p.getName());
    console.log(p.name);