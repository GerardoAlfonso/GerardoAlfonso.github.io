        window.dataLayer = window.dataLayer || [];

        function gtag() {
          dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', 'UA-117513645-2');
        $(document).ready(function() {
          var timer;
          $('.menugr').mouseover(function() {
            var rel = $(this).attr('rel');

            timer = window.setTimeout(function() {
              $('.overlay').show();
              var id = rel;
              var $currentWidget = $('#' + id);
              $currentWidget.show().siblings('.widget-container').hide();
            }, 500);
          }, window.clearTimeout(timer));

          $('.menupeq').mouseover(function() {
            $('.widget-container').hide();
            $('.overlay').hide();
            window.clearTimeout(timer)
          });

          $('#wrap').mouseleave(function() {
            $('.widget-container').hide();
            $('.overlay').hide();
            window.clearTimeout(timer)
          });
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

        });
