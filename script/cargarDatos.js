import { crearEttiquetas } from "./generadorEtiquetasHTML.js"
import { loader } from "./loaders.js"
import { cargarJSON } from "./request.js"



const d = document



export const cargarSkills = async (rutaDatos,dodeAgregar ) => {

    loader(true,dodeAgregar)

    let datos = await cargarJSON(
        rutaDatos,
        { headers: { 'Accept': 'application/json' } },

    )

    if (!datos.ok) {
        errorToLoad(datos,dodeAgregar)

    } else {

        datos=await datos.json()
        succes(datos.imagenes, dodeAgregar)
    }
    loader(false,dodeAgregar)



    
}






const succes = (datos, dondeInsertar) => {

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


const errorToLoad=(mensaje,dondeInsertar)=>{
    console.log(mensaje);
    const $contenedor=crearEttiquetas({
        TipoEtiqueta:"li",
        clase:"errorAlCargar",
    })
    const $titulo=crearEttiquetas({
        TipoEtiqueta:"h1",
        clase:"errorAlCargar--titulo",
        texto:"No se puede cargar la información"
    })
    
    const $texto=crearEttiquetas({
        TipoEtiqueta:"p",
        clase:"errorAlCargar--texto",
        texto:mensaje.statusText
    })
    $contenedor.appendChild($titulo)
    $contenedor.appendChild($texto)
    
    dondeInsertar.appendChild($contenedor)

}


