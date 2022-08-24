interface Veiculo {
    marca: string;
    preco: number;

    acelerar: () => void /* método obrigatório */;
    frear?: () => void;
}

interface Moto extends Veiculo {
    rodas: number;
    capacete: boolean;

    empinar: () => void;
}

let motobike: Moto = {
    marca: "Honda",
    preco: 10000,
    rodas: 2,
    capacete: true,
    acelerar: () => console.log("Acelerando..."),
    empinar: () => console.log("Empinando..."),
    frear: () => console.log("Freando..."),
};

class CriarVeiculo implements Veiculo {
    marca: string;
    preco: number;

    constructor(marca: string, preco: number) {
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
