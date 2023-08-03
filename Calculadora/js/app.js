function suma() {
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var r = document.getElementById("c").value;

    if (a == "" && b == "") {
        alert("Campos vacios")
    }else {
        r = parseFloat(a) + parseFloat(b);
        document.getElementById("c").value = r;

    }
}

function resta() {
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var r = document.getElementById("c").value;

    if (a == "" && b == "") {
        alert("Campos vacios")
    } else {
        r = parseFloat(a) - parseFloat(b);
        document.getElementById("c").value = r;
    }
}

function multiplicar() {
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var r = document.getElementById("c").value;

    if (a == "" && b == "") {
        alert("Campos vacios")
    } else {
        r = parseFloat(a) * parseFloat(b);
        document.getElementById("c").value = r;
    }
}

function dividir() {
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var r = document.getElementById("c").value;

    if (a == "" && b == "") {
        alert("Campos vacios")
    } else {
        r = parseFloat(a) / parseFloat(b);
        document.getElementById("c").value = r;
    }
}