function Mostrar()
{
	var precio;
	var importeFinal;

	precio=prompt("Ingrese importe de producto");
	importeFinal=precio*1.21;

	document.getElementById('importeFinal').value=importeFinal;
}

