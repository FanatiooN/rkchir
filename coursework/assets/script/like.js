const cards = document.querySelector('.cards');
let cardArr = cards.querySelectorAll('.card');

document.addEventListener('DOMContentLoaded', () => {
    let maxCardCount = 100;
    for (let i = 1; i < maxCardCount; i++) {
        localStorage.setItem('card_' + i, '');
    }
})


cards.addEventListener('click', (e) => {
    let target = e.target;
    if (target.closest('.like')) {
        let someCard = target.parentElement.parentElement;
        if (someCard.classList.contains('item_img')) {
            someCard = someCard.parentElement;
        }

        let cardId = someCard.getAttribute('data-id');


        let name = someCard.querySelector('.name').innerHTML;
        let price = someCard.querySelector('.price').innerHTML;
        let rating = someCard.querySelector('.rating').innerHTML;
        let img = someCard.querySelector('.like + img').getAttribute('src');
        let cnt = someCard.querySelector('.count').innerHTML;


        if (target.closest('.like').classList.contains('liked')) {
            target.closest('.like').classList.remove('liked');
        }
        else {
            target.closest('.like').classList.add('liked');
        }

        let isLiked = someCard.querySelector('.like').classList.contains('liked')
        let someCardInfo = {
            name,
            price,
            rating,
            img,
            cnt,
            isLiked
        }

        localStorage.setItem('card_' + cardId, JSON.stringify(someCardInfo))
    }
});