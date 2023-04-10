let images = ["image/img-1.png", "image/img-2.png"];


let imageIndex = 0;

let get1 = document.getElementById("ing");

setInterval(() => {
  if (imageIndex === images.length) {
    imageIndex = 0;
  }

  let imageUrl = images[imageIndex];

  get1.setAttribute("src", imageUrl);

  imageIndex++
}, 3000);
