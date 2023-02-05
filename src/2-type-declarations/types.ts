//  NUMBER
let decimal: number = 10;   // Decimal number
let float: number = 0.1554; // Floating point number
let hex: number = 0xf00d;   // Hexadecimal number
let binary: number = 0b1010;// Binary number
let octal: number = 0o744;  // Octal number

// BIGINT
let big: bigint = 100n;     // Big number

// BOOLEAN
let bool: boolean = true;   // Boolean value

// STRING
let string: string = "hello world"; // String

// MULTIPLE TYPES
let value: number | string = "hello world"; // Either a string or a number
value = 10;                                 // This works correctly
//value = true;                             // This does not!

// ARRAYS
let array: number[] = [1, 2, 3, 5, -3];             // Arrays that work with any type
let anotherArray: Array<number> = [1, 2, 3, 5, -3]; // Another way to instantiate the same array

// TUPLES
let tuple: [number, string] = [10, "hello"];            // This is a working tuple
//let errorTuple: [number, boolean] = ["hello", binary];// This doesn't work

// UNKNOWN AND ANY
let unknownVar: unknown;
unknownVar = 3;
unknownVar = true;
unknownVar = "hello";
//unknownVar.isString();  // This doesn't work!

let anyVar: any;
anyVar = 3;
anyVar = true;
anyVar = "hello";
anyVar.isString();      // This does!

// VOID
function voidFunction(): void {
    console.log("This returns nothing");
}

// NULL AND UNDEFINED
let u: undefined = undefined;
let n: null = null;

//u = 3; // Nothing can be assigned to these variables!
//n = "hello?";

// NEVER
function error(): never {
    throw new Error("This doesn't return anything");
}

function loop(): never {
    while (true) {
        console.log("This doesn't end and thus doesn't return from the function");
    }
}

function fail() {
    throw new Error("Even though is not specified, never is the inferred return type");
}