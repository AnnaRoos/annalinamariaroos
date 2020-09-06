
const targets = document.querySelectorAll('.show-on-scroll');

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0
  }

let observer = new IntersectionObserver(
    (entries) => { 
        entries.forEach(entry => {
            entry.target.classList.toggle('animation-visible');
      });
    }, 
    options);

targets.forEach(target => {
    observer.observe(target);
});

const twinkle = document.getElementById('twinkle');

function unmute() {
    if(twinkle.muted) {
        twinkle.muted = false;
    } else {
        twinkle.muted = true;
    }
}

twinkle.addEventListener('click', unmute);