//const precioOriginal = 120;
//const descuento = 18;//esto seria 15%

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento =(precio * porcentajePrecioConDescuento)/100;

    return precioConDescuento;
}

function cupon(nombre, descuento){
    this.nombre = nombre;
    this.descuento = descuento;
}

var nombre = ["SUPER10", "SUPER20", "SUPER30"]
var descuento = [10, 20, 30]

var cupones = [cupon]

var new_cupon = new cupon(nombre, descuento);

for (var i = 0 ; i < 3 ; i++){
    var new_cupon = new cupon(nombre[0+i], descuento[0+i]);
    cupones.push(new_cupon);
}

function CalcularPrecioConDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputCupon = document.getElementById("InputCupon");
    const cuponvalue = inputCupon.value;

    var cupondisc;

    if(cuponvalue == "SUPER10"){
        cupondisc = this.descuento[0];
    }
    else if(cuponvalue == "SUPER20"){
        cupondisc = this.descuento[1];
    }
    else if(cuponvalue == "SUPER30"){
        cupondisc = this.descuento[2];
    }
    else{
        cupondisc = 0;
    }

    var pricewithdiscount = calcularPrecioConDescuento(priceValue, cupondisc);

    const resultPrice = document.getElementById("ResultPrice");

    if(pricewithdiscount != priceValue){
        resultPrice.innerText = "El precio con descuento es: $" + pricewithdiscount;
    } 
    else{
        resultPrice.innerText = "Cupon no valido tu precio final es de: $" + pricewithdiscount;
    }
}

//console.log({ precioOriginal,         descuento,          porcentajePrecioConDescuento,           precioConDescuento});

