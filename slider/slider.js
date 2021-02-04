$(document).ready(function() {
    $("#news-slider").owlCarousel({
        items : 2,
        itemsDesktop : [1199,2],

        pagination :true,
        autoPlay : true
    });

    $("#news-slider2").owlCarousel({
        items:3,
        itemsDesktop:[1199,2],
        itemsDesktopSmall:[980,2],

        pagination:false,
        navigationText:false,
        autoPlay:true
    });

    $("#news-slider3").owlCarousel({
        items:3,
        itemsDesktop:[1199,2],
        itemsDesktopSmall:[1000,2],

        pagination:false,
        navigationText:false,
        autoPlay:true
    });

    $("#news-slider4").owlCarousel({
        items:3,
        itemsDesktop:[1199,3],
        itemsDesktopSmall:[1000,2],

        pagination:false,
        navigationText:false,
        autoPlay:true
    });

    $("#news-slider5").owlCarousel({
        items:3,
        itemsDesktop:[1199,3],
        itemsDesktopSmall:[1000,2],

        pagination:false,
        navigationText:false,
        autoPlay:true
    });

    $("#news-slider6").owlCarousel({
        items : 3,
        itemsDesktop:[1199,3],
        itemsDesktopSmall:[980,2],
        itemsMobile : [600,1],
        pagination:false,
        navigationText:false
    });

    $("#news-slider7").owlCarousel({
        items : 3,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [1000,2],

        pagination :false,
        autoPlay : true
    });

    $("#news-slider8").owlCarousel({
        items : 3,
        itemsDesktop:[1199,3],
        itemsDesktopSmall:[980,2],
        itemsMobile : [600,1],
        autoPlay:true
    });

    $("#news-slider9").owlCarousel({
        items : 3,
        itemsDesktop:[1199,2],
        itemsDesktopSmall:[980,2],
        itemsTablet:[650,1],
        pagination:false,
        navigation:true,
        navigationText:["",""]
    });

    $("#news-slider10").owlCarousel({
        items : 4,
        itemsDesktop:[1199,3],
        itemsDesktopSmall:[980,2],

        navigation:true,
        navigationText:["",""],
        pagination:true,
        autoPlay:true
    });

    $("#news-slider11").owlCarousel({
        items : 4,
        itemsDesktop:[1199,3],
        itemsDesktopSmall:[980,2],
        itemsMobile : [600,1],
        pagination:true,
        autoPlay:true
    });

    $("#news-slider12").owlCarousel({
        items : 2,
        itemsDesktop:[1199,2],
        itemsDesktopSmall:[980,1],
        itemsTablet: [600,1],

        pagination:true,
        autoPlay:true
    });

    $("#news-slider13").owlCarousel({
        navigation : false,
        pagination : true,
        items : 3,
        itemsDesktop:[1199,3],
        itemsDesktopSmall:[980,2],

        navigationText : ["",""]
    });

    $("#news-slider14").owlCarousel({
        items : 4,
        itemsDesktop:[1199,3],
        itemsDesktopSmall:[980,2],

        pagination:false,
        autoPlay:true
    });
});



function change(img)
{
  // imagen grande
  let imagen = document.getElementById('principal');
  //imagen pequeña
  let rutaimg = img.getAttribute("src");
  //cambiar atributo src de la imagen grande
  imagen.src = rutaimg;
}
function load()
{
  
}
