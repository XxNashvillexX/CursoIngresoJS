function Mostrar()
{

	var numero;
	var contador;
	var positivo;
	var negativo;
	var respuesta;

	contador=0;
	acumulador=0;
	positivo=0;
	negativo=1;
	respuesta="si";

	while(respuesta == "si")
	{
		contador++;
		numero=prompt("ingrese numero");
		numero=parseInt(numero);

		if (numero < 0)
		{
			negativo=negativo*numero;
		} 
		
		else
		{
		
			if (!(numero < 0))
			{
				positivo=positivo+numero;
			}
		}

	respuesta=prompt("¿Desea continuar?");

	}

	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN