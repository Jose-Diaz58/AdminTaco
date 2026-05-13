import * as Yup from "yup";

export function initialValues(datos) {
  return {
    nombre: datos?.nombre || "",
    precio: datos?.precio || "",
    categoria:datos?.categoria || "",
    emoji: datos?.emoji || "",
  };
}

export function validationSchema(){
    return Yup.object({
        nombre: Yup.string().required("El nombre del producto es obligatorio"),
        precio: Yup.number().required("El precio es obligatorio, a menos que sea gratis").positive("El precio debe ser mayor a 0, no vendes un taco a -15 pesos"),
        categoria: Yup.string().required("La categoria es obligatoria"),
        emoji: Yup.string().required("El emoji es obligatorio, ni modo")
    });
}