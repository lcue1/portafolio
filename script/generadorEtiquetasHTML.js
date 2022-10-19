const d = document
export const crearEttiquetas = ({ TipoEtiqueta, clase, id, href, texto, src, alt }) => {
    const $etiqueta = d.createElement(TipoEtiqueta)
    clase ? $etiqueta.setAttribute("class", clase) : false
    id ? $etiqueta.setAttribute("id", id) : false
    href ? $etiqueta.setAttribute("href", href) : false

    src ? $etiqueta.setAttribute("src", src) : false
    alt ? $etiqueta.setAttribute("alt", alt) : false
    texto ? $etiqueta.appendChild(d.createTextNode(texto)) : false
    return $etiqueta
}
