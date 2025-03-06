function  contarParesImpares(array) {
let pares = 0;
let impares = 0;
for (let numero of array ) {
    if (numero % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}
return {pares, impares};
}
const numeros = [1,3,4,6,7,8,35,12,4];
const resultado = contarParesImpares(numeros);
console.log("pares:",resultado.pares,"impares:",resultado.impares);