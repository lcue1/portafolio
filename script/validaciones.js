import { crearEttiquetas } from "./generadorEtiquetasHTML.js"

const d=document

export const validarInputText=(input,textoMensaje)=>{
    const valueInput=input.value.trim()
    
    if (valueInput===""){
        mostrarMensajeAlUsuario(input,textoMensaje)
        input.style.border="solid 2px #ff0000"
        input.focus()
        return false
    }
    input.style.border="solid 2px #00ff0d"
    return true

}



export const validarInputEmail=(input,textoMensaje)=>{
    const valueInput=input.value.trim()
    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (!emailRegex.test(valueInput)){
        mostrarMensajeAlUsuario(input,textoMensaje)
        input.style.border="solid 2px #ff0000"
        input.focus()

        return false
    }
    input.style.border="solid 2px #00ff0d"
    return true
    
}



const mostrarMensajeAlUsuario=(input,textoMensaje)=>{
    if(d.getElementById(`${input.id}Error`))return
  //  const posicionGridColInput=window.getComputedStyle(input).getPropertyValue("grid-column")
  //  const posicionGridRowInput=window.getComputedStyle(input).getPropertyValue("grid-row")
    const $mensajeError=crearEttiquetas({
        TipoEtiqueta:"div",
        clase:"mensajeError",
        id:`${input.id}Error`,
        texto:textoMensaje
    })
  //  $mensajeError.style.gridColumn=posicionGridColInput
  //  $mensajeError.style.gridRow=posicionGridRowInput
    input.parentNode.parentNode.appendChild($mensajeError)
    const timer=setTimeout(() => {
        input.parentNode.parentNode.removeChild($mensajeError)
        clearTimeout(timer)
    }, 1000);
}