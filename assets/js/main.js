let $btnHamburger = $('.header-menu__btn');
let $navbarList = $('.header-menu__list');
let $navbarLink = $('.header-menu__link');
let $navbarItem = $('.header-menu__item');
let $navbarBtn = $('.header-menu__btn-row');
let $window = $(window);
let $body = $('body');

let toggleActive = () => {
  $btnHamburger.toggleClass('burger');
  $navbarList.toggleClass('burger');
  $navbarLink.toggleClass ('burger');
  $navbarItem.toggleClass ('burger');
  $navbarBtn.toggleClass ('burger');
};

let resetMenu = () => {
  $btnHamburger.removeClass('burger');
  $body.removeClass('burger');
  $navbarList.removeClass('burger');
  $navbarLink.removeClass ('burger');
  $navbarItem.removeClass ('burger');
  $navbarBtn.removeClass ('burger');
};

$btnHamburger.on('click', () => {
  toggleActive();
  $body.toggleClass('burger');
});

$window.on('resize', () => {
  if ($window.width() > 600) {
      resetMenu();
  }
});




const headersList = document.querySelectorAll('.experience-slider__title');
const notesList = document.querySelectorAll('.experience-slider__note');
const indicatorsList = document.querySelectorAll('.experience-slider__indicator');
const descriptionsList = document.querySelectorAll('.experience-slider__text');

let index = 0;
let interval = 5000;
let heightsArr = [];
let heightMax = null;

setInterval(() => {
  // снимаем классы active для первых элементов
  headersList[index].classList.toggle('active');
  notesList[index].classList.toggle('active');
  indicatorsList[index].classList.toggle('active');
  // увеличиваем индекс, пока не превышено количество элементов
  index = (index + 1) % headersList.length;
  // ставим классы active следующим элементам
  headersList[index].classList.toggle('active');
  notesList[index].classList.toggle('active');
  indicatorsList[index].classList.toggle('active');
}, interval);

// вычисление и изменение высоты блока описания под максимальный текст
descriptionsList.forEach(el => heightsArr.push(el.clientHeight));
heightMax = Math.max(...heightsArr);
descriptionsList.forEach(el => el.style.height = `${heightMax}px`);
