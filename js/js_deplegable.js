
//Mostar u ocultar los menús
function open_nav() {
   $j('html').addClass('panel-nav');
   is_open = 1;
}

function close_nav() {
    $j('html').removeClass('panel-nav');
    is_open = 0;
}

var tipoEvento = ((document.ontouchstart !== null) ? 'mouseup' : 'touchstart');
$j(document).on(tipoEvento, function(e) {
 if (is_open === 1) { // si está abierto
   if (!$j(e.target).closest("#main-navigation").length > 0) {
        //no se hace click en navegación
        close_nav(); //ciérrate
   }
  } else { // si está cerrado
     if ($j(e.target).closest("#nav-open").length > 0) {
        //Se hace click en nav open
        open_nav(); //abrir
     }
  }
});