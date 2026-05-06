import api from "../api/connectionAxios";

class DatosBD {
    async getDatos () {
        return await api.get ('/producto/buscar')
    }

    async postDatos (data) {
        return await api.post ('/producto/create', data)
    }

    async eliminarProducto (id) {
        return await api.delete (`/producto/eliminar/${id}`)
    }

    async modificarDatos (id, data) {
        return await api.put (`/producto/actualizar/${id}`, data)
    }
}

export default new DatosBD();