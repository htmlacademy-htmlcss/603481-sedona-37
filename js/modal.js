// Dialog 
const modalOpen = document.querySelector(".modal-open")
const modalClose = document.querySelector(".modal-close-button")
const dialog = document.querySelector(".modal-window")

modalOpen.addEventListener("click", function() {
    dialog.showModal()
})

modalClose.addEventListener("click", function() {
    dialog.close()
})
