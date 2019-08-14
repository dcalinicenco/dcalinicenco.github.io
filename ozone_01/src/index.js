// checkbox

const checkbox = document.getElementById('discount-checkbox');
checkbox.addEventListener('change', function() {
  if (this.checked === true) {
    this.nextElementSibling.classList.add('checked');
  } else {
    this.nextElementSibling.classList.remove('checked');
  }
});

// end checkbox

// корзина

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

// end корзина

// добавление и удаление товара в корзину

const cards = document.querySelectorAll('.goods .card');
const cardWrapper = document.querySelector('.cart-wrapper');
const cartEmpty = document.getElementById('cart-empty');
const countsGoods = document.querySelector('.counter');
cards.forEach((card) => {
  const btn = card.querySelector('button');
  btn.addEventListener('click', () => {
    const cardClone = card.cloneNode(true);
    cardWrapper.appendChild(cardClone);
    cartEmpty.remove();
    showData();
  });
});

function showData() {
  const cardsCart = cardWrapper.querySelectorAll('.card');
  countsGoods.textContent = cardsCart.length;
}

// end добавление и удаление товара в корзину