function saludar(nombre) {
  alert("Hello world! " + nombre);
  const vim = document.getElementById("vim")
  vim.innerHTML = "Hola " + nombre
  console.log('Hello este es un dato desde vim ' + vim.innerHTML)
}

function validar() {
  const inputEdad = document.getElementById("edad");
  let edad = inputEdad.value

  if (edad > 17) {
    alertify.success("usted es mayor de edad");

  } else {
    alertify.error("usted es menor de edad");

  }
}

function pareImpar() {
  const input = document.getElementById("edad");
  let tamano = input.value
  let par = 0;
  let impar = 0;


  for (let index = 0; index < tamano; index++) {
    if (index % 2 == 0) {
      par++;
    } else {
      impar++
    }
  }
  alertify.success("la cantidad de pares son: " + par);
  alertify.warning("la cantidad de impares son: " + impar);


}

var filas = [];

var row = "";
function agregarfila() {
  const correo = document.getElementById('email');
  const texto = document.getElementById('descripcion');
  //const adds = document.getElementById('add');

  row += `<tr>
            <th scope ="row" style="background-color: beige;">${correo.value}</th>
            <td style="background-color: beige;">${texto.value} </td> 
            <td style="background-color: beige;"> <a href="#" onclick="actualizar()" class="btn btn-primary"> Actualizar</a> </td>
            <td style="background-color: beige;"> <a href="#" onclick="eliminar()" class="btn btn-danger"> Eliminar</a> </td>
          </tr> `;

  filas.push(row);
  correo.value = "";
  texto.value = "";
  console.log(filas);


  /*if (correo.value == "") {
    alertify.danger("campos vacios")
  } else {
    row += `<tr>
    <th scope ="row">${correo.value}</th>
    <td>${texto.value}</td>
</tr `;

    adds.innerHTML = row;
    filas.push(correo.value + " " + texto.value);
    alertify.success("Dato Enviado")
    console.log(filas);

  }*/

}

function leerarray() {
  const adds = document.getElementById('add');

  filas.forEach(item => {
  adds.innerHTML = item;
  });


  /*const adds = document.getElementById('add');

  adds.innerHTML = filas;*/
}

function actualizar(){
alert("Hola Este Boton de Actualizar Funciona");
a = prompt("Correo: ");
b = prompt("Descripcion: ");
}

function eliminar() {
alert("Hola Este Boton de Eliminar Funciona");
}