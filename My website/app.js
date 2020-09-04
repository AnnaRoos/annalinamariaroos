const projectsLink = document.querySelector('.projects-link');
const video = document.querySelector('.video');
const projectsPreview = document.querySelector('.projects-preview');




projectsLink.addEventListener('onmouseover', changeMain = (projectsPreview) => {
    projectsPreview.classList.add('.visible');
    video.classList.add('.hidden');
});