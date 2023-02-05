//TypeScript Generic
function display<template>(value: template): template {
  console.log(value);
  return value;
}
const exampleString = "this is an example string";
const exampleNumber = 1234;

const resultString  = display(exampleString);
const resultNumber = display(exampleNumber);


//Generic Interface
interface GenericInterface<T, U> {
  key: T;
  value: U;
}

let kv1: GenericInterface<number, string> = { key:1, value:"P" };
let kv2: GenericInterface<number, number> = { key:1, value:12345 };

//Generic Classs
class GenericClass<T,U> {
  ValOne: T;
  valTwo: U;

  constructor(valOne: T, valTwo: U) {
    this.ValOne = valOne;
    this.valTwo = valTwo;
  }
}

const objectOne =  new GenericClass<number,number>(1,1);
const objectTwo = new GenericClass(2,"pepe");

console.log(objectOne.ValOne);
console.log(objectTwo.valTwo);