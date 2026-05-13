import { useEffect, useState } from "react";
import { Plus, X } from "lucide-react";
import MesasBD from "../../services/ApiMesas";
import { FormMesas, useMesas } from "../../components/Mesas";
import { Dialog } from "@headlessui/react";
import { MesasGestion } from "../../components/Mesas";

export function GestionMesas() {


  const { mesas, obtenerMesas, crearMesas, eliminarMesa, asignarMesa, liberarMesa } = useMesas()

  //estados del modal
  const [isOpen, setIsOpen] = useState(false);
  const [mesasMod, setMesasMod] = useState(null)

  //los que habren y cierran el modal
  const handleOpen = (mesa = null) => {
    setMesasMod(mesa);
    setIsOpen(!isOpen);
  };

  //cargar las mesas
  useEffect(() => {
    obtenerMesas();
  }, []);

  return (
    <div className="w-full relative max-w-6xl mx-auto px-2">
      <div className="bg-white rounded-xl shadow-lg flex flex-col h-[calc(100vh-160px)] overflow-hidden border border-gray-100">
        <div className="bg-linear-to-r from-orange-500 to-orange-600 text-white p-4 md:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-xl md:text-2xl font-bold"> Gestion de mesas</h2>
              <p className="text-orange-100 mt-1 text-sm md:text-base">{mesas.length} Mesas en el local</p>
            </div>
            <button onClick={() => handleOpen()}
              className="flex items-center justify-center gap-2 bg-white text-orange-600 px-4 py-2 rounded-lg font-bold hover:bg-orange-50 transition-colors text-sm md:text-base">
              <Plus className="w-4 h-4 md:w-5 md:h-5" />Nueva Mesa 
            </button>
            <Dialog open={isOpen} onClose={() => handleOpen()} className="relative z-50">
              <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
              <div className="fixed inset-0 flex items-center justify-center p-4">
                <Dialog.Panel className="relative bg-white rounded-xl shadow-2xl p-6 w-full max-w-md border border-gray-100">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-2">
                    <Dialog.Title className="text-lg font-bold text-gray-800">
                      {mesasMod ? "Editar Mesa" : "Nueva Mesa"}
                    </Dialog.Title>
                    <button onClick={() => handleOpen()} className="text-gray-400 hover:text-gray-600">
                      <X size={20} />
                    </button>
                  </div>
                  <FormMesas closeModal={() => handleOpen()} obtenerMesas={obtenerMesas} datos={mesasMod} />
                </Dialog.Panel>
              </div>
            </Dialog>
          </div>
          {/* //adentro */}
          ocupado-libre
          </div>
          <div className="flex-1 overflow-auto p-6">
            <MesasGestion mesas={mesas} 
            handleOpen={handleOpen} 
            eliminarMesa={eliminarMesa}
            liberarMesa={liberarMesa}/>
        </div>
      </div>
    </div>
  )
}
