const openEls = document.querySelectorAll("[data-open]");
const closeEls = document.querySelectorAll("[data-close]");

const isVisible = "is-visible";
var status = "400";

for (const el of openEls) {
  el.addEventListener("click", function() {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);



    var content = document.getElementsByClassName('modal-content');
    setTimeout(function()
    {
      if(status == "400")
      {
        /* Obtener el id o codigo de identificacion de producto del elemento seleccionado
        *  el.dataset.indexId
        */
        content[0].innerHTML = "<img src='img/success.gif' width='225' height='225'>" +
        "<p class='text-center'>Producto agregado</p>";
        //funcion fetch asincrona

      }else
      {
        content[0].innerHTML = "<img src='img/error.svg' width='225' height='225' class='mx-auto'>"+
        "<p class='text-center'>Se ha producido un error inesperado</p>";
      }
    }, 2000);

    setTimeout(function()
    {
      if (document.querySelector(".modal.is-visible")) {
        document.querySelector(".modal.is-visible [data-close]").click();
      }
    }, 4000);
     content[0].innerHTML = "<span class='circle style-1'></span>";

  });
}

for (const el of closeEls) {
  el.addEventListener("click", function() {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
  });
}

//cerrar modal al dar click fuera de el
/*document.addEventListener("click", e => {
  if (e.target == document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible [data-close]").click();
  }
});*/

document.addEventListener("keyup", e => {
  // if we press the ESC
  if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible [data-close]").click();
  }
});
