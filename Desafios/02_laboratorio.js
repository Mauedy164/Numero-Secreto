//Crear una función que muestre "¡Hola, mundo!" en la consola.
function saludo(){
    console.log('¡Hola, mundo!')
}
saludo()

//Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
function saludoNombre(nombre){
    console.log(`¡Hola, ${nombre}!`)
}
saludoNombre('Lalo')
//Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
function dobleNum(num){
    return num * 2
}
console.log(dobleNum(4))

//Crear una función que reciba tres números como parámetros y devuelva su promedio.
function promedio(num1, num2, num3){
    return ((num1 + num2 + num3)/3)
}

console.log(promedio(5,7,10))
//Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
function mayorNum(num1 , num2){
    return Math.max(num1, num2)
}

console.log(mayorNum(24,8))

//Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.

function numCuadrado(num1){
    return num1*num1
}

console.log(numCuadrado(5))