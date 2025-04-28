let btnMenuMob = document.querySelector("#btn-menu-mob");
let line1 = document.querySelector(".line-menumob-1");
let line2 = document.querySelector(".line-menumob-2");

// Variaverl para o abrir o botão mobile
let menuMobile = document.querySelector("#menu-mobile");

/* Variavel para adicionar uma função ou evento que faz com que
que faz com o usuári não consiga vrolar a página quando o 
menu mobile estiver aberto */
let body = document.querySelector("body")

btnMenuMob.addEventListener("click", ()=> {
    line1.classList.toggle("ativo1");
    line2.classList.toggle("ativo2");

    // Evento para abrir o botão mobile
    menuMobile.classList.toggle("abrir");

    /* Evento que faz o usuári não consiguir 
    rolar a página quando  menu mobile estive ativo */
    body.classList.toggle("no-overflow");
})