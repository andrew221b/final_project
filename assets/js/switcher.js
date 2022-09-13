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