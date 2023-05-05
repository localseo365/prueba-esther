const ghost = document.getElementById('ghost');

setInterval(() => {
  const shouldAppear = Math.random() < 0.5;
  if (shouldAppear) {
    ghost.style.opacity = 1;
  } else {
    ghost.style.opacity = 0;
  }
}, 3000);

setInterval(() => {
  const randomX = Math.floor(Math.random() * window.innerWidth);
  const randomY = Math.floor(Math.random() * window.innerHeight);
  ghost.style.left = `${randomX}px`;
  ghost.style.top = `${randomY}px`;
  ghost.style.transition = 'opacity 1s ease-in-out';
  ghost.style.opacity = 0;
}, 5000);
