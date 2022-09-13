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
