const [prevBtn, nextBtn] = document.querySelectorAll('button')
const activeSlider = document.querySelector('.slider-active')

let offset = 0

nextBtn.addEventListener('click', () => {
  offset += 250
  if (offset > 750) offset = 0
  activeSlider.style.left = -offset + 'px'
})

prevBtn.addEventListener('click', () => {
  offset -= 250
  if (offset < 0) offset = 750
  activeSlider.style.left = -offset + 'px'
})