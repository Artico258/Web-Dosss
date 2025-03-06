function invertirNumero(numero ) {
    let invertido = 0;
    while (numero > 0 ) {
        invertido = invertido * 10 + (numero % 10);
        numero = (numero / 10 ) | 0;
    }
    return invertido;
}
const numero = 12345;
console.log ("numero invertido:",invertirNumero(numero));