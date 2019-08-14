// checkbox
 
function toggleCheckbox() {
  const checkbox = document.getElementById('discount-checkbox');
  checkbox.addEventListener('change', function() {
    if (this.checked === true) {
      this.nextElementSibling.classList.add('checked');
    } else {
      this.nextElementSibling.classList.remove('checked');
    }
  });
}


// end checkbox

// корзина
function toggleCart() {
  const btnCart = document.getElementById('cart');
  const modalCart = document.querySelector('.cart');
  btnCart.addEventListener('click', function() {
    modalCart.style.display = 'block';
    document.body.style.overflow = 'hidden';
  });
  const closeBtn = document.querySelector('.cart-close');
  closeBtn.addEventListener('click', () => {
    modalCart.style.display = 'none';
    document.body.style.overflow = '';
  });
}

// end корзина

// добавление и удаление товара в корзину

function addCart() {
  const cards = document.querySelectorAll('.goods .card');
  const cardWrapper = document.querySelector('.cart-wrapper');
  const cartEmpty = document.getElementById('cart-empty');
  const countsGoods = document.querySelector('.counter');
  const cardPrice = document.querySelectorAll('.card-price');

  cards.forEach((card) => {
    const btn = card.querySelector('button');
    btn.addEventListener('click', () => {
      const cardClone = card.cloneNode(true);
      cardWrapper.appendChild(cardClone);
      //cartEmpty.remove();
      showData();

      const removeBtn = cardClone.querySelector('.btn');
      removeBtn.textContent = 'Удалить из корзины';
      removeBtn.addEventListener('click', () => {
        cardClone.remove();
        showData();
      });
    });
  });

  function showData() {
    const cardsCart = cardWrapper.querySelectorAll('.card');
    countsGoods.textContent = cardsCart.length;
    const cardPrice = cardWrapper.querySelectorAll('.card-price');
    const cardTotal = document.querySelector('.cart-total span');
    let sum = 0;
    cardPrice.forEach((cardsPrice) => {
      let price = parseFloat(cardsPrice.textContent);   
      sum += price;        
    });
    cardTotal.textContent = sum;
    if (cardsCart.length !== 0) {
      cartEmpty.remove();
    } else {
      cardWrapper.appendChild(cartEmpty);
    }
  }
}

// end добавление и удаление товара в корзину

// фильтр акции
function actionPage() {
  const cards = document.querySelectorAll('.goods .card');
  const discountCheckbox = document.getElementById('discount-checkbox');
  const min = document.getElementById('min');
  const max = document.getElementById('max');
  const goods = document.querySelector('.goods');
  const search = document.querySelector('.search-wrapper_input');
  const searchBtn = document.querySelector('.search-btn');
  discountCheckbox.addEventListener('click', () => {
    cards.forEach((card) => {
      if(discountCheckbox.checked) {
        console.log(true);
        if (!card.querySelector('.card-sale')) {
          card.parentNode.style.display = 'none';
        }
      } else {
        card.parentNode.style.display = '';
      }
    });
  });

function filterPrice() {
  cards.forEach((card) => {
    const cardPrice = card.querySelector('.card-price');
    const price = parseFloat(cardPrice.textContent);
    //console.log(price);
    //console.log(max.value);
    if ((min.value && price < min.value) || (max.value && price > max.value)) {
      card.parentNode.remove();
    } else {
      goods.appendChild(card.parentNode);
    }
  });
}

  min.addEventListener('change', filterPrice);
  max.addEventListener('change', filterPrice);
  searchBtn.addEventListener('click', () => {
    const searchText = new RegExp(search.value.trim(), 'i');
    cards.forEach((card) => {
      const title = card.querySelector('.card-title');
      if (!searchText.test(title.textContent)) {
        card.parentNode.style.display = 'none';
      } else {
        card.parentNode.style.display = '';
      }
    });
  });
  
}
// end фильтр акции

toggleCheckbox();
toggleCart();
addCart();
actionPage();