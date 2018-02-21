function Mostrar()
{

	var contador
	var contador0;
	var contador1=1;
	var contador2=2;
	var contador3=3;
	var contador4=4;
	var contador5=5;
	var contador6=6;
	var contador7=7;
	var contador8=8;
	var contador9=9;
	var numeroRandom;

	for(contador=0;contador<100;contador++)
	{
		numeroRandom=Math.floor(Math.random() * 10);
		document.write("<br><br>" + numeroRandom);
		
		switch(numeroRandom)
		{
			case 0:
				contador0++;
				break;

			case 1:
				contador1++;
				break;

			case 2:
				contador2++;
				break;

			case 3:
				contador3++;
				break;

			case 4:
				contador4++;
				break;

			case 5:
				contador5++;
				break;

			case 6:
				contador6++;
				break;

			case 7:
				contador7++;
				break;

			case 8:
				contador8++;
				break;

			case 9:
				contador9++;
				break;	
		}
	}

	document.write("cero: " + contador0);
	document.write("uno: " + contador1);
	document.write("dos" +	contador2);
	document.write("tres" + contador3);
	document.write("cuatro" + contador4);
	document.write("cinco" + contador5);
	document.write("seis" + contador6);
	document.write("siete" + contador7);
	document.write("ocho" + contador8);
	document.write("nueve" + contador9);
}//FIN DE LA FUNCIÓN