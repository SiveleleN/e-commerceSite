
document.addEventListener("DOMContentLoaded", function () {
    // Select the element to be animated
    const heading = document.querySelector(".h1Home h1");
  
    // Set up the animation properties
    const animation = anime({
      targets: heading,
      translateY: [-50, 0], // Move the heading up by 50 pixels and back down
      opacity: [0, 1], // Fade in the heading
      duration: 1000, // Animation duration in milliseconds
      easing: "easeInOutQuad", // Easing function
      autoplay: true, // Start the animation automatically
    });
  });