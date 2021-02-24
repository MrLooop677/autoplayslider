const slideContainer = document.querySelector(".container");
const slide = document.querySelector(".slides");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
let x;

let slides = document.querySelectorAll(".slide");
let index = 0;

//copy first and last child from slid
const firstclone = slide.firstElementChild.cloneNode(true);
const lastclone = slide.lastElementChild.cloneNode(true);

// add id to the firstclone and lastclone
firstclone.id = "firstclone";
lastclone.id = "lastclone";

// append firstclone and lastclone in slide
slide.append(firstclone);
slide.prepend(lastclone);

// width of every slide
const slidewidth = slides[index].clientWidth;
console.log(slides);

slide.style.transform = `translateX(${-slidewidth * index}px)`;

// function start to translate slide auto
const startslide = () => {
  x = setInterval(function () {
    index++;
    // using translate to moving slide and transition
    slide.style.transition = `${1}s`;
    slide.style.transform = `translateX(${-slidewidth * index}px)`;
  }, 2000);
};

slide.addEventListener("transitionend", () => {
  slides = document.querySelectorAll(".slide"); //assign slides

  if (slides[index].getAttribute("id") == firstclone.getAttribute("id")) {
    slide.style.transition = "none";
    index = 1;
    slide.style.transform = `translateX(${-slidewidth * index}px)`;
  }
  if (slides[index].getAttribute("id") == lastclone.getAttribute("id")) {
    slide.style.transition = "none";
    index = slides.length - 2;
    slide.style.transform = `translateX(${-slidewidth * index}px)`;
  }
});

//to hover in slides and stop move it
slideContainer.onmouseenter = () => {
  clearInterval(x);
};
// leave mouse
slideContainer.onmouseleave = startslide;

// next direction
nextBtn.onclick = () => {
  slides = document.querySelectorAll(".slide");
  if (index >= slides.length - 1) return; //return is stop excuted function
  index++;
  slide.style.transform = `translateX(${-slidewidth * index}px)`;
  slide.style.transition = `${0.7}s`;
};

// previous direction
prevBtn.onclick = () => {
  slides = document.querySelectorAll(".slide");
  if (index <= 0) return; //return is stop excuted function
  index--;
  slide.style.transform = `translateX(${-slidewidth * index}px)`;
  slide.style.transition = `${0.7}s`;
};
startslide();
