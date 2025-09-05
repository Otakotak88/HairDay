import dayjs from "dayjs"
import { hoursLoad } from "./schedules/hours-load.js"
import { scheduleFetchByDay } from "../servicesAPI/schedule-fetch-by-date";

const date = document.getElementById("date")

document.addEventListener("DOMContentLoaded", async () => {

    date.value = dayjs(new Date()).format("YYYY-MM-DD")
    date.min = dayjs(new Date()).format("YYYY-MM-DD")
    
    const valueDate = date.value
    const scheduleFetched = await scheduleFetchByDay(valueDate)
    
    hoursLoad({ valueDate, scheduleFetched })

})

date.addEventListener("change", async () => {
    const valueDate = date.value
    const scheduleFetched = await scheduleFetchByDay(valueDate)

    hoursLoad({valueDate, scheduleFetched})
})
