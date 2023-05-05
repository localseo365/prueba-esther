const container = document.querySelector('.container');
const ghost = document.createElement('img');
ghost.src = 'dev/kidnap.gif';
ghost.classList.add('ghost');
container.appendChild(ghost);

const kids = Array.from(document.querySelectorAll('.img-kids'));

let index = 0;
let intervalId = setInterval(() => {
  if (index >= kids.length) {
    clearInterval(intervalId);
    ghost.style.opacity = 0;
    return;
  }
  
  const currentKid = kids[index];
  const rect = currentKid.getBoundingClientRect();
  const ghostRect = ghost.getBoundingClientRect();

  ghost.style.left = `${rect.left - ghostRect.width}px`;
  currentKid.style.left = `${rect.left - ghostRect.width}px`;
  
  index++;
}, 2000);
