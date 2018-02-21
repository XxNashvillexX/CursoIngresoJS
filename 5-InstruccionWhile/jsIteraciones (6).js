function Mostrar()
{

	var numero;
	var contador;
	var iteraciones;
	var acumulador;
	var promedio;
	
	contador=0;
	acumulador=0;
	iteraciones=5;

	while(contador<iteraciones)
	{
		contador++;

		numero=prompt("ingrese numero");
		numero=parseInt(numero);
		
		acumulador=acumulador+numero;
	}

	promedio=acumulador/contador;

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=promedio;

}//FIN DE LA FUNCIÓN