function Mostrar()
{
	
	// declarar variables
	var numero;
	var contador;
	var minimo;
	var maximo;
	var respuesta;

	contador=0;
	respuesta="si";

	while(respuesta == "si")
	{
		contador++;
		numero=prompt("Ingrese numero");
		numero=parseInt(numero);

			if (contador == 1)
			{
				maximo=numero;
				minimo=numero;
			}
			else

			{
				if (numero > maximo)
				{
					maximo = numero;
				}

				else 
				{
					if (numero < minimo)
					{
						minimo=numero;
					}
				}
			}

	respuesta=prompt("¿desea continuar?");

	
	}

	document.getElementById('minimo').value=minimo;
	document.getElementById('maximo').value=maximo;

}
/*
var contador=0;
	// declarar variables
	var numero;
	var maximo;
	var minimo;
	var respuesta='si';

	while(respuesta!='no')
	{
		contador++;
		numero=prompt("Ingrese número");
		numero=parseInt(numero);
		
		if(contador==1)
		{
			maximo=minimo=numero;
		}
		else
		{
			if(numero>maximo)
			{
				maximo=numero;
			}
			else
			{
				minimo=numero;
			}
		}
		respuesta=prompt("no=detener");
	}
	document.getElementById('maximo')=maximo;
	document.getElementById('minimo')=minimo;

}//FIN DE LA FUNCIÓN
*/