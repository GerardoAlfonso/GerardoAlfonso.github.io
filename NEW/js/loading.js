/*Quitar clase onload al terminar la carga de la pagina*/
function onload(){
  var elements = document.getElementsByClassName("loading");
  document.body.style.overflow = "scroll";

  while(elements.length>0)
  {
    elements[0].classList.remove("loading");
  }
}


/* Cambiar de imagen de producto */
function change(img)
{
  // imagen grande
  let imagen = document.getElementById('img-principal');
  //imagen activa
  let imgActive = document.getElementsByClassName('img-active');
  //desactivar imagen
  imgActive[0].classList.remove('img-active');

  //imagen pequeña
  let rutaimg = img.getAttribute("src");

  img.classList.add("img-active");
  //cambiar atributo src de la imagen grande
  imagen.src = rutaimg;
}

/* Barra de busqueda en tiempo real */
const input_busqueda = document.getElementById('input-busqueda');
const resultados_busqueda = document.getElementById('resultados-busqueda');
const Data = "";
input_busqueda.addEventListener("focusout", ocultar);
input_busqueda.addEventListener("keyup" , e => {

  if (e.key == "Enter") {
    /* Enviar form
     * document.form1.submit()
     */
    location.reload();
  }

  let a = document.getElementById('input-busqueda').value;
  //resultados_busqueda.innerHTML = "";
  //resultados_busqueda.innerHTML += "<p>asdf</p>";
  if(a == "")
  {
    resultados_busqueda.classList.remove('keyup');
  }else {

    resultados_busqueda.innerHTML = "<a href='producto.html' class='link'>"+input_busqueda.value+"</a>";
    resultados_busqueda.classList.add('keyup');
  }
});


resultados_busqueda.addEventListener("focusout" , ocultar);

/* Function Async */
/*
function getData{
  fetch("URL")
    .then(response => {
      //habdle the response
    })
    .catch(error => {
      //handle the error
    });
}
*/
/*function getData (){


  let a = document.getElementById('input-busqueda').value;
  //resultados_busqueda.innerHTML = "";
  //resultados_busqueda.innerHTML += "<p>asdf</p>";
  if(a == "")
  {
    resultados_busqueda.classList.remove('keyup');
  }else {
    resultados_busqueda.innerHTML = "<a href='#' class='link'>"+input_busqueda.value+"</a>";
    resultados_busqueda.classList.add('keyup');
  }
}*/

/* Hacer focus a resultados de busqueda */
function ocultar()
{
  var element ;
  window.setTimeout(function ()
   {
     element = document.activeElement;
     if(element.className == "link" || element.className == "search")
     {
       resultados_busqueda.focus();
     }
     else {
       resultados_busqueda.classList.remove('keyup');
     }
   }, 0);

}
















/**/
