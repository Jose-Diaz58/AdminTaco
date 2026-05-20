import { useState, useEffect } from 'react';
import { useNavigate } from "react-router";
import Swal from "sweetalert2"; 
import DatosBD from "../../services/Apidatos";
import { LoginHeader, LoginForm, LoginFooter } from "../../components/componentesLogin";

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
        
        navigate('/Inicio'); 
      }
    } catch (error) {
      console.error("Error en autenticación", error);
      Swal.fire("Error", error.response?.data?.message || "Ocurrió un error en el servidor", "error");
    }
  };

  const mostrarProximamente = (titulo) => {
    Swal.fire({
      icon: 'info',
      title: '¡Próximamente!',
      text: `La función de ${titulo} estará disponible en futuras actualizaciones.`,
      confirmButtonColor: '#ea580c'
    });
  };

  return (
    <div className="min-h-screen bg-orange-50 flex flex-col items-center justify-center p-4">
      
      {/* 2. ENCABEZADO: Logo y Nombre de la App */}
      <div className="flex flex-col items-center mb-8">
        <div className="bg-orange-600 p-3 rounded-2xl mb-3 shadow-lg">
          <span className='text-3xl md:text-4xl'>🌮</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-800">AdminTaco</h1>
        <p className="text-gray-500 text-sm">Punto de Venta Inteligente</p>
      </div>

      {/* 3. TARJETA BLANCA: El formulario central */}
      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-8 text-center">Iniciar Sesión</h2>
        
        <form className="space-y-6">
          {/* Grupo Usuario */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">Usuario</label>
            <div className="flex items-center border border-gray-200 rounded-xl px-4 py-3 bg-gray-50 focus-within:bg-white focus-within:border-orange-500 transition-all">
              <User className="text-gray-400 w-5 h-5" />
              <input 
                type="text" 
                className="w-full bg-transparent ml-3 outline-none text-gray-700" 
                placeholder="Ingresa tu usuario"
              />
            </div>
          </div>

          {/* Grupo Contraseña */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">Contraseña</label>
            <div className="flex items-center border border-gray-200 rounded-xl px-4 py-3 bg-gray-50 focus-within:bg-white focus-within:border-orange-500 transition-all">
              <Lock className="text-gray-400 w-5 h-5" />
              <input 
                type="password" 
                className="w-full bg-transparent ml-3 outline-none text-gray-700" 
                placeholder="••••••••"
              />
            </div>
          </div>

          {/* Opciones adicionales */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center text-gray-500 cursor-pointer">
              <input type="checkbox" className="mr-2 rounded border-gray-300 text-orange-600 focus:ring-orange-500" />
              Recordarme
            </label>
            <a href="#" className="text-orange-600 hover:underline font-medium">¿Olvidaste tu contraseña?</a>
          </div>

          {/* Botón de Entrada */}
          <button 
            type="submit" onClick={handleLogin}
            className="w-full bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-orange-700 hover:shadow-orange-200 transition-all transform active:scale-95"
          >
            ENTRAR
          </button>
        </form>
      </div>

      {/* 4. PIE DE PÁGINA */}
      <div className="mt-10 text-center space-y-1">
        <p className="text-gray-400 text-xs">AdminTaco POS © 2026 - Todos los derechos reservados</p>
        <p className="text-gray-400 text-xs">¿Necesitas ayuda? <span className="text-orange-400 font-medium cursor-pointer">Contactar soporte</span></p>
      </div>
    </div>
  );
}