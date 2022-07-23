
(function () {
  "use strict";

  class cardProduct {
    constructor (tooltips, img, title, originPrice, oldPrice, innerBlock) {
      this.tooltips = tooltips;
      this.img = img;
      this.title = title;
      this.originPrice = originPrice;
      this.oldPrice = oldPrice;
      this.innerBlock = document.querySelector(innerBlock);
      this.valuta = 85;
      this.originPrice = this.convertToUsd(this.originPrice);
      this.oldPrice = this.convertToUsd(this.oldPrice);
    }

    convertToUsd (price) {
      const result = price / this.valuta;
      return result.toFixed(2);
    }
    render() {
      const div = document.createElement('div');
      div.classList.add("card__item");
      div.innerHTML = `
                      <a href="#" class="card__link">
                          <img src=${this.img} alt="sveta" class="img__slide">
                          <div class="shildik">
                              <span class="shildik-span">${this.tooltips}</span>
                          </div>
                          <p class="img__textd "><span>${this.title}</span></p>
                          <div class="img__text">
                              <span class="currency">$ </span> 
                              <span class="oprice">${this.originPrice}</span>
                              <del>$ ${this.oldPrice}</del>
                          </div>
                          <div class="img__textS"><span >Размер: 34 - 41</span></div>
                      </a>
                      <a class="addBtn" href="#">Добавить в корзину</a>     
                    `;
                    this.innerBlock.append(div);
    }
  }

  // (tooltips, img, title, origiPrice, oldPrice, innerBlock)

  new cardProduct (
    'New',
    'img/sveta1.jpg',
    'туфли',
    100,
    130,
    '.card__block'
  ) .render();
  new cardProduct (
    'New',
    'img/botas.jpg',
    'туфли',
    1500,
    1800,
    '.card__block'
  ) .render();
  new cardProduct (
    '-30%',
    'img/sveta1.jpg',
    'туфли',
    100,
    130,
    '.card__block'
  ) .render();
  new cardProduct (
    'New',
    'img/sveta1.jpg',
    'туфли',
    100,
    130,
    '.card__block'
  ) .render();

} ());
