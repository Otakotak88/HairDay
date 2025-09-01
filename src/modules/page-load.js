import { showSchedulesToday } from "./schedules/hours-load.js"

const date = document.getElementById("date")

addEventListener("DOMContentLoaded", () => {

    showSchedulesToday()
})

date.onchange = () => showSchedulesToday()