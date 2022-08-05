// const percentage = document.querySelector('.loaderPercentage');
// const loader = document.querySelector('.loader');

// let i=0

// const percentageLoader = () => {

//     percentage.innerHTML = i;
//     i++;

//     if(i > 100){ myStopFunction(); }
// }

// const myInterval = setInterval(percentageLoader, 600);
// const myStopFunction = () => clearInterval(myInterval);

// window.addEventListener('load', () => {
//     percentageLoader();
//     loader.style.display = 'none';
// })


// --------------------------------------------------
const images = document.querySelectorAll('img');

async function loadImages(element) { 
    return new Promise((resolve, reject) => {
        
        window.onload = () => {
                
            images.forEach((image) => {
                image.complete;
    
                resolve('all images are loaded');
                reject('images not loaded');
            })
        };


        
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