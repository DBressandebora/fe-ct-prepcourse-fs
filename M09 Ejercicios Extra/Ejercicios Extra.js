/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   
   var arrayMayor = [];
   // Este es el array que engloba a los otros

   for (var keys in objeto){
      var nuevoArray = [keys, objeto[keys]];
      arrayMayor.push(nuevoArray);
   }

   return arrayMayor;
   
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   let objeto = {};
   // primero creo mi objeto
   for (var i=0; i<string.length; i++){
      var letter=string[i];

      if(objeto[letter]){
         objeto[letter]=objeto[letter]+1;
      }else{
         objeto[letter]=1;
      };
   };

   return objeto;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var mayusc = "";
   var minisc = "";
   var string = string.split("");

   for (let i=0; i<string.length; i++){
      if (string[i]===string[i].toUpperCase()){
         mayusc = mayusc + string[i];
      }else{
         minisc = minisc + string[i];
      };
   };

   return mayusc+minisc;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:

   var nuevaFrase = frase.split(" ");

   for (let i=0; i<nuevaFrase.length; i++){
      let dadoVuelta = nuevaFrase[i].split("").reverse().join("");
      //1° -> me separa en letras la 1° palabra.
      //2° -> reverse: invierte la posición de las letras.
      //3° -> join: junta las letras.

      nuevaFrase[i] = dadoVuelta;
   };

   return nuevaFrase.join(" ");
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:

   var capicua = numero.toString();

   for(let i=0; i<capicua.length; i++){
      if (capicua[i] !== capicua[capicua.length-1 -i]){
         // capicua.length-1 -i : menos el iterador, en la segunda vuelta se vé mejor
         // 0 !== 0 / 1 !== 1 / etc
         return "No es capicua"
      };
   };

   return "Es capicua";
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:

   var suprimir = string.split("a").join("").split("b").join("").split("c").join("");
   return suprimir;

}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:

   return arrayOfStrings.sort((word1, word2) => word1.length - word2.length)

}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:

   var comparaciones = [];

   for (let i=0; i<array1.length; i++){
      // if (array1[i]===array2[i])
      if (array2.includes(array1[i])){
         comparaciones.push(array1[i]);
      }
   };

   return comparaciones;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
