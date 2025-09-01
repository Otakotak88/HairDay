import dayjs from "dayjs"
import { clientInfo } from "./client-info.js"

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

        clientInfo(name, date)

    } catch(error){

        console.error(error)

    }
})