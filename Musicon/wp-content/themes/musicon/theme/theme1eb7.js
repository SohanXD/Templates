(function ($) {
  'use strict';

  (typeof hooker !== 'undefined') && hooker.register('hook_play_theme', function (data) {
      return 3;
  });
  
  window.addEventListener('scroll', function(){
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
    
    if(top > 0){
      document.body.classList.add('scrolled');
    }else{
      document.body.classList.remove('scrolled');
    }

  });

})(jQuery);
