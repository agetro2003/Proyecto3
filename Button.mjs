
export default class Button {
    constructor (verify, css){
        this.element = document.createElement("div")
        this.alt = document.createElement("button")
        this.alt.name = "alt";
        this.alt.textContent = "hide"
        this.element.appendChild(this.alt)
        if (verify == true) {
            let head = document.getElementsByTagName('head')[0]
            let style = document.createElement('link')
            style.href = 'button.css'
            style.type = 'text/css'
            style.rel = 'stylesheet'
            head.append(style)
        }
        this.element.className = "def"
       for (const property in css) {
           this.element.style[property] = css[property];
               
           }
        this.color = this.element.style.backgroundColor

        this.alt.addEventListener('click', ()=>{
            if (this.element.style.background == "transparent") {
                this.alt.textContent = "hide"
                this.show()
            }else {
            this.alt.textContent = "show"
            this.hide()
        }
        })

        this.element.addEventListener('click', (e)=>{
           if (e.target.tagName == "DIV"){
               alert("Se ha tocado el boton")
           }
        })

        }
    


addToBody(div){
    div.appendChild(this.element)

}
hide(){
    this.element.style.background = "transparent"
}

show(){
    this.element.style.background = this.color
}
}