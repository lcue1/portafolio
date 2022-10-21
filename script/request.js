
export const cargarJSON = async (ruta, headers,) => {
    try {

        const request = await  fetch(
            ruta,
            {
                headers
            }
        )
        
        
        if (!request.ok) throw {
            status: request.status || 404,
            statusText: request.statusText || "Not found",
            ok:false
        }
        return await request
       // insertarDatos(res, dondeInsertar)

    } catch (err) {
        return await err
    }

}


