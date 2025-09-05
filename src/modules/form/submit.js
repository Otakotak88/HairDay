import dayjs from "dayjs"
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
})