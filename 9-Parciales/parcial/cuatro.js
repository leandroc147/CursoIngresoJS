function Mostrar()
{
var num1;
var num2;
var resultado;

num1 = prompt('Ingrese un número');
num2 = prompt('Ingrese otro número');

    if(num1 == num2){
        resultado = num1 * num2;
    }
    else if(num1 > num2){
        resultado = num1 - num2;
    }
    else{
        resultado = num1 + num2;
    }

     document.write(resultado).value;
}
