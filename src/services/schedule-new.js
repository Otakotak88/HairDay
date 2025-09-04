import { configAPI } from "./config-API"

export async function scheduleNew( { name, date, id} ){
    try {

        // Cria um novo objeto no server
        await fetch(`${configAPI.baseURL}/schedules`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name, date, id})
        })

    } catch (error) {

        alert("Não foi possível realizar a ação. Tente novamente mais tarde")
        console.log(error)

    }
}