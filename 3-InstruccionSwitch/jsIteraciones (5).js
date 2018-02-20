function Mostrar()
{

	var sexo 
	sexo=prompt("ingrese femenino ó masculino");

	while(!(sexo == "femenino" || sexo == "masculino"))
	{
		sexo=prompt("ingrese genero nuevamente")
	}

	if (sexo == "femenino")
	{
		alert("femenino")
	}
	else
	{
		alert("masculino")
	}


	document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN