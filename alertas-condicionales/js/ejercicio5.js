// Interactuando con el usuario 1
let nombre = prompt("Por favor, ingresa tu nombre:");

console.log(nombre);

// Interactuando con el usuario 2
let edad = prompt("Por favor, ingresa tu edad:");

console.log(edad);

// Interactuando con el usuario 3
let fanDeportes = confirm("¿Te gustan los deportes?");

console.log(fanDeportes);

// Interactuando con el usuario 4
alert(`Muchas gracias ${nombre}`);

// Interactuando con el usuario 5
let usuario = {
    nombre: nombre,
    edad: edad,
    fanDeportes: fanDeportes,
    deportistaProfesional: function() {
        if (this.fanDeportes) {
            return "Sí, soy fan de los deportes.";
        } else {
            return "No soy tan fan aún de los deportes.";
        }
    }
}
console.log(usuario.deportistaProfesional())
