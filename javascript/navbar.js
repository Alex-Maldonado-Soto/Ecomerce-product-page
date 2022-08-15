///////codigo del navbar para mobile
const sliderPopAp = document.getElementById('slider__popap');



function navbar() {
  gsap.to(".nav", {
    duration: 0.5,
    left: 0,
  });
  document.querySelector("#div").style.backgroundColor = "rgb(32 32 32 / 67%)";
   sliderPopAp.classList.add('slider__pop--show');
  // navBarResponsive.classList.toggle(`nav-responsive`);

}

function navbarReverse() {
  gsap.to(".nav", {
    duration: 0.5,
    left: -240,
  });
  document.querySelector("#div").style.backgroundColor = "transparent";
  sliderPopAp.classList.remove('slider__pop--show');
}
