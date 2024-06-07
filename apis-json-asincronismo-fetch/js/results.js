// results.js

// Función para obtener el valor de un parámetro de la URL
function getQueryParam(param) {
    let urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Capturar el elemento "search-results"
let searchResults = document.querySelector('.search-results');

// Obtener el valor de búsqueda desde la URL
let query = getQueryParam('q');

if (query) {
    // letruir la URL del endpoint de búsqueda de la API
    let apiUrl = `https://rickandmortyapi.com/api/character/?name=${query}`;

    // Hacer la solicitud a la API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.results && data.results.length > 0) {
                let resultsHtml = '';

                data.results.forEach(character => {
                    resultsHtml += `
                        <article>
                            <img src="${character.image}" alt="${character.name}">
                            <p>Name: ${character.name}</p>
                            <p>Status: ${character.status}</p>
                        </article>
                    `;
                });

                searchResults.innerHTML = resultsHtml;
            } else {
                searchResults.innerHTML = '<p>No se encontraron personajes.</p>';
            }
        })
        .catch(error => console.error('Error:', error));
} else {
    searchResults.innerHTML = '<p>Por favor, ingrese un nombre de personaje para buscar.</p>';
}
