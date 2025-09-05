import dayjs from "dayjs"
<<<<<<< HEAD
import { scheduleNew } from "../../services/schedule-new.js"

// Formulário
const form = document.querySelector("form")
const dayInput = document.getElementById("date")
const clientName = document.getElementById("client")

// Cria um input com a data de hoje
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

// Define a data atual como mínima e seleciona ela
dayInput.value = inputToday
dayInput.min = inputToday


form.addEventListener("submit", (event) => {

    // Previne que a página recarregue (padrão)
    event.preventDefault()

    try{

        // Recupera apenas a hora selecionada
        const [hour] = document.querySelector(".hour-selected").textContent.split(":")

        // Recupera as informações do cliente
        const name = clientName.value.trim()
        const date = dayjs(dayInput.value).add(hour, "hour")

        // Retorna um erro caso o nome seja vazio
        if (!name){
            throw new Error("Nome do cliente necessário")
        }
        // Retorna um erro caso não tenha um horário selecionado
        if (!hour){
            throw new Error("Horário de agendamento necessário")
        }

        
        const id = new Date().getTime()

        const newScheduleInfo = {
            name,
            date,
            id
        }
        
        scheduleNew( newScheduleInfo )

    } catch(error){

        console.error(error)

    }
=======
import { hoursLoad } from "../schedules/hours-load.js"
import { userInfo } from "./user-info.js"
import { scheduleNew } from "../../servicesAPI/schedule-new.js"
import { scheduleFetchByDay } from "../../servicesAPI/schedule-fetch-by-date.js"

const form = document.querySelector("form")
const dateForm = document.getElementById("date")
const nameForm = document.getElementById("client")


form.addEventListener("submit", async (event) => {
    
    event.preventDefault()

    const valueDate = dateForm.value
    const scheduleFetched = await scheduleFetchByDay(valueDate)

    const hourSelected = document.querySelector(".hour-selected")
    const hour = hourSelected.textContent

    const [hourF] = hour.split(":")
    const date = dayjs(dateForm.value).add(hourF, "hour")
    const name = nameForm.value

    scheduleNew(userInfo({name, date}))

    hoursLoad({valueDate, scheduleFetched})

    // Reset
    nameForm.value = ""
>>>>>>> dce2434
})