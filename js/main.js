'use strict';

let popUpRegister = document.querySelector('.popup__register');
let popUp = document.querySelector('.popup');
let openPopUpButtons = document.querySelectorAll('.register-btn');
let popUps = document.querySelectorAll('.popup')

function openPopup() {
    let popUpRegister = document.querySelector('.popup__register');
    popUp.classList.toggle('active');
}

btns.forEach(btn => btn.addEventListener('click', openPopup));