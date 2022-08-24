let message: string = "Hello World";

console.log(message.toUpperCase());

let total: number = 12;
total = 12.5;

let isDone: boolean = false;

let stock: any = 89; /* permite associar qualquer tipo na variável */

function showInformation(name: string = "klysman"): void {
    /* indica que uma função recebe com parâmetro uma string e que a função retorna void */
    console.log(`Hello ${name}`);
}
