

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
   
    serviceTimeline.to(borderBottom, 
        {
            duration: .6,
            width: '100%',
        }
    )
    .to(serviceBackground, 
        {
            duration: .6,
            opacity: 0,
        }, '<'
    )
    .to(service, 
        {
            height: '60rem',
        }
    )
    .to( servicePicture, 
        { 
            duration: .7,
            y:0,
            ease:"power1.inOut",
        }
    )
    .to(serviceDescription,
        { 
         y: 0,
            ease:"power1.inOut",
        }, '<'
    )
 }
 function closeService(service) {
    
    getInfoCard(service);

   
    serviceTimeline2
    .to( servicePicture, 
        { 
            duration: .7,
            y: -300,
            ease:"power1.inOut",
        }
    )
    .to(serviceDescription,
        { 
            duration: .8,
            y: 300,
            ease:"power1.inOut",
        }, '<'
    )
    .to(service, 
        {
            height: '6rem',
        }
    )
    .to(borderBottom, 
        {
            duration: .6,
            width: 0,
        }
    )
    .to(serviceBackground, 
        {
            duration: .6,
            opacity: 1,
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