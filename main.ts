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

