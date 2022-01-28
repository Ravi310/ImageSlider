let images = [`./img/image1.jpeg`, `./img/image2.jpg`, `./img/image3.jpg`, `./img/image4.jpg`];

let container = document.getElementById("img");
let btn = document.querySelector("btn");
console.log(container);
let i = 0;
container.innerHTML = images[i];

btn.addEventListener("click", control);

function control(e) {
    console.log("clicked");
    i = i + e;
    if (i == images.length) {
        i = 0;
    }
    else if (i < 0) {
        i = images.length - 1;
    }
    
    container.src = images[i];

}

