import dayjs from "dayjs";
import { APIConfig } from "./API-config";

export async function scheduleFetchByDay(date){
    try {
        const response = await fetch(`${APIConfig.baseURL}/schedules`)

        const data = await response.json()

        const todaySchedules = data.filter( (schedule) => {

            const isTrue = dayjs(schedule.date).isSame(date, "day")
            
            return isTrue
        })

        return todaySchedules
        
    } catch (error) {
        console.error(error)
    }
    
}