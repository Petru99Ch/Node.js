
const swiper = new Swiper('.swiper', {

    centeredSlides: true,
     // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // Enabled autoplay mode
    autoplay: {
      delay: 3000,
      
    },
  
    
    slidesPerView: 1,
    slidesPerGroup: 1,
  
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    breakpoints: {
      640: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },    
      1024: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        
      },
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  
    delay: 3000
  });

  export {swiper}