window.addEventListener('load', function() {

// ej1
    let titulo = document.getElementById('titulo');
// ej 2
    let saludo = document.getElementById('saludo');
// ej 4
    let span = document.querySelector('.bienvenida span');
// ej 5
    let bienvenidaSection = document.querySelector('.bienvenida');
    let personajesSection = document.querySelector('.personajes');
// ej 8
    let boton = document.querySelector('.boton');

    titulo.addEventListener('mouseover', function() {
        let nombre = prompt("¿CÓMO TE LLAMÁS?");
        console.log("Nombre ingresado: ", nombre);
        if (nombre && nombre.trim() !== ""){
            saludo.textContent = `BIENVENID@ ${nombre.toUpperCase()}`;
        } else {
            saludo.textContent = "BIENVENID@";
        }
  // ej 3  
        saludo.style.textTransform = 'uppercase';
  // ej 4
        titulo.style.display = 'none';
        span.style.display = 'inline';

    });
    // ej 5
    span.addEventListener('click', function() {
        bienvenidaSection.style.display = 'none';
        personajesSection.style.display = 'flex';
    });
    
    // ej 6
let bart = document.getElementById('bart');
let lisa = document.getElementById('lisa');
let homero = document.getElementById('homero');
let marge = document.getElementById('marge');
let maggie = document.getElementById('maggie');
let milhouse = document.getElementById('milhouse');
let burns = document.getElementById('burns');
let bobPatinio = document.getElementById('bobPatinio');
let flanders = document.getElementById('flanders');
let duffman = document.getElementById('duffman');
let gorgory = document.getElementById('gorgory');
let nelson = document.getElementById('nelson');

bart.addEventListener('click', function() {
    bart.classList.toggle('personaje-seleccionado');
});

lisa.addEventListener('dblclick', function() {
    lisa.classList.toggle('personaje-seleccionado');
});

homero.addEventListener('click', function() {
    homero.classList.toggle('personaje-seleccionado');
});

marge.addEventListener('mouseenter', function() {
    marge.classList.toggle('personaje-seleccionado');
});

maggie.addEventListener('mouseleave', function() {
    maggie.classList.toggle('personaje-seleccionado');
});

milhouse.addEventListener('click', function() {
    milhouse.classList.toggle('personaje-seleccionado');
});

burns.addEventListener('mouseenter', function() {
    burns.classList.toggle('personaje-seleccionado');
});

bobPatinio.addEventListener('dblclick', function() {
    bobPatinio.classList.toggle('personaje-seleccionado');
});

flanders.addEventListener('mouseenter', function() {
    flanders.classList.toggle('personaje-seleccionado');
});

duffman.addEventListener('dblclick', function() {
    duffman.classList.toggle('personaje-seleccionado');
});

gorgory.addEventListener('mouseenter', function() {
    gorgory.classList.toggle('personaje-seleccionado');
});

nelson.addEventListener('click', function() {
    nelson.classList.toggle('personaje-seleccionado');
});

// ej 7
function alternarSeleccion(personaje) {
    if (personaje.classList.contains('personaje-seleccionado')) {
        personaje.classList.remove('personaje-seleccionado');
    } else {
        personaje.classList.add('personaje-seleccionado');
    }
}

// ej 8
boton.addEventListener('click', function() {
    let personajesSeleccionados = document.querySelectorAll('.personaje-seleccionado');

    console.log("Personajes seleccionados:");
    personajesSeleccionados.forEach(function(personaje) {
        console.log(personaje);
    });
});

});




