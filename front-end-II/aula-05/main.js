let titleReference = document.querySelector('#teste')

// titleReference.style.color = 'red'

// add classe depois de carregar

titleReference.classList.add('main-title')

let mainMenuReference = document.querySelector('#mainMenu')

// function openMenu() {

//     mainMenuReference.classList.add('main-menu-opened')

// }

// function closeMenu() {
    
//     mainMenuReference.classList.remove('main-menu-opened')

// }

function menuHandler() {

    mainMenuReference.classList.toggle('main-menu-opened')
    
//para checar se menu estah open/closed
    // if (mainMenuReference.classList.contains('main-menu-opened') ) {
    
    //     mainMenuReference.classList.remove('main-menu-opened')
    
    // } else {

    //     mainMenuReference.classList.add('main-menu-opened')
    
    // }

};