export function LoginFooter({ mostrarProximamente }) {
  return (
    <div className="mt-10 text-center space-y-1">
      <p className="text-gray-400 text-xs">AdminTaco POS © 2026 - Todos los derechos reservados</p>
      <p className="text-gray-400 text-xs">
        ¿Necesitas ayuda? 
        <span 
          onClick={() => mostrarProximamente("soporte técnico")}
          className="text-orange-400 font-medium cursor-pointer ml-1 hover:underline"
        >
          Contactar soporte
        </span>
      </p>
    </div>
  );
}