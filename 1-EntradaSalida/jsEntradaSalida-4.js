/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function Mostar()
{
	var nombre;
	nombre=prompt("ingresar nombre");
	document.getElementById('elNombre').value=nombre;
	//luego de ".value" debe colocarse el signo igual más la variable. en este caso nombre.
}

