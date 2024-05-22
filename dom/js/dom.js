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
document.addEventListener('DOMContentLoaded', function() {
    
    let leGustaProgramacion = confirm("¿Te gusta la programación?");

    let divBackgroundImg = document.querySelector('.background-img');

    let img = document.createElement('img');

    if (leGustaProgramacion) {
        img.src = 'img/programmer.jpeg';
    } else {
        img.src = 'img/gatito.jpeg';
    }
    divBackgroundImg.appendChild(img);
});
// ej g
document.addEventListener('DOMContentLoaded', function() {
    let nuevaImagenURL = prompt("Por favor, ingresa la URL de la nueva imagen:");

    let imgAvatar = document.querySelector('img.avatar');

    if (imgAvatar && nuevaImagenURL) {
        let timestamp = new Date().getTime();
        imgAvatar.src = nuevaImagenURL + "juanfer.jpeg" + timestamp;
    }
});
// ej h
document.addEventListener('DOMContentLoaded', function() {
    let pelicula = {
        nombre: "",
        director: "",
        duracion: 0,
        actor: ""
    };

    pelicula.nombre = prompt("Ingresa el nombre de tu película favorita:");
    pelicula.director = prompt("Ingresa el nombre del director de la película:");
    pelicula.duracion = parseFloat(prompt("Ingresa la duración de la película en minutos:"));
    pelicula.actor = prompt("Ingresa el nombre del actor principal de la película:");

    if (pelicula.nombre && pelicula.director && !isNaN(pelicula.duracion) && pelicula.actor) {
        alert("Información de tu película favorita:\n" +
              "Nombre: " + pelicula.nombre + "\n" +
              "Director: " + pelicula.director + "\n" +
              "Duración: " + pelicula.duracion + " minutos\n" +
              "Actor principal: " + pelicula.actor);
    } else {
        alert("Algunos datos no se ingresaron correctamente. Por favor, intenta de nuevo.");
    }
});
// ej i

// ej j
document.addEventListener('DOMContentLoaded', function() {
    let pelicula = {
        nombre: "",
        director: "",
        duracion: 0,
        actor: ""
    };

    pelicula.nombre = prompt("Ingresa el nombre de tu película favorita:");
    pelicula.director = prompt("Ingresa el nombre del director de la película:");
    pelicula.duracion = parseFloat(prompt("Ingresa la duración de la película en minutos:"));
    pelicula.actor = prompt("Ingresa el nombre del actor principal de la película:");

    if (pelicula.nombre && pelicula.director && !isNaN(pelicula.duracion) && pelicula.actor) {
        let ulPelicula = document.getElementById("pelicula");

        ulPelicula.innerHTML = 
            "<li><strong>Nombre:</strong> " + pelicula.nombre + "</li>" +
            "<li><strong>Director:</strong> " + pelicula.director + "</li>" +
            "<li><strong>Duración:</strong> " + pelicula.duracion + " minutos</li>" +
            "<li><strong>Actor principal:</strong> " + pelicula.actor + "</li>";
            
        ulPelicula.style.display = "block";
    } else {
        alert("Algunos datos no se ingresaron correctamente. Por favor, intenta de nuevo.");
    }
});





