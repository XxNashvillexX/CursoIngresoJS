function Mostrar()
{

	var numero;
	var contador;
	var acumulador;
	var promedio;
	var respuesta;

	contador=0;
	acumulador=0;
	respuesta="si";

	while(respuesta == "si")
	{
		contador++;

		numero=prompt("ingrese numero");
		numero=parseInt(numero);

		acumulador=acumulador+numero;

		respuesta=prompt("¿Desea continuar?");
	}

	promedio=acumulador/contador;

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=promedio;

}//FIN DE LA FUNCIÓN