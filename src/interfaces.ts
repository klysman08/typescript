type state = "MG" | "SP" | "RJ";

interface City {
    name: string;
    address: {
        state: state;
        country: string;
    };
}

function showCity(city: City) {
    city.address.state = "SP";
}

/* propriedades opcionais */

interface Person {
    name: string;
    age?: number;
}

function showPerson(person: Person) {
    return person.age ? person.age : 0;
}

showPerson({ name: "John", age: 12 });

const klysman: Person = {
    name: "Klysman",
    age: 12,
};

console.log(klysman.age);
