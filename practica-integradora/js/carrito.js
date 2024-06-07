let recuperoStorage = localStorage.getItem("cartItem")

let lista = document.querySelector(".lista")
    // pregunto si hay algo en el storage
    if(recuperoStorage != null){
         // parseo
         let mensaje = "Tu Carrito está vacio"
         let empty = document.querySelector(".empty")
         empty.innertext = mensaje
         
    } else{
        carrito = [];
        carrito = JSON.parse(recuperoStorage);
        for (let i = 0; i < carrito.length; i++) {
            const id = array[i];
            const url = `https://rickandmortyapi.com/api/character/${id}`

            // fetch
            fetch(url)
            .then(function(response){
                 return response.json();
            })
            .then(function(data){
                console.log(data);
                elementosCarrito +- `<article>
                <img src=${info[i].image}>
                <p>Nombre: ${info[i].name}</p>
                <p>Status: ${info[i].status}</p>
                <a href="detalle.html?id=${info[i].id}">Ver más</a>
            </article>`
            lista.innerHTML = 

            })  
            .catch(function(e){
                console.log(e)
            })
              

            
        }

    }