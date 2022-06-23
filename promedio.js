//const lista1 = [100, 200, 300, 500];

function calcularMediaAritmetica(lista){
    // let sumaLista = 0; //esta variable let permite cambiar su valor en el futuro
    // for (let i = 0; i <lista.length; i++){
    //     sumaLista1 = sumaLista1 + lista[i];
    // }
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promediolista = sumaLista/lista.length;
    return promediolista;
}