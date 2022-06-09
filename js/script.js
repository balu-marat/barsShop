

var addBtn = document.getElementsByClassName('addBtn');
// var imgSize = document.querySelectorAll('.img__textS span');

var myFunction = function (evt) {
  evt.preventDefault();
  var images = this.parentNode.parentNode.querySelectorAll('.img__slide');
  var imgText = this.parentNode.parentNode.parentNode.querySelectorAll('.img__textd span');
  var imgSpan = this.parentNode.parentNode.parentNode.querySelectorAll('.img__text .oprice');
  var imgSize = this.parentNode.parentNode.parentNode.querySelectorAll('.img__textS span');

  var create_li = document.createElement('li');
  create_li.classList.add('bag__item');

  create_li.innerHTML = '<div class="img__cart-add-left">\
          <div class="img__cart-add">\
              <img src="'+images[0].src+'" alt="">\
          </div>\
          <p>\
              <span class="cart-color">'+imgText[0].innerText+'</span>\
          </p>\
          <p>\
              <span class="cart-color">'+imgSize[0].innerText+'</span>\
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



  // удаление товара
  
  deleteProduct();
  // сумма 
  totalPrice();

   // кол-во товара
  countProduct();
};

for (var i = 0; i < addBtn.length; i++) {
  addBtn[i].addEventListener('click', myFunction, false);
}

function deleteProduct() {
  var click__trash = document.querySelectorAll('.trash');
  // console.log(click__trash);
  for (var i = 0; i < click__trash.length; i++) {
    click__trash[i].addEventListener('click', delFunction, false);
  }
  function delFunction(evt) {
    evt.preventDefault();
    this.parentNode.parentNode.remove();

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
