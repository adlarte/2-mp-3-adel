const textElement = document.getElementById('text');
const container = document.querySelector('.container');
const textContent = "Mission accomplie";
let textIndex = 0;

function typeWriter() {
  if (textIndex < textContent.length) {
    textElement.innerHTML += textContent.charAt(textIndex);
    textIndex++;
    setTimeout(typeWriter, 50);
  } else {
    // Fade out text and container after typing is complete
    setTimeout(() => {
      container.classList.add('hidden');
      showBackgroundImage();
    }, 2000);
  }
}

function showBackgroundImage() {
  const bgImage = document.createElement('div');
  bgImage.classList.add('background-image', 'hidden'); // Add the 'hidden' class here
  document.body.appendChild(bgImage);

  // Fade in the background image
  setTimeout(() => {
    bgImage.classList.remove('hidden');
  }, 2000);
}

// Start typing animation
typeWriter();