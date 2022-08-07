

let allServices = document.querySelectorAll('.cardService');

allServices.forEach( service => {
    service.onclick = () => {

        let servicePicture = service.querySelector('.servicePicture');
        let serviceDescription = service.querySelector('.serviceDescription');
        
        if (service.classList.contains('active')){
            service.classList.remove('active'); 
            
            return;
        } 

        service.classList.add('active');
        
        gsap.from( servicePicture, { 
            duration: 0.8,
            y: -800,
        });
        gsap.from(serviceDescription, { 
            duration: 1,
            x: -800,
        });
      
    }
});
