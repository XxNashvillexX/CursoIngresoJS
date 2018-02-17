function Mostrar()
{
	var numeroUno;
	var numeroDos;

	numeroUno=prompt("Ingresar primer numero");
	numeroDos=prompt("Ingresar segundo numero");

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

		if (numeroUno == numeroDos)
			{
				alert(numeroUno*numeroDos)
			}

		else
			{
				if (numeroUno > numeroDos)
				{
						alert(numeroUno-numeroDos)
				}

				else
				{
					if (numeroUno < numeroDos)
					{
						alert(numeroUno+numeroDos)
					}
				}
			}


}
