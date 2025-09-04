const nombre = document.getElementById("nombres");
const errores = document.getElementById("errores");
const email = document.getElementById("email");
const clave1 = document.getElementById("clave1");
const clave2 = document.getElementById("clave2");
const form = document.getElementById("formulario");


nombre.addEventListener('keyup', function (e) {
    if (nombre.value.length < 3) {
        nombre.classList.add("error");
        errores.innerHTML = "Ingrese mínimo 3 letras.";
        errores.style.display = "flex";
    } else {
        nombre.classList.remove("error");
        errores.style.display = "none";
    }
});

email.addEventListener('keyup', function (e) {
    if (email.value.includes("@")) {
        email.classList.remove("error");
        errores.style.display = "none";
    } else {
        email.classList.add("error");
        errores.innerHTML = "Añade un signo arroba (@)!.";
        errores.style.display = "flex";
    }
});

clave2.addEventListener('keyup', function (e) {
    if (clave1.value == clave2.value) {
        clave2.classList.remove("error");
        errores.style.display = "none";
    } else {
        clave2.classList.add("error");
        errores.innerHTML = "Las claves no coinciden!.";
        errores.style.display = "flex";
    }
});

form.addEventListener('submit', function (e) {
    if (nombre.value.length < 3) {
        nombre.classList.add("error");
    }
    if (!email.value.includes("@")) {
        email.classList.add("error");
    }
    if (clave1.value != clave2.value || clave2.value == "") {
        clave2.classList.add("error");
    }
    document.querySelectorAll("input").forEach(el=>{
        if(el.classList.contains("error")){
            e.preventDefault();
            errores.innerHTML = "Revise los campos en rojo!.";
            errores.style.display = "flex";
            return;
        }
    })
})