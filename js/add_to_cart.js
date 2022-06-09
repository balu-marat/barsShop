
var btnAdd = document.querySelectorAll('.btnAdd');

var functionAddProduct = function (e) {
  e.preventDefault();
  
  var cardTitle = this.parentNode.querySelectorAll('.card-body .card-title');
  var price = this.parentNode.parentNode.querySelectorAll('.img__text .oprice');
  var currency = this.parentNode.parentNode.querySelectorAll('.img__text .currency')
  var delPrice = this.parentNode.parentNode.querySelectorAll('.img__text .del');
  var cardImg = this.parentNode.parentNode.querySelectorAll('.card img');

  console.log(cardTitle[0].innerText);
  console.log(price[0].innerText);
  console.log(delPrice[0].innerText);
  console.log(currency[0].innerText);
  console.log();
  // console.log(cardImg[0].src);

  var create_li = document.createElement('li');
  create_li.classList.add('bag__item');

  create_li.innerHTML = '<div class="img__cart-add-left">\
    <div class="img__cart-add">\
      <img src="img/sveta.jpg" alt="sveta">\
    </div>\
    <p class="titleFirst">\
      <span class="cart-color">Кроссовки</span>\
    </p>\
    <p class="titleSec">\
      <span class="cart-color">Размер: 34-41</span>\
    </p>\
    <p>\
    <span class="currency">$ </span>\
    <span class="oprice">'+imgSpan[0].innerText+'</span>\
    <del>2000 сом</del>\
  </p>\
  <div class="trash"><a href="#"><i class="fa-solid fa-trash-can"></i></a></div>\
  </div>';

  var block_cart = document.querySelector('.user__box_dropdown ul');
  block_cart.appendChild(create_li);
  alert('Товар добавлен в корзину !');


  //   Удаление товара

  deleteProduct();
  
  //   Получение суммы товаров lesson 40
  totalPrice();

// получение кол-ва товаров  урок 41
countProduct();

};


for (var i = 0; i < btnAdd.length; i++) {
  btnAdd[i].addEventListener('click', functionAddProduct, false);
}


function deleteProduct() {
  var click__trash = document.querySelectorAll('.trash');
  // console.log(click__trash);
  for (var i = 0; i < click__trash.length; i++) {
    click__trash[i].addEventListener('click', delFunction, false);
  }
  function delFunction(evt) {
    evt.preventDefault();
    this.parentNode.parentNode.parentNode.remove();

    // добавляем сюда функцию
  totalPrice();

  countProduct();
  }
  
}

// сумма 

function totalPrice() {
  var countPrice = document.querySelectorAll('.img__cart-add-left .oprice');

  var totalPrice = 0;
  for (var i = 0; i < countPrice.length; i++) {
    totalPrice = totalPrice + (+countPrice[i].innerHTML);
  }
  document.getElementsByClassName('total_cart')[0].innerHTML = `$ ${totalPrice}`;
  // document.querySelectorAll('')[0].innerHTML = `$ ${totalPrice}`;
}

function countProduct() {
  var countProduct = document.getElementsByClassName('bag__item').length;
  document.getElementsByClassName('cart_count')[0].innerHTML = countProduct;
  
}
