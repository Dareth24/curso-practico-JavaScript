// Codigo del cuadrado
console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado){
  return lado*4;  
};
//console.log("El perimentro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
    return lado*lado;
}
//console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");

console.groupEnd();

// Codigo del triangulo 
console.group("triangulos");
//const ladoTriangulo = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;
//const alturaTriangulo = 5.5;
//console.log("Los lados del triangulo miden: " + ladoTriangulo + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm");
//console.log("La altura del triangulo es: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base){
    return (lado1 + lado2 + base);
}
//console.log("El perimentro del triangulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura){
    return (base*altura)/2;
}
//console.log("El area del triangulo es: " + areaTriangulo + "cm^2");

function alturaIsosceles(lado1, lado2, base){
    if(lado1 == lado2 && lado1 != base){
        return(Math.sqrt((lado1**2)-((base**2)/4)));
    }
    else{
        return "No es un triangulo isosceles";
    }
}

console.groupEnd();

// Codigo del circulo
console.group("Circulos");
//const radioCirculo = 4;
//console.log("el radio del circulo es " + radioCirculo + "cm");

function diametroCirculo(radio){
    return radio*2;
}
//console.log("el diametro del circulo es " + diametroCirculo + "cm");

const PI = Math.PI;
//console.log("PI es: " + PI);

function perimentroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
} 
//console.log("el perimetro del circulo es " + perimentroCirculo + "cm");

function areaCirculo(radio){
    return (radio*radio)*PI;
}
//console.log("el area del circulo es " + areaCirculo + "cm");

console.groupEnd();

//aqui interactuamos con el HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);        alert(area);
}

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("Input1Triangulo");
    const value1 = input1.value;

    const input2 = document.getElementById("Input2Triangulo");
    const value2 = input2.value;

    const input3 = document.getElementById("Input3Triangulo");
    const value3 = input3.value;

    const perimentro = perimetroTriangulo(Number(value1), Number(value2), Number(value3));
    alert (perimentro);
}

function calcularAreaTriangulo(){
    const input1 = document.getElementById("Input3Triangulo");
    const value1 = input1.value;

    const input2 = document.getElementById("Input4Triangulo");
    const value2 = input2.value;

    const Area = areaTriangulo(value1, value2);
    alert (Area);
}

function calcularAlturaTriangulo1(){
    const input1 = document.getElementById("Input1Triangulo1");
    const value1 = input1.value;

    const input2 = document.getElementById("Input2Triangulo1");
    const value2 = input2.value;

    const input3 = document.getElementById("Input3Triangulo1");
    const value3 = input3.value;

    const altura = alturaIsosceles(value1, value2, value3);
    alert (altura);
}

function calcularDiametroCirculo(){
    const input = document.getElementById("InputCirculo");    
    const value = input.value;

    const diametro = diametroCirculo(value);
    alert (diametro);
}

function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetro = perimentroCirculo(value);
    alert (perimetro);
}

function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert (area);
}