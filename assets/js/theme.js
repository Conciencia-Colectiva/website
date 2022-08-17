
      (function ($) {"use strict";

      $(function () {
        const header = $(".start-style");
        $(window).scroll(function () {
          const scroll = $(window).scrollTop();

          if (scroll >= 10) {
            header.removeClass('start-style').addClass("scroll-on");
          } else {
            header.removeClass("scroll-on").addClass('start-style');
          }
        });
      });

      //Animation

      $(document).ready(function () {
        $('body.hero-anime').removeClass('hero-anime');
      });

      //Menu On Hover

      $('body').on('mouseenter mouseleave', '.nav-item', function (e) {
        if ($(window).width() > 750) {
          const _d = $(e.target).closest('.nav-item');_d.addClass('show');
          setTimeout(function () {
            _d[_d.is(':hover') ? 'addClass' : 'removeClass']('show');
          }, 1);
        }
      });



    })(jQuery);

// Blank Target External Links
$(document.links).filter(function() {
return this.hostname !== window.location.hostname;
}).attr('target', '_blank');
