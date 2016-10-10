var jugador1, jugador2, respuesta, piedra, papel, tijera;

	var jugador1 = prompt('JUGADOR 1 \n Este es el juego de piedra papel o tijera. \n Escribe tu respuesta: ');
	var jugador1 = String (jugador1);
	var jugador2 = prompt('JUGADOR 2 \nEste es el juego de piedra papel o tijera. \n Escribe tu respuesta: ');
	var jugador2 = String (jugador2);

	
var jugador1, jugador2, respuesta, piedra, papel, tijera;

for (i=1; i<=3; i++){
	var jugador1 = prompt('JUGADOR 1 \n Este es el juego de piedra papel o tijera. \n Escribe tu respuesta: ');
	var jugador1 = String (jugador1);
	var jugador2 = prompt('JUGADOR 2 \nEste es el juego de piedra papel o tijera. \n Escribe tu respuesta: ');
	var jugador2 = String (jugador2);

	if (jugador1 === 'piedra' && jugador2 === 'piedra'){
		document.write('Hay un empate');
	} else if (jugador1 === 'piedra' && jugador2 === 'papel'){
		document.write('Gana el jugador 1');
	} else if (jugador1 === 'piedra' && jugador2 === 'tijera'){
		document.write('Gana el jugador 1');
	} else if (jugador1 === 'papel' && jugador2 === 'piedra'){
		document.write('Gana el jugador 1');
	} else if (jugador1 === 'papel' && jugador2 === 'papel'){
		document.write('Hay un empate');
	} else if (jugador1 === 'papel' && jugador2 === 'tijera'){
		document.write('Gana el jugador 2');
	} else if (jugador1 === 'tijera' && jugador2 === 'piedra'){
		document.write('Gana el jugador 2');
	} else if (jugador1 === 'tijera' && jugador2 === 'papel'){
		document.write('Gana el jugador 1');
	} else if (jugador1 === 'tijera' && jugador2 === 'tijera'){
		document.write('Hay un empate');
	} else {
		alert('Esa no es una respuesta válida. Inténtalo de nuevo');
	}
}


