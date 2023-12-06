const cart = document.querySelector('.cart');
const cart_items = document.querySelector('.cart_items');
const total_count = document.querySelector('.total_count');

let maxCardCount = 100;
let totalCnt = 0;

document.addEventListener('DOMContentLoaded', () => {

    for (let i = 0; i < maxCardCount; i++) {
        let someCard = localStorage.getItem('card_' + i);

        console.log('i is:', i, someCard);

        if (someCard != null && someCard != '') {

            someCard = JSON.parse(someCard);
            let name = someCard.name;
            let price = Number(someCard.price);
            let cnt = Number(someCard.count);
            if (cnt > 0) {
                totalCnt += price * cnt;
                let cart_item = document.createElement('div');
                cart_item.setAttribute('data-id', i);
                cart_item.classList.add('cart_item')
                cart_items.appendChild(cart_item);

                cart_item.innerHTML += `
                        <div class="description">
                            <h6>${name}</h6>
                            <p class="price">${price} р / шт</p>
                        </div>
                        <div class="item_count">
                            <button class="decrease">-</button>
                            <p class="count">${cnt}</p>
                            <button class="increase">+</button>
                        </div>
                        <p class="cost">${price * cnt} р</p>
                        <img src="assets/image/trash.png" class="trash">
                        `

            }
        }
    }


    total_count.innerHTML = totalCnt;
});

