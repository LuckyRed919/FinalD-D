const nav = document.querySelector("#nav");
const abrir =document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const easteregg = document.querySelector(".logo");


abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})


easteregg.addEventListener("click", () => {

    easteregg.classList.add("hidden");

    

})