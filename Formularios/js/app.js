var lista = ["mango"];

function agragardato() {
    let nombre = document.getElementById("nombre").value

    if (nombre == "") {
        alert("Campos vacios")
    } else {
        lista.push(nombre);
        alert("Registro Exitoso");
        document.getElementById("nombre").value = "";

    }

    console.log(lista);
}
function buscardato() {
    let datos = document.getElementById("dato").value;
    let encontrado = false;

    for (let item = 0; item < lista.length; item++) {

        if (lista[item] === datos) {
            encontrado = true;
            document.getElementById("dato").value = "";
            break;
        }
    }
    alert(encontrado ? "dato Existente " : "dato no Existente");
}

function eliminarprimero() {

    lista.shift();
    alert("Primer Dato eliminado")
    console.log(lista);

}

function eliminarultimo() {

    lista.pop();
    alert("Ultimo Dato eliminado")
    console.log(lista);


}

function eliminarunico() {

    let datos = document.getElementById("dato").value;
    let leng = lista.length;

    for (let index = 0; index < leng; index++) {

        if (datos == lista[index]) {
            delete lista[index];
            alert("dato Eliminado");
        } else {
            alert("dato no Existente");
        }
    }
    console.log(lista);
}

function mostrar() {
    let Len = lista.length;

    let text = "<ul>";
    for (let i = 0; i < Len; i++) {
        text += "<li>" + lista[i] + "</li>";
    } text += "</ul>";
    document.getElementById("mostrar").innerHTML = text;
}