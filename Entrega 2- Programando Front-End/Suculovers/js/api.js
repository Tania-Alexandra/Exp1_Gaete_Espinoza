
// Configura la clave de API
const API_KEY = 'sk-noXf678935dc7979c8252';
const BASE_URL = 'https://perenual.com/api/species-list?key=';

// Función para obtener los datos de la API
async function fetchPlants(query = '') {
    try {
        const response = await fetch(`${BASE_URL}${API_KEY}&q=${query}`); //Arma la consulta y se conecta a la api con la clave 
        if (!response.ok) throw new Error(`Error: ${response.statusText}`);
        const data = await response.json();
        displayPlants(data.data); // Invoca la funcion displayplants y le envia la respuesta "data" obtenida de la api
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Función para mostrar las plantas en las cards de bootstrap en el html
function displayPlants(plants) {
    const container = document.getElementById('plantCards');
    container.innerHTML = ''; // Limpiar contenido anterior
    if (!plants || plants.length === 0) {
        container.innerHTML = '<p class="text-center">No se encontraron resultados.</p>';
        return;
    }
    // Itera la data obtenida de la api y la muestra en las cards de bootstrap en el html
    plants.forEach(plant => {
        const { common_name, scientific_name, default_image } = plant;
        const imageUrl = default_image ? default_image.medium_url : 'https://picsum.photos/id/106/200/300'; // Si no encuentra imagen rellena con esta

        const card = `
           <div class="col-md-4">
            <div class="card mb-4">
              <img src="${imageUrl}" class="card-img-top" alt="${common_name || 'Plant'}">
              <div class="card-body">
                <h5 class="card-title">${common_name || 'Unknown Name'}</h5>
                <p class="card-text">
                  <strong>Scientific Name:</strong> ${scientific_name.join(', ')}
                </p>
              </div>
            </div>
          </div>
        `;
        container.innerHTML += card;
    });
}

// Llamar a la API al cargar la página
window.onload = () => fetchPlants();

// Buscar plantas por nombre (busca cualquier coincidencia con la palabra ingresada)
function searchPlants() {
    const query = document.getElementById('searchInput').value.trim();
    fetchPlants(query);
}