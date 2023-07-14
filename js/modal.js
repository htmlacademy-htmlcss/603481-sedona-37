// Dialog 
const modalOpen = document.querySelector(".modal-open")
const dialogClose = document.querySelector(".modal-close-button")
const dialog = document.querySelector(".modal-window")

modalOpen.addEventListener("click", function() {
    dialog.showModal()
})

dialogClose.addEventListener("click", function() {
    dialog.close()
})
