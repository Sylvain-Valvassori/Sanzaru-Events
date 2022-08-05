//! Slider informations
const slider                = document.querySelector('.slider');
const slider_width          = slider.offsetWidth;
// const slider_positionRight  = slider.offsetWidth + slider.offsetLeft;
const slider_positionRight  = getCoords(slider).right; 
const slider_positionLeft   = getCoords(slider).left; 
// ------------------------------------------------------------------------


//! Wrapper-slide informations
const wrapper                  = document.querySelector('.wrapper');
const wrapper_width            = wrapper.offsetWidth;
const wrapper_height           = wrapper.offsetHeight;
// const wrapper_positionRight    = wrapper.offsetLeft + wrapper_width;
const wrapper_positionRight    = getCoords(wrapper).right;
const wrapper_positionLeft     = getCoords(wrapper).left;

//? get the value of flex gap
const gapValue_slide  =  parseInt( window.getComputedStyle(wrapper,null).getPropertyValue("gap") );
// ------------------------------------------------------------------------


//! Slide informations
const allSlides         = document.querySelectorAll('.slide');
const slide             = document.querySelector('.slide');
const slide_width       = slide.offsetWidth;
const slide_height      = slide.offsetHeight;
// ------------------------------------------------------------------------


//! Controller informations
const btnNext = document.getElementById('btn-next');
const btnPrev = document.getElementById('btn-prev');
// ------------------------------------------------------------------------


//! Générals informations
let currentSlide = 0;
let maxSlide = allSlides.length - 1;

let valueToNextSlide = slide_width + gapValue_slide;
let diffSize_wrapper_slider =   (wrapper_width - slider_width);


// ------------------------------------------------------------------------

console.log('wrapper_positionRight_init   :', wrapper_positionRight  );
console.log('slider_positionRight_init    :', slider_positionRight   );
console.log('wrapper_width                :', wrapper_width          );
console.log('slider_width                 :', slider_width           );
console.log('slide_width                  :', slide_width            );
console.log('valueToNextSlide             :', valueToNextSlide       );
console.log('diffSize_wrapper_slider      :', diffSize_wrapper_slider);
console.log('======================================================' );


// =========================================

btnPrev.addEventListener('click', () => {

    
    currentSlide --;

    valueToNextSlide = valueToNextSlide * currentSlide;
    slider_positionLeft;
    wrapper_positionLeft;
    
    let conditionA = (wrapper_positionLeft - slider_positionLeft) - diffSize_wrapper_slider;
    

    console.log('slider_positionRight       :',     slider_positionRight);
    console.log('wrapper_positionRight      :',     wrapper_positionRight);
    console.log('diffSize_wrapper_slider    :',     diffSize_wrapper_slider);
    console.log('valueToNextSlide           :',     valueToNextSlide);
    console.log('conditionA                 :',     conditionA);
    console.log('------------------------------------------------');



    if( conditionA <= slider_positionLeft || currentSlide === 0) {
       
        wrapper.style.transform = `translateX( ${ 0 }px)`;
        btnPrev.classList.add('disabled');
        

        console.log('conditionA true');
        currentSlide = maxSlide;

        return;
    }
    

    wrapper.style.transform = `translateX( ${ -valueToNextSlide }px)`;
});

// =========================================

btnNext.addEventListener('click', () => {

    
    currentSlide ++;
    
    valueToNextSlide = valueToNextSlide * currentSlide;
    slider_positionRight;
    wrapper_positionRight;
    
    let conditionB = (wrapper_positionRight - valueToNextSlide) + diffSize_wrapper_slider;
    
    console.log('slider_positionRight       :',     slider_positionRight);
    console.log('wrapper_positionRight      :',     wrapper_positionRight);
    console.log('diffSize_wrapper_slider    :',     diffSize_wrapper_slider);
    console.log('valueToNextSlide           :',     valueToNextSlide);
    console.log('conditionB                 :',     conditionB);
    console.log('------------------------------------------------');

    if( conditionB <= slider_positionRight || currentSlide === maxSlide){

       
        console.log('true');
        wrapper.style.transform = `translateX( ${ -diffSize_wrapper_slider }px)`;
        
        
        btnNext.classList.add('disabled');

        return;
    }
    wrapper.style.transform = `translateX( ${ -valueToNextSlide }px)`;
   
   

    
});



// obtenir les coordonnées du document de l'élément
function getCoords(elem) {
    let box = elem.getBoundingClientRect();
  
    return {
      top: box.top + window.pageYOffset,
      right: box.right + window.pageXOffset,
      bottom: box.bottom + window.pageYOffset,
      left: box.left + window.pageXOffset
    };
  }

