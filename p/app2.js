window.dataLayer = window.dataLayer || [];

function gtag() {
  dataLayer.push(arguments);
}
gtag('js', new Date());

gtag('config', 'UA-117513645-2');

$(document).ready(function() {

  $('.tree-toggle').click(function(e) {
    e.preventDefault();
    $(this).parent().children('ul.tree').toggle("slow");
  });
  $(function() {
    $('.tree-toggle').parent().children('ul.tree').toggle("slow");
  })
  var timer;
  $('.menugr').mouseover(function() {
    var rel = $(this).attr('rel');

    timer = window.setTimeout(function() {
      $('.overlay').show();
      var id = rel;
      /* BUG*/
      var $currentWidget = $('#' + id);

      /*Nuevo 2 lineas*/
      $('#navbarResponsive').addClass('focus');
      $('#navegacion').addClass('focus dropnav');
      $('#hiddenmenu').show();
      $currentWidget.show().siblings('.widget-container').hide();
    }, 500);
  }, window.clearTimeout(timer));

  $('img[data-enlargable]').addClass('img-enlargable').click(function() {
    var src = $(this).attr('src');
    $('<div>').css({
      background: 'RGBA(0,0,0,.5) url(' + src + ') no-repeat center',
      backgroundSize: 'contain',
      width: '100%',
      height: '100%',
      position: 'fixed',
      zIndex: '10000',
      top: '0',
      left: '0',
      cursor: 'zoom-out'
    }).click(function() {
      $(this).remove();
    }).appendTo('body');
  });

  $('.menupeq').mouseover(function() {
    $('.widget-container').hide();
    $('.overlay').hide();
    window.clearTimeout(timer)
  });
  /*cambio id de wrap a hiddenmenu*/
  $('#hiddenmenu').mouseleave(function() {

    $('.widget-container').hide();
    $('.overlay').hide();
    /*Nuevo 2 lineas*/
    $('#navbarResponsive').removeClass('focus');
    $('#navegacion').removeClass('focus dropnav');
    $('#hiddenmenu').hide();
    window.clearTimeout(timer)
  });
  /**/
  $('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
    if (!$(this).next().hasClass('show')) {
      $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
    }
    var $subMenu = $(this).next(".dropdown-menu");
    $subMenu.toggleClass('show');

    $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
      $('.dropdown-submenu .show').removeClass("show");
    });

    return false;
  });

  var coll = document.getElementsByClassName("collapsibledisponibilidad");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }

});
