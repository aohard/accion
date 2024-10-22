// Definir las opciones disponibles para la segunda lista según la selección de la primera lista
const opciones = {
    retencion: [
        { valor: "retenido_con_visita_tecnica", texto: "Retenido con visita técnica" },
        { valor: "retenido_con argumento_de_valor", texto: "Retenido con argumento de valor" }
    ],
    retencion_downgrade_parcial: [
        { valor: "retenido_pack_bronce", texto: "Retenido con pack bronce" },
        { valor: "retenido_baja_deco", texto: "Retenido con baja de deco" },
        { valor: "retenido_baja_packs_decos", texto: "Retenido con baja de PACKS y DECOS" },
        { valor: "retenido_baja_packs_decos_velocidad", texto: "Retenido con baja de PACKS, DECOS y VELOCIDAD" },
        { valor: "retenido_otras_combinaciones", texto: "Retenido con otras combinaciones" }
    ],
    retencion_downgrade_servicios: [
        { valor: "retenido_baja_hd", texto: "Retenido con baja de HD" },
        { valor: "retenido_baja_hd_packs", texto: "Retenido con baja de HD y PACKS" },
        { valor: "retenido_baja_packs", texto: "Retenido con baja de PACKS" },
        { valor: "retenido_baja_velocidad", texto: "Retenido con baja de velocidad" },
        { valor: "retenido_baja_tplay", texto: "Retenido con baja de TPLAY" },
        { valor: "retenido_otras_combinaciones", texto: "Retenido con otras combinaciones" }
    ],
    retencion_producto: [
        { valor: "retenido_cambio_deco_4k_pack", texto: "Retenido con cambio de deco 4K + PACK" },
        { valor: "retenido_promo_packs_existente", texto: "Retenido con promo sobre packs existente" },
        { valor: "retenido_promo_alta_packs", texto: "Retenido con promo alta de packs" },
        { valor: "retenido_upgrade_velocidad", texto: "Retenido con upgrade de velocidad" },
        { valor: "retenido_upgrade_velocidad_packs", texto: "Retenido con upgrade de velocidad y packs" },
        { valor: "retenido_control_remoto", texto: "Retenido con control remoto" },
        { valor: "retenido_cambio_modem", texto: "Retenido con cambio de modem" },
        { valor: "retenido_hd", texto: "Retenido con HD" },
        { valor: "retenido_tplay_cliente_hd", texto: "Retenido con TPLAY por cliente HD" },
        { valor: "retenido_tplay_internet", texto: "Retenido con TPLAY con solo internet" },
        { valor: "retenido_tda_internet", texto: "Retenido con TDA con solo internet" },
        { valor: "retenido_mas_un_producto", texto: "Retenido con más de un producto" }
    ],
    consultas: [
        { valor: "informa_politica_titularidad", texto: "Se informa política de titularidad" },
        { valor: "consulta_gestion_existente", texto: "Consulta gestión existente" },
        { valor: "solicita_plan_pbu", texto: "Solicita plan PBU" }
    ]
};

// Definir las descripciones de cada opción en la lista1
const descripciones = {
    retencion: "La retención implica conservar al cliente ofreciéndole soluciones para evitar la baja.",
    retencion_bonificacion: "Retención con bonificación ofrece un descuento o un beneficio adicional para conservar al cliente.(solo catv)",
    retencion_downselling: "Baja parcial de alguno de los Servicios principales.",
    retencion_downgrade_parcial: "Baja de Servicios Adicionales o baja de categoría en los productos que tiene activos el cliente",
    retencion_downgrade_servicios: "Retención con reducción de servicios para ajustar a la necesidad del cliente.",
    retencion_producto: "Retención mediante la oferta o mejora de un producto para evitar la baja.",
    consultas: "Resolucion de consultas generales o sobre el estado de una gestión",
    baja_parcial: "Al elegir la acción BAJA PARCIAL se habilita la posibilidad de seleccionar cada uno de los servicios que el cliente desee dar de baja.",
    baja_total: "Al elegir la acción BAJA TOTAL  automáticamente CRM selecciona todos los servicios que tiene contratados el cliente y no podrán marcarse ni desmarcarse de manera individual",
    recupero_baja: "Recuperación del cliente luego de haber solicitado la baja, en estado pendiente."
};

// Función para actualizar la segunda lista desplegable según la opción seleccionada en la primera lista
function actualizarLista2() {
    // Obtener la referencia a las listas desplegables
    const lista1 = document.getElementById("lista1");
    const lista2 = document.getElementById("lista2");
    const descripcionDiv = document.getElementById("descripcion");

    // Obtener la selección actual de la primera lista
    const seleccion = lista1.value;

    // Limpiar las opciones actuales de la segunda lista
    lista2.innerHTML = ""; // Limpiar todas las opciones previas

    // Agregar la opción por defecto "Seleccionar..."
    const opcionPorDefecto = document.createElement("option");
    opcionPorDefecto.value = "";
    opcionPorDefecto.textContent = "Seleccionar...";
    lista2.appendChild(opcionPorDefecto);

    // Verificar si la selección tiene opciones disponibles en el objeto 'opciones'
    if (opciones[seleccion]) {
        // Recorrer cada opción de la selección y añadirla a la segunda lista desplegable
        opciones[seleccion].forEach(opcion => {
            const nuevoElemento = document.createElement("option");
            nuevoElemento.value = opcion.valor;
            nuevoElemento.textContent = opcion.texto;
            lista2.appendChild(nuevoElemento);
        });
    }

    // Mostrar la descripción correspondiente a la selección
    if (descripciones[seleccion]) {
        descripcionDiv.textContent = descripciones[seleccion];
    } else {
        descripcionDiv.textContent = "";
    }
}

// Asociar la función `actualizarLista2` al evento `change` de la primera lista
document.addEventListener("DOMContentLoaded", function() {
    const lista1 = document.getElementById("lista1");
    lista1.addEventListener("change", actualizarLista2);
});
