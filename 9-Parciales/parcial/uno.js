
function Mostrar()
{
// 1

var base;
var alt = 5;
var resultado;

base = document.getElementById('laBase').value;
base = parseInt(base);

resultado = base * alt;

alert('El perímetro es '+resultado);
}
