"use strict";
let items = [
    1, 2, 3, 4, 5,
]; /* indica que a variável items é um array de números */
let items2 = [
    1, 2, 3, 4, 5,
]; /* indica que a variável items2 é um array de números */
console.log(items);
/* tuble */
let items3 = [
    2,
    "klysman",
]; /* indica que a variável items3 é um array de números e strings */
/* enum */
var Colors;
(function (Colors) {
    Colors["white"] = "#ffffff";
    Colors["black"] = "#000000";
})(Colors || (Colors = {}));
let white = Colors.white;
console.log(white);
