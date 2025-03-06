function encontrarPalabraMasLarga(frase) {
    let PalabraMasLarga = "";
    let palabraActual = "";

    for (let caracter of frase + " "){
        if (caracter !==" "){
            palabraActual += caracter;
        } else{
            if(palabraActual.length > PalabraMasLarga.length){
                PalabraMasLarga = palabraActual;    
            }
            palabraActual ="";
        }
    }
    return PalabraMasLarga;
}
const frase = "Viva la vida buenarda";
const PalabraMasLarga = encontrarPalabraMasLarga(frase);
console.log("la palabra mas larga es:",PalabraMasLarga);