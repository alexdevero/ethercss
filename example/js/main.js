(function() {
  'use strict';

  var app = {
    settings: {
      nav: $('.js-nav')
    },
    controllers: function() {
      if (this.settings.nav.length > 0) {
        (function() {
          console.log('nav found');

          $('.js-nav-item a').on('click', function(e) {
            e.preventDefault();
            var $this = $(this),
                linkAttr = $this.attr('href');

            $('body').animate({
              scrollTop: $('' + linkAttr).offset().top - 70
            }, 750);
          });
        })();
      }
    },
    init: function() {
      this.controllers();
    }
  };

  app.init();
})();
