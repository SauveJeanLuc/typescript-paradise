export {}
let message = "Welcome back";
console.log(message);

let x =10; // Can be done without initialisation
const y = 20; // Always initialized with a value, can never be re-assigned

let sum;
const title = 'Sympa';

let isBeginner: boolean = true;
let total: number = 0;
let name: string = 'SAUVE';
// Template strings

let sentence: string = `My name is ${name} I am beginner in Typescript`
console.log(sentence);

//Accurate Intellicence

//null and undefined, Not used on their own
let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;

let list1: number[] = [1,2,3];
let list2: Array<number> = [1,2,3];

//tuple data type
let person1: [string, number] = ['Chris', 22];
enum Color {Red = 5, Green, Blue};

let shirtColor = Color.Green;
console.log(shirtColor);

//Any type: value from third party library, or user input that's dynamic.
let randomValue: any = 200;
randomValue = true;
randomValue = 'SAUVE';

let myVariable: any = 10;
console.log(myVariable.name);
myVariable();
myVariable.toUpperCase();

//Unkwon type, can't call any property of unknown

//function that checks if variable has 
//name property or not

function hasName(obj: any): obj is {name: string} {
    return !!obj && 
            typeof obj === "object" &&
            "name" in obj
}

let yourVariable: unknown = 10;


if(hasName(yourVariable)){
    console.log(yourVariable.name);
}

(myVariable as string).toUpperCase();

let a;
a=10;
a=true;

let b = 20; //Type checking happends here

let multiType: number | boolean; //Multiple types
multiType = 20;
multiType = true;

function add(num1: number, num2: number): number{
    return num1 + num2;
}

add(5,10); 
 





