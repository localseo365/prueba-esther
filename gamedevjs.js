const text = '"1772" is a typing horror puzzle game where you play as a cleaning lady who discovers a hidden door in a school. Inside, she uncovers a sinister world where children are punished by malevolent teachers and a shapeless monster lurks. Your mission is to save the captive children by solving puzzles and navigating through typewritten terminals. Will you have the courage to face the terror that awaits within?"';


const text_box = document.querySelector('.text-box1 h1');
let index = 0;

function writeText() {
    if (index < text.length) {
        text_box.innerHTML += text.charAt(index);
        index++;
        setTimeout(writeText, 50); // adjust the speed here
    }
}

setTimeout(writeText, 2000); // start the animation after 1 second


const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const gifs = document.querySelectorAll('.gif');
let currentGifIndex = 0;

function showGif(index) {
  // hide all gifs
  gifs.forEach(gif => gif.classList.remove('active'));
  
  // show the gif at the given index
  gifs[index].classList.add('active');
}

function prevGif() {
  currentGifIndex--;

  if (currentGifIndex < 0) {
    currentGifIndex = gifs.length - 1;
  }

  showGif(currentGifIndex);
}

function nextGif() {
  currentGifIndex++;

  if (currentGifIndex >= gifs.length) {
    currentGifIndex = 0;
  }

  showGif(currentGifIndex);
}

prevBtn.addEventListener('click', prevGif);
nextBtn.addEventListener('click', nextGif);

showGif(currentGifIndex);
