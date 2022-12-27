let monto= Number (prompt("ingrese monto a invertir"))
let interesAnual= Number(prompt("ingrese interes anual"))
let anios= Number(prompt("en cuantos años desea financiar"))
let total= monto

for (let i = 0; i < anios; i++) {
    total= total + total * interesAnual / 100
   console.log(total)
    
}