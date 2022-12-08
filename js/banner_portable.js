var caja_carousel = document.getElementById("portable");
	var i = 2;

	function f_cambiarFoto(){
		var nombreFoto = "../img/banner/banner" + i + ".png";
		caja_carousel.style.backgroundImage = "url('" + nombreFoto + "')";

		i++;
		
		if(i>3){
			i=1;
		}
	};
	setInterval(f_cambiarFoto, 3000);