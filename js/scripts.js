let particleColor = '#3b82f6';
let lineColor = '#ffffff';

let themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
let themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

if (localStorage.getItem('color-theme') === 'dark' || !('color-theme' in localStorage)) {
  themeToggleLightIcon.classList.remove('hidden');
  lineColor = '#ffffff';
} else {
  themeToggleDarkIcon.classList.remove('hidden');
  lineColor = '#adadad';
}

let themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function () {
  themeToggleDarkIcon.classList.toggle('hidden');
  themeToggleLightIcon.classList.toggle('hidden');
  if (localStorage.getItem('color-theme')) {
    if (localStorage.getItem('color-theme') === 'light') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
      lineColor = '#ffffff';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
      lineColor = '#adadad';
    }
  } else {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
      lineColor = '#adadad';
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
      lineColor = '#ffffff';
    }
  }
  createParticles();
});

function createParticles() {
  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 30,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": particleColor,
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": lineColor,
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
}
createParticles();

document.addEventListener('scroll', (e) => {
  if (window.scrollY >= 100 || window.pageYOffset >= 100) {
    document.getElementById('nav').classList.add('scrolled');
  } else {
    document.getElementById('nav').classList.remove('scrolled');
  }
});

let elementsArray = document.querySelectorAll('.project-section');
for (let i = 0; i < elementsArray.length; i++) {
  elementsArray[i].classList.add('scrollview');
}
window.addEventListener('scroll', fadeIn);
function fadeIn() {
  for (let i = 0; i < elementsArray.length; i++) {
    let elem = elementsArray[i];
    let distInView = elem.getBoundingClientRect().top - window.innerHeight + 90;
    if (distInView < 0) {
      elem.classList.add('inView');
    }
  }
}
fadeIn();

const textList = ['I like Angular', 'TypeScript is cool', 'I can center a div', 'npm install is-odd', 'alert(\'Hello World\');', 'I\'m a programmer'];
const textDesc = document.querySelector('#text-desc');
let textListI = 0;

function changeText() {
  setTimeout(() => {
    let animation = textDesc.animate([
      { transform: 'translateY(0px)', opacity: '1' },
      { transform: 'translateY(1px)', opacity: '0.9' },
      { transform: 'translateY(4px)', opacity: '0.7' },
      { transform: 'translateY(9px)', opacity: '0.5' },
      { transform: 'translateY(14px)', opacity: '0.3' }
    ], {
      duration: 500,
    });
    animation.onfinish = function () {
      textDesc.innerText = textList[textListI];
      textListI++;
      if (textListI > textList.length - 1) {
        textListI = 0;
      }
      textDesc.animate([
        { transform: 'translateY(14px)', opacity: '0.3' },
        { transform: 'translateY(9px)', opacity: '0.5' },
        { transform: 'translateY(4px)', opacity: '0.7' },
        { transform: 'translateY(1px)', opacity: '0.9' },
        { transform: 'translateY(0px)', opacity: '1' }
      ], {
        duration: 500,
      });
      changeText();
    };
  }, 2000);
}
changeText();
