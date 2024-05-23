// ej a
alert("Bienvenidos a mi sitio!");

// ej b
let confirmacion = confirm("¿Está seguro de querer avanzar?");
let saludoElement = document.querySelector('.saludo');
if (confirmacion) {
    saludoElement.textContent = "Qué alegría que quieras continuar tu visita.";
} else {
    saludoElement.textContent = "Lamentamos que no quieras continuar tu visita.";
    // opcion para que no siga el flujo del ejercicio. No se ejecutan mas ejs
    throw new Error("El usuario no quiere continuar.");
}
// ej c
let nombreUsuario = prompt("Por favor, ingrese su nombre:")
// ej d
let bienvenidaElement = document.getElementById('bienvenida')
bienvenidaElement.textContent = "Bienvenido " + nombreUsuario;
// ej e
let edad = prompt("¿Cuántos años tenés?");
edad = parseInt(edad);
let containerGeneral = document.querySelector('.container-general');
let accesoDenegado = document.getElementById('accesoDenegado');
if (edad > 17){
    containerGeneral.style.display = "block";

} else {
    containerGeneral.style.display = "none";
    accesoDenegado.style.display = "block";
}
// ej f
let gustaProgramacion = confirm("¿Te gusta la programación?");
let backgroundImg = document.querySelector('.background-img');
if (gustaProgramacion) {
    backgroundImg.style.backgroundImage = "url'dom/img/programmer.jpeg'"; 
} else {
    backgroundImg.style.backgroundImage = "url('dom/img/gatito.jpeg')";
}
// ej g
document.addEventListener('DOMContentLoaded', function() {
    let imgAvatar = document.querySelector('img.avatar');

    let nuevaImagenURL = prompt("Por favor, ingresa la URL de la nueva imagen:", "https://www.eldiariocba.com.ar/u/fotografias/fotosnoticias/2023/7/30/109102.jpg");

    if (nuevaImagenURL) {
        
        imgAvatar.src = nuevaImagenURL;
    } else {
        alert("No se ingresó una URL válida. Por favor, intenta de nuevo.");
    }
});

// ej h + i
let pelicula = {
    nombre: "",
    director: "",
    duracion: 0,
    actor: ""
};

pelicula.nombre = prompt("Ingrese el nombre de su película favorita:");
pelicula.director = prompt("Ingrese el nombre del director de la película:");
pelicula.duracion = Number(prompt("Ingrese la duración de la película en minutos:"));
pelicula.actor = prompt("Ingrese el nombre del actor principal de la película:");

console.log(`Información de la película favorita del usuario:\nNombre: ${pelicula.nombre}\nDirector: ${pelicula.director}\nDuración: ${pelicula.duracion} minutos\nActor Principal: ${pelicula.actor}`);

// ej j
document.getElementById("nombre").textContent = `Nombre: ${pelicula.nombre}`;
document.getElementById("director").textContent = `Director: ${pelicula.director}`;
document.getElementById("duracion").textContent = `Duración: ${pelicula.duracion} minutos`;
document.getElementById("actor").textContent = `Actor Principal: ${pelicula.actor}`;

// ej k
document.querySelector("#pelicula ul").style.display = "block";



