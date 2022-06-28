//Helpers
function espar(number){
    return (number % 2 === 0);//usamos el modulo
}

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promediolista = sumaLista/lista.length;
    return promediolista;
}

//calculadora de medianas
function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

    if (espar(lista.length)){
        const personMiddle1 = lista[mitad - 1];
        const personMiddle2 = lista[mitad];
        const mediana = calcularMediaAritmetica([personMiddle1,personMiddle2]);
        return mediana;
    } else {
        const personMiddle = lista[mitad];
        return personMiddle;
    }
}

//mediana general
const salariosCol = colombia.map(
    function(person){
        return person.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function (salaryA, salaryB){
        return salaryA - salaryB;
    }
);

const medianaGeneralCol = medianaSalarios(salariosColSorted);

//mediana top 10%
const spliceStart = (salariosColSorted.length * 90)/100;
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(spliceStart, spliceCount);

const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log({medianaGeneralCol, medianaTop10Col});
