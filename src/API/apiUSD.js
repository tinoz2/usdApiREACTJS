
const apiUrl = "https://dolarapi.com/v1/dolares"

export const getUsd = async () => {
    try{
        const res = await fetch (apiUrl)
        const data = await res.json()
        return data
    }
    catch(error){
        console.error("Error en tu peticion", error)
    }
}

export const setUsd = data => {
    
    const getInfoUsd = {
        oficial_compra: Math.round(data[0].compra),
        oficial_venta: Math.round(data[0].venta),
        blue_compra: Math.round(data[1].compra),
        blue_venta: Math.round(data[1].venta)
    }
    return getInfoUsd
}