/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	
}

function restar()
{
	var numeroUno;
	var numeroDos;
	var	resultado;

	numeroUno=document.getElementById('numeroUno').value;
	numeroDos=document.getElementById('numeroDos').value;

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	resultado=(numeroUno-numeroDos);

	alert("la resta es " +resultado);
}

function multiplicar()
{ 
	
}

function dividir()
{
	
}

