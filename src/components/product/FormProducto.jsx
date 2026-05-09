import { useFormik } from "formik";
import Swal from "sweetalert2";
import DatosBD from "../../services/Apidatos";
import { initialValues, validationSchema } from "./FormProducto.form";

export function FormProducto({ closeModal, obtenerProductos, datos}) {

  const formik = useFormik({
    initialValues: initialValues(datos),
    validationSchema: validationSchema(),
    validateOnChange: false,
    enableReinitialize: true,
    onSubmit: async(formValue)=>{
      try {
        if (datos && datos._id) {
            await DatosBD.modificarDatos(datos._id, formValue);
        } else {
            await DatosBD.postDatos(formValue)
        }

        Swal.fire ({
            position: "center",
            icon: "success",
            title: datos ? "Producto actualizado" : "Producto guardado",
            showConfirmButton: false,
            timer: 1500
        })
        
        formik.resetForm();
        closeModal();
        obtenerProductos();
      } catch (error) {
        console.error("Error", error)
      }
    }
  });

return (
    <form onSubmit={formik.handleSubmit} noValidate>
      <div className="grid gap-4 grid-cols-2 py-4">
        <div className="col-span-2">
          <label htmlFor="nombre" className="block mb-2 text-sm font-semibold text-gray-700">Nombre</label>
          <input type="text" name="nombre" id="nombre" onChange={formik.handleChange} value={formik.values.nombre} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-orange-500 focus:border-orange-500 block w-full px-4 py-3 outline-none transition-all" placeholder="Ej. Tacos al pastor"/>
          <span className="text-red-500 text-xs font-medium mt-1 inline-block">{formik.errors.nombre}</span>
        </div>

        <div className="col-span-2 sm:col-span-1">
          <label htmlFor="emoji" className="block mb-2 text-sm font-semibold text-gray-700">Emoji (Icono)</label>
          <select id="emoji" name="emoji" onChange={formik.handleChange} value={formik.values.emoji} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-orange-500 focus:border-orange-500 block w-full px-4 py-3 outline-none transition-all">
            <option value="">Seleccionar emoji...</option>
            <option value="🌮">🌮 Taco</option>
            <option value="🥖">🥖 Torta / Bolillo</option>
            <option value="🥟">🥟 Quesadilla / Empanada</option>
            <option value="🥤">🥤 Vaso / Refresco</option>
            <option value="🥑">🥑 Aguacate / Guacamole</option>
            <option value="🌶️">🌶️ Chile / Salsa</option>
            <option value="🧅">🧅 Cebolla</option>
            <option value="🧀">🧀 Queso</option>
          </select>
          <span className="text-red-500 text-xs font-medium mt-1 inline-block">{formik.errors.emoji}</span>
        </div>

        <div className="col-span-2 sm:col-span-1">
          <label htmlFor="precio" className="block mb-2 text-sm font-semibold text-gray-700">Precio</label>
          <input type="number" name="precio" id="precio" onChange={formik.handleChange} value={formik.values.precio} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-orange-500 focus:border-orange-500 block w-full px-4 py-3 outline-none transition-all" placeholder="$ 0.00"/>
          <span className="text-red-500 text-xs font-medium mt-1 inline-block">{formik.errors.precio}</span>
        </div>
        
        <div className="col-span-2 sm:col-span-1">
          <label htmlFor="categoria" className="block mb-2 text-sm font-semibold text-gray-700">Categoría</label>
          <select id="categoria" name="categoria" onChange={formik.handleChange} value={formik.values.categoria} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-orange-500 focus:border-orange-500 block w-full px-4 py-3 outline-none transition-all">
            <option value="">Seleccionar...</option>
            <option value="Tacos">Tacos</option>
            <option value="Quesadillas">Quesadillas</option>
            <option value="Tortas">Tortas</option>
            <option value="Bebidas">Bebidas</option>
            <option value="Extras">Extras</option>
          </select>
          <span className="text-red-500 text-xs font-medium mt-1 inline-block">{formik.errors.categoria}</span>
        </div>
      </div>
      
      <div className="flex items-center gap-3 pt-2">
        <button type="submit" className="inline-flex items-center text-white bg-orange-600 hover:bg-orange-700 font-bold rounded-2xl text-sm px-6 py-3 transition-colors shadow-sm">
          <svg className="w-5 h-5 me-2 -ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5" />
          </svg>
          {datos ? "Guardar cambios" : "Añadir producto"}
        </button>
        <button onClick={closeModal} type="button" className="text-gray-600 bg-white border-2 border-gray-200 hover:bg-gray-50 hover:border-gray-300 font-bold rounded-2xl text-sm px-6 py-3 transition-colors">
          Cancelar
        </button>
      </div>
    </form>
  );
}