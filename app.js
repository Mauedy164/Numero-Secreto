let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteado = [];
let numeroMaximo = 10;


const botonReinicio = document.getElementById('reiniciar')
botonReinicio.addEventListener('click', reiniciarJuego)

function verificarIntento(){
    let numeroUsuario = parseFloat(document.getElementById('valorUsuario').value);
    if (numeroUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste, el numero secreto es ${numeroSecreto} en ${intentos} ${intentos == 1 ? 'intento' : 'intentos'}`)
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else if (numeroUsuario>numeroSecreto){
        asignarTextoElemento('p', 'El número secreto es menor')

       
    } else {
        asignarTextoElemento('p', 'El numero secreto es mayor')
        
    } 
    intentos++;
    limpiarCaja()
}

function limpiarCaja(){
    document.getElementById('valorUsuario').value = ''
}


function asignarNumeroSecreto(){
   let aleatorio = Math.floor(Math.random()*numeroMaximo)+1
   if (listaNumerosSorteado.includes(aleatorio)){
    return asignarNumeroSecreto()
   } else{
    listaNumerosSorteado.push(aleatorio)
    return aleatorio
   }
   
}

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML= texto;
    
}



function condicionesIniciales(){
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    asignarTextoElemento('h1', 'Juego del número secreto');
    intentos = 1;
    numeroSecreto = asignarNumeroSecreto()
    
}

function reiniciarJuego(){
    if (listaNumerosSorteado.length == numeroMaximo){
        asignarTextoElemento('p', 'Alacanzaste el número máximo de juegos');
        document.getElementById('intentar').setAttribute('disabled' , 'true')
        document.getElementById('reiniciar').setAttribute('disabled', 'true')
    } else {
    limpiarCaja()
    condicionesIniciales()
    document.getElementById('reiniciar').setAttribute('disabled', 'true')
    }
}

condicionesIniciales()