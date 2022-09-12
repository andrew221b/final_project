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




class Switch {
  constructor(
    selector,
    { highlightClass = "topics-switch__highlight", activeClass = "is-active" } = {}
  ) {
    this.activeClass = activeClass;
    this.element = document.querySelector(selector);
    this.buttons = this.element.querySelectorAll(".topics-switch__btn");
    this.highlight = this.element.querySelector(`.${highlightClass}`);
    this.activeBtn = this.element.querySelector(`topics-switch__btn.${this.activeClass}`);

    if (!this.activeBtn) {
      this.activeBtn = this.buttons[0];
      this.activeBtn.classList.add(this.activeClass);
    }

    this._highlight();
    this._addEvents();
  }

  _highlight() {
    const w = this.activeBtn.offsetWidth;
    const x = this.activeBtn.offsetLeft;

    this.highlight.style.width = `${w}px`;
    this.highlight.style.transform = `translateX(${x}px)`;
  }

  _dispatchEvent() {
    this.element.dispatchEvent(
      new CustomEvent("change", { detail: this.activeBtn.dataset.value })
    );
  }

  _addEvents() {
    [].forEach.call(this.buttons, btn =>
      btn.addEventListener("click", e => {
        if (this.activeBtn === e.target) return;

        this.activeBtn.classList.remove(this.activeClass);
        this.activeBtn = e.target;
        this.activeBtn.classList.add(this.activeClass);

        this._highlight();
        this._dispatchEvent();
      })
    );
  }
}

const mySwitch = new Switch(".topics-switch");

mySwitch.element.addEventListener("change", e => console.log(e.detail));