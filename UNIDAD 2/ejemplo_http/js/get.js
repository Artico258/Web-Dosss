const API_URL = 'http://localhost:3000/posts';

const getData = () => {
    fetch(API_URL)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error en la petición GET. Estado: ${response.status}`);
            }
            return response.json();
        })
        .then(data => showResult(data))
        .catch(error => showResult(error.message, true));
};
