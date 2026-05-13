import { useEffect, useState } from "react";
import { Plus, X} from "lucide-react";
import Axios from "axios";
import DatosBD from "../../services/Apidatos";
import Swal from "sweetalert2";
import { Dialog } from "@headlessui/react";

export function GestionMesas() {
  return (
      <div className="w-full relative max-w-6xl mx-auto px-2">
      <div className="bg-white rounded-xl shadow-lg flex flex-col h-[calc(100vh-160px)] overflow-hidden border border-gray-100">

        <div className="bg-linear-to-r from-orange-500 to-orange-600 text-white p-4 md:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-xl md:text-2xl font-bold">Gestión de Productos</h2>
              <p className="text-orange-100 mt-1 text-sm md:text-base">  productos en el catálogo</p>
            </div>
            <button onClick={() => handleOpen()} className="flex items-center justify-center gap-2 bg-white text-orange-600 px-4 py-2 rounded-lg font-bold hover:bg-orange-50 transition-colors text-sm md:text-base"
            ><Plus className="w-4 h-4 md:w-5 md:h-5" />Nuevo Producto
            </button>
          </div>
        </div>
        </div>
      </div>
  )
}
