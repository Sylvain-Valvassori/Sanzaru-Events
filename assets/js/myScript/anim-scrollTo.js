//------------------------------------------------------------
// -------------------| animation SrollTo |-------------------

const navToHome     = document.querySelectorAll('.toHome');
const navToAbout    = document.querySelectorAll('.toAbout');
const navToContact  = document.querySelectorAll('.toContact');
const navToServices = document.querySelectorAll('.toServices');

const timeScrollTo  = 1.5;
const offsetTop     = 10;

navToAbout.forEach(element => element.onclick = () => { 
    gsap.to(window, 
        {
            duration: timeScrollTo, 
            scrollTo: { y: "#about",  offsetY: offsetTop}, 
            ease: "power2", 
        }) 
});
navToContact.forEach(element => element.onclick = () => { 
    gsap.to(window, 
        {
            duration: timeScrollTo, 
            scrollTo: { y: "#contact",  offsetY: offsetTop}, 
            ease: "power2", 
        }) 
});
navToServices.forEach(element => element.onclick = () => { 
    gsap.to(window, 
        {
            duration: timeScrollTo, 
            scrollTo: { y: "#services",  offsetY: offsetTop}, 
            ease: "power2", 
        }) 
});
navToHome.forEach(element => element.onclick = () => { 
    gsap.to(window, 
        {
            duration: timeScrollTo + .5, 
            scrollTo: { y: "#home",  offsetY: offsetTop}, 
            ease: "power2", 
        }) 
});

//-------------------------------------------------------------
