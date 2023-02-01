
// --------------------------------------------------
const images = document.querySelectorAll('.imgLoaded');

function loadImages() { 
    return new Promise((resolve, reject) => {
        
        window.onload = () => {
            let i=0;
            images.forEach((image) => {
                i++;
                image.style.backgroundImage.complete;
                
                console.log('image' + i);
                resolve('all images are loaded');
                reject('images not loaded');
            })
        }
    })
}

function loadFonts() { 
    return new Promise((resolve, reject) => {
        setTimeout(() => { 
        
            resolve('fonts load');
            reject('fonts not-load');
        }, 1500);
    })
}
function loadVideos() { 
    return new Promise((resolve, reject) => {
        setTimeout(() => { 
        
            resolve('videos load');
            reject('videos not-load');
        }, 1500);
    })
}



const loader = document.querySelector('.loader');

const startChargement = () => { 
    console.log('[start]'); 

}
const endChargement = () => { 
    console.log('[end]'); 
    document.body.classList.remove('disabled'); 
            
    loader.style.display = 'none';
}


async function chargement() {
    
    startChargement();

    try { 
        const p1 = await loadImages();
        console.log(p1);

        // const p2 = await loadFonts();
        // console.log(p2);

        // const p3 = await loadVideos();
        // console.log(p3);


    } catch (error) {
        console.warn(error);
    }


    endChargement();
}

chargement();