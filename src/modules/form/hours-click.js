export function hoursClick(){
    const hoursAvailable = document.querySelectorAll(".hour-available")

    // Escuta o evento de click para todos os botões de hora
    hoursAvailable.forEach(hourBTN => {

        hourBTN.addEventListener("click", () => {

            // Remove a classe de todos os outros botões
            hoursAvailable.forEach(BTN => {
                BTN.classList.remove("hour-selected")
            })

            // Adiciona a classe no botão clicado
            hourBTN.classList.add("hour-selected")
        })
    })
}