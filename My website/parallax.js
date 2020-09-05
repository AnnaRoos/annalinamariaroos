
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

