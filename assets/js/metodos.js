//nombres
function names() {
    let resp="";
    resp = document.getElementById("txtnombre").value;
    document.getElementById("respn").innerHTML="<p> Nombre: </p>"+ resp;

}

//radio buttons
function radbut() {
  let cradio = document.querySelector("input[name='rd']:checked");
  if (cradio != null) {
    document.getElementById("resprb").innerHTML =
      "<p>Seleccion edad: </p>" +cradio.value;
  } else {
    alert("Seleccione una opción");
  }
}

//cbox
function cbx() {
    let resp="";
  if (document.getElementById("cb1").checked) {
    resp += document.getElementById("cb1").value+" ";
  }
  if (document.getElementById("cb2").checked) {
    resp += document.getElementById("cb2").value +" ";
  }
  if (document.getElementById("cb3").checked) {
    resp += document.getElementById("cb3").value+" ";
  }
  if (document.getElementById("cb4").checked) {
    resp += document.getElementById("cb4").value+" ";
  }
  //alert("Seleccionadas: "+cont);
  document.getElementById("respbc").innerHTML="<p> Seleccion servicio: </p>"+ resp;

}

//options
function opt() {
    var selection = document.getElementById("rg");
    let tmp = selection.options[selection.selectedIndex].value;
  document.getElementById("respop").innerHTML="<p> Seleccion region: </p>"+ tmp;

}