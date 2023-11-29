let cartItems = [];
const tileItems = document.querySelector('.tile__items');
const tilePanel = document.querySelector('.tile__panel');

const binIcon = `<svg class="some_action" fill="currentColor" width="20px" height="20px" viewBox="0 0 0.48 0.48" xmlns="http://www.w3.org/2000/svg"><path d="M0.4 0.12h-0.08V0.1a0.06 0.06 0 0 0 -0.06 -0.06h-0.04a0.06 0.06 0 0 0 -0.06 0.06v0.02H0.08a0.02 0.02 0 0 0 0 0.04h0.02v0.22a0.06 0.06 0 0 0 0.06 0.06h0.16a0.06 0.06 0 0 0 0.06 -0.06V0.16h0.02a0.02 0.02 0 0 0 0 -0.04ZM0.2 0.1a0.02 0.02 0 0 1 0.02 -0.02h0.04a0.02 0.02 0 0 1 0.02 0.02v0.02h-0.08Zm0.14 0.28a0.02 0.02 0 0 1 -0.02 0.02H0.16a0.02 0.02 0 0 1 -0.02 -0.02V0.16h0.2Z"/></svg>
`





function updateCart(items = []) {
  tileItems.innerHTML = '';

  let totalPrice = items.reduce((currentSum, currentObj) => currentSum + currentObj.price, 0);

  items.forEach((item, index) => {
    const newItemElement = document.createElement('div');
    newItemElement.classList.add('item');
    newItemElement.setAttribute('data-index', index);
    newItemElement.innerHTML = `
      <div class="some_id">
        ${index}
      </div>
      <div class="some_name">
        ${item.name}
      </div>
      <div class="some_price">
        ${item.price}
      </div>
      <a class="some_action">
        ${binIcon}
      </a>
    `;
    tileItems.appendChild(newItemElement);
  });
  updatePanel(items.length, totalPrice);
}

function updatePanel(count, totalPrice) {
  const totalBadge = document.querySelector('.fab-container .badge');
  totalBadge.textContent = count;
  const totalPriceElement = document.querySelector('.panel__middle-total');
  totalPriceElement.textContent = totalPrice;
}

function handleItemActionClick(event) {
  const clickedItem = event.target.closest('.item');
  const itemIndex = parseInt(clickedItem.getAttribute('data-index'));

  cartItems.splice(itemIndex, 1);

  updateCart(cartItems);
}

const fabButton = document.querySelector('.fab-container');
fabButton.addEventListener('click', () => {

  let randomName = `Товар ${cartItems.length + 1}`;
  let randomPrice = Math.floor(Math.random() * 100) + 1;

  cartItems.push({
    name: randomName,
    price: randomPrice
  });

  updateCart(cartItems);
});


tileItems.addEventListener('click', function (event) {
  if (event.target.classList.contains('some_action')) {
    const item = event.target.closest('.item');
    const itemIndex = parseInt(item.getAttribute('data-index'));
    cartItems.splice(itemIndex, 1);
    updateCart(cartItems);
  }
});

const filterButton = document.querySelector('.filter');
filterButton.addEventListener('click', () => {

  let minValue = document.querySelector('.filter-1').value;
  let maxValue = document.querySelector('.filter-2').value;

  const filteredArray = cartItems.filter(item => item.price >= minValue && item.price <= maxValue);
  updateCart(filteredArray);
});




const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', function () {
  cartItems = [];
  updateCart(cartItems);
});

const sortDescButton = document.querySelector('.sort__desc');
sortDescButton.addEventListener('click', function () {
  items = cartItems.slice().sort((a, b) => b.price - a.price);
  cartItems = items;
  updateCart(items);
});


const sortAscButton = document.querySelector('.sort__asc');
sortAscButton.addEventListener('click', function () {
  items = cartItems.slice().sort((a, b) => b.price - a.price).reverse();
  cartItems = items;
  updateCart(items);
});
