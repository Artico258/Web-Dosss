const deleteData = async () => {
    const id = 1;
    try {
        // Verifica si el post existe
        const response = await fetch(`${API_URL}/${id}`);
        if (!response.ok) throw new Error(`El post con ID ${id} no existe.`);
        
        // Si existe, procede a eliminarlo
        const deleteResponse = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
        if (!deleteResponse.ok) throw new Error(`Error al eliminar. Estado: ${deleteResponse.status}`);
        
        showResult({ message: `El post con ID ${id} fue eliminado`, status: deleteResponse.status });
    } catch (error) {
        showResult(error.message, true);
    }
};
