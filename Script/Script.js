window.onload = function() {
  Particles.init({
    selector: '.background',
    connectParticles: true,
    maxParticles: 200,
    color: '#C53602',
    speed: 0.5,
    minDistance:150,
    sizeVariations: 1,
    responsive: [{
      breakpoint: 992,
      options: {
        maxParticles: 200,
        color: '#48F2E3',
        connectParticles: false
      }
    }, 
    {
      breakpoint: 768,
      options: {
        maxParticles: 100,
        connectParticles: true
      }
    }, 
    {
      breakpoint: 576,
      options: {
        maxParticles: 100// disables particles.js
      }
    }
    ]
});
}; 