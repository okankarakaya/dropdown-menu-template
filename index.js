const hamburgerIcon = document.querySelector(".hamburger-menu")
const dropdownMenu = document.querySelector(".dropdown-menu")

hamburgerIcon.addEventListener("click", () => {
    dropdownMenu.classList.toggle("active")
})
