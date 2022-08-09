

let allServices = document.querySelectorAll('.cardService');
let borderBottom, servicePicture, serviceBackground, serviceDescription;
const serviceTimelineOpen = gsap.timeline();
const serviceTimelineClose = gsap.timeline();
const mediaQueryMobile = window.matchMedia("(max-width: 768px)");


allServices.forEach( service => {
    service.onclick = () => {

        
        if (service.classList.contains('active')){
            service.classList.remove('active'); 
            
            if(mediaQueryMobile.matches){
               closeServiceMobile(service, serviceTimelineClose.play());

               return
            }
            closeService(service, serviceTimelineClose.play());
            
            return;
        } 
        
        service.classList.add('active');
        
        if(mediaQueryMobile.matches){
            openServiceMobile(service, serviceTimelineOpen.play());

            return;
        }

        openService(service, serviceTimelineOpen.play());

    }
});

const getInfoCard = (elem) => {
    borderBottom = elem.querySelector('.borderBottom');
    servicePicture = elem.querySelector('.servicePicture');
    serviceBackground = elem.querySelector('.serviceBackground');
    serviceDescription = elem.querySelector('.serviceDescription');
    
    return;
 }
const openServiceMobile= (service) => {
    

    getInfoCard(service);
   
    serviceTimelineOpen
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
const closeServiceMobile = (service) => {

getInfoCard(service);


serviceTimelineClose
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
    }, '<-.200'
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

const openService = (service) => {
    

    getInfoCard(service);
   
    serviceTimelineOpen
    .to(borderBottom, 
        {
            width: '100%',
            duration: .8,
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
            height: '30rem',
            duration: 1,
            ease: "power2.inOut",
        }
    )
    .fromTo(servicePicture, 
        {
            y: 300,
        },
        { 
            y:0,
            duration: .7,
            ease: "power2.out",
        }, 
    )
    .fromTo(serviceDescription,
        {
            y: -300,
        },
        { 
            y: 0,
            duration: .7,
            ease:"power2.out",
        }, '<+.200'
    )
 }
const closeService = (service) => {

getInfoCard(service);


serviceTimelineClose
.to( servicePicture, 
    { 
        y: 300,
        duration: .7,
        ease:"power2.in",
    }, 
)
.to(serviceDescription,
    { 
        y: -300,
        duration: .7,
        ease:"power2.in",
    },'<+.200'
)
.to(service, 
    {
        height: '8rem',
        duration: 1,
        ease: "power2.inOut",
    },
)
.to(serviceBackground, 
    {
        opacity: 1,
        duration: .6,
    },
)
.to(borderBottom, 
    {
        width: 0,
        duration: .8,
    }, '<+.300'
)

}