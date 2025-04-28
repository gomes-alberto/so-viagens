 // Criando o código que vai fazer o menu ficar dinamico
let navBar = document.querySelector('#header')

document.addEventListener("scroll", ()=> {
    let scrollTop = window.scrollY

    if (scrollTop > 0) {
        navBar.classList.add('rolar')
    } else {
        navBar.classList.remove('rolar')
    }
})