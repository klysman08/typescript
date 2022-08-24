let items: Array<number> = [
    1, 2, 3, 4, 5,
]; /* indica que a variável items é um array de números */
let items2: number[] = [
    1, 2, 3, 4, 5,
]; /* indica que a variável items2 é um array de números */

console.log(items);

/* tuble */
let items3: [number, string] = [
    2,
    "klysman",
]; /* indica que a variável items3 é um array de números e strings */

/* enum */
enum Colors {
    white = "#ffffff",
    black = "#000000",
}

let white: Colors = Colors.white;
console.log(white);
