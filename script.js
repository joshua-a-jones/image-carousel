const track = document.getElementById('carousel-track');
const slides = document.getElementsByClassName('carousel-slide');
const nextBtn = document.getElementById('next-button');
const previousBtn = document.getElementById('previous-button');
const navigation = document.getElementById('carousel-navigation');
const navDots = document.getElementsByClassName('carousel-nav-button');



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
    const nextIndex = getIndexOfNodeElement(slides,nextSlide);

    const shiftAmount = (index+1)*getImageWidth();

    track.style.transform = `translateX(-${shiftAmount}px)`;
    
    currentSlide.classList.remove('current');
    nextSlide.classList.add('current');
    setCurrentDot(nextIndex);
    
});

//click previous button to go back a slide
previousBtn.addEventListener('click', (e) => {
    const currentSlide = track.querySelector('.current');
    const nextSlide = currentSlide.previousElementSibling;
    if (!nextSlide) {return;}
    const index = getIndexOfNodeElement(slides, currentSlide);
    const nextIndex = getIndexOfNodeElement(slides,nextSlide);
    const shiftAmount = (index-1)*getImageWidth() ;

    track.style.transform = `translateX(-${shiftAmount}px)`;
    
    currentSlide.classList.remove('current');
    nextSlide.classList.add('current');
    setCurrentDot(nextIndex);
});


// click a navigation dot at the bottom and jump to that slide
for (let i = 0; i < navDots.length; i += 1) {
    navDots[i].addEventListener('click', navigateToSlide);
}

function navigateToSlide(e) {
    const currentDot = navigation.querySelector('.current');
    const index = getIndexOfNodeElement(navDots, e.target);
    


    const shiftAmount = index*getImageWidth();

    track.style.transform = `translateX(-${shiftAmount}px)`;

    currentDot.classList.remove('current');
    e.target.classList.add('current');
    track.querySelector('.current').classList.remove('current');
    slides[index].classList.add('current');
}




function setCurrentDot(currentImageIndex) {
    navigation.querySelector('.current').classList.remove('current')
    navDots[currentImageIndex].classList.add('current');
}


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

