const divClick = document.querySelectorAll('.div-click')
const tagP = document.querySelectorAll('.p-hidden')

for (let i = 0; i < divClick.length; i++) {
  divClick[i].addEventListener('click', () => {
    const paragraph = divClick[i].nextElementSibling
    
    if(paragraph.classList.contains('p-show')) {
      paragraph.classList.remove('p-show')
      paragraph.classList.add('p-hidden')
    } else {
      paragraph.classList.remove('p-hidden')
      paragraph.classList.add('p-show')
    }
  })
}