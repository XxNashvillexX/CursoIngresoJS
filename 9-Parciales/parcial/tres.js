function Mostrar()
{
	var largo;
	var ancho;
	var perimetro;
	var metros;

	largo=document.getElementById('largo').value;
	ancho=document.getElementById('ancho').value;
	perimetro=largo*2+ancho*2;
	metros=perimetro*3;

	alert("el perimetro es de " + perimetro+ " metros");
	alert("se necesecitan " +metros+ " de alambre")


}
