
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const cursor = document.querySelector(".cursor");

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = "black";
});

window.addEventListener("mousemove", function (e) {
  coords.x = e.clientX;
  coords.y = e.clientY;
});

function animateCircles() {
  let x = coords.x;
  let y = coords.y;

  cursor.style.top = x;
  cursor.style.left = y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";

    circle.style.scale = (circles.length - index) / circles.length;

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });

  requestAnimationFrame(animateCircles);
}

animateCircles();





document.querySelector(".button").addEventListener("click", function() {

  gsap.to(".transition",{
    opacity: 1,
    duration: 3,
  })


  gsap.to(".palmier1", {
    y:-1000,
    duration: 1.5,
    ease: "power3",
    rotation: 5,
    })
    
    gsap.to(".palmier2", {
    y:-500,
    duration: 1.5,
    ease: "power3",
    rotation: 10,
    })

    gsap.to(".palmier3", {
      x:900,
      duration: 1.5,
      ease: "power3",
      rotation: 30,
      })

    gsap.to(".palmier4", {
      x:-1000,
      duration: 1.5,
      ease: "power3",
      rotation: -30,
      })

      gsap.to(".palmier5", {
        y:-500,
        duration: 1.5,
        ease: "power3",
        rotation: 10,
        })


    setTimeout(() => {
      document.location.href="arg.html";
    }, 3000)
});

document.querySelector(".button").addEventListener("hover", function() {

  gsap.to(".circle",{
    size: 2,
    duration: 0.3,
    ease: "power3",
  })

});