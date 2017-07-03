function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);

if (mesDelAño != "Febrero")
{    
    alert ("Este mes tiene 30 días o más");
}
else
{
    alert ("Este mes no tiene mas de 29 días");
}

/*	
switch (mesDelAño)
{
    case "Febrero":
        alert(" Este mes no tiene más de 29 días." );
        break;

     default:
        case "Enero":
        case "Marzo":
        case "Abril":
        case "Mayo":
        case "Junio":
        case "Julio":
        case "Agosto":
        case "Septiembre":
        case "Octubre":
        case "Noviembre":
        case "Diciembre":  
       
        alert("Este mes tiene 30 o más días");
   

}	
*/

}//FIN DE LA FUNCIÓN