const images = ["1.jpg", "2.jpg", "3.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.classList.add("bgImage"); // css에서 호출하려면 class가 필요하기 때문에 class를 만듦

bgImage.src = `img/${chosenImage}`;
document.body.appendChild(bgImage);
body.style.backgroundImage = bgImage;