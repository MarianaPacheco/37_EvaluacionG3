/*Definir una función que determine si la cadena de texto que se le pasa como parámetro es un 
palíndromo, es decir, si se lee de la misma forma desde la izquierda y desde la derecha. 
Ejemplo de palíndromo complejo: "La ruta nos aporto otro paso natural".*/


function palindromo(cadena) {
 
  var resultado = "La cadena \""+cadena+"\" \n";
 
  
  var cadenaOriginal = cadena.toLowerCase();
 
  
  var letrasEspacios = cadenaOriginal.split("");
 
  
  var cadenaSinEspacios = "";
  for(i in letrasEspacios) {
    if(letrasEspacios[i] != " ") {
      cadenaSinEspacios += letrasEspacios[i];
    }
  }
 
  var letras = cadenaSinEspacios.split("");
  var letrasReves = cadenaSinEspacios.split("").reverse();
 
  
  var iguales = true;
  for(i in letras) {
    if(letras[i] == letrasReves[i]) {
     
    }
    else {
      
      iguales = false;
    }
  }
 
  if(iguales) {
    resultado += " es un palíndromo";
  }
  else {
    resultado += " no es un palíndromo";
  }
 
  return resultado;
}
 
alert(palindromo("ama"));
alert(palindromo("La era de hielo"));
alert(palindromo("Anita lava la tina"));
