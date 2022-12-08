//Código JQuery para las validaciones de los formularios

$( function(){
  $.validator.addMethod('reg_nombre', function(valor, caja){
     return /^[A-Za-z ÑñáéíóúÁÉÍÓÚ]+$/.test(valor);
  });

  $.validator.addMethod('reg_email', function(valor, caja){
    return /^[a-zA-Z_.]+@{1}[a-zA-Z_]+\.{1}[a-zA-Z]{2,3}$/.test(valor);
  });
        
  $.validator.addMethod('reg_telefono', function(valor, caja){
    return /^[0-9]{9,}$/.test(valor);
  });
        
  $.validator.addMethod('reg_mensaje', function(valor, caja){
    return /^[a-zA-Z_.ÑñáéíóúÁÉÍÓÚ 0-9]{10,}$/.test(valor);
  });

  $("#miFormulario").validate({ 
    rules:{
          nombre:{required:true, reg_nombre:true},
          telefono:{reg_telefono:true},
          email:{required:true, reg_email:true},
          mensaje:{required:true, reg_mensaje:true},
          },
    messages:{ 
          nombre:{required:"Obligatorio", reg_nombre:"Formato incorrecto, solo se admiten letras y espacios."},
          telefono:{reg_telefono:"Formato incorrecto,debe ser numérico, de 9 o más dígitos."},
          email:{required:"Obligatorio", reg_email:"Formato incorrecto."},
          mensaje:{required:"Obligatorio", reg_mensaje:"La longitud mínima es de 10 carácteres."}
          }
    
      });
      
});
      
var f_validar = function(){
   var ok;  
   var textoEmail;
   var saltoLinea = "%0D%0A";
   var actionDelFormulario;
        
// Comprobamos si las validaciones se superan
    if( $("#miFormulario").valid() == true ){
      textoEmail = "NOMBRE: " + $("#nombre").val() + saltoLinea 
                + "EMAIL: "  + $("#email").val() + saltoLinea
                + "TELÉFONO: "  + $("#telefono").val() + saltoLinea
                + "MENSAJE: "  + $("#mensaje").val() + saltoLinea;
                
      actionDelFormulario = "mailto:modoeco.gmail.com?subject=Formulario&body=" + textoEmail;
                
    // Modificamos el atributo action de la etiqueta HTML form, para que contenga los datos del formulario y se muestren en el correo.
      $("#miFormulario").attr("action", actionDelFormulario);
          
      alert("A continuación, se abrirá su aplicación de correo para enviar el mensaje");
        ok = true;
    }
      else{
        ok = false;
    }
        
      return ok;
  }

