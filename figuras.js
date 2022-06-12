// Codigo del cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado*4;
console.log("El perimentro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado*ladoCuadrado;
console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");

console.groupEnd();

// Codigo del triangulo 
console.group("triangulos");
const ladoTriangulo = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
console.log("Los lados del triangulo miden: " + ladoTriangulo + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm");
console.log("La altura del triangulo es: " + alturaTriangulo + "cm");

const perimetroTriangulo = ladoTriangulo + ladoTriangulo2 + baseTriangulo;
console.log("El perimentro del triangulo es: " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo)/2;
console.log("El area del triangulo es: " + areaTriangulo + "cm^2");

console.groupEnd();

// Codigo del circulo
console.group("Circulos");
const radioCirculo = 4;
console.log("el radio del circulo es " + radioCirculo + "cm");

const diametroCirculo = radioCirculo * 2;
console.log("el diametro del circulo es " + diametroCirculo + "cm");

const PI = Math.PI;
console.log("PI es: " + PI);

const perimentroCirculo = diametroCirculo * PI;
console.log("el perimetro del circulo es " + perimentroCirculo + "cm");

const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("el area del circulo es " + areaCirculo + "cm");

console.groupEnd();