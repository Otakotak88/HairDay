import dayjs from "dayjs";
import { hoursAvailable } from "../../utils/hours-available"
import { hoursClick } from "../form/hours-click";

const hoursForm = document.getElementById("hours")

export function hoursLoad({valueDate, scheduleFetched = []}){
    
    hoursForm.textContent = ""

    const unavailableHours = scheduleFetched.map(schedule => dayjs(schedule.date).format("HH:mm"))

    const opening = hoursAvailable.map(hour => {
        const [hourF] = hour.split(":")
        
        const isHourPast = dayjs(valueDate).add(hourF, "hour").isBefore(dayjs())

        const isHourOccupied = !unavailableHours.includes(hour)
        
        const isAvailable = !isHourPast && isHourOccupied

        return{
            hour,
            isAvailable
        }

        
    })
    opening.forEach(({hour, isAvailable}) => {
        const item = document.createElement("li")
        const [hourF] = hour.split(":")

        item.classList.add("hour")
        item.classList.add(isAvailable? "hour-available" : "hour-unavailable")
        item.textContent = hour


        if(hourF === "9"){
            const dataPeriod = document.createElement("li")
            dataPeriod.classList.add("hour-period")
            dataPeriod.textContent = "Manhã"

            hoursForm.append(dataPeriod)
        } else if(hourF === "13"){
            const dataPeriod = document.createElement("li")
            dataPeriod.classList.add("hour-period")
            dataPeriod.textContent = "Tarde"

            hoursForm.append(dataPeriod)
        } else if(hourF === "19"){
            const dataPeriod = document.createElement("li")
            dataPeriod.classList.add("hour-period")
            dataPeriod.textContent = "Noite"

            hoursForm.append(dataPeriod)
        }

        hoursForm.append(item)
    })

    hoursClick()

}