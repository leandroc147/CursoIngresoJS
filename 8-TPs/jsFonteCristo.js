/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
function ComenzarIngreso () 
{

var num;
var c_par=0;
var c_impar=0;
var num_div;
var primo=true;
var c_primo=0;

num = document.getElementById('numero').value;

function NumerosPares ()
{
    if(num>1){

            for(i=1 ; i<num; i++){

            if(numero%2==0)
			c_par++;
            console.log(c_par);
            }
    
    }
    else{
        alert('Ingrese un número positivo');
}

}

function NumerosImpares ()
{

num = document.getElementById('numero').value;

    if(num>1){

            for(i=1 ; i<num; i++){

            if(numero%2==0)
			c_impar++;
            console.log(c_impar);
            }
    
    }
    else{
        alert('Ingrese un número positivo');
}
}

function NumerosDivisibles(){

    
}
function VerificarPrimo (){

num = document.getElementById('numero').value;

        if(num>1){

            for(i=2; i<num;i++){
                if(num%i==0){
                   console.log (num+' es primo');
                    break;

                }
                else{
                    console.log (num+ 'no es primo');
                }
            }
            
        }
        else{
            alert('Ingrese un número positivo');
        }
}

function NumerosPrimos (){
    
}
}