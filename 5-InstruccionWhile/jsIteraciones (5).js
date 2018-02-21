function Mostrar()
{

	var	sexo;
	sexo=prompt("ingrese femenino ó masculino");
	
	while(!(sexo == "femenino" || sexo == "masculino"))
	{
		sexo=prompt("ingrese genero correcto");
	}

	document.getElementById('Sexo').value=sexo;
	

}//FIN DE LA FUNCIÓN