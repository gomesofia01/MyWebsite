//----------------------------------------------------------
// Smooth Scroll Function for the Down Arrow
//----------------------------------------------------------
/**
 * Smoothly scrolls the page to the section identified by 'sectionId'.
 */

function scrollToSection(sectionId) {
  // Get the DOM element with the specified ID
  var element = document.getElementById(sectionId);

  //Use the built-in scrollIntoView method with a smooth scroll behavior
  element.scrollIntoView({ behavior: 'smooth'});
}

//--------------------------------------------------------
// Carousel Functionality
//--------------------------------------------------------

//Select the main container that slides (the "track" for carousel items)
const carouselSlide = document.querySelector('.carousel-slide');

//Select all individual carousel items
const carouselItems = document.querySelectorAll('.carousel-item');

//Select the "previous" and "Next" buttons
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// container to keep track of current slide
let counter = 0;

/**
 * Updates the carousel position whenever the window is resized
 * or on an initial load. It recalculates the width of the carousel item
 * and adjusts the transform accordingly.
 */

function updateCarousel() {
  // Get the width of the first carousel item
  const size = carouselItems[0].clientWidth;

  // Temporarily remove the transition to prevent any "Jumping" effect
  carouselSlide.style.transition = 'none';

  // Move the carousel to show the current slide based on the counter
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

// Listen to the window resize event and update carousel position 
window.addEventListener('resize', updateCarousel);

// call updateCarousel() initially to set up correct position
updateCarousel();

//----------------------------------------------------------
// Next Button - Moves the carousel to the next slide
//----------------------------------------------------------
nextBtn.addEventListener('click', () => {
  // If we are on the last slide, reset the counter to -1 
  // so that adding 1 brings us back to the first slide
  if (counter >= carouselItems.length - 1) {
      counter = -1;
  }

  // Enable transition for a smooth slide effect
  carouselSlide.style.transition = "transform 0.5s ease-in-out";

  //increment the counter to move to the next slide
  counter++;

  //Re-calculate size (in case the browser was resized)
  const size = carouselItems[0].clientWidth;

  // Shift the carousel 
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

//----------------------------------------------------------
// Previous Button - Moves the carousel to the previous slide
//----------------------------------------------------------
prevBtn.addEventListener('click', () => {
  // If we are on the first slide (counter = 0), wrap around to the last slide
  if (counter <= 0) {
      counter = carouselItems.length;
  }

  // Enable transition for a smooth slide effect
  carouselSlide.style.transition = "transform 0.5s ease-in-out";

  // Decrement the counter to move to the next slide
  counter--;

  //Re-calculate size (in case the browser was resized)
  const size = carouselItems[0].clientWidth;

  // Shift the carousel 
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

