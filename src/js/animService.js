let allServices = document.querySelectorAll('.cardService');

allServices.forEach( service => {
    service.addEventListener('click', () => {
        
        service.classList.contains('cardService-active')?service.classList.remove('cardService-active') : service.classList.add('cardService-active');
    });
})