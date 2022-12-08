
// Variables para llamar a la ventanas modales por su id
var p_modal = document.getElementById("w_private"); //Privacidad
var c_modal = document.getElementById("w_cookies"); //Cookies
var e_modal = document.getElementById("w_mail"); //Mail
var n_modal = document.getElementById("redessociales"); //Redes

// Variables para llamar al texto  por su id para abrir las ventanas modales
var pvt = document.getElementById("privacity"); //Privacidad 
var cks = document.getElementById("cookies"); //Cookies
var eml = document.getElementById("e_mail"); //Mail
var net = document.getElementById("socialnet"); //Redes

// Variables para cerrar las ventanas modales pulsando elemento <span> por su clase
var span_p = document.getElementsByClassName("close")[0]; //Privacidad 
var span_c = document.getElementsByClassName("close")[1]; //Cookies
var span_m = document.getElementsByClassName("close")[2]; //Mail
var span_n = document.getElementsByClassName("close")[3]; //Redes

// Cuando el usuario hace click sobre el texto, abrir las ventanas modales
 //Privacidad 
pvt.onclick = function() {
  p_modal.style.display = "block";
}
 //Cookies
cks.onclick = function() {
  c_modal.style.display = "block";
}
 //Mail
eml.onclick = function() {
  e_modal.style.display = "block";
}
 //Redes
net.onclick = function() {
  n_modal.style.display = "block";
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

//Mail
span_m.addEventListener("click",function() {
  e_modal.style.display = "none";
});

 //Redes
span_n.addEventListener("click",function() {
  n_modal.style.display = "none";
});

// Cuando el usuario hace click fuera de la ventana modal, cerrar ventana
window.onclick = function(event) {
  if (event.target == p_modal) {  //Privacidad
    p_modal.style.display = "none";    
  };

  if (event.target == c_modal) {  //Cookies
    c_modal.style.display = "none";
  };

  if (event.target == e_modal) { //Mail
    e_modal.style.display = "none";
  };
  if (event.target == n_modal) {  //Redes
    n_modal.style.display = "none";    
  };
};
