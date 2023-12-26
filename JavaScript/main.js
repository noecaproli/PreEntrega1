
function Bienvenido() {
    let nombre = prompt ("Bienvenid@ ¿Como es tu nombre?")
     if ( nombre !== "" && nombre !== null) {
        console.log (" Gracias por visitarnos, " + nombre + "💜")
        
     }
     else { console.error ( "Por favor, ingrese su nombre")}
    
 }

function MostrarPrecios (precio) {
    switch (precio) {
        case 1: 
            alert ("PROMO🥳 pantalon+remera a elección 💲20000")
            break;

        case 2:
            alert ("PROMO🥳 vestido+remera a elección 💲15000")
            break;

        case 3:
            alert ("PROMO🥳 2 remeras de temporada 💲5000")
            break;

        case 4:
            alert ("PROMO🥳 2 shorts a elección 💲10000")
            break;
       
        default:
            alert ("🔴Coloque correctamente la PROMOCION")
           
            
    }
    
}
function MostrarCuotas() {

    
     console.log ("CUOTAS disponibles:")
     let cuota = confirm ("Queres conocer la cantidad de cuotas DISPONIBLES?✨");
     
   if (cuota == true) {
        
    let cuotas = 0;
     while (cuotas <= 3) {
        cuotas ++;
        console.log ( cuotas + " cuota/s con CERO interés!😎");
        
    }
     
   
}
 else {
    console.warn ("Para conocer la cantidad de cuotas, HAZ CLICK EN ACEPTAR")
 }

}


 function MostrarPreciosYpromociones() {
    Bienvenido()
    let PreciosDisponibles = prompt ("Ingrese el número de la PROMO DE INTERÉS:")
     if ( PreciosDisponibles !== "" && PreciosDisponibles !== null) {
        MostrarPrecios (parseInt(PreciosDisponibles))
        MostrarCuotas()
    
    
 }
  else { console.warn ("Ingrese un NÚMERO DE PROMO DISPONIBLE")}
}
