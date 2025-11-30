// Menu Mobile Toggle
const menuToggle = document.getElementById("menuToggle")
const navMenu = document.getElementById("navMenu")

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active")
})

// Fechar menu ao clicar em link
document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active")
  })
})

// Theme Toggle
const themeToggle = document.getElementById("themeToggle")
const themes = ["light", "dark", "purple", "green"]
let currentThemeIndex = 0

// Carregar tema salvo
const savedTheme = localStorage.getItem("theme") || "light"
document.documentElement.setAttribute("data-theme", savedTheme)
currentThemeIndex = themes.indexOf(savedTheme)

themeToggle.addEventListener("click", () => {
  currentThemeIndex = (currentThemeIndex + 1) % themes.length
  const newTheme = themes[currentThemeIndex]
  document.documentElement.setAttribute("data-theme", newTheme)
  localStorage.setItem("theme", newTheme)
})

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Form Submit
const contatoForm = document.getElementById("contatoForm")
contatoForm.addEventListener("submit", (e) => {
  e.preventDefault()
  alert("Mensagem enviada com sucesso! Entraremos em contato em breve.")
  contatoForm.reset()
})
