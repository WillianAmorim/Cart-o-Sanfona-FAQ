const divClick = document.querySelectorAll('.div-click')

let lastParagraph = null

console.log(lastParagraph)

for (let i = 0; i < divClick.length; i++) {
  divClick[i].addEventListener('click', () => {
    const paragraph = divClick[i].nextElementSibling


    if(paragraph !== lastParagraph && lastParagraph !== null) {
      lastParagraph.classList.remove('p-show')
      lastParagraph.classList.add('p-hidden')
      lastParagraph.previousElementSibling.children[1].style.transform = 'rotate(0deg)'
      lastParagraph.previousElementSibling.children[0].style.fontWeight = '400'
      lastParagraph.previousElementSibling.children[1].style.color = '#4B4C5F'
    }

    if(paragraph.classList.contains('p-hidden')) {
      paragraph.classList.remove('p-hidden')
      paragraph.classList.add('p-show')
      divClick[i].children[1].style.transform = 'rotate(180deg)'
      divClick[i].children[0].style.fontWeight = '700'
      divClick[i].children[0].style.color = '#1E1F36'
      lastParagraph = paragraph
    } else {
      paragraph.classList.remove('p-show')
      paragraph.classList.add('p-hidden')
      divClick[i].children[1].style.transform = 'rotate(0deg)'
      divClick[i].children[0].style.fontWeight = '400'
      divClick[i].children[0].style.color = '#4B4C5F'
    }

    console.log(lastParagraph.previousElementSibling.children[0])
    
  })
}