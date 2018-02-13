function Mostrar()
{
//tomo la edad  

	var edad;
	edad=document.getElementById('edad').value;

		if(edad<=12)
		
		{
			alert("Niño");
		}

		if(edad>=13&&edad<=17)
		
		{
			alert("Adolescente");
		}

		if(edad>=18)
		{
			alert("Mayor de edad");
		}
}//FIN DE LA FUNCIÓN