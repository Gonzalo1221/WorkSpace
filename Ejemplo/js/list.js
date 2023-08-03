const myObj = {
    name: 'john',
    age: 30,
    cars: [
        { url: '', name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
        { url: '', name: "BMW", models: ["320", "X3", "X5"] },
        { url: '', name: "Fiat", models: ["500", "Panda"] }
    ],
    mostrarnombre: function () {
        return this.name;
    },
    mostraredad: function () {
        return this.age;
    }
};

window.onload = function mostrar() {
    document.getElementById("nombre").innerHTML += myObj.mostrarnombre();
    document.getElementById("edad").innerHTML += myObj.mostraredad();

    for (items in myObj.cars) {
        if (items == '0') {
            document.getElementById("nombreauto1").innerHTML += myObj.cars[items].name;
            document.getElementById("detalles1").innerHTML += myObj.cars[items].models;

        }
    }
}