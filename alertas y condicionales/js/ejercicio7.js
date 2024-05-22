// ejercicio a
let nacionalidad = prompt("Por favor, ingresa tu nacionalidad:");

let profesion = prompt("Por favor, ingresa tu profesión:");

let kmsRecorridos = prompt("Por favor, ingresa cuántos kilómetros caminas por día:");
kmsRecorridos = parseFloat(kmsRecorridos)

// ejercicio b
function filosofoHipster(nacionalidad, profesion, kmsRecorridos) {
    if ((nacionalidad === "Argentino" || nacionalidad === "argentino") && (profesion === "filosofo" || profesion === "músico") && kmsRecorridos >= 2) {
        return "Soy un filósofo hipster";
    } else {
        return "Aún no soy filósofo hipster";
    }
}
console.log(filosofoHipster(nacionalidad, profesion, kmsRecorridos));