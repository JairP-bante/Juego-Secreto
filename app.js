//INFORMACION

//los objeto tiene metodos ejemplo (queryselector) que definen su comportamiento en el caso de los objetos que comprenden un document
// las variables primitivas contienen numeros o textos incluso booleanos (true o false)
/*la forma de conectar javascript con los elementos que tenemos en html es atraves del document mediante el cual se
puede trabajar con metodos tales como querySelector los cuales tienen parametros "()", que son ocupados por 
etiquetas de html o clases de esas mismas etiquetas, en este caso se atribuye su valor a una variable 
el cual no se definira como un texto sino como un objeto... 
a esto se le llama trabajar con selectores de esta manera interactuamos con elementos html atraves de JS
utilizando el DOM document objet model*/
/*funcion es un bloque de codigo que realizara una tarea que puede o no retornar un valor*/



//--------------------------------------------------------------------------------------------------------------


/*let titulo = document.querySelector("h1"); 
titulo.innerHTML = "Juego del número secreto";

let parrafo = document.querySelector("p");
parrafo.innerHTML = "Indica un número del 1 al 10";*/


//---------------------------------------------------------------------------------------------------------------



let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}



function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

    //console.log(intentos);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p", `Acertaste el número en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p", "El número secreto es menor");
        } else {
            asignarTextoElemento("p", "El número secreto es mayor");
        }
        intentos++;
        limpiarCaja();
    }
    return;
};




function limpiarCaja() {
    document.querySelector("#valorUsuario").value = "";
};


/*recursividad es cuando una funcion se llama asi misma porque ella puede en una nueva ejecucion generar un resultado valido.
el problema con la recursividad es que al llegar al limite de ejeciciones ya no tiene condicion de salida lo cual produce un error 
de ejecucion */


function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento("p", "Ya se sortearon todos los números posibles");
    } else {
        //si el numero genrado está incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }

    }

};


function condicionesIniciales() {
    asignarTextoElemento("h1", "Juego del número secreto");
    asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
};

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    condicionesIniciales();
    //indicar mensaje de intervalo de números
    //generar el número aleatorio
    //Inicializar el número de intentos
    //deshabilitar el botón de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled", "true")
};


condicionesIniciales();





















