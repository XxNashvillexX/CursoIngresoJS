function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';

	while(contador=="si")
	{
		contador++;
		numero=prompt("Ingrese numero");
		numero=parseInt(numero);
		acumulador= acumulador+numero;
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN