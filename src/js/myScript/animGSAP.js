

let allServices = document.querySelectorAll('.cardService');
let serviceTimeline = gsap.timeline({paused:true, reversed:true});
let serviceTimeline2 = gsap.timeline({paused:true, reversed:true});

let borderBottom, servicePicture, serviceBackground, serviceDescription;

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
    

    getInfoCard(service);
   
    serviceTimeline
    .to(borderBottom, 
        {
            width: '100%',
            duration: .6,
        }
    )
    .to(serviceBackground, 
        {
            opacity: 0,
            duration: .6,
        }, '<'
    )
    .to(service, 
        {
            height: '60rem',
            duration: 1,
        }
    )
    .fromTo(servicePicture, 
        {
            y: -300,
        },
        { 
            y:0,
            duration: .7,
            ease:"power1.inOut",
        }, '<+.800'
    )
    .fromTo(serviceDescription,
        {
            y: -300,
            opacity: 0,
        },
        { 
            y: 0,
            opacity: 1,
            duration: .6,
            ease:"power1.inOut",
        }, '<+.200'
    )
 }
 function closeService(service) {
    
    getInfoCard(service);

   
    serviceTimeline2
    .to(serviceDescription,
        { 
            y: -300,
            opacity: 0,
            duration: .7,
            ease:"power1.inOut",
        },
    )
    .to( servicePicture, 
        { 
            y: -300,
            duration: .6,
            ease:"power1.inOut",
        }, '<+.200'
    )
    .to(service, 
        {
            height: '6rem',
            
        }, '<-.400'
    )
    .to(borderBottom, 
        {
            width: 0,
            duration: .6,
        },
    )
    .to(serviceBackground, 
        {
            opacity: 1,
            duration: .6,
        }, '<'
    )
 }


 const getInfoCard = (elem) => {
    borderBottom = elem.querySelector('.borderBottom');
    servicePicture = elem.querySelector('.servicePicture');
    serviceBackground = elem.querySelector('.serviceBackground');
    serviceDescription = elem.querySelector('.serviceDescription');
    
    return;
 }