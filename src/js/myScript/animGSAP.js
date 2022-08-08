

let allServices = document.querySelectorAll('.cardService');
let serviceTimeline = gsap.timeline({paused:true, reversed:true});
let serviceTimeline2 = gsap.timeline({paused:true, reversed:true});

const animations = [];

allServices.forEach( service => {
    service.onclick = () => {

        
        if (service.classList.contains('active')){
            service.classList.remove('active'); 
            
           
            closeService(service, serviceTimeline2.play());

            
            return;
        } 
        
        service.classList.add('active');
        
        openService(service, serviceTimeline.play());
    }
});

 function openService(service) {
    
       
    let borderBottom = service.querySelector('.borderBottom');
    let servicePicture = service.querySelector('.servicePicture');
    let serviceBackground = service.querySelector('.serviceBackground');
    let serviceDescription = service.querySelector('.serviceDescription');


   
    serviceTimeline.fromTo(borderBottom, 
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
    })
    .from(serviceDescription, { 
        duration: .8,
        y: 300,
        ease:"power1.inOut",
    }, '<');
 }
 function closeService(service) {
    
       
    let borderBottom = service.querySelector('.borderBottom');
    let servicePicture = service.querySelector('.servicePicture');
    let serviceBackground = service.querySelector('.serviceBackground');
    let serviceDescription = service.querySelector('.serviceDescription');


   
    serviceTimeline2.fromTo(borderBottom, 
        {
            width: '100%',
        },
        {
            duration: .6,
            width: 0,
        }
    )
    .fromTo(serviceBackground, 
        {
            opacity: 0,
        },
        {
            duration: .6,
            opacity: 1,
        }
    )
    .fromTo(service, 
        {
            height: '60rem'
        },
        {
            height: '6rem',
            ease:"power3.out",
        }
    )
    .to( servicePicture, { 
        duration: .7,
        y: -300,
        ease:"power1.inOut",
    })
    .to(serviceDescription, { 
        duration: .8,
        y: 300,
        ease:"power1.inOut",
    }, '<');
 }
