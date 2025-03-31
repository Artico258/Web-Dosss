const putData = async () => {
    const id = 1;  // Asegúrate de usar un ID válido

    try {
        const response = await fetch(`${API_URL}/${id}`);
        if (!response.ok) throw new Error(`El post con ID ${id} no existe.`);

        const updatedPost = {
            titulo: "Actualizado",
            descripcion: "Post actualizado",
            fecha: new Date().toISOString()
        };

        const putResponse = await fetch(`${API_URL}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(updatedPost)
        });

        if (!putResponse.ok) throw new Error(`Error al actualizar. Estado: ${putResponse.status}`);

        const data = await putResponse.json();
        showResult(data);
    } catch (error) {
        showResult(error.message, true);
    }
};
