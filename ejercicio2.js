var nombres=[ ];

for (var i=1; i<=3; i++){
	nombres.push (prompt('Ingresa el nombre de la persona '+ (i)));
}

document.write('El contenido del arreglo es: ' + (nombres));