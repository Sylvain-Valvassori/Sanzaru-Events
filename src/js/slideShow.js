// import Swiper from './node_modules/swiper';


let swiper = new Swiper(".slider", {
            
    // loop: true,
    setWrapperSize: true,
    slidesPerView: 'auto',
    spaceBetween: 40,

    navigation: {
        nextEl: "#btn-next",
        prevEl: "#btn-prev",
    },
    
    breakpoints: {
        370: {
            slidesPerView: 1,

        },
        768: {
            slidesPerView: 3,
        },
    },


})