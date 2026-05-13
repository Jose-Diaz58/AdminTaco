import api from "../api/connectionAxios";

class MesasBD{
    async getMesas(){
        return await api.get('/mesa/mostrar')
    }
    async postMesas(data){
        return await api.post('/mesa/create',data)
    }
    async eliminarMesas(id){
        return await api.delete(`/mesa/eliminar/${id}`)
    }
    async modificarMesa(id,data){
        return await api.put(`/mesa/modificar/${id}`, data)
    }
}

export default new MesasBD();