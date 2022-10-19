
export const cargarJSON = async (ruta, headers) => {
    try {
        const request = await fetch(
            ruta,
            {
                headers
            }
        )

        if (!request.ok) throw {
            status: request.status,
            statusText: request.statusText && "Not found"
        }
        console.log(request);
        return await request.json()
       // insertarDatos(res, dondeInsertar)

    } catch (err) {
        console.log(err);
    }

}


