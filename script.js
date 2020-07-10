const track = document.getElementById('carousel-track');
const slides = document.getElementsByClassName('carousel-slide');
const nextBtn = document.getElementById('next-button');
const previousBtn = document.getElementById('previous-button');
const navBtns = document.getElementsByClassName('carousel-nav-button');



// this sets the total width of the track element based on the number of images
// purpose is to avoid using 'magic numbers' in css
// (the width of the track container is 90vw)
track.style.width = slides.length*80 +'vw';
track.style.left = '0';


//click next button to advance to next slide
nextBtn.addEventListener('click', (e) => {
    const currentSlide = track.querySelector('.current');
    const nextSlide = currentSlide.nextElementSibling;
    if (!nextSlide) {return;}
    const index = getIndexOfNodeElement(slides, currentSlide);

    const shiftAmount = (index+1)*getImageWidth();

    track.style.transform = `translateX(-${shiftAmount}px)`;
    
    currentSlide.classList.remove('current');
    nextSlide.classList.add('current');
    
});

//click previous button to go back a slide
previousBtn.addEventListener('click', (e) => {
    const currentSlide = track.querySelector('.current');
    const nextSlide = currentSlide.previousElementSibling;
    if (!nextSlide) {return;}
    const index = getIndexOfNodeElement(slides, currentSlide);

    const shiftAmount = (index-1)*getImageWidth() ;

    track.style.transform = `translateX(-${shiftAmount}px)`;
    
    currentSlide.classList.remove('current');
    nextSlide.classList.add('current');
    
});




// image widths change as window is resized, so this value needs to be updated
// each time it is needed
function getImageWidth() {
    return imageWidth = slides[0].getBoundingClientRect().width;
}

// there is no default method to get index of element in nodelist...
function getIndexOfNodeElement(nodeList, element) {
    for (let i = 0; i < nodeList.length; i += 1) {
        if (nodeList[i]===element) {return i;}
    }
}

