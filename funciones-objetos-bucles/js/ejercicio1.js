function rectangulo (base,altura){
    return base * altura;
}
console.log(rectangulo(5, 10));

function triangulo (base,altura){
    return base * altura /2;
}
console.log(triangulo(5, 10));

function largoDelArray(array) {
    return array.length;
}

let miArray = [1, 2, 3, 4, 5];
console.log(largoDelArray(miArray)); 

function cantidadDeLetras(palabra) {
    return palabra.length;
}

let mipalabra = "Gallardo";
console.log(cantidadDeLetras(mipalabra)); 

function dolarHoy(precioEnPesos) {
    let tasaDeCambio = 100; 
    let precioEnDolares = precioEnPesos / tasaDeCambio;
    return precioEnDolares;
}

let precioEnPesos = 5000;
let precioEnDolares = dolarHoy(precioEnPesos);
console.log(precioEnDolares.toFixed(2));

function precioFinal(precio) {
    let iva = 0.21; 
    let precioConIva = precio + (precio * iva);
    return precioConIva;
}

let precio = 1000;
let precioConIva = precioFinal(precio);
console.log(precioConIva.toFixed(2));

function mitad(numero) {
    return numero / 2;
}

let numero = 10;
let resultado = mitad(numero);
console.log(resultado);

function diaSegunNumero(dias, numero) {
    function largoDelArray(array) {
        return array.length;
    }

    let largo = largoDelArray(dias);

    if (numero >= 1 && numero <= largo) {
        return dias[numero - 1];
    } else {
        return "Número fuera de rango";
    }
}

let diasDeLaSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
let numeroDeDia = 3; 
let dia = diaSegunNumero(diasDeLaSemana, numeroDeDia);
console.log(dia); 


