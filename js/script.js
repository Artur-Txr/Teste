const images = document.querySelectorAll('.wallpaper_gallery img');
    images.forEach(image => {
    image.addEventListener('click', () => {

const fullscreen = document.createElement('div');
    fullscreen.style.position = 'fixed';
    fullscreen.style.top = '0';
    fullscreen.style.left = '0';
    fullscreen.style.width = '100%';
    fullscreen.style.height = '100%';
    fullscreen.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    fullscreen.style.display = 'flex';
    fullscreen.style.alignItems = 'center';
    fullscreen.style.justifyContent = 'center';
    fullscreen.style.zIndex = '1000';

const img = document.createElement('img');
    img.src = image.src;
    img.style.maxWidth = '90%';
    img.style.maxHeight = '90%';
    img.style.borderRadius = '10px';

    fullscreen.appendChild(img);
    document.body.appendChild(fullscreen);

    fullscreen.addEventListener('click', () => {
    document.body.removeChild(fullscreen);
});
});
});