let misDatos = {
    nombre: "Carlos",
    apellido: "Vela",
    dni: "44360541",
    comidasFavoritas: ["Asado", "Sushi", "Tacos"]
};
console.log(misDatos);

let misDatos1 = {
    nombre: "Carlos",
    apellido: "Vela",
    dni: "44360541",
    comidasFavoritas: ["Asado", "Sushi", "Tacos"],
    saludar: function (){
        return `Hola, mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad} años. Mi primer comida favorita es ${this.comidasFavoritas[0]}.`;
    }
};
console.log(misDatos1.saludar());

let auto = {
    marca: "Toyota",
    modelo: "Corolla",
    anio: 2022,
    color: "Negro",
    posicion: 0,
    avanzar: function(n) {
        if (n > 0) {
            this.posicion += n;
        }
    },
    retroceder: function(n) {
        if (n > 0) {
            this.posicion -= n;
        }
    }
};

auto.avanzar(10);
auto.retroceder(5);
auto.avanzar(3);
console.log(auto.posicion);

let nuevoAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    anio: 2022,
    color: "Negro",
    posicion: 0,
    moverse: function(n) {
        this.posicion += n;
    }
};

nuevoAuto.moverse(10);
nuevoAuto.moverse(-5);
nuevoAuto.moverse(3);

console.log(nuevoAuto.posicion);

let ironMan = {
    nombre: "Iron Man",
    equipo: "Avengers",
    poderes: ["Volar", "Lanzar misiles", "Disparar láser"],
    energia: 100,
    getPoder: function(numero) {
        if (numero >= 0 && numero < this.poderes.length) {
            this.energia -= 10;
            return `Poder Elegido de ${this.nombre}: ${this.poderes[numero]}. Energía restante: ${this.energia}.`;
        } else {
            return "Número de poder inválido.";
        }
    }
};

let Hulk = {
    nombre: "Hulk",
    equipo: "Avengers",
    poderes: ["Aplastar", "Gritar", "Golpear"],
    energia: 100,
    getPoder: function(numero) {
        if (numero >= 0 && numero < this.poderes.length) {
            this.energia -= 10;
            return `Poder Elegido de ${this.nombre}: ${this.poderes[numero]}. Energía restante: ${this.energia}.`;
        } else {
            return "Número de poder inválido.";
        }
    }
};


function numeroAleatorio() {
    return Math.floor(Math.random() * 3);
}

for (let i = 0; i < 3; i++) {
    let poderIronMan = ironMan.getPoder(numeroAleatorio());
    let poderHulk = Hulk.getPoder(numeroAleatorio());

    console.log(poderIronMan);
    console.log(poderHulk);
}

