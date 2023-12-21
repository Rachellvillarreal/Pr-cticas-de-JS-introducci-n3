console.log("aqui amamos el sushi y el sashimi")

//ejeplo//

const sumarNumeros = (numero1, numero2) => numero1 + numero2;
const resultado = sumarNumeros(5, 7)
console.log(resultado);

//ejemplo 2//

function sumarnumeros( nuero1, numero2) {
    return nuero1 + numero2;
}
//ejemplo del uso de la funcion//
var resultado1= sumarnumeros(5, 7);
console.log(resultado1);

//ejemplo3//

const sumarNumeros3 = function(numero1, numero2) {
    return numero1 + numero2
}; 
//ejemplo del uso la funcion//

const resultado3= sumarNumeros3(5, 7);
console.log(resultado3);

     //EMPIEZAN LOS EJERCICIOS//
     
     //numeros//
//1-Escribe una función que tome dos números como argumentos y devuelva su suma//

const sumarNumeros4 = function(numero1, numero2) {
    return numero1 + numero2
};
const resultado4= sumarNumeros4(8, 10);
console.log(resultado4);
//2-Escribe una función que tome dos números como argumentos y devuelva su resta//

function restar(num1, num2) {
     var resta = num1 - num2;
     return resta;
}
var resultadoResta = restar(7, 3);
console.log(resultadoResta);

//3-Escribe una función que tome dos números como argumentos y devuelva su producto//

function multiplicar(num1, num2) {
    var producto = num1 * num2;
    return producto;
}
var resultadoProducto = multiplicar(3, 6);
console.log(resultadoProducto);

//4-Escribe una función que tome dos números como argumentos y devuelva su división//

function dividir( numero1, numero2) {
    var dividir = numero1/ numero2
    return dividir;
}
var resultadodividir= dividir(25, 5);
console.log(resultadodividir);
//5-Escribe una función que tome un número base y un exponente y devuelva el resultado de elevar el número base a la potencia dada.//

//letras//
//1-Escribe una función que tome dos cadenas de texto como argumentos y devuelva su concatenación//

const str1 = 'hola buen dia' ;
const str2 = ' cielo' ;
console.log(str1.concat('' , str2));

//2-Escribe una función que tome una cadena de texto como argumento y devuelva su longitud//
//3-Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena en mayúsculas//
//4-Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena en minúsculas//
//5-Escribe una función que tome una cadena de texto y un índice como argumentos, y devuelva el carácter en esa posición//
