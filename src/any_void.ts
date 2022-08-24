let stock: any = 89; /* permite associar qualquer tipo na variável */

function showInformation(name: string = "klysman"): void {
    /* indica que uma função recebe com parâmetro uma string e que a função retorna void */
    console.log(`Hello ${name}`);
}
