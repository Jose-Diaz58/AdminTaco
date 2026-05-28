import Axios from "axios";
import Swal from "sweetalert2";

const api = Axios.create({
    baseURL:'https://admintaco.onrender.com/api'
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('adminToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response) {
            if (error.response.status === 401 || error.response.status === 403) {
                localStorage.removeItem('adminToken');

                Swal.fire({
                    icon: 'warning',
                    title: 'Sesión expirada',
                    text: 'Tu sesión ha caducado por seguridad. Por favor, vuelve a iniciar sesión.',
                    confirmButtonColor: '#ea580c',
                    allowOutsideClick: false
                }).then(() => {
                    window.location.href = "/";
                });
            }
        }

        return Promise.reject(error);
    }
);

export default api;