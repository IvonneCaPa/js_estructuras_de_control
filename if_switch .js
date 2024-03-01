let dia_semana = "sabado"

if (dia_semana.toLowerCase() == "jueves"){
    console.log("no se viernes");
} else if (dia_semana.toLowerCase() == "viernes"){
    console.log("es viernes");
} else {
    console.log("no es ni jueves ni viernes");
}


if(dia_semana == "domingo" ||  dia_semana == "sabado"){
    console.log("fin se semana");
} else {
    console.log("toca estudiar")
}

/**
 * lunes: ensalada
 * martes: sardinas
 * miercoles: pollo
 * jueves:paella
 * viernes: salmon
 * sabado:pizza
 * domingo: calçots
 * 
 * mensaje de salida: "Hoy toca ensalada"
 */

let dia = "sabado"
mensaje = ""

if (dia.toLocaleLowerCase() == "lunes"){
    mensaje = "hoy toca ensalada"
} else if (dia.toLocaleLowerCase() == "martes"){
    mensaje = "hoy toca sardinas"
} else if (dia.toLowerCase() == "miercoles"){
    mensaje = "hoy toca pollo"
} else if (dia.toLowerCase() == "jueves"){
    mensaje = "hoy toca paella"
} else if (dia.toLowerCase() == "viernes"){
    mensaje = "hoy toca salmon"
} else if (dia.toLowerCase() == "sabado"){
    mensaje = "hoy toca pizza"
} else if(dia.toLowerCase() == "domingo"){
    mensaje = "hoy toca calçots"
} else{
    console.log("dia incorrecto");
}

console.log(mensaje);


// SWITCH

switch (dia.toLocaleLowerCase()) {
    case "lunes":
        mensaje = "hoy toca ensalada"
        break;
    case "martes":
        mensaje = "hoy toca sardinas"
        break;
    case "miercoles":
        mensaje = "hoy toca polllo"
        break;
    case "jueves":
        mensaje = "hoy toca paella"    
        break;
    case "viernes":
        mensaje = "hoy toca salmon"
        break;
    case "sabado":
        mensaje = "hoy toca pizza"
        break;
    case "domingo":
        mensaje = "hot toca calçots"
        break
    default:
        mensaje = "mal escrito"
        break
}
console.log(mensaje);

switch (dia.toLowerCase) {
    case "lunes":
    case "martes":
    case "miercoles":
    case "jueves":
    case "viernes":
        console.log("Hoy toca estudiar");        
        break;
    default:
        console.log("Toca dormir");
        break;
}


