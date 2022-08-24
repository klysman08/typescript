"use strict";
let motobike = {
    marca: "Honda",
    preco: 10000,
    rodas: 2,
    capacete: true,
    acelerar: () => console.log("Acelerando..."),
    empinar: () => console.log("Empinando..."),
    frear: () => console.log("Freando..."),
};
class CriarVeiculo {
    constructor(marca, preco) {
        this.marca = marca;
        this.preco = preco;
    }
    acelerar() {
        console.log("Acelerando...");
    }
    frear() {
        console.log("Freando..."); /* método opcional */
    }
}
