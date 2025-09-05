import dayjs from "dayjs"
import { configAPI } from "./config-API"

export async function scheduleFetchByDay( {date} ){
    try {
        
        // Faz a requisição para a API
        const response = await fetch(`${configAPI.baseURL}/schedules`)

        // Transforma em JSON
        const data = await response.json()
        
        // Filtra apenas os dias de hoje
        const schedulesToday = data.filter(schedule => {

            return dayjs(date).isSame(schedule.date, "day")

        })

        return schedulesToday

    } catch (error) {
        alert("Não foi possível realizar a ação. Tente novamente mais tarde")
        console.log(error)
    }
}