window.onscroll = function() {progress_bar()};

function progress_bar() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("progress-bar").style.width = scrolled + "%";
} 

window.onload = function() {
  Particles.init({
    selector: '.background',
    connectParticles: true,
    maxParticles: 150,
    color: '#C53602',
    speed: 1,
    minDistance:150,
    sizeVariations: 3
  });
}; 