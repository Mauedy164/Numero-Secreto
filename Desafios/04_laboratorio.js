//Crea una lista vacía llamada "listaGenerica".

let listaGenerica = [];

//Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.

let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

//Agrega a la lista "lenguagesDeProgramacion2 los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.

let lenguagesDeProgramacion2 = [];

lenguagesDeProgramacion2.push('Java');
lenguagesDeProgramacion2.push('Ruby');
lenguagesDeProgramacion2.push('GoLang');

/* console.log(lenguagesDeProgramacion2); */

//Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion2" del ejercicio anterior.

function mostrarLenguajes(){
    for (let i = 0; i < lenguagesDeProgramacion2.length; i++) {
        let lenguaje = lenguagesDeProgramacion2[i];
        console.log(lenguaje)
    }
    return
}
mostrarLenguajes()

//Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion2" en orden inverso.

function mostrarLenguajesAlreves(){
    for (let i = (lenguagesDeProgramacion2.length-1); i > -1; i--) {
        let lenguaje = lenguagesDeProgramacion2[i];
        console.log(lenguaje)
    }
    return
}
mostrarLenguajesAlreves()

//Crea una función que calcule el promedio de los elementos en una lista de números.
let listaCalificaciones = [5,10,8,9]
function promedio (){
    let promedio = 0;
    let suma = 0;
    for (let i = 0; i < listaCalificaciones.length; i++) {
        suma = listaCalificaciones[i]+suma;
    } 
    promedio = suma/(listaCalificaciones.length)
    return console.log(promedio)
}

promedio()


//Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.

let listaNumeros = [20,10,8,9];

function limitesLista(){
    let numeroMaximo = listaNumeros[0];
    let numeroMinimo =listaNumeros[0];
    for (let i=0; i < listaNumeros.length; i++){
        if (numeroMaximo < listaNumeros[i]){
            numeroMaximo = listaNumeros[i]
        } 
        if (numeroMinimo > listaNumeros[i]){
            numeroMinimo = listaNumeros[i]
        } 
    }


    console.log(`El numero máximo es: ${numeroMaximo}`)
    console.log(`El numero mínimo es: ${numeroMinimo}`)
}

limitesLista()

//Crea una función que devuelva la suma de todos los elementos en una lista.

let listaNumerosSuma = [5,10,8,9];

function sumaNumeros(){
    let suma = 0;
    for (let i=0; i<listaNumerosSuma.length; i++){
        suma = listaNumerosSuma[i]+ suma
    }
    console.log(suma)
}
sumaNumeros()

//Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.

let listaNumerosBusqueda = [5,10,8,9];

function busquedaNumero(numero){
    let posicion = 0;
    posicion = listaNumerosBusqueda.indexOf(numero)
    if (posicion<0){
        console.log('No existe el elemento buscado')
    } else {
        console.log(`El número buscado está en índice ${posicion}`)
    }

    return
}

busquedaNumero(5)
busquedaNumero(20)


//Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.

let listaUno = [5,8,10,20,5];
let listaDos = [7,5,5,9,7];
let listaFinal = [];

function sumaListas(){
    for (let i=0; i<listaDos.length; i++){
        sumado = listaDos[i]+ listaUno[i]
        listaFinal.push(sumado)
    }
    return
}

sumaListas()
console.log(listaFinal)

//Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.

let listaPrevia = [7,5,5,9,7];
let listaCuadrados=[]

function numeroCuadrado(){
    listaPrevia.forEach(element => {
        listaCuadrados.push(element*element)
    });
    return
}
numeroCuadrado()
console.log(listaCuadrados)
