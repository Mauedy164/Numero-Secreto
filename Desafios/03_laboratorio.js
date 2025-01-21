//Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.

function indiceMasaCorporal(altura, peso){
    return (peso/ (altura*altura))
}
console.log(indiceMasaCorporal(1.67,70))

//Crea una función que calcule el valor del factorial de un número pasado como parámetro.

function factorial(num){
    let resultado = 1;
    for (let i = 1; i <= num; i++) {
      resultado *= i;
    }
    return resultado;
}

console.log(factorial(0))

//Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.

function conversionMoneda(dolares){
    return dolares*4.84
}
console.log(conversionMoneda(2))

//Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
let area = 0;
let perimetro =0;
let base = 5;
let anchura = 8;
function areaFun(base, anchura){
    area= base*anchura
    return area
}

function perimetroFun(base, anchura){
    perimetro =((base*2)+(anchura*2))
    return perimetro
}

area = areaFun(base,anchura)
perimetro = perimetroFun(base,anchura)
console.log(`El área del rectangulo es ${area} y el perimétro es ${perimetro}`)

//Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.

let radio = 5;

function areaCirculo(radio){
    area = ((radio*radio)*3.14)
    return area
}
function perimetroCirculo(radio){
    perimetro = 2*3.14*radio
    return perimetro
}
console.log(`El área es ${areaCirculo(radio)}, el perimetro es ${perimetroCirculo(radio)}`)
//Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.

function tablaMultiplicar(numero) {
    console.log("Tabla de multiplicar del " + numero);
    for (let i = 1; i <= 10; i++) {
      console.log(numero + " x " + i + " = " + numero * i);
    }
  }

tablaMultiplicar(5)


function calcularFactorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  } else {
    return numero * calcularFactorial(numero - 1);
  }
}
// Ejemplo de uso
let numero = 5;
let resultado = calcularFactorial(numero);
console.log(`El factorial de ${numero} es ${resultado}`);