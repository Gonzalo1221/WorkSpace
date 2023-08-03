const person = {
    firstName: 'John',
    lastName: 'Doe',
    id: 5566,
    fullName: function () {
        return this.firstName + '<br >' + this.lastName;
    }
};

function nombrecompleto() {
    document.getElementById("example").innerHTML = person.fullName();
}

const myObj = {
    name: "john",
    age: 30,
    cars: {
        car1: "Ford",
        car2: "BMW",
        car3: "Fiat",
    }
    /*fullobj: function () {
        return this.name +'<br >'+ this.cars.car2;
    }*/
}
function nombreauto() {
    document.getElementById("example2").innerHTML = myObj.fullobj();
}
function recorrer() {
    for (o in myObj.cars){
        alert(myObj.cars[o]);
    }
}