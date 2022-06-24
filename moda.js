function calcularmoda(lista){
    const listaCount = {};

    lista.map(
        function(elemento){
            if (listaCount[elemento]){
                listaCount[elemento] += 1;
            } else{
                listaCount[elemento] = 1; 
            }
        }
    );
    
    const listaArray = Object.entries//convierte un objeto en un array;
    (listaCount).sort(function(elemento1, elemento2){return elemento1[1] - elemento2[1]});//se pone [1] porque es la segunda posicion de los array, y respresenta las veces que se repite cada numero
    
    const moda = listaArray[listaArray.length -1];

    return moda;
}

// const lista = [1, 2, 3, 1, 2, 3, 4, 2, 2, 2, 1];

