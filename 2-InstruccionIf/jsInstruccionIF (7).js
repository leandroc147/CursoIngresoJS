function Mostrar()
{
//tomo la edad  

var Edad
var Ecivil

Edad = document.getElementById ("edad").value;
Ecivil = document.getElementById ("estadoCivil").value;

if (Edad <18 && Ecivil == "Casado")
alert ("Es muy pequeño para NO ser soltero")

if (Edad <18 && Ecivil == "Divorciado")
alert ("Es muy pequeño para ser divorciado")


}//FIN DE LA FUNCIÓN