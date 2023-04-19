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

gsap.to(".transition",{
  delay:0.5,
  opacity: 0,
  duration: 1.5,
})

gsap.to(".palmier1", {
    delay:0.7,
    y:1200,
    duration: 1.5,
    rotation: -5,
    ease: "power2.in",
    })

gsap.to(".palmier2", {
    delay:0.9,
    y:600,
    duration: 1.5,
    ease: "power2.in",
    rotation: -10,
    })

gsap.to(".palmier3", {
    delay:0.8,
    x:-900,
    duration: 1.5,
    ease: "power2.in",
    rotation: -30,
  })


  gsap.to(".palmier4", {
    delay:0.6,
    x:1000,
    duration: 1.5,
    ease: "power2.in",
    rotation: 30,
    })

    gsap.to(".palmier5", {
      delay:0.9,
      y:600,
      duration: 1.5,
      ease: "power2.in",
      rotation: 10,
      })

      const texteElement = document.getElementById('texte');
      const texteComplet = texteElement.textContent;
      const vitesseFrappe = 50;
      
      texteElement.textContent = '';
      
      let indexTexte = 0;
      let indexLigne = 0;
      const lignes = texteComplet.split('|');
      
      function animationFrappe() {
        if (indexLigne < lignes.length) {
          if (indexTexte < lignes[indexLigne].length) {
            texteElement.innerHTML += lignes[indexLigne].charAt(indexTexte);
            indexTexte++;
          } else {
            texteElement.innerHTML += '<br>';
            indexLigne++;
            indexTexte = 0;
          }
          setTimeout(animationFrappe, vitesseFrappe);
        }
      }
      
      animationFrappe();

      document.querySelector(".croix").addEventListener("click", function() {

        gsap.to(".parole",{
          y: 1000,
          duration: 0.2,
          ease: "power2.in"
        })
      });



      document.querySelector(".carte").addEventListener("click", function() {

        gsap.to(".transition",{
          opacity: 1,
          duration: 3,
        })
      
      
        gsap.to(".palmier1", {
          y:0,
          duration: 1.5,
          ease: "power3",
          rotation: 0,
          })
          
          gsap.to(".palmier2", {
          y:0,
          duration: 1.5,
          ease: "power3",
          rotation: 0,
          })
      
          gsap.to(".palmier3", {
            x:0,
            duration: 1.5,
            ease: "power3",
            rotation: 0,
            })
      
          gsap.to(".palmier4", {
            x:0,
            duration: 1.5,
            ease: "power3",
            rotation: 0,
            })
      
            gsap.to(".palmier5", {
              y:0,
              duration: 1.5,
              ease: "power3",
              rotation: 0,
              })
      
      
          setTimeout(() => {
            document.location.href="map2.html";
          }, 3000)
      });