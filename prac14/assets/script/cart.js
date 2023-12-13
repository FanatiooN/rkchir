let cart = {
    items: [],
    totalCost: 0
};

let products = document.querySelectorAll('.product');
products.forEach(product => {
    product.draggable = true;
    product.addEventListener('dragstart', function (event) {
        event.dataTransfer.setData('text/plain', this.id);
    });
});

let dropzone = document.querySelector('.cart');
dropzone.addEventListener('dragover', function (event) {
    event.preventDefault();
});

dropzone.addEventListener('drop', function (event) {
    event.preventDefault();
    let id = event.dataTransfer.getData('text/plain');
    let product = document.getElementById(id);
    let price = parseFloat(product.getAttribute('data-price'));
    cart.items.push(product);
    cart.totalCost += price;
    updateCartTotal();
});

function updateCartTotal() {
    console.log('2');
    let cartTotalElement = document.querySelector('.cart-total');
    cartTotalElement.textContent = `Итого: $${cart.totalCost.toFixed(2)}`;
}