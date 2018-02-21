function Mostrar()
{

	var	numero;
	numero=prompt("ingrese un número entre 0 y 10.");
	numero=parseInt(numero);

	while(!(numero > 0 && numero < 10))
	{
		numero=prompt("ingrese un numero correcto");
	}

	alert("numero correcto");

}//FIN DE LA FUNCIÓN