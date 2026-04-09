import api from "../api/connectionAxios";

class DatosBD {
    async getDatos () {
        return await api.get ('/producto/buscar')
    }

    async postDatos (data) {
        return await api.post ('/producto/create', data)
    }
}

export default new DatosBD();