const languages = document.querySelector('ul.language')
const languageItem = document.querySelectorAll('ul.language>li')
const mainMenu = document.querySelector('ul.menu')
const visibleLangMenu = document.querySelector('.tooltip')
const headerSearch = document.querySelector('.search')
const modalCloser = document.querySelector('.xMark')
const overlay = document.querySelector('.overlay')
const modalSearchButton = document.querySelector('button')
const searchInput = document.querySelector('input')
const menuItem = document.querySelectorAll('a')
const body = document.querySelector('body')




let borderColors = ['#6cf', '#c9f', '#9ff', '#f90', '#ff0', '#c9f', '#f69','#6cf', '#c9f', '#9ff', '#f90', '#ff0',]

console.log(menuItem);

menuItem.forEach((item,i) => {
  item.style.borderColor = borderColors[i]
  item.addEventListener('mouseenter', () => {
    item.style.color = borderColors[i]
  })
  item.addEventListener('mouseleave', () => {
    item.style.color = 'inherit'
  })
})

// SEARCH

headerSearch.addEventListener('click', ()=> {
  overlay.classList.remove('hidden')
  body.style.position='fixed'
})
modalCloser.addEventListener('click', ()=> {
  overlay.classList.add('hidden')
  body.style.position='relative'
})


searchInput.addEventListener('keydown', ()=>{
 searchInput.value.length>0?modalSearchButton.classList.remove('opacity'):modalSearchButton.classList.add('opacity')
})

// LANGUAGES

let langUzb = ['MAHALLIY', 'MARKAZIY OSIYO', 'DUNYO', 'PUL', 'MADANIYAT', 'LIFESTYLE', 'SPORT', 'KOLUMNISTLAR', 'MULTIMEDIA']
let langRus = ['УЗБЕКИСТАН',  'ЦЕНТРАЛЬНАЯ АЗИЯ',  'МИР',  'ДЕНЬГИ', 'КУЛЬТУРА', 'ЛАЙФСТАЙЛ', 'СПОРТ', 'КОЛУМНИСТ',  'МУЛЬТИМЕДИЯ']
let langEng = ['UZBEKISTAN', 'CENTRAL ASIA', 'WORLD', 'MONEY', 'CULTURE', 'LIFESTYLE', 'SPORT', 'COLUMNIST', 'MULTIMEDIA']



visibleLangMenu.addEventListener('click', ()=> {
  languages.style.visibility= 'visible'
})

langUzb.forEach(langItem => {
  mainMenu.innerHTML += `<li><a href='#'>${langItem}</a></li>`
})

languageItem.forEach(item => {
  item.addEventListener('click', ()=> {
    item.classList.add('active')
    if (item.innerHTML==`O'zbekcha`) {
      visibleLangMenu.textContent = `O'ZB` 
      mainMenu.innerHTML =''
      langUzb.forEach(langitem => {
        mainMenu.innerHTML += `<li><a href='#'>${langitem}</a></li>`
      })
    } else if (item.innerHTML=='Russian') {
        visibleLangMenu.textContent = 'RUS'
        mainMenu.innerHTML=''
        langRus.forEach(langitem => {
          mainMenu.innerHTML += `<li><a href='#'>${langitem}</a></li>`
        })
    } else if (item.innerHTML=='English') {
      visibleLangMenu.textContent = 'ENG'
      mainMenu.innerHTML=''
      langEng.forEach(langitem => {
        mainMenu.innerHTML+=`<li><a href='#'>${langitem}</a></li>`
      })
    }
    languageItem.forEach(item2 =>{
      if (item !=item2) {
        item2.classList.remove('active')
      }
    })
  })
})
