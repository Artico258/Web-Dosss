const postData = () => {
    const newPost = {
        id: Math.floor(Math.random() * 1000),  // Genera un ID aleatorio
        titulo: "Nuevo Post",
        descripcion: "Nueva descripción",
        fecha: new Date().toISOString()
    };

    fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(newPost)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Error en la respuesta. Estado: ${response.status}`);
        }
        return response.json();
    })
    .then(data => showResult(data))
    .catch(error => showResult(error.message, true));
};
