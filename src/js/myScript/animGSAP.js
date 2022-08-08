

let allServices = document.querySelectorAll('.cardService');
let openService = gsap.timeline({paused:true, reversed:true});

const animations = [];

allServices.forEach( service => {
    service.onclick = () => {

        
        if (service.classList.contains('active')){
            service.classList.remove('active'); 
            
           
            toggle(openService.reverse());
            
            return;
        } 
        
        service.classList.add('active');
        
        toggle(service, openService.play());
    }
});

 function toggle(service) {
    
       
    let borderBottom = service.querySelector('.borderBottom');
    let servicePicture = service.querySelector('.servicePicture');
    let serviceBackground = service.querySelector('.serviceBackground');
    let serviceDescription = service.querySelector('.serviceDescription');


   
    openService.fromTo(borderBottom, 
        {
            width: 0,
        },
        {
            duration: .6,
            width: '100%',
        }
    )
    .fromTo(serviceBackground, 
        {
            opacity: 1,
        },
        {
            duration: .6,
            opacity: 0,
        }
    )
    .fromTo(service, 
        {
            height: '6rem'
        },
        {
            height: '60rem',
            ease:"power3.out",
        }
    )
    .from( servicePicture, { 
        duration: .7,
        y: -300,
        ease:"power1.inOut",
    });

    openService.from(serviceDescription, { 
        duration: .8,
        y: 300,
        ease:"power1.inOut",
    }, '<');


 }
