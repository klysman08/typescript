"use strict";
/* Union types are used when a value can be more than a single type.
Such as when a property would be string or number. */
let age;
/* number */
age = 12;
/* string */
age = "doze";
function showPet(pet) {
    console.log(pet);
}
showPet("Dog");
function printStatusCode(code) {
    console.log(`My status code is ${code}.`);
}
printStatusCode(404);
printStatusCode("404");
