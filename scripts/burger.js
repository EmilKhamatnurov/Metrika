// Данные для открытия меню
const BURGER_OPENED_CLASSNAME = 'burger_open';
const BURGER_BTN_OPENED_CLASSNAME = 'burger-btn_open';
const BODY_FIXED_CLASSNAME_2 = 'body_fixed';

const bodyNode2 = document.querySelector('body');
const burgerNode = document.querySelector('.js-burger');
const burgerBtnNode = document.querySelector('.js-burger-btn');
const burgerContentNode = document.querySelector('.js-burger__content')

// Данные для анимации бургера
const BURGER_BTN_FIRST_LINE_ANIMATE_CLASS = 'burger-btn__first-line_animate';
const BURGER_BTN_SECOND_LINE_ANIMATE_CLASS = 'burger-btn__second-line_animate';	
const burgerBtnFirstLine = document.querySelector('.burger-btn__first-line');
const burgerBtnSecondLine = document.querySelector('.burger-btn__second-line');

//ДООЛНЕНИЯ. Закрытие меню при нажатии на ссылку
// var burgerLinks = document.getElementsByClassName(".burger__link");
// console.log(burgerLinks.item(0));

// for (let i = 0; i < burgerLinks.length; i++) {
// 	burgerLinks[i].addEventListener('click', toggleBurger);
//   }
// let firstLink = burgerLinks[0];
// let secondLink = burgerLinks[0];
// let thirdink = burgerLinks[0];
// let fourthLink = burgerLinks[0];

// Array.prototype.forEach.call(burgerLinks, function(burgerLinks) {
//   element.addEventListener('click', function() {
//     burgerNode.classList.remove(BURGER_OPENED_CLASSNAME);
//     bodyNode.classList.remove(BODY_FIXED_CLASSNAME);
//     burgerBtnNode.classList.remove(BURGER_BTN_OPENED_CLASSNAME);
//   });
// });


burgerBtnNode.addEventListener('click', toggleBurger);
burgerNode.addEventListener('click', (event) => {
	// Закрытие меню при нажатии на область вне меню
    const isClickOutsideContent = !event.composedPath().includes(burgerContentNode)
    if (isClickOutsideContent) {
        toggleBurger();
    }
})

function toggleBurger() {
    burgerNode.classList.toggle(BURGER_OPENED_CLASSNAME);
    bodyNode2.classList.toggle(BODY_FIXED_CLASSNAME_2);
    burgerBtnNode.classList.toggle(BURGER_BTN_OPENED_CLASSNAME);
	
	// Анимация бургера
	burgerBtnFirstLine.classList.toggle(BURGER_BTN_FIRST_LINE_ANIMATE_CLASS);
	burgerBtnSecondLine.classList.toggle(BURGER_BTN_SECOND_LINE_ANIMATE_CLASS);
}
