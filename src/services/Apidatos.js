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

    async postVenta (datos) {
        return await api.post('/venta/create', datos);
    }

    async getVentasPorFecha (fecha) {
        return await api.get(`/venta/buscar?fecha=${fecha}`);
    }

    async eliminarVentasPorFecha (fecha) {
        return await api.delete(`/venta/eliminarPorFecha/${fecha}`);
    }

    async loginUser(credenciales) {
        return await api.post('/usuario/login', credenciales); 
    }

    async registerUser(datos) {
        return await api.post('/usuario/registro', datos); 
    }
}

export default new DatosBD();