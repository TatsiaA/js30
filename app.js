const upBtn = document.querySelector('.up_button');
const downBtn = document.querySelector('.down_button');
const container = document.querySelector('.container');
const sliderRight = document.querySelector('.right-slider');
const sliderLeft = document.querySelector('.left-slider');
const slidesCount = sliderLeft.querySelectorAll('div').length;

let activeSlideIndex = 0;

sliderRight.style.top = `-${(slidesCount - 1) * 100}vh`;

upBtn.addEventListener('click', () => {
    changeSlide('up');
});

downBtn.addEventListener('click', () => {
    changeSlide('down');
});

function changeSlide(direction) {
    const height = container.clientHeight;
    if (direction === 'up') {
        activeSlideIndex++;
        if (activeSlideIndex === slidesCount) {
            activeSlideIndex = 0;
        }
    } else if (direction === 'down') {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1;
        }
    }

    sliderLeft.style.transform = `translateY(-${activeSlideIndex * height}px)`;
    sliderRight.style.transform = `translateY(${activeSlideIndex * height}px)`;
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp') {
      changeSlide('up');
    } else if (event.key === 'ArrowDown') {
      changeSlide('down');
    }
  });

  document.body.addEventListener('mousewheel', (e) => {
    var delta = e.deltaY
    if (delta > 0) {
      changeSlide('up');
    } else if (delta < 0) {
      changeSlide('down');
    }
  });
