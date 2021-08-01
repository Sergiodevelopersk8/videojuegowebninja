/**variables de la linea de tiempo */

var frame= window.requestAnimationFrame ||
           window.mozRequestAnimationFrame||  
           window.webkitRequestAnimationFrame||      
           window.msRequestAnimationFrame;

  var animacion;         
/**fin de las variables de la linea de tiempo */






/**propiedades */

var canvas;
var ctx;
/**fin propiedades */


/** *
variables del objeto datos
** */

var datos={
    id:0,
    nivel: null,
    plano3: null,
    plano2:null,
    plano1:null,
    plano0:null,
    texturaPlataforma:null,
    bloques: [],
    imgJugador:null,
    jugador_x:70,
    jugador_y:200,
    jugador_ancho:40,
    jugador_alto:40,
    detalles:null,
    bloquesDetalles:[],
    izquierda: false,
    derecha: false,
    movimiento: 0,
    desplazamientoEscenario: 0,
    velocidad: 10,
    limiteEscenario:-1995,
    movimientoJugador:0
}