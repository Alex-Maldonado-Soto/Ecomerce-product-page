let numberSliderImage = -1;
let sliderImage = [
  "images/image-product-1.jpg",
  "images/image-product-2.jpg",
  "images/image-product-3.jpg",
  "images/image-product-4.jpg",
];

function next() {
  numberSliderImage++;
  if (numberSliderImage == sliderImage.length) {
    numberSliderImage = 0;
  }
  document.getElementById("slider--img").src = sliderImage[numberSliderImage];
}

function previous() {
  numberSliderImage += -1;
  if (numberSliderImage <= -1) {
    numberSliderImage = 3;
  }
  document.getElementById("slider--img").src = sliderImage[numberSliderImage];
}
