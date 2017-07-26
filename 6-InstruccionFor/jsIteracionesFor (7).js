function Mostrar()
{

var num;
var cont_divisores=0;

    num = prompt('ingrese un número');
    num = parseInt(num);

        for(i=1; i<=num;i++){

            if(i%2==0){
                cont_divisores++;
            }
             console.log=('Se encontraron: '+cont_divisores+' Divisores');
        }
       


}//FIN DE LA FUNCIÓN