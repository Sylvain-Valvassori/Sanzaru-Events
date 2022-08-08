

let allServices = document.querySelectorAll('.cardService');
let openService = gsap.timeline({paused:true, reversed:true});


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
            duration: 1,
            width: '100%',
        }
    );
    openService.fromTo(serviceBackground, 
        {
            opacity: 1,
        },
        {
            duration: .5,
            opacity: 0,
        }
    );
    openService.fromTo(service, 
        {
            height: '6rem'
        },
        {
        height: '60rem',
        }
    );

    openService.from( servicePicture, { 
        duration: 0.8,
        y: -800,
    });

    openService.from(serviceDescription, { 
        duration: 0.8,
        x: -800,
    });
 }
