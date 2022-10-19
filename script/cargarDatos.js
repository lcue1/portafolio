import { crearEttiquetas } from "./generadorEtiquetasHTML.js"
import { cargarJSON } from "./request.js"



const d = document



export const cargarSkillsHabilidades =  async () => {


    const imagenesHabilidades=await cargarJSON(
        "/datos/habilidades.json",
        { headers: { 'Accept': 'application/json' } },
        
    )
    insertarDatos(imagenesHabilidades.imagenesHabilidades,d.getElementById("contenedorHabilidades"))



    const imagenesHabbies=await cargarJSON(
        "/datos/hobbies.json",
        { headers: { 'Accept': 'application/json' } },
        
    )
    insertarDatos(imagenesHabbies.imagenesHabilidades,d.getElementById("contenedorHobbies"))


    // cargarJSON(
    //     "/datos/hobbies.json",
    //     { headers: { 'Accept': 'application/json' } },
    //     d.getElementById("contenedorHobbies")
    // )


}





const insertarDatos = (datos, dondeInsertar) => {
    
    const fragmento = d.createDocumentFragment()

    datos.forEach((e, i) => {
        const $li = crearEttiquetas({
            TipoEtiqueta: "li",
            clase: "skillsHabilidades--item"
        })
        const $a = crearEttiquetas({
            TipoEtiqueta: "a",
            href: "#"
        })
        const $figure = crearEttiquetas({
            TipoEtiqueta: "figure",
            clase: "skillsHabilidades--figure"
        })
        const $img = crearEttiquetas({
            TipoEtiqueta: "img",
            src: e.ruta,
            alt: e.nombre
        })
        const $figCaption = crearEttiquetas({
            TipoEtiqueta: "figCaption",
            texto: e.nombre
        })

        fragmento.appendChild($li)
        $li.appendChild($a)
        $a.appendChild($figure)
        $figure.appendChild($img)
        $figure.appendChild($figCaption)
    });
    dondeInsertar.appendChild(fragmento)

}
