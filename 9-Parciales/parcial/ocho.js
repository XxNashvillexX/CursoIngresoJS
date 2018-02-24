/*ingreso de alumnos, no se sabe cuantos hay. Se pide nombre, cuantos alumnos se ingreso.
con document.write mostrar la cantidad de alumnos ingresados.*/
function Mostrar()

{

	var alumno;
	var respuesta;
	var	cantDeAlumnos;

		while(alumno != "no")
		{
			alumno=prompt("ingrese nombre de alumno");
			cantDeAlumnos=cantDeAlumnos+1;
			alumno=prompt("¿desea ingresar otro alumno?")
		}

		document.write("la cantidad de alumnos es: " + cantDeAlumnos);
}
