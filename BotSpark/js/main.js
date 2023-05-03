let header = document.querySelector('header');

function writeAnimation(querySelector, delay = 0) {
  let element = document.querySelector(querySelector);
  let text = element.innerHTML;
  element.innerHTML = '';
  let i = 0;
  let interval = setInterval(function() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
    } else {
      clearInterval(interval);
    }
  }, delay);
}

let animation = 0;

function scrollHandler() {
  let scrollY = window.scrollY;
  if (scrollY > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }

  if (scrollY >= window.innerHeight/2-100 && animation == 0) {
    writeAnimation('.info__box h2', 50);
    writeAnimation('.info__box p', 10);
    animation = 1;
  }
}

window.addEventListener('scroll', scrollHandler);

