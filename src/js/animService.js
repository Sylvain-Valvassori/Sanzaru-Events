let allServices = document.querySelectorAll('.cardService');

allServices.forEach( service => {
    service.addEventListener('click', () => {
        
        if (service.classList.contains('active')){
            service.classList.remove('active'); 
            
            return;
        } 
        service.classList.add('active');
    });
})