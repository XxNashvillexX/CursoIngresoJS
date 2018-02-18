function Mostrar()
{
	var text1;
	var text2;
	var	text3;
	var	numeroUno;
	var numeroDos;
	var resultado;

	text1=("Negativo");
	text2=("Positivo");
	text3=("cero");
	numeroUno=prompt("ingrese primer numero");
	numeroUno=parseInt(numeroUno);
	numeroDos=prompt("ingrese segundo numero");
	numeroDos=parseInt(numeroUno);

	resultado=numeroUno+numeroDos;

		if (resultado <= -1)
		
		{
			document.write(text1)
		}

		else

		{
			if (resultado >= 1)
			
			{
				document.write(text2)
			}

			else

			{
				document.write(text3)
			}
		}
}
