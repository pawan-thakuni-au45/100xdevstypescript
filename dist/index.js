"use strict";
const greet = (name) => {
    console.log(`hello ${name}`);
};
greet('pawan');
const sum = (a, b) => {
    return a + b;
};
const a = sum(1, 2);
console.log(a);
//write a function that takes another fun as an input 
const func1 = (func) => {
    return setTimeout(func, 1000);
};
const func2 = () => {
    console.log("hii ");
};
func1(func2);
