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
    return lado1 + lado2 + base;
}
//console.log("El perimentro del triangulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura){
    return (base*altura)/2;
}
//console.log("El area del triangulo es: " + areaTriangulo + "cm^2");

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