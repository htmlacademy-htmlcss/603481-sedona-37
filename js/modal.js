// Dialog 
const modalOpen = document.querySelector(".modal-open")
const modalClose = document.querySelector(".modal-button-close")
const dialog = document.querySelector(".modal-window")

modalOpen.addEventListener("click", function() {
    dialog.showModal()
})

modalClose.addEventListener("click", function() {
    dialog.close()
})
