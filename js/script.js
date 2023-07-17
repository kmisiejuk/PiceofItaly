const burgerBtn = document.querySelector(".fa-bars")
const burgerMenu = document.querySelector(".nav-items")
const navItem = document.querySelectorAll(".nav-item")
const nav = document.querySelector("nav")
const footerDate = document.querySelector(".footer-text")
const imgAll = document.querySelectorAll(".gallery img")
const popup = document.querySelector(".popup-image")
const popupImg = document.querySelector(".popup-image img")
const popupClose = document.querySelector(".popup-image span")
const arrowRight = document.querySelector(".arrow-right")
const gallery = document.querySelector(".gallery")

imgAll.forEach(image => {
	image.onclick = () => {
		popup.style.display = "block"
		popupImg.src = image.getAttribute("src")
		// nav.style.opacity = "0"
		nav.style.display = "none"
	}
})

const closePopUp = () => {
	popup.style.display = "none"
	// nav.style.opacity = "1"
	nav.style.display = "block"
}

const showBurgerMenu = () => {
	burgerMenu.classList.toggle("active")
}
const closeBurgerMenu = () => {
	burgerMenu.classList.toggle("active")
}

const changeBurgerColor = () => {
	if (window.scrollY >= 660) {
		burgerBtn.classList.add("black-burger-menu")
	} else {
		burgerBtn.classList.remove("black-burger-menu")
	}
}

const currentDate = new Date()
footerDate.innerHTML = footerDate.textContent + currentDate.getFullYear()

const slideGallery = () => {
	gallery.scrollLeft += 100
}

burgerBtn.addEventListener("click", showBurgerMenu)
navItem.forEach(item => item.addEventListener("click", closeBurgerMenu))
window.addEventListener("scroll", changeBurgerColor)
popupClose.addEventListener("click", closePopUp)
arrowRight.addEventListener("click", slideGallery)
