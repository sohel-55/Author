// ============================full slider area=============================
$('.slider_active').owlCarousel({
   loop: true,
   autoplay: true,
   margin: 10,
   dots: false,
   nav: true,
   navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
   responsive: {
      0: {
         items: 1
      },
      600: {
         items: 1
      },
      1000: {
         items: 1
      }
   }
});

//   =============client area slider================
$('.client_slider').owlCarousel({
   loop: true,
   autoplay: true,
   speed: 2000,
   margin: 10,
   dots: false,
   nav: true,
   navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
   responsive: {
      0: {
         items: 1
      },
      600: {
         items: 1
      },
      1000: {
         items: 1
      }
   }
});