function Mostrar()
{

	var numero;
	numero=prompt("ingrese un número entre 0 y 10.");
	numero=parseInt(numero);
	

	while(!(numero > 0 && numero < 10 ))
	{
		numero=prompt("ingrese nuevamente el numero")
		numero=parseInt(numero);
	}

	numero=document.getElementById('Numero').value;
}//FIN DE LA FUNCIÓN