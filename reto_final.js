// const ingresos_mensuales = 2700000;
// const gastos_mensuales = 1500000;
var ingresos = 0;

function ingresos_split1(){
    ingresos = 0.10;
    return ingresos
}
function ingresos_split2(){
    ingresos = 0.20;
}
function ingresos_split3(){
    ingresos = 0.30;
}
function ingresos_split4(){
    ingresos = 0.40;
}

function cap_deuda(ingresos_mensuales, gastos_mensuales){
    // const ingresos_mensuales_totales = ingresos_mensuales.reduce(function(initial_value = 0, final_value){
    //     return initial_value + final_value;
    // });
    // const gastos_mensuales_totales = gastos_mensuales.reduce(function(initial_value = 0, final_value){
    //     return initial_value + final_value;
    // })
    return (ingresos_mensuales - gastos_mensuales)*ingresos;
} 

function calcular_cap_deuda(){
    const input1 = document.getElementById("InputIngresos");
    const value1 = input1.value;

    const input2 = document.getElementById("InputGastos");
    const value2 = input2.value;

    const cuota = cap_deuda(value1, value2);

    const result = document.getElementById("result")

    if (cuota === 0){
        result.innerText = "selecciona el porcentaje de tu ingreso que quieres destinar a la deuda";  
    } else if (cuota > 0){
        result.innerText = "tu capacidad de endeudamiento mensual es " + cuota;
    } else {
        result.innerText = "lo sieto, no tienes capacidad de endeudamiento";
    }
}    