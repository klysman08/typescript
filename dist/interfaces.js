"use strict";
function showCity(city) {
    city.address.state = "SP";
}
function showPerson(person) {
    return person.age ? person.age : 0;
}
showPerson({ name: "John", age: 12 });
const klysman = {
    name: "Klysman",
    age: 12,
};
console.log(klysman.age);
