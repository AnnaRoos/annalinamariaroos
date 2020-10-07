
const targets = document.querySelectorAll('.show-on-scroll');

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.7
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
const muteBtn = document.getElementById('mute-btn');


function unmute() {
    if(twinkle.muted) {
        twinkle.muted = false;
        muteBtn.classList.add('mobile');
    } else {
        twinkle.muted = true;
        muteBtn.classList.remove('mobile');
    }
}

twinkle.addEventListener('click', unmute);
muteBtn.addEventListener('click', unmute);

