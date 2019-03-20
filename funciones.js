//FUNCIONES
/* se declaran con la palabra reservada... "function""
*/

//function() 

// luego la llamamos (EJECUTAMOS)
//con su nombre y parentesis .  //SINO LA LLAMO NO EJECUTAAAA
/*
function hola() {
    return console.log("hola")   
} // esto no va a ejecutar nada

hola() //AHORA SI



//Las funciones son un tipo de datos, 
//como numeros, strings, booleanos,
//lo que significa que se lo puedo asignar a una variable.

*/

//SINTAXIS
/*

var saludar = function() {
    console.log("hola");
}

saludar ();
*/

// RETORNO DE VALORES

// una funcion puede o no retornar un valor...

// esta funcion no retorna valor

/*
var a = 1;
function sumar () {
    a= a+2
}
sumar()

console.log(sumar()) // no va a mostrar el resultado... VA A EJECUTAR LA SUMA 

console.log(a) //aqui muestra el resultado, CON LA EJECUCION DOS VECES... es decir a = 5
*/
//ESTA FUNCION SI RETORNA
/*
var a = 1;
function sumarConReturn () {
    return a = a +2
}

// en cambio ahora esta funcion si va a mostrar algo

console.log(sumarConReturn()) //SUMADA DOS VECES PORQUE LA EJECUTE ARRIBA
*/

// ahora yo podria guardar esa funcion con retorno en una variable
/*
var resultado = sumarConReturn();
console.log(resultado);

*/
/*
var a = 1;
function sumar () {
    a = a + 2;
    
}

var resultado = sumar ();
console.log(resultado)
console.log(a)
*/


//El return es necesario porque es un valor... 
//por ejemplo, aca usuarioLoggeado pasa a valer TRUE, lo que RETORNA... 
/*function usuarioLoggeado() {
    return true;
}

if (usuarioLoggeado()) {    //if usuarioLoggeado ES TRUE, entonces se ejecuta
    console.log("Bienvenido usuario a nuestro sitio")
}

*/

// ******EN FIN, FUNCION NOS AYUDA A REUSAR CODIGO Y QUE NO SE EJECUTEN HASTA QUE YO LES DIGA********


//EJERCICIO 03

/*
function mostrarNombre() {
    console.log("================")
    console.log("======Grace=====")
    console.log("================")
    
};

var nombre = mostrarNombre();

mostrarNombre()

*/
// EJERCICIO 04
/*

function obtenerNombre() {
    return "Grace"
}

console.log("Mi nombre es:" + " " + obtenerNombre());
*/

// EJERCICIO 08
/* 
function obtenerNombre () {
    return "Grace"
}

function obtenerSaludo() {
    var nombre = obtenerNombre();
    return "Hola" + " " + nombre
}
console.log(obtenerSaludo())

*/

//******PARAMETROS********

/* LAS FUNCIONES PUEDEN RECIBIR PARAMETROS
SE ESCRIBEN ENTRE LOS PARENTESIS
AL DECLARARLA, DEIMOS CUANTOS PARAMETROS PODRA RECIBIR 
*/

//EJERCICIO 10
/*
var name = "Grace";
var lastname = "Mijares";

function mostrarNombreCompleto (nombre, apellido) {
console.log(name + " " + lastname)
}
mostrarNombreCompleto()

function obtenerNombreCompleto (nombre, apellido) {
return nombre + " " + apellido
}
console.log(obtenerNombreCompleto(name, lastname))

*/

//EJERCICIO 1
/*
function numerosPares() {
    for (let index = 0; index <= 100; index++) {
        if (index %2==0 ) {
            console.log(index)
        }
    }
}

numerosPares()
*/

//EJERCICIO 2
/*
function datos() { 
    console.log("Grace")
    console.log(26)
    console.log("1164801582")
    console.log("Venezuela")
    console.log("2018")
    console.log("1234")

}

datos()

*/

//EJERCICIO 3
/*
var numerosPares = pares();

function pares() { 
    for (let index = 0; index <= 100; index++) {
        if (index%2==0) {
            console.log(index);
        }
        
    }
}

pares()
pares()
pares()
pares()
pares()
*/

//EJERCICIO 5
/*
var fibonacci = fibo();

function fibo() {
    var n1 = 0 ;
    var n2 = 1 ;
    var resultado = n2;
    for (let index = 0; index <= 10; index++) {
        console.log(resultado);
        resultado = n1 + n2;
        n1 = n2;
        n2 = resultado;

    }
}

fibo()
fibo()
fibo()
fibo()
fibo()
*/

//EJERCICIO 6
/*
function obtenerName() {
    return "Grace"
}

console.log("Hola mi nombre es:" + " " + obtenerName())
*/

//EJERCICIO 7    ////// ******PREGUNTAR SI ESTO ESTA BIEN*****

/*

var primerosNumerosPares = numerosParesArray();

function numerosParesArray () {
    return [2,4,6,8,10]
}

console.log(numerosParesArray())

*/

//EJERCICIO 8
/*

function obtenerNombre() {
 return "Grace";   
}

function obtenerSaludo() {
    var nombre = obtenerNombre();
    return "Hola" + " " + obtenerNombre()
}

console.log(obtenerSaludo())
*/ 

//EJERCICIO 9


//ASI NO FUNCIONAAAA 
/*

function obtenerIDUsuario () {
     return 50; 
}

elUsuarioEsValido = usuarioValido()

function usuarioValido()  { 
    if (obtenerIDUsuario() > 30) {
        return true
    } else { return false }
}


if (elUsuarioEsValido) {
    console.log("El usuario es válido")
} else {
    console.log("El usuario no es válido");
}


*/

//EJERCICIO 10

/*
ejercicio para continuar
declarar dos variables de prompt
var nombre = prompt(“Cual es tu nombre?“, ‘’)
var edad = prompt(“Cual es tu edad?“, ‘’)
hacer una funcion que retorne el siguiente mensaje:
“Tu nombre es *nombre* y tu edad es *edad*”
luego llamar a la funcion para mostrar el resultado en el cuerpo del documento

*/



//EJERCICIO QUE MANDO MALENA PARA CONTINUAR
/*
var nombre = prompt("Cuál es tu nombre?");
var edad = prompt("cuál es tu edad?");

function mensaje(name,age) { 
    return "Tu nombre es" + " " + nombre + " " + "y tu edad es" + " " + edad

}

console.log(mensaje())
*/

//EJERCICIO 11
//1
/*
function returnString(str) {
    return "Ada"
  }

var string = returnString()
console.log(string)


//2


function sum(a, b) {
   
  return a + b
}

var resultado = sum(85,10)
console.log("el resultado de la suma es",resultado)


//3

function res(a, b) {
    return a - b
 }

var resultado = res(105,20)
console.log("el resultado de la resta es:", resultado)


// 4 

function mul(a, b) {
    return a * b
  }
  
var resultado = mul(45,3)
console.log("El resultado de la multiplicación es:", resultado)

function div(a, b) {
    return a / b
}

var resultado = div(154,2)
console.log("El resultado de la división es:", resultado)
  
console.log( returnString('Ada') === 'Ada' );
console.log( sum(2, 2) === 4 );
console.log( sum(5, -9) === -4 );
console.log( res(4, 3) === 1 );
console.log( res(2, 9) === -7 );
console.log( mul(3, 4) === 12 );
console.log( mul(-2, -5) === 10 );
console.log( div(6, 3) === 2 );
console.log( div(15, 3) === 5 );
*/

//EJERCICIO 12 
/*
function sonIguales(a, b) {
    if (a === b) {
        return true

    } else { return false }
}

function tienenLaMismaLongitud(str1, str2) {
    if (str1.length === str2.length) {
        return true
    } else { return false }
}

function esMenorQueNoventa(num) {
    if (num < 90 ) {return true }
    else {return false}
  
}

function esMayorQueCincuenta(num) {
    if (num > 50) { return true}
    else { return false}
  }

function obtenerResto(a, b) {
    return a % b
}


function esPar(num) { if (num%2==0 ) {return true} 
else {return false}
}

function esImpar(num) {
   if (num%2==1) {return true}
   else {return false}
  }

  console.log( sonIguales('Ada', 'ada') === false );
  console.log( sonIguales('Ada', 'Ada') === true );
  
  console.log( tienenLaMismaLongitud('ada', 'Ada') === true );
  console.log( tienenLaMismaLongitud('ada', 'Grace') === false );
  
  console.log( esMenorQueNoventa(45) === true );
  console.log( esMenorQueNoventa(115) === false );
  console.log( esMenorQueNoventa(90) === false );
  
  console.log( esMayorQueCincuenta(90) === true );
  console.log( esMayorQueCincuenta(45) === false );
  console.log( esMayorQueCincuenta(50) === false );
  
  console.log( esPar(5) === false );
  console.log( esPar(116) === true );
  console.log( esPar(0) === true );
  console.log( esPar(-4) === true );
  
  console.log( esImpar(50) === false );
  console.log( esImpar(3) === true );
  console.log( esImpar(-5) === true );
  console.log( esImpar(4) === false );
  */

  //EJERCICIO 13
/*
function exclamar(str) {

    return "¡" + str + "!"
}


function unirNombre(nombre, apellido) {
    return nombre + " " + apellido
}

function saludar(nombre) {
    return "¡Hola" + " " + nombre + "!"
  }

  console.log( exclamar('hola') === '¡hola!' );
  console.log( exclamar('hola, mundo') === '¡hola, mundo!' );
  
  console.log( unirNombre('Ada', 'Lovelace') === 'Ada Lovelace' );
  console.log( unirNombre('Grace', 'Hopper') === 'Grace Hopper' );
  
  console.log( saludar('Ada') === '¡Hola Ada!' );
  console.log( saludar('Grace') === '¡Hola Grace!' );
  
  */

//EJERCICIO 14
/*
var peliculasBatman = ["Batman Begins", "The Dark Knight", "The Dark Knight Rises"];

var numerosPares = [0, 2, 4, 6, 8, 10, 12];

function obtenerPrimerElemento(primer) {
    return primer[0]
}
console.log( obtenerPrimerElemento(peliculasBatman))
console.log( obtenerPrimerElemento(numerosPares))

*/
//EJERCICIO 15
/*
var peliculasBatman = ["Batman Begins", "The Dark Knight", "The Dark Knight Rises"];

var numerosPares = [0, 2, 4, 6, 8, 10, 12];

function obtenerUltimoElemento (ultimo) {
    return ultimo[ultimo.length -1]
}

console.log( obtenerUltimoElemento(peliculasBatman))
console.log( obtenerUltimoElemento(numerosPares))
*/

//EJERCICIO 16


// function calcularSumatoria(suma) {
//     return suma.reduce((a,b) => a + b, 0)
// }

// var numeros = [7, 4, 1, 8, 9, 4, 9];

// console.log( calcularSumatoria(numeros))


//EJERCICIO 17
/*
function calcularPromedio(promedio) {
    return promedio.reduce((a, b) =>  a + b, 0) / promedio.length
}

var numeros = [7, 4, 1, 8, 9, 4, 9];
console.log(calcularPromedio(numeros))
*/

//EJERCICIO 18

/*

var masNumeros = [ 43, 11, 18, 46, 44, 37, 42, 29, 9, 3, 37, 0, 40, 10, 38, 34, 25, 40, 4, 32 ];

var numerosPares = masNumeros.filter(function numerosPares(age) {
    if (age%2===0) {
        return age;
    }
});

var numerosImpares = masNumeros.filter(function numerosImpares(age) {
    if (age%2===1) {
        return age;
    }

});


console.log("pares: ", numerosPares);
console.log("impares: ", numerosImpares);

*/
//EJERCICIO 19
/*
function compararNumeros (numero1, numero2) {
    if (numero1 < numero2) { return -1}
    else if (numero2 < numero1) {return 1}
    else if (numero1 == numero2 ) {return 0}
}

console.log( compararNumeros(1, 5) < 0 ); 
console.log( compararNumeros(5, 1) > 0 ); 
console.log( compararNumeros(1, 1) === 0 );
*/

//EJERCICIO 20
/*

function mostrarElNumeroMasGrande(numero1, numero2) {
    if (numero1 < numero2) {
        return "El número" + " " + numero2 + " " + "es más grande que" + " " + numero1
    }
    else if (numero2 < numero1) {
        return "El número"+ " " + numero2 + " " + "es más grande que" + " " + numero1
    } else if (numero1 == numero2) {
        return "Los dos números son iguales"
    }
}


console.log( mostrarElNumeroMasGrande(1, 5) ); 
console.log( mostrarElNumeroMasGrande(63, 27) ); 
console.log( mostrarElNumeroMasGrande(1, 1) ); 

*/ 