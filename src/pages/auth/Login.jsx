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
      <LoginHeader />
      
      <LoginForm 
        registro={registro} setRegistro={setRegistro}
        nombre={nombre} setNombre={setNombre}
        email={email} setEmail={setEmail}
        password={password} setPassword={setPassword}
        recordarme={recordarme} setRecordarme={setRecordarme}
        handleLogin={handleLogin} 
        mostrarProximamente={mostrarProximamente}
      />
      
      <LoginFooter mostrarProximamente={mostrarProximamente} />
    </div>
  );
}