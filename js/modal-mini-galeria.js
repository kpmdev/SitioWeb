var imagenModal=document.querySelectorAll(".galeria-2f-2c__imagen"),elementoPadre=document.getElementById("js-modal-padre"),modalReferencia=document.getElementById("js-modal-referencia");imagenModal[0].addEventListener("click",function(){var e=document.createElement("div");e.setAttribute("class","js-contenedor-modal"),e.setAttribute("id","js-contenedor-modal-id"),e.innerHTML='<div class="js-icono-cerrar" id="cerrar"></div> <div class="js-contenedor-imagen"> <img src="recursos/imagenes/integrantes-clap.jpg" class="js-modal-imagen"></div>',elementoPadre.insertBefore(e,modalReferencia)}),imagenModal[1].addEventListener("click",function(){var e=document.createElement("div");e.setAttribute("class","js-contenedor-modal"),e.innerHTML='<div class="js-icono-cerrar" id="cerrar"></div> <div class="js-contenedor-imagen"> <img src="recursos/imagenes/seguridad-en-clap.jpg" class="js-modal-imagen"></div>',elementoPadre.insertBefore(e,modalReferencia)}),imagenModal[2].addEventListener("click",function(){var e=document.createElement("div");e.setAttribute("class","js-contenedor-modal"),e.innerHTML='<div class="js-icono-cerrar" id="cerrar"></div> <div class="js-contenedor-imagen"> <img src="recursos/imagenes/equipo-humano.jpg" class="js-modal-imagen"></div>',elementoPadre.insertBefore(e,modalReferencia)}),window.addEventListener("keyup",function(e){"Escape"===e.key&&(contenedorModalCreado=document.querySelector(".js-contenedor-modal").remove())}),window.addEventListener("click",function(e){e.target===cerrar&&(contenedorModalCreado=document.querySelector(".js-contenedor-modal").remove())});