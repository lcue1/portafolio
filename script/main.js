'use strict'
import { mostrarElementos } from "./addmos.js"
import { cargarSkillsHabilidades } from "./cargarDatos.js"
import { validarInputEmail, validarInputText } from "./validaciones.js"
const d=document
window.onload=()=>{
    cargarSkillsHabilidades()


    mostrarElementos()
        
    
   validarFormularioContacto(d.getElementById("formContacto"))
        
}

const validarFormularioContacto=(formContacto)=>{
    const $inputs=[d.getElementById("contactoNombre"),
     d.getElementById("contactoEmail"),
     d.getElementById("contactoAsunto"),
     d.getElementById("contactoComentario")]
     $inputs.forEach(elemento => {     

        elemento.addEventListener("keyup",e=>{
            if(elemento.id==="contactoNombre") validarInputText(elemento,"Ingresa tu nombr")
            if(elemento.id==="contactoEmail") validarInputEmail(elemento,"Ingresa un email valido")
            if(elemento.id==="contactoAsunto") validarInputText(elemento,"Ingresa un asunto")
            if(elemento.id==="contactoComentario") validarInputText(elemento,"Ingresa un comentario")
          
            
        })
     });

    formContacto.addEventListener("submit",e=>{
         e.preventDefault()
         if(!validarInputText(e.target.nombre,"Ingresa tu nombre"))return
         if(!validarInputEmail(e.target.email,"Ingresa un email valido"))return
         if(!validarInputText(e.target.asunto,"Ingresa un asunto"))return
         if(!validarInputText(e.target.comentario,"Ingresa un comentario"))return

         
    })

   
    
    
}
