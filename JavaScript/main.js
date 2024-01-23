function Bienvenido() {
    let nombre = prompt ("Bienvenid@ ¿Como es tu nombre?")
     if ( nombre !== "" && nombre !== null) {
        console.log (" Gracias por visitarnos, " + nombre + "💜",)

        
     }
     else { console.error ( "Por favor, ingrese su nombre")}  }
    
 




//------------Funcion agregar conjunto----

function conjunto() {
    

 let agregarConjunto = prompt ("Entonces...Queres armar tu conjunto personalizado. Que prendas te interesan?😎")

  if ( agregarConjunto !== "" && agregarConjunto !== null ) {
        
       console.log ("Muy bien, nuestra asesora se comunicará para informarte a cerca de este conjunto: "  +"✨"+ agregarConjunto + "✨")}

       else { 
        (console.error ("Contanos, que te gustaria como conjunto?"))
    
   } }
  //--------------Metodos en objetos-----------

   let carrito = [];

   const productos = [{ codigo: 1 , nombre: "Short Sport", precio: 5600},
                        {codigo: 2 , nombre: "Short de Vestir", precio: 8600},
                        {codigo: 3 , nombre: "Short Pollera", precio: 9600},
                        {codigo: 4 , nombre: "Remeron", precio: 4000},
                        {codigo: 5 , nombre: "Remera top", precio: 3500},
                        {codigo: 6 , nombre: "Vestido", precio: 10000},
                        {codigo: 7 , nombre: "Vestido Jeans", precio: 1500},
                        {codigo: 8 , nombre: "Pantalon vaquero", precio: 15000},
                        {codigo: 9 , nombre: "Pantalon joggin", precio: 12000},
                        {codigo: 10 , nombre: "Bermuda", precio: 6000},
                        {codigo: 11 , nombre: "Bermuda jeans", precio: 9000}]



//-------Metodo FIND
    function busquedaDeProductos() {
        let codigo = prompt ("Ingresa el código de tu prenda favorita")
       if ( codigo !== "") {
        
        let productosFiltadros = productos.find ( (producto) => producto.codigo === parseInt(codigo))
        if ( productosFiltadros !== undefined ) {
            
            carrito.push (productosFiltadros)
            alert (productosFiltadros.nombre + " a sido agregado al CARRITO🛒✨")
            console.table (productosFiltadros)
            
            let respuesta = confirm ( "Desea agregar alguna otra prenda?")
              if ( respuesta === true) {
                busquedaDeProductos()
                
              }
              else if ( respuesta === false) {  
                console.clear ()
                console.table (carrito)
                console.log ("GRACIAS POR SU COMPRA🙌")

              }
            
        }
        else {  ( busquedaDeProductos())}   }

        else { console.warn ( "Coloque un código de prenda válido", busquedaDeProductos())}
    }

    

//------Meotodo MAP



    function precioConIVA() {
        let respuesta = confirm ( "Desea conocer el listado de productos?")
        
        if (respuesta === true ) {
            
        
        let productoConIVA = productos.map ((producto)=> {
         return { nombre: producto.nombre,
                  precio: producto.precio,
                  precio: producto.precio * 1.21}
        })
        console.table (productoConIVA)   
        busquedaDeProductos() }

        else {  ( 
        
        conjunto() )}
    }
    Bienvenido()
    precioConIVA()

//--------------------------------
