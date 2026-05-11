import { useFormik } from "formik";
import { initialValues, validationSchema } from "./FormMesas.form";
import MesasBD from "../../services/ApiMesas";
import Swal from "sweetalert2";


export function FormMesas({ closeModal, obtenerMesas, datos }) {
  const formik = useFormik({
    initialValues: initialValues(datos),
    validationSchema: validationSchema(),
    validateOnChange: false,
    enableReinitialize: true,
    onSubmit: async (formValue) => {
      try {
        if (datos && datos._id) {
          await MesasBD.modificarMesa(datos._id, formValue);
        } else {
          await MesasBD.postMesas(formValue)
        }

        Swal.fire({
          position: "center",
          icon: "success",
          title: datos ? "Mesa actualizada" : "Mesa guardada",
          showConfirmButton: false,
          timer: 1500
        })

        formik.resetForm();
        closeModal();
        obtenerMesas();
      } catch (error) {
        console.error("Error", error)
      }
    }
  });
  return (
    <form onSubmit={formik.handleSubmit} noValidate>
      <div className="grid gap-4 py-4">

        <div>
          <label htmlFor="numero" className="block mb-2 text-sm font-semibold text-gray-700">
            Número de Mesa
          </label>
          <input
            type="number"
            name="numero"
            id="numero"
            onChange={formik.handleChange}
            value={formik.values.numero}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-orange-500 focus:border-orange-500 block w-full px-4 py-3 outline-none transition-all"
            placeholder="Ej. 1"
          />
          <span className="text-red-500 text-xs font-medium mt-1 inline-block">
            {formik.errors.numero}
          </span>
        </div>

        <div>
          <label htmlFor="capacidad" className="block mb-2 text-sm font-semibold text-gray-700">
            Capacidad
          </label>
          <input
            type="number"
            name="capacidad"
            id="capacidad"
            onChange={formik.handleChange}
            value={formik.values.capacidad}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-orange-500 focus:border-orange-500 block w-full px-4 py-3 outline-none transition-all"
            placeholder="Ej. 4"
            min={1}
          />
          <span className="text-red-500 text-xs font-medium mt-1 inline-block">
            {formik.errors.capacidad}
          </span>
        </div>

      </div>

      <div className="flex items-center gap-3 pt-2">
        <button
          type="submit"
          className="inline-flex items-center text-white bg-orange-600 hover:bg-orange-700 font-bold rounded-2xl text-sm px-6 py-3 transition-colors shadow-sm"
        >
          <svg className="w-5 h-5 me-2 -ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5" />
          </svg>
          Añadir Mesa
        </button>
        <button
          onClick={closeModal}
          type="button"
          className="text-gray-600 bg-white border-2 border-gray-200 hover:bg-gray-50 hover:border-gray-300 font-bold rounded-2xl text-sm px-6 py-3 transition-colors"
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}
