document.querySelectorAll('.boss-gallery img').forEach(img => {
  img.addEventListener('click', () => {
    const overlay = document.getElementById('overlay');
    const overlayImg = document.getElementById('overlay-img');
    overlay.style.display = 'flex';
    overlayImg.src = img.src;
  });
});

const overlay = document.getElementById('overlay');
overlay.addEventListener('click', (e) => {
  if (e.target !== overlay.querySelector('.overlay-content') && e.target !== overlay.querySelector('.close')) {
    overlay.style.display = 'none';
  }
});

document.querySelector('.close').addEventListener('click', () => {
  overlay.style.display = 'none';
});