"use strict";

const imagesDiv = document.querySelector(".images");

let image;
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};
const createImage = function (imgPath) {
  let img;
  new Promise((res, rej) => {
    img = document.createElement("img");
    img.src = imgPath;
    if (
      imgPath !== "img/img-1.jpg" &&
      imgPath !== "img/img-2.jpg" &&
      imgPath !== "img/img-3.jpg"
    ) {
      rej(new Error("resim yüklenemedi"));
    } else {
      imagesDiv.appendChild(img);
      res(img);
    }
  })
    .then((res) => console.log(res))
    .catch((err) => console.error(err));

  return img;
};

image = createImage("img/img-sd.jpg");

wait(2)
  .then(() => {
    image.style.display = "none";
    image = createImage("img/img-sc.jpg");
    return wait(2);
  })
  .then(() => {
    image.style.display = "none";
    image = createImage("img/img-asd.jpg");
    return wait(2);
  });
