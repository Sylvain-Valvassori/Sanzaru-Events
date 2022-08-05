//! Slider informations
const slider                = document.querySelector('.slider');
const slider_width          = slider.offsetWidth;
let slider_rightPosition    = getCoords(slider).right;

//! Wrapper-slide informations
const wrapper                  = document.querySelector('.wrapper');
const wrapper_width            = wrapper.offsetWidth;
const wrapper_height           = wrapper.offsetHeight;
let wrapper_rightPosition      = getCoords(wrapper).right;

//? get the value of flex gap
const gapSlideValue  =  parseInt( window.getComputedStyle(wrapper,null).getPropertyValue("gap") );


//! Slide informations
const allSlides         = document.querySelectorAll('.slide');
const slide             = document.querySelector('.slide');
const slide_width       = slide.offsetWidth;
const slide_height      = slide.offsetHeight;


//! Controller informations
const btnNext = document.getElementById('btn-next');
const btnPrev = document.getElementById('btn-prev');
btnPrev.classList.add('disabled');


//! Générals informations
let currentSlide = 0;
let maxSlide = allSlides.length;

let valueToNextSlide = slide_width + gapSlideValue;
let sizeBetween_sliderANDwrapper =  (wrapper_width - slider_width);

let valueToNextSlideB = 0;


// =========================| Les logs |=========================

console.log('=======================| INIT |=======================');
console.log('slider_initPos_right             :', getCoords(slider).right);
console.log('wrapper_initPos_right            :', getCoords(wrapper).right);
console.log('slider_initPos_left              :', getCoords(slider).left);
console.log('wrapper_initPos_left             :', getCoords(wrapper).left);
console.log('wrapper_width                    :', wrapper_width);
console.log('slider_width                     :', slider_width);
console.log('slide_width                      :', slide_width);
console.log('valueToNextSlide                 :', valueToNextSlide);
console.log('sizeBetween_sliderANDwrapper     :', sizeBetween_sliderANDwrapper);
console.log('======================================================');


// =========================================
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
// =========================================
 
btnPrev.addEventListener('click', () => {

  if(currentSlide > 0  ){ 
    currentSlide --;
    btnNext.classList.remove('disabled');
  }

  let valueToNextSlideB = valueToNextSlide * currentSlide;
  let slider_rightPosition = getCoords(slider).right;
  let wrapper_rightPosition = getCoords(wrapper).right;

  let conditionB = ( sizeBetween_sliderANDwrapper - valueToNextSlideB) +  wrapper_rightPosition;
  

  console.log('---------------------| BTN PREV |---------------------------');
  console.log('slider_rightPosition            :', getCoords(slider).right);
  console.log('wrapper_rightPosition           :', getCoords(wrapper).right);
  console.log('valueToNextSlideB               :', valueToNextSlideB);
  console.log('conditionB                      :', conditionB);
  console.log('currentSlideB                   :', currentSlide);
  console.log('------------------------------------------------');



  if( conditionB <= slider_rightPosition || currentSlide === 0){
      console.log('conditionB true');
     
      wrapper.style.transform = `translateX( ${ 0 }px)`;
      btnPrev.classList.add('disabled');
      btnNext.classList.remove('disabled');
      
      
      currentSlide;
      valueToNextSlideB;

      return;
  }
  
  btnPrev.classList.remove('disabled');

  wrapper.style.transform = `translateX( ${ -valueToNextSlideB }px)`;
});

// =========================| BTN NEXT |=========================
btnNext.addEventListener('click', () => {

    if(currentSlide < maxSlide && getCoords(wrapper).right != getCoords(slider).right){ 
      currentSlide ++;
    }

    let valueToNextSlideB = valueToNextSlide * currentSlide;
    let slider_rightPosition = getCoords(slider).right;
    let wrapper_rightPosition = getCoords(wrapper).right;

    let conditionB = ( sizeBetween_sliderANDwrapper - valueToNextSlideB) +  wrapper_rightPosition;
    

    console.log('---------------------| BTN NEXT |---------------------------');
    console.log('slider_rightPosition            :', getCoords(slider).right);
    console.log('wrapper_rightPosition           :', getCoords(wrapper).right);
    console.log('valueToNextSlideB               :', valueToNextSlideB);
    console.log('conditionB                      :', conditionB);
    console.log('currentSlideB                   :', currentSlide);
    console.log('------------------------------------------------');



    if( conditionB <= slider_rightPosition || currentSlide === maxSlide){
        console.log('conditionB true');
       
        wrapper.style.transform = `translateX( ${ -sizeBetween_sliderANDwrapper }px)`;
        btnNext.classList.add('disabled');
        btnPrev.classList.remove('disabled');
        
        
        currentSlide;
        valueToNextSlideB;

        return;
    }
    
    btnPrev.classList.remove('disabled');

    wrapper.style.transform = `translateX( ${ -valueToNextSlideB }px)`;
});

