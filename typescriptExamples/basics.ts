//primitives: nubmers, strings, and booleans
//more complex types: arrays, objects
//function types, parameters

//primitives
    // one must be careful to follow the capitalization conventions for typescript
        //the way that the types are referened below in lowercase points to the javascript datatypes
        //if it was notated: Number, that would point to the js Number object, not a data type.
let age: number = 24; 
age = 12.4

let userName: string; 
userName = "Jeff";

let isStudent: boolean;
isStudent = true;

    // null and undefined are also primitive value types in typescript but it isn't useful to declare them. for example:

let hobbies: null;
hobbies = 10;

    // the above produces an error because if the type is set to null, it can't have a value that's a number. 
    //null and undefined are used in a slightly different way.


// more complex data types

let sports: string = ["climbing", "bouldering", "ice climbing"]; //makes an error because string is a primitive.  

let outdoorActivities: string[] = ["climbing", "bouldering", "ice climbing"];

let person: {
    name: string;
    age: number;
};

person = {
    name: 'Jeff', 
    age: 43
}

person = {
    isStudent: true
}

//you can also set types for arrays and objects using Type Aliases, using the "type" keyword:

type People = {
    name: string;
    age: number;
}

let people: People;

people = {
    name: 'Jeff',
    age: 43,
}


//Notice the 'any' datatype below
let kitty;

kitty = 12

//Type inference

let course = "React - the Complete guide";
course = 12345;

//the above produces an error because initializing course with a value that's a string cuases typescript to infer that the type is string.

//union types.  Union types may have more than one type of value:
let webClass: string | number | boolean = "React - the incomplete guide"
//use a pipe to add another possible type

//Functions and Types
function add(a: number, b: number) {
    return a + b;
}
// In the above, a type is infered for the value that is returned, becasue it couldn't be any other type.  You can see this if you hover over add.  You can also assign types to the return like this:

function subtract(a: number, b: number): number | string {
    return a - b;
}

//there is also a special type that applies only to return values.  The following will return a type of "void," which has a value of undefined, becuase it has no return 
function printOutput(value: any) {
    console.log(value);
}


//Generics:
function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1);

updatedArray[0].split('')

// Classes
// you can use classes to create blueprints for objects you want to instantiate

class Student {
    firstName: string;
    lastName: string;
    age: number;
    private courses: string[];

    constructor(first: string, last: string, age: number, courses: string[]) {
        this.firstName = first;
        this.lastName = last; 
        this.age = age;
        this.courses = courses;
    }

    enrol(courseName: string) {
        this.courses.push(courseName)
    }

    listCourses() {
        return this.courses.slice();
    }
}

const student = new Student('Jeff', 'Ashear', 43, ['angular'])

student.enrol('React')

// Student.courses would now include both Angular and React

