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

        gsap.to(".popup",{
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


      document.addEventListener("DOMContentLoaded", function() {
        // Sélectionnez l'élément input, l'élément div et l'élément p par leurs ID ou classes
        const inputElement = document.getElementById("réponse");
        const messageElement = document.getElementById("message");
        const pointsElement = document.querySelector(".points.point1");
      
        // Ajoutez un écouteur d'événement 'input' pour détecter les changements de l'input
        inputElement.addEventListener("input", function(event) {
          // Récupérez la valeur de l'élément input
          const inputValue = event.target.value;
      
          // Vérifiez si la valeur de l'input correspond au texte "test"
          if (inputValue === "Ramses") {
            // Modifiez le contenu de l'élément message
            messageElement.textContent = "Parfait ! Maintenant tu peux rentrer quelque chose t'attends";
            
            // Affichez l'élément div en supprimant la classe "hidden"
            pointsElement.classList.remove("hidden");
          } else {
            // Effacez le contenu de l'élément message si la réponse est incorrecte
            messageElement.textContent = "";
            
            // Masquez l'élément div en ajoutant la classe "hidden"
            pointsElement.classList.add("hidden");
          }
        });
      });


      document.querySelector(".points").addEventListener("click", function() {

        gsap.to(".points",{
          height: 3000,
          width: 3000,
          backgroundColor: 'white',
          duration: 1,
        })

        gsap.to(".transition2",{
          opacity: 1,
          duration: 3,
        })

        setTimeout(() => {
          document.location.href="fin.html";
        }, 3000)

      });