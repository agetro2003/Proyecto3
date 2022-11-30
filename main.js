 import Button from './Button.mjs'


 let style = {
    backgroundColor: "blue",
    witdh : "20em",
    height : "10em"
}

let agregar = document.getElementById('agregar')
let verify = true
 agregar.addEventListener('click', (e)=>{
let Boton = new Button(verify, style)
verify = false
Boton.addToBody()
 })