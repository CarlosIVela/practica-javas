window.addEventListener('load', function() {
    let params = new URLSearchParams(window.location.search);
    let characterId = params.get('id');

    if (characterId) {
        fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                document.querySelector('.character-name').textContent = data.name;
                document.querySelector('.character-status').textContent = `Status: ${data.status}`;
                document.querySelector('.character-species').textContent = `Especie: ${data.species}`;
                document.querySelector('.character-image').src = data.image;
                document.querySelector('.character-image').alt = data.name;
            })
            .catch(function(error) {
                console.log("Error: " + error);
            });
    } else {
        console.log("No se encontró el ID del personaje en la URL.");
    }
});
