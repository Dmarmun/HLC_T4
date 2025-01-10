function hojaEstilo(tema){
    let estilo=document.getElementById("estilo")
    switch (tema) {
        case "claro":
            estilo.setAttribute("href", "claro.css")
        break;
        case "oscuro":
            estilo.setAttribute("href", "oscuro.css")
        break;
        case "azul":
            estilo.setAttribute("href", "azul.css")
        break;
        case "rosa":
            estilo.setAttribute("href", "rosa.css")
        break;
        case "verde":
            estilo.setAttribute("href", "verde.css")
        break;
    }
}
function borrarNota(event) {
    const nota=event.target.parentElement;
    nota.remove();
}
function borrarTodasNotas() {
    const notas=document.getElementById("notas");
    while (notas.firstChild) {
        notas.removeChild(notas.firstChild);
    }
}
function crearNota() {
    document.getElementById("mensaje").classList.add("oculto");
    const texto=document.getElementById("texto");
    const div=document.createElement("div");
    div.textContent=texto.value;
    div.classList.add("nota");

    const botonBorrar=document.createElement("button");
    botonBorrar.textContent="Eliminar";
    botonBorrar.addEventListener("click", borrarNota);
    div.appendChild(botonBorrar);

    document.getElementById("notas").insertBefore(div, document.getElementById('notas').firstChild);
    texto.value="";

    botonBorrarTodas.classList.remove("oculto");
}
const botonBorrarTodas = document.createElement("button");
botonBorrarTodas.classList.add('oculto');
botonBorrarTodas.textContent = 'Eliminar todas las notas';
botonBorrarTodas.addEventListener('click', borrarTodasNotas);
document.body.appendChild(botonBorrarTodas);
document.getElementById("texto").addEventListener("keydown", function comprobarEnter(event) {
    if (event.key==="Enter") {
    event.preventDefault();
    agregarNota();
    }
});