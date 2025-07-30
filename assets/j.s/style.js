// Dark mode toggle
      const darkToggle = document.getElementById('darkToggle');
      darkToggle.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
      });
    

// GSAP Animation on Hero Image
gsap.from("#hero-img", {
  duration: 1.5,
  y: 50,
  scale: 0.95,
  opacity: 0,
  ease: "power3.out"
});


AOS.init({
  offset: 120,       // offset (in px) from the original trigger point
  delay: 0,          // values from 0 to 3000, with step 50ms
  duration: 1000,    // values from 0 to 3000, with step 50ms
  easing: 'ease',    // default easing for AOS animations
  once: true,        // whether animation should happen only once
  mirror: false,     // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});
