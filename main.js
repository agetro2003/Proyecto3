 import Button from './Button.mjs'


 let style = {
    backgroundColor: "blue",
    witdh : "20em",
    height : "10em"
}
let div1 = document.getElementById('cont1')
let div2 = document.getElementById('cont2')
let div3 = document.getElementById('cont3')

let def = document.getElementById('default')
    let verify = true
 def.addEventListener('click', (e)=>{
let Boton = new Button(verify)
verify = false
Boton.addToBody(div1)
 })


 document.getElementById('1').addEventListener('click', (e)=>{
     let Boton = new Button(verify, style)
     verify = false 
     Boton.addToBody(div2)
 })


 document.getElementById('2').addEventListener('click', (e)=>{
    let Boton = new Button(verify, { witdh: "8em", height: "5em", backgroundColor: "red"})
    verify = false 
    Boton.addToBody(div3)
})