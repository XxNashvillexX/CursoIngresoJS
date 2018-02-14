function Mostrar()
{
//tomo la edad  
	var mesDelAño = document.getElementById('mes').value;
//con swicth no se utiliza ";" luego introducir una variable.
	switch(mesDelAño)
	{
	case "Enero":
			alert("que comiences bien el año!!!");

		break;

	case "Marzo":
			alert("a clases!!!");

		break;
	
	case "Julio":
			alert("se vienen las vacaciones!!!");

		break;

	case "Diciembre":
			alert("Felices fiesta!!!");

		break;
	}


}//FIN DE LA FUNCIÓN