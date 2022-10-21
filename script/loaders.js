import { crearEttiquetas } from "./generadorEtiquetasHTML.js"



export const loader= (onOff,dondeColacarOEliminar)=>{
    if (onOff) {
        const $loader=crearEttiquetas({
            TipoEtiqueta:"div",
            clase:"loader",
            id:"loader"
        })
        
        
        dondeColacarOEliminar.appendChild($loader)
    } else {;
        dondeColacarOEliminar.removeChild(document.getElementById("loader"))
    }
}