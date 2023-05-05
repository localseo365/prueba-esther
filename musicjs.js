const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const trackList = document.querySelector('.track-list');

let scrollAmount = 0;
const scrollStep = 100;

leftArrow.addEventListener('click', () => {
  scrollAmount -= scrollStep;
  trackList.scroll({
    left: scrollAmount,
    behavior: 'smooth'
  });
});

rightArrow.addEventListener('click', () => {
  scrollAmount += scrollStep;
  trackList.scroll({
    left: scrollAmount,
    behavior: 'smooth'
  });
});

const tracks = document.querySelectorAll('.track');

tracks.forEach(track => {
  const audio = track.querySelector('audio');

  track.addEventListener('click', () => {
    audio.currentTime = 0;
    audio.play();
  });
});
