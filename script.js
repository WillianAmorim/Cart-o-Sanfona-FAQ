const divClick = document.querySelectorAll('.div-click')
const tagP = document.querySelectorAll('.p-hidden')

let lastParagraph = null

for (let i = 0; i < divClick.length; i++) {
  divClick[i].addEventListener('click', () => {
    const paragraph = divClick[i].nextElementSibling

    const arrow = divClick[i].querySelector(':nth-child(2)')

    if(lastParagraph !== paragraph && lastParagraph !== null) {
      lastParagraph.classList.remove('p-show')
      lastParagraph.classList.add('p-hidden')
    }

    if(paragraph.classList.contains('p-show')) {
      paragraph.classList.remove('p-show')
      paragraph.classList.add('p-hidden')
      arrow.style.transform = 'rotate(0)'
      console.log('contem')

    } else {
      paragraph.classList.remove('p-hidden')
      paragraph.classList.add('p-show')
      arrow.style.transform = 'rotate(180deg)'
      console.log('não contem')
      lastParagraph = paragraph
    }
  })
}