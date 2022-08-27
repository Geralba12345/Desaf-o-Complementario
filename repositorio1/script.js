//Ejemplo con el if

let preguntaFan = prompt ("¿Usted es fanático de la NBA?")
let preguntaEdad = prompt ("¿Usted es mayor de 18 años?")

if ((preguntaFan.toLowerCase() == "si") && (preguntaEdad.toLowerCase() == "si"))  {
    alert(`Usted es mayor de edad y fanático de la NBA. Puede ingresar libremente a nuestra página.`)
}
else{
   alert(`Usted no es mayor de edad o no es fanático de la NBA, así que no puede ingresar libremente a nuestra página.`)
}

//Ejemplo con for

let numeroTabla = parseInt(prompt("Elija una tabla de multiplicar"))

let limiteTabla = parseInt(prompt("Ingrese hasta donde quiere multiplicar"))

for(let i = 0; i <= limiteTabla; i = i + 1){
    let multiplicar = numeroTabla*i
    console.log(`${numeroTabla} x ${i} = ${multiplicar}`)
}

//Ejemplo con do...while

let miCondicion = true

let intentos = 0

do{
    let jugadorHistorico = prompt ("¿Cuál es el jugador con más anillos de la NBA?")
    if (jugadorHistorico.toLowerCase() == "bill russell"){
        alert("Acertaste la respuesta. Ganasta un viaje a Aruba")
        miCondicion = false
    } else {
        intentos = intentos + 1
        alert("Usted no acertó. Estudie más. Ya erraste " + intentos)
    }

} while (miCondicion && intentos < 5)

//Ejemplo con while

let datos = prompt("¿Quiere comprar el NBA League Pass? Escoja entre sí o no")

while(datos.toLowerCase() == "si"){
    let meses = prompt ("Elija cuantos meses se quiere suscribir")
    let pago = prompt ("Elija su método de pago")

    alert(`Usted se suscribió por ${meses} meses y pagará con ${pago}`)

    datos = prompt("¿Desea cambiar los datos de la compra? Escoja entre sí o no")


}


