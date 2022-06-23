function calcularmediana(lista){

    lista.sort(function(a, b){return b - a});//usamos el metodo sort mas una funcion de comparacion para ordenar nuestro array

    const mitadlista = parseInt(lista.length/2); 
    function espar(numero){
        if (numero % 2 === 0){//usamos el modulo para verificar si nuestro numero es par
            return true;
        } else{
            return false;
        }
    }

    let mediana;

    if (espar(lista.length)){
        const elemento1 = lista[mitadlista -1];
        const elemento2 = lista[mitadlista];
        
        mediana = (elemento1+elemento2)/2;
    }
    else {
        mediana = lista[mitadlista];
    }

    return mediana;
}

// const lista = [
//     100, 200, 500, 40,
// ];


