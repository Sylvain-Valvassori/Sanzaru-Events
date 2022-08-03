let allServices = document.querySelectorAll('.cardService');

allServices.forEach( service => {
    service.addEventListener('click', () => {
        
        service.classList.contains('active')?service.classList.remove('active') : service.classList.add('active');
    });
})