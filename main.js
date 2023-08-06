const menu = document.getElementById("menu");
const abrir = document.getElementById("abrir")
const cerrar = document.getElementById("cerrar")

abrir.addEventListener("click", () =>{
    menu.classList.add("menu-visible")
})
cerrar.addEventListener("click", () =>{
    menu.classList.remove("menu-visible")
})