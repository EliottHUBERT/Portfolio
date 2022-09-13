document.addEventListener('DOMContentLoaded', function () {
    particleground(document.getElementById('bg'), {
      dotColor: '#c2d995',
      lineColor: '#c2d995',
      directionX: 'center',
      directionY: 'center',
      density: '11250',
      parallax: true,
      parallaxMultiplier: 10,
    });
  }, false);

  window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}