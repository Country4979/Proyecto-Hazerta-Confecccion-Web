
// Variables para llamar a la ventanas modales por su id
var p_modal = document.getElementById("w_private"); //Privacidad
var c_modal = document.getElementById("w_cookies"); //Cookies

// Variables para llamar al texto  por su id para abrir las ventanas modales
var pvt = document.getElementById("privacity"); //Privacidad 
var cks = document.getElementById("cookies"); //Cookies

// Variables para cerrar las ventanas modales pulsando elemento <span> por su clase
var span_p = document.getElementsByClassName("close")[0]; //Privacidad 
var span_c = document.getElementsByClassName("close")[1]; //Cookies

// Cuando el usuario hace click sobre el texto, abrir las ventanas modales
 //Privacidad 
pvt.onclick = function() {
  p_modal.style.display = "block";
}
 //Cookies
cks.onclick = function() {
  c_modal.style.display = "block";
}

// Cuando elusuario hace click en el botón <span> (x), cerrar la ventana

 //Privacidad
span_p.addEventListener("click",function() {
  p_modal.style.display = "none";
});

 //Cookies
span_c.addEventListener("click",function() {
  c_modal.style.display = "none";
});

// Cuando el usuario hace click fuera de la ventana modal, cerrar ventana
window.onclick = function(event) {
  if (event.target == p_modal) {  //Privacidad
    p_modal.style.display = "none";    
  };

  if (event.target == c_modal) {  //Cookies
    c_modal.style.display = "none";
  };

};
