const images = ["이미지1.jpg", "이미지2.jpg", "이미지3.jpg"];

const choosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `배경화면/${choosenImage}`;

document.body.appendChild(bgImage);
