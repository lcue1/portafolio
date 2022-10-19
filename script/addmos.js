const d=document

const irAlInicio=d.getElementById("irAlInicio")
export const mostrarElementos=()=>{

    d.addEventListener("scroll",(e)=>{
        if(window.scrollY>620){
            irAlInicio.classList.add("irAlInicio__show")
        }else{
            irAlInicio.classList.remove("irAlInicio__show")
        }
    })
}