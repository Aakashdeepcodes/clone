
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});







var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    
    autoplay: { 
        delay: 4000,
        disableOnInteraction: false,
        },
    
    
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  
 
        });

       
//swiper
var swiper = new Swiper(".tvshow-container ", {
loop: true,
autoplay : {        
    delay: 20000,
    disableOnInteraction: false,

    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      568: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      968: {
        slidesPerView: 5,
      },
    },
  });

  var swiper = new Swiper(".anime-container ", {
    loop: true,
    autoplay : {        
        delay: 7000,
        disableOnInteraction: false,
    
        },
        centeredSlides: true,
        breakpoints: {
          0: {
            slidesPerView: 2,
          },
          568: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          968: {
            slidesPerView: 5,
          },
        },
      });









    
    