let consulta= (prompt("desea calcular un monto si/no"))
while (consulta=="si") {
    
let nombre= (prompt("bienvenido, ¿como es su nombre?"))
let monto= Number (prompt(nombre + ", ingrese monto a invertir"))
let interesAnual= Number(prompt(nombre +", ingrese interes anual"))
let anios= Number(prompt("en cuantos años desea financiar"))
let total= monto



function calculador() {
    for (let i = 0; i < anios; i++) {
        total= total + total * interesAnual / 100}
    alert( " su financiacion es " + total)
        
}
calculador()
alert( " su financiacion es " + total)


switch (consulta) {
    case "si":
    calculador()
        
        break;
    case "no":

    default:
        alert("gracias por su visita, lo esperamos pronto")
        break;
break
}
consulta
}
