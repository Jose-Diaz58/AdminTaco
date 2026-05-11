import * as Yup from "yup";


export function initialValues(datos) {
    return (
        {
            numero: datos?.numero || "",
            capacidad: datos?.capacidad || "",
        }
    )
}

export function validationSchema(){
    return Yup.object({
        numero: Yup.number().required("El numero de mesa es obligatorio").positive("El numero de mesas no debe ser negativo"),
        capacidad: Yup.number().required("La capidad es requerida").positive("La capacidad debe ser mayor a 0, no puedes poner una mesa -5 personas"),
    });
}