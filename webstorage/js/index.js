// Ejercicio 1 
let miNombre = "TuNombre";
localStorage.setItem('userName', miNombre);

console.log(localStorage);

let recuperoStorage = localStorage.getItem('userName');
console.log(recuperoStorage);

localStorage.clear();

// Ejercicio 2 
let peliculasFavoritas = ["El Señor de los Anillos", "Matrix", "Inception"];
localStorage.setItem('peliculaFavorita', peliculasFavoritas[1]);

console.log(localStorage);

recuperoStorage = localStorage.getItem('peliculaFavorita');
console.log(recuperoStorage);

localStorage.clear();

// Ejercicio 3 
let peliculasJson = JSON.stringify(peliculasFavoritas);
localStorage.setItem('favoritos', peliculasJson);

console.log(localStorage);

recuperoStorage = localStorage.getItem('favoritos');
console.log(recuperoStorage);

// Ejercicio 4 
let recuperoArray = JSON.parse(localStorage.getItem('favoritos'));
recuperoArray.push("Interestelar");
let nuevoFavoritosJson = JSON.stringify(recuperoArray);
localStorage.setItem('favoritos', nuevoFavoritosJson);

console.log(localStorage);

// Ejercicio 5 
let got = [
    {
        nombre: "Jon",
        apellido: "Snow",
        edad: 23,
        ciudad: "Winterfell"
    },
    {
        nombre: "Daenerys",
        apellido: "Targaryen",
        edad: 19
    },
    {
        nombre: "Arya",
        apellido: "Stark",
        edad: 12,
        ciudad: "Winterfell"
    },
    {
        nombre: "Tyrion",
        apellido: "Lannister",
        edad: 32,
        ciudad: "Casterly Rock"
    }
];

let winterIsComing = [];
for (let i = 0; i < got.length; i++) {
    if (got[i].ciudad === "Winterfell") {
        winterIsComing.push(got[i]);
    }
}

let winterfellJson = JSON.stringify(winterIsComing);
localStorage.setItem('winterfell', winterfellJson);

console.log(localStorage);

