import dayjs from "dayjs"
import { openingHours } from "../../utils/opening-hours.js"
import { hoursClick } from "../form/hours-click.js"

const hoursSchedule = document.getElementById("hours")
const date = document.getElementById("date")

export function showSchedulesToday (){

    // Limpa a lista de horários
    hoursSchedule.innerHTML = ("")

    const opening = openingHours.map((hourF) => {

        // Remove a formatação da hora
        const [hour] = hourF.split(":")
        
        // Verifica se a hora já passou
        const isAvailable = dayjs(date.value).set("hour", hour).isAfter(dayjs(new Date()))
        
        return {
            hour: hourF,
            available: isAvailable
        }
    })
    
    opening.forEach(hourOBJ => {
        // Cria uma nova li e define sua classe como "hour"
        const hourBTN = document.createElement("li")
        hourBTN.textContent = hourOBJ.hour
        hourBTN.classList.add("hour")
        hourBTN.classList.add(hourOBJ.available ? "hour-available" : "hour-unavailable")

        // Quando a hora for 9 adiciona a label "Manhã"
        if(hourOBJ.hour === "9:00"){
            const datePeriod = document.createElement("li")
            datePeriod.classList.add("hour-period")
            datePeriod.textContent = "Manhã"
            hoursSchedule.append(datePeriod)
        } 
        // Quando a hora for 13 adiciona a label "Tarde"
        else if(hourOBJ.hour === "13:00"){
            const datePeriod = document.createElement("li")
            datePeriod.classList.add("hour-period")
            datePeriod.textContent = "Tarde"
            hoursSchedule.append(datePeriod)
        } 
        // Quando a hora for 19 adiciona a label "Noite"
        else if(hourOBJ.hour === "19:00"){
            const datePeriod = document.createElement("li")
            datePeriod.classList.add("hour-period")
            datePeriod.textContent = "Noite"
            hoursSchedule.append(datePeriod)
        }
        hoursSchedule.append(hourBTN)
    })

    hoursClick()
}
