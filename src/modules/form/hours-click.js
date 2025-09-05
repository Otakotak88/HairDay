

export function hoursClick(){
    const hoursAvailable = document.querySelectorAll(".hour-available")
    
    hoursAvailable.forEach(hour => {
        hour.addEventListener("click", () => {
            hoursAvailable.forEach(hour => {
                hour.classList.remove("hour-selected")
            })
            hour.classList.add("hour-selected")
        })
    })
}