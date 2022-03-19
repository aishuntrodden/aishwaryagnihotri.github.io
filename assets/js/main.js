  /* For Rotating Title */
  $("#title-rotate").Morphext({
      animation: "flipInX",
      separator: "|",
      speed: 2000,
      complete: function () {}
  });
  /* For Rotating Title */


  /* Page scrolling feature, requires jQuery Easing plugin. */
  var pageScroll = function(){
      $('.page-scroll a').bind('click', function(e){
          e.preventDefault();

          var $anchor = $(this);
          var offset = $('body').attr('data-offset');

          $('html, body').stop().animate({
              scrollTop: $($anchor.attr('href')).offset().top - (offset - 1)
          }, 1500, 'easeInOutExpo');
      });
  };
  pageScroll();

   (function () {
       $(window).scroll(function() {
           if ($(this).scrollTop() > 100) {
               $('.scroll-up').fadeIn();
           } else {
               $('.scroll-up').fadeOut();
           }
       });
   }());

  /* Page scrolling feature, requires jQuery Easing plugin. */


  /* Making Navbar Stick to Top */
  $(window).load(function(){
        $("#navigation").sticky({ topSpacing: 0 });
         });
  /* Making Navbar Stick to Top */


  /* To Close Toggle Navigation after clicking in Mobiles*/
     $(document).on('click','.navbar-collapse.in',function(e) {
      if( $(e.target).is('a') ) {
          $(this).collapse('hide');
      }
  });
  /* To Close Toggle Navigation after clicking in Mobiles*/


  /* --- Preloader Starts --- */
   $(window).ready(function() {
       $('#pre-status').fadeOut();
       $('#tt-preloader').delay(350).fadeOut('slow');
   });
   /* --- Preloader Ends --- */


   /* --- Skills Starts --- */
   $('.skills').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
       if (visible) {
           $('.chart').easyPieChart({
               //your configuration goes here
               easing: 'easeOut',
               delay: 3000,
               barColor:'#F6767E',
               trackColor:'rgba(255,255,255,0.2)',
               scaleColor: false,
               lineWidth: 8,
               size: 140,
               animate: 2000,
               onStep: function(from, to, percent) {
                   this.el.children[0].innerHTML = Math.round(percent);
               }

           });
           $(this).unbind('inview');
       }
   });
   /* --- Skills Ends --- */
