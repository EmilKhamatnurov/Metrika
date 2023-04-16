// Данные для открытия меню
const BURGER_OPENED_CLASSNAME = 'burger_open';
const BURGER_BTN_OPENED_CLASSNAME = 'burger-btn_open';
const BODY_FIXED_CLASSNAME = 'body_fixed';

const bodyNode = document.querySelector('body');
const burgerNode = document.querySelector('.js-burger');
const burgerBtnNode = document.querySelector('.js-burger-btn');
const burgerContentNode = document.querySelector('.js-burger__content')

// Данные для анимации бургера
const BURGER_BTN_FIRST_LINE_ANIMATE_CLASS = 'burger-btn__first-line_animate';
const BURGER_BTN_SECOND_LINE_ANIMATE_CLASS = 'burger-btn__second-line_animate';	
const burgerBtnFirstLine = document.querySelector('.burger-btn__first-line');
const burgerBtnSecondLine = document.querySelector('.burger-btn__second-line');

burgerBtnNode.addEventListener('click', toggleBurger);

burgerNode.addEventListener('click', (event) => {
    const isClickOutsideContent = !event.composedPath().includes(burgerContentNode)

    if (isClickOutsideContent) {
        toggleBurger();
    }
})

function toggleBurger() {
    burgerNode.classList.toggle(BURGER_OPENED_CLASSNAME);
    bodyNode.classList.toggle(BODY_FIXED_CLASSNAME);
    burgerBtnNode.classList.toggle(BURGER_BTN_OPENED_CLASSNAME);

	burgerBtnFirstLine.classList.toggle(BURGER_BTN_FIRST_LINE_ANIMATE_CLASS);
			burgerBtnSecondLine.classList.toggle(BURGER_BTN_SECOND_LINE_ANIMATE_CLASS);
}
