//! Slider informations
const slider                = document.querySelector('.slider');
const slider_width          = slider.offsetWidth;

//! Wrapper-slide informations
const wrapperSlide                  = document.querySelector('.wrapper-slide');
const wrapperSlide_width            = wrapperSlide.offsetWidth;
const wrapperSlide_height           = wrapperSlide.offsetHeight;

//? get the value of flex gap
const gapSlideValue  =  parseInt( window.getComputedStyle(wrapperSlide,null).getPropertyValue("gap") );


//! Slide informations
const allSlides         = document.querySelectorAll('.slide');
const slide             = document.querySelector('.slide');
const slide_width       = slide.offsetWidth;
const slide_height      = slide.offsetHeight;


//! Controller informations
const btnNext = document.getElementById('btn-next');
const btnPrev = document.getElementById('btn-prev');


//! Générals informations
let currentSlide = 0;
let test = 0;
let maxSlide = allSlides.length - 1;

let widthSlideAndGapValue = slide_width + gapSlideValue;
let difSizeBetween_WrapperSlide_Slider =   (wrapperSlide_width - slider_width);

// Calcules

// console.log('wrapperSlide_initPos_right       :',  getCoords(wrapperSlide).right  );
// console.log('slider_initPos_right             :', getCoords(slider).right        );
console.log('slider_initPos_left              :', getCoords(slider).left        );
console.log('wrapperSlide_initPos_left        :',  getCoords(wrapperSlide).left  );
console.log('wrapperSlide_width         :', wrapperSlide_width          );
console.log('slider_width               :', slider_width                );
console.log('slide_width                :', slide_width                 );
console.log('widthSlideAndGapValue      :', widthSlideAndGapValue       );
console.log('difSizeBetween_WrapperSlide_Slider                :', difSizeBetween_WrapperSlide_Slider       );
console.log('======================================================');


// =========================================

btnNext.addEventListener('click', () => {

    if(currentSlide = (currentSlide-1)) {
        currentSlide --;
    }

    let valueToNextSlide = widthSlideAndGapValue * currentSlide;
    let valueLeftPositionSlider = getCoords(slider).left;
    let valueLeftPositionWrapperSlide = getCoords(wrapperSlide).left;
    
    let condition = ( valueToNextSlide - valueLeftPositionWrapperSlide) - difSizeBetween_WrapperSlide_Slider;

let conditionA = 


    
    console.log('slider_LeftPosition       :', getCoords(slider).left);
    console.log('wrapperSlide_LeftPosition :', getCoords(wrapperSlide).left);
    console.log('difSizeBetween_WrapperSlide_Slider                :', difSizeBetween_WrapperSlide_Slider);
    console.log('valueToNextSlide           :', valueToNextSlide);
    console.log('condition                       :', condition);
    console.log('currentSlide               :', currentSlide);
    console.log('------------------------------------------------');

    if( condition >= valueLeftPositionSlider || currentSlide <= 0){
       
        wrapperSlide.style.transform = `translateX( ${ 0 }px)`;
        btnNext.classList.add('disabled');
        currentSlide = 0;


        console.log('test true');
        return;
    }
    
    wrapperSlide.style.transform = `translateX( ${ -valueToNextSlide }px)`;
});

// =========================================

btnPrev.addEventListener('click', () => {

    
    currentSlide ++;
    let valueToNextSlide = widthSlideAndGapValue * currentSlide;
    let valueRightPositionSlider = getCoords(slider).right;
    let valueRightPositionWrapperSlide = getCoords(wrapperSlide).right;
    let test1 = (valueRightPositionWrapperSlide - valueToNextSlide) + difSizeBetween_WrapperSlide_Slider;
    

    console.log('slider_rightPosition       :', getCoords(slider).right);
    console.log('wrapperSlide_rightPosition :', getCoords(wrapperSlide).right);
    console.log('difSizeBetween_WrapperSlide_Slider                :', difSizeBetween_WrapperSlide_Slider);
    console.log('valueToNextSlide           :', valueToNextSlide);
    console.log('test1                      :', test1);
    console.log('currentSlide1              :', currentSlide);
    console.log('------------------------------------------------');



    if( test1 <= valueRightPositionSlider || currentSlide === maxSlide){
       
        wrapperSlide.style.transform = `translateX( ${ -difSizeBetween_WrapperSlide_Slider }px)`;
        btnPrev.classList.add('disabled');
        

        console.log('test1 true');
        currentSlide = maxSlide;

        return;
    }
    

    wrapperSlide.style.transform = `translateX( ${ -valueToNextSlide }px)`;
});

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
