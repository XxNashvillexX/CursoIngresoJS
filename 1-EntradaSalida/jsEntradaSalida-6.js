/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{	
	//paso 1: creacion de variables.
	var numeroUno;
	var numeroDos;
	var resultado;
	//paso 2: se toman numeros por ID (g+TAB, luego shift+"I").
	numeroUno=document.getElementById('numeroUno').value;
	numeroDos=document.getElementById('numeroDos').value;
	//paso 3: por medio de la funcion parseInt, se hace un pasaje de palabra a numero entero.
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	//paso 4: sumando una variable con otra, se obtiene el resultado.
	resultado=(numeroUno+numeroDos);
	//paso 5: por alert se muestra dicho resultado.
	alert(resultado);
}	

