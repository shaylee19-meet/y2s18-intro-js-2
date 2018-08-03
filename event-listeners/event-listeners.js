// YOUR TASK: Add more pictures!
var pictures = ['./imgs/dog.jpg',"./imgs/1.jpg","./imgs/2.jpg","./imgs/3,jpg","./imgs/4.jpg","./imgs/5.jpg" ];
var currentIndex = 0;

function showNextPicture() {
  var img = getElementsByTagName("img")[0];
  currentIndex++; // increment current picture
  // if currentIndex is too large, start from the beginning again
  img.src = prictures[currentIndex];
  if (currentIndex >= pictures.length) {
    currentIndex = 0;
  }

  // YOUR TASK: Finish this function!
var img = getElementsByTagName("img")[0];
img.addEventListener("click", showNextPicture);
}
