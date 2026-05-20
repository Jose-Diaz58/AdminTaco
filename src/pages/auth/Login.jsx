import { useState, useEffect } from 'react';
import { useNavigate } from "react-router";
import Swal from "sweetalert2"; 
import DatosBD from "../../services/Apidatos";
import { User, Lock } from "lucide-react"; 

export function Login() {
  const navigate = useNavigate();

  const [registro, setRegistro] = useState(false);
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [recordarme, setRecordarme] = useState(false);

  useEffect(() => {
    const correoGuardado = localStorage.getItem('correoRecordado');
    if (correoGuardado) {
      setEmail(correoGuardado);
      setRecordarme(true);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    
    // Validación básica antes de enviar
    if (!email || !password) {
      return Swal.fire("Campos vacíos", "Por favor ingresa tu usuario y contraseña", "warning");
    }

    try {
      if (registro) {
        await DatosBD.registerUser({ nombre, correo: email, contraseña: password });
        Swal.fire("¡Éxito!", "Cuenta creada. Ahora inicia sesión.", "success");
        setRegistro(false); 
        setPassword(''); 
      } else {
        const respuesta = await DatosBD.loginUser({ correo: email, contraseña: password });
        localStorage.setItem('adminToken', respuesta.data.token);
        
        if (recordarme) {
          localStorage.setItem('correoRecordado', email);
        } else {
          localStorage.removeItem('correoRecordado');
        }
        
        Swal.fire({
          icon: 'success',
          title: '¡Bienvenido!',
          text: 'Acceso concedido con éxito',
          timer: 1500,
          showConfirmButton: false
        });

        // Redirigimos al inicio de la app cliente
        navigate('/Inicio'); 
      }
    } catch (error) {
      console.error("Error en autenticación", error);
      Swal.fire("Error de Acceso", error.response?.data?.message || "Usuario o contraseña incorrectos", "error");
    }
  };

  return (
    <div className="min-h-screen bg-orange-50 flex flex-col items-center justify-center p-4">
      <div className="flex flex-col items-center mb-8">
        <div className="bg-orange-600 p-3 rounded-2xl mb-3 shadow-lg">
          <span className='text-3xl md:text-4xl'>🌮</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-800">AdminTaco</h1>
        <p className="text-gray-500 text-sm">Punto de Venta Inteligente</p>
      </div>

      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-8 text-center">
          {registro ? "Crear Cuenta" : "Iniciar Sesión"}
        </h2>
        
        <form onSubmit={handleLogin} className="space-y-6">
          {registro && (
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Nombre Completo</label>
              <div className="flex items-center border border-gray-200 rounded-xl px-4 py-3 bg-gray-50 focus-within:bg-white focus-within:border-orange-500 transition-all">
                <User className="text-gray-400 w-5 h-5" />
                <input 
                  type="text" 
                  className="w-full bg-transparent ml-3 outline-none text-gray-700" 
                  placeholder="Tu nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">Correo / Usuario</label>
            <div className="flex items-center border border-gray-200 rounded-xl px-4 py-3 bg-gray-50 focus-within:bg-white focus-within:border-orange-500 transition-all">
              <User className="text-gray-400 w-5 h-5" />
              {/* CORRECCIÓN: Se añadieron value y onChange */}
              <input 
                type="text" 
                className="w-full bg-transparent ml-3 outline-none text-gray-700" 
                placeholder="Ingresa tu correo"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">Contraseña</label>
            <div className="flex items-center border border-gray-200 rounded-xl px-4 py-3 bg-gray-50 focus-within:bg-white focus-within:border-orange-500 transition-all">
              <Lock className="text-gray-400 w-5 h-5" />
              {/* CORRECCIÓN: Se añadieron value y onChange */}
              <input 
                type="password" 
                className="w-full bg-transparent ml-3 outline-none text-gray-700" 
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {!registro && (
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center text-gray-500 cursor-pointer">
                <input 
                  type="checkbox" 
                  className="mr-2 rounded border-gray-300 text-orange-600 focus:ring-orange-500" 
                  checked={recordarme}
                  onChange={(e) => setRecordarme(e.target.checked)}
                />
                Recordarme
              </label>
              <a href="#" className="text-orange-600 hover:underline font-medium">¿Olvidaste tu contraseña?</a>
            </div>
          )}

          <button 
            type="submit"
            className="w-full bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-orange-700 hover:shadow-orange-200 transition-all transform active:scale-95"
          >
            {registro ? "REGISTRARME" : "ENTRAR"}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-500">
          {registro ? "¿Ya tienes cuenta? " : "¿No tienes cuenta aún? "}
          <span 
            className="text-orange-600 font-bold cursor-pointer hover:underline"
            onClick={() => setRegistro(!registro)}
          >
            {registro ? "Inicia Sesión" : "Regístrate aquí"}
          </span>
        </div>
      </div>

      <div className="mt-10 text-center space-y-1">
        <p className="text-gray-400 text-xs">AdminTaco POS © 2026 - Todos los derechos reservados</p>
      </div>
    </div>
  );
}