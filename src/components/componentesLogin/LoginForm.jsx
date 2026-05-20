import { User, Lock, Mail } from "lucide-react";

export function LoginForm({
  registro, setRegistro,
  nombre, setNombre,
  email, setEmail,
  password, setPassword,
  recordarme, setRecordarme,
  handleLogin, mostrarProximamente
}) {
  return (
    <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-10">
      <h2 className="text-2xl font-semibold text-gray-700 mb-8 text-center">
        {registro ? "Crear cuenta" : "Iniciar Sesión"}
      </h2>
      
      <form className="space-y-6" onSubmit={handleLogin}>
        {registro && (
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">Nombre Completo</label>
            <div className="flex items-center border border-gray-200 rounded-xl px-4 py-3 bg-gray-50 focus-within:bg-white focus-within:border-orange-500 transition-all">
              <User className="text-gray-400 w-5 h-5" />
              <input 
                type="text" 
                value={nombre} 
                onChange={(e) => setNombre(e.target.value)} 
                className="w-full bg-transparent ml-3 outline-none text-gray-700" 
                placeholder="Tu nombre completo"
                required={registro}
              />
            </div>
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">Correo Electrónico</label>
          <div className="flex items-center border border-gray-200 rounded-xl px-4 py-3 bg-gray-50 focus-within:bg-white focus-within:border-orange-500 transition-all">
            <Mail className="text-gray-400 w-5 h-5" />
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className="w-full bg-transparent ml-3 outline-none text-gray-700" 
              placeholder="correo@ejemplo.com"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">Contraseña</label>
          <div className="flex items-center border border-gray-200 rounded-xl px-4 py-3 bg-gray-50 focus-within:bg-white focus-within:border-orange-500 transition-all">
            <Lock className="text-gray-400 w-5 h-5" />
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              className="w-full bg-transparent ml-3 outline-none text-gray-700" 
              placeholder="••••••••"
              required
            />
          </div>
        </div>

        {!registro && (
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center text-gray-500 cursor-pointer">
              <input 
                type="checkbox" 
                checked={recordarme}
                onChange={(e) => setRecordarme(e.target.checked)}
                className="mr-2 rounded border-gray-300 text-orange-600 focus:ring-orange-500" 
              />
              Recordarme
            </label>
            <button 
              type="button" 
              onClick={() => mostrarProximamente("recuperación de contraseña")}
              className="text-orange-600 hover:underline font-medium"
            >
              ¿Olvidaste tu contraseña?
            </button>
          </div>
        )}

        <button 
          type="submit" 
          className="w-full bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-orange-700 hover:shadow-orange-200 transition-all transform active:scale-95"
        >
          {registro ? "REGISTRARSE" : "ENTRAR"}
        </button>
      </form>

      <div className="mt-6 text-center">
        <p 
          className="text-sm text-gray-600 cursor-pointer hover:text-orange-600 hover:underline transition-colors"
          onClick={() => {
            setRegistro(!registro);
            setNombre('');
            if (!recordarme) setEmail(''); 
            setPassword('');
          }}
        >
          {registro ? "¿Ya tienes cuenta? Inicia sesión" : "¿No tienes cuenta? Regístrate aquí"}
        </p>
      </div>
    </div>
  );
}