import {barcelona, roma, paris, londres} from './ciudades.js'

const enlaces = document.querySelectorAll('a');
const tituloElemento = document.getElementById('titulo');
const subtituloElemento = document.getElementById('subtitulo');
const parrafoElemento = document.getElementById('parrafo');
const precioElemento = document.getElementById('precio');

//Buscamos el enlace activo
enlaces.forEach(function(enlace){
    enlace.addEventListener('click', function(){
        subtituloElemento.classList.remove('primeraPosicion')
        parrafoElemento.classList.remove('primeraPosicion')
        enlaces.forEach(function(enlace){
            //Quitamos 'active' de los otros enlaces
            enlace.classList.remove('active')
        })
        //Activamos este enlace
        this.classList.add('active')
        //Obtenemos los datos correctos
        let contenido = obtenerContenido(this.textContent)

        tituloElemento.innerHTML = contenido.titulo
        subtituloElemento.innerHTML = contenido.subtitulo
        parrafoElemento.innerHTML = contenido.parrafo
        precioElemento.innerHTML = contenido.precio
    })
})

function obtenerContenido(enlace){
    let contenido = {
        "Barcelona": barcelona,
        "Roma": roma,
        "París": paris,
        "Londres": londres
    }
    return contenido[enlace]
}
