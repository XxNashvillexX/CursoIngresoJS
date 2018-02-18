//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{

	var ancho;
	var largo;
	var perimetro;
	var metrosAlambre;

	ancho=document.getElementById('ancho').value;
	largo=document.getElementById('largo').value;
	perimetro=ancho*2+largo*2;
	metrosAlambre=perimetro*6;

	alert("se necesecitan colocar " +metrosAlambre+ " de alambre");

}

