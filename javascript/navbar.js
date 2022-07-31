///////codigo del navbar para mobile

function navbar() {
  gsap.to(".nav", {
    duration: 0.5,
    left: 0,
  });
  document.querySelector("#div").style.backgroundColor = "rgb(32 32 32 / 67%)";
}

function navbarReverse() {
  gsap.to(".nav", {
    duration: 0.5,
    left: -240,
  });
  document.querySelector("#div").style.backgroundColor = "transparent";
}
