//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{

	var numeroUno;
	var numeroDos;

	numeroUno=prompt("Ingrese primer numero");
	numeroUno=parseInt(numeroUno);
	numeroDos=prompt("Ingrese segundo numero");
	numeroDos=parseInt(numeroDos);
		
		if (numeroUno == numeroDos)
			
		{
			document.write(numeroUno*numeroDos)
		}

		else
			
		{
			if (numeroUno > numeroDos)
			
			{
				document.write(numeroUno-numeroDos)
			} 

			else

			{
				document.write(numeroUno+numeroDos)
			}
		}
	
}

