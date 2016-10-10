var jugador1, jugador2, respuesta, piedra, papel, tijera;

	var jugador1 = prompt('JUGADOR 1 \n Este es el juego de piedra papel o tijera. \n Escribe tu respuesta: ');
	var jugador1 = String (jugador1);
	var jugador2 = prompt('JUGADOR 2 \nEste es el juego de piedra papel o tijera. \n Escribe tu respuesta: ');
	var jugador2 = String (jugador2);

	/*if (jugador1 === 'piedra' && jugador2 === 'piedra'){
		respuesta1 = 'empate';
	} else if (jugador1 === 'piedra' && jugador2 === 'papel'){
		respuesta1 = 'jugador 1';
	} else if (jugador1 === 'piedra' && jugador2 === 'tijera'){
		respuesta1 = 'jugador 1';
	} else if (jugador1 === 'papel' && jugador2 === 'piedra'){
		respuesta1 = 'jugador 1';
	} else if (jugador1 === 'papel' && jugador2 === 'papel'){
		respuesta1 = 'empate';
	} else if (jugador1 === 'papel' && jugador2 === 'tijera'){
		respuesta1 = 'jugador 2';
	} else if (jugador1 === 'tijera' && jugador2 === 'piedra'){
		respuesta1 = 'jugador 2';
	} else if (jugador1 === 'tijera' && jugador2 === 'papel'){
		respuesta1 = 'jugador 1';
	} else if (jugador1 === 'tijera' && jugador2 === 'tijera'){
		respuesta1 = 'empate';
	} else {
		respuesta1 = 'Esa no es una respuesta válida. Inténtalo de nuevo';
	}

	if (jugador1 === 'piedra' && jugador2 === 'piedra'){
		respuesta2 = 'empate';
	} else if (jugador1 === 'piedra' && jugador2 === 'papel'){
		respuesta2 = 'jugador 1';
	} else if (jugador1 === 'piedra' && jugador2 === 'tijera'){
		respuesta2 = 'jugador 1';
	} else if (jugador1 === 'papel' && jugador2 === 'piedra'){
		respuesta2 = 'jugador 1';
	} else if (jugador1 === 'papel' && jugador2 === 'papel'){
		respuesta2 = 'empate';
	} else if (jugador1 === 'papel' && jugador2 === 'tijera'){
		respuesta2 = 'jugador 2';
	} else if (jugador1 === 'tijera' && jugador2 === 'piedra'){
		respuesta2 = 'jugador 2';
	} else if (jugador1 === 'tijera' && jugador2 === 'papel'){
		respuesta2 = 'jugador 1';
	} else if (jugador1 === 'tijera' && jugador2 === 'tijera'){
		respuesta2 = 'empate';
	} else {
		respuesta2 = 'Esa no es una respuesta válida. Inténtalo de nuevo';
	}

	if (jugador1 === 'piedra' && jugador2 === 'piedra'){
		respuesta3 = 'empate';
	} else if (jugador1 === 'piedra' && jugador2 === 'papel'){
		respuesta3 = 'jugador 1';
	} else if (jugador1 === 'piedra' && jugador2 === 'tijera'){
		respuesta3 = 'jugador 1';
	} else if (jugador1 === 'papel' && jugador2 === 'piedra'){
		respuesta3 = 'jugador 1';
	} else if (jugador1 === 'papel' && jugador2 === 'papel'){
		respuesta3 = 'empate';
	} else if (jugador1 === 'papel' && jugador2 === 'tijera'){
		respuesta3 = 'jugador 2';
	} else if (jugador1 === 'tijera' && jugador2 === 'piedra'){
		respuesta3 = 'jugador 2';
	} else if (jugador1 === 'tijera' && jugador2 === 'papel'){
		respuesta3 = 'jugador 1';
	} else if (jugador1 === 'tijera' && jugador2 === 'tijera'){
		respuesta3 = 'empate';
	} else {
		respuesta3 = 'Esa no es una respuesta válida. Inténtalo de nuevo';
	}

if (respuesta1 == jugador1 && respuesta2 == jugador1 && respuesta3 == jugador1){
var ganador = 'Gana el jugador 1';
} else if (respuesta1 == 'jugador 1' && respuesta2 == 'jugador 1' && respuesta3 == 'jugador 2'){
	ganador = 'Gana el jugador 1';
} else if (respuesta1 == 'jugador 1' && respuesta2 == 'jugador 2' && respuesta3 == 'jugador 1'){
	ganador = 'Gana el jugador 1';
} else if (respuesta1 == 'jugador 2' && respuesta2 == 'jugador 1' && respuesta3 == 'jugador 1'){
	ganador = 'Gana el jugador 1';
} else if (respuesta1 == 'jugador 2' && respuesta2 == 'jugador 2' && respuesta3 == 'jugador 2'){
	ganador = 'Gana el jugador 2';
} else if (respuesta1 == 'jugador 2' && respuesta2 == 'jugador 2' && respuesta3 == 'jugador 1'){
	ganador = 'Gana el jugador 2';
} else if (respuesta1 == 'jugador 2' && respuesta2 == 'jugador 1' && respuesta3 == 'jugador 2'){
	ganador = 'Gana el jugador 2';
} else if (respuesta1 == 'jugador 1' && respuesta2 == 'jugador 2' && respuesta3 == 'jugador 2'){
	ganador = 'Gana el jugador 2';
} else if (respuesta1 == 'empate' && respuesta 2 == 'empate' && respuesta 3 == 'empate');{
	ganador = 'Empate';
} else if (respuesta1 == 'empate' && respuesta 2 == 'empate' && respuesta 3 == 'jugador1'){
	ganador = 'Empate';
} else if (respuesta1 == 'empate' && respuesta 2 == 'jugador1' && respuesta 3 == 'empate'){
	ganador = 'Empate';
} else if (respuesta1 == 'jugador1' && respuesta 2 == 'empate' && respuesta 3 == 'empate'){
	ganador = 'Empate';
} } else if (respuesta1 == 'empate' && respuesta 2 == 'empate' && respuesta 3 == 'jugador2'){
	ganador = 'Empate';
} else if (respuesta1 == 'empate' && respuesta 2 == 'jugador2' && respuesta 3 == 'empate'){
	ganador = 'Empate';
} else if (respuesta1 == 'jugador2' && respuesta 2 == 'empate' && respuesta 3 == 'empate'){
	ganador = 'Empate';
} } else if (respuesta1 == 'empate' && respuesta 2 == 'jugador1' && respuesta 3 == 'jugador2'){
	ganador = 'Empate';
} else if (respuesta1 == 'empate' && respuesta 2 == 'jugador2' && respuesta 3 == 'jugador1'){
	ganador = 'Empate';
} else if (respuesta1 == 'jugador1' && respuesta 2 == 'empate' && respuesta 3 == 'jugador2'){
	ganador = 'Empate';
} else if (respuesta1 == 'jugador2' && respuesta 2 == 'empate' && respuesta 3 == 'jugador1'){
	ganador = 'Empate';
} else if (respuesta1 == 'jugador1' && respuesta 2 == 'jugador2' && respuesta 3 == 'empate'){
	ganador = 'Empate';
} else if (respuesta1 == 'jugador2' && respuesta 2 == 'jugador1' && respuesta 3 == 'empate'){
	ganador = 'Empate';


document.write(ganador);*/




var jugador1, jugador2, respuesta, piedra, papel, tijera;
var = respuestas[ ];


for (i=1; i<=3; i++){
	var jugador1 = prompt('JUGADOR 1 \n Este es el juego de piedra papel o tijera. \n Escribe tu respuesta: ');
	var jugador1 = String (jugador1);
	var jugador2 = prompt('JUGADOR 2 \nEste es el juego de piedra papel o tijera. \n Escribe tu respuesta: ');
	var jugador2 = String (jugador2);

	if (jugador1 === 'piedra' && jugador2 === 'piedra'){
		document.write('Hay un empate');
	} else if (jugador1 === 'piedra' && jugador2 === 'papel'){
		document.write('Gana la jugador 1');
	} else if (jugador1 === 'piedra' && jugador2 === 'tijera'){
		document.write('Gana la jugador 1');
	} else if (jugador1 === 'papel' && jugador2 === 'piedra'){
		document.write('Gana la jugador 1');
	} else if (jugador1 === 'papel' && jugador2 === 'papel'){
		document.write('Hay un empate');
	} else if (jugador1 === 'papel' && jugador2 === 'tijera'){
		document.write('Gana la jugador 2');
	} else if (jugador1 === 'tijera' && jugador2 === 'piedra'){
		document.write('Gana la jugador 2');
	} else if (jugador1 === 'tijera' && jugador2 === 'papel'){
		document.write('Gana la jugador 1');
	} else if (jugador1 === 'tijera' && jugador2 === 'tijera'){
		document.write('Hay un empate');
	} else {
		alert('Esa no es una respuesta válida. Inténtalo de nuevo');
	}
}


/*function darRespuesta1(respuesta1){

	if (jugador1 === 'piedra' && jugador2 === 'piedra'){
		r1 = 'empate';
	} else if (jugador1 === 'piedra' && jugador2 === 'papel'){
		r1 = 'jugador 1';
	} else if (jugador1 === 'piedra' && jugador2 === 'tijera'){
		r1 = 'jugador 1';
	} else if (jugador1 === 'papel' && jugador2 === 'piedra'){
		r1 = 'jugador 1';
	} else if (jugador1 === 'papel' && jugador2 === 'papel'){
		r1 = 'empate';
	} else if (jugador1 === 'papel' && jugador2 === 'tijera'){
		r1 = 'jugador 2';
	} else if (jugador1 === 'tijera' && jugador2 === 'piedra'){
		r1 = 'jugador 2';
	} else if (jugador1 === 'tijera' && jugador2 === 'papel'){
		r1 = 'jugador 1';
	} else if (jugador1 === 'tijera' && jugador2 === 'tijera'){
		r1 = 'empate';
	}

	return r1;
}	

darRespuesta1(respuesta1);

function darRespuesta2(respuesta2){

	if (jugador1 === 'piedra' && jugador2 === 'piedra'){
		r2 = 'empate';
	} else if (jugador1 === 'piedra' && jugador2 === 'papel'){
		r2 = 'jugador 1';
	} else if (jugador1 === 'piedra' && jugador2 === 'tijera'){
		r2 = 'jugador 1';
	} else if (jugador1 === 'papel' && jugador2 === 'piedra'){
		r2 = 'jugador 1';
	} else if (jugador1 === 'papel' && jugador2 === 'papel'){
		r2 = 'empate';
	} else if (jugador1 === 'papel' && jugador2 === 'tijera'){
		r2 = 'jugador 2';
	} else if (jugador1 === 'tijera' && jugador2 === 'piedra'){
		r2 = 'jugador 2';
	} else if (jugador1 === 'tijera' && jugador2 === 'papel'){
		r2 = 'jugador 1';
	} else if (jugador1 === 'tijera' && jugador2 === 'tijera'){
		r2 = 'empate';
	}

	return r2;
}	

darRespuesta1(respuesta2);

function darRespuesta3(respuesta3){

	if (jugador1 === 'piedra' && jugador2 === 'piedra'){
		r3 = 'empate';
	} else if (jugador1 === 'piedra' && jugador2 === 'papel'){
		r3 = 'jugador 1';
	} else if (jugador1 === 'piedra' && jugador2 === 'tijera'){
		r3 = 'jugador 1';
	} else if (jugador1 === 'papel' && jugador2 === 'piedra'){
		r3 = 'jugador 1';
	} else if (jugador1 === 'papel' && jugador2 === 'papel'){
		r3 = 'empate';
	} else if (jugador1 === 'papel' && jugador2 === 'tijera'){
		r3 = 'jugador 2';
	} else if (jugador1 === 'tijera' && jugador2 === 'piedra'){
		r3 = 'jugador 2';
	} else if (jugador1 === 'tijera' && jugador2 === 'papel'){
		r3 = 'jugador 1';
	} else if (jugador1 === 'tijera' && jugador2 === 'tijera'){
		r3 = 'empate';
	}

	return r3;
}	

darRespuesta3(respuesta3);

var respuesta1 = prompt('Este es el juego de piedra papel o tijera. \n Escribe tu respuesta: ');
var respuesta1 = String (respuesta1);
var respuesta2 = prompt('Este es el juego de piedra papel o tijera. \n Escribe tu respuesta: ');
var respuesta2 = String (respuesta2);

if (r1 == jugador1 && r2 == jugador1 && r3 == jugador1){
	var ganador = 'Gana el jugador 1';
} else if (r1 == jugador1 && r2 == jugador1 && r3 == jugador2){
	ganador = 'Gana el jugador 1';
} else if (r1 == jugador1 && r2 == jugador2 && r3 == jugador1){
	ganador = 'Gana el jugador 1';
} else if (r1 == jugador2 && r2 == jugador1 && r3 == jugador1){
	ganador = 'Gana el jugador 1';
} else if (r1 == jugador2 && r2 == jugador2 && r3 == jugador2){
	ganador = 'Gana el jugador 2';
} else if (r1 == jugador2 && r2 == jugador2 && r3 == jugador1){
	ganador = 'Gana el jugador 2';
} else if (r1 == jugador2 && r2 == jugador1 && r3 == jugador2){
	ganador = 'Gana el jugador 2';
} else if (r1 == jugador1 && r2 == jugador2 && r3 == jugador2){
	ganador = 'Gana el jugador 2';


document.write(ganador);*/