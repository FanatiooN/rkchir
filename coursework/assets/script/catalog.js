document.addEventListener('DOMContentLoaded', () => {
    let cardArr = document.querySelectorAll('.card')
    localStorage.setItem('cardCount', cardArr.length) || 0;

    for (let i = 0; i < localStorage.getItem('cardCount'); i++) {

        let count = cardArr[i].querySelector('.count');
        let cardId = cardArr[i].getAttribute('data-id');

        let someCard = localStorage.getItem('card_' + cardId);

        console.log(i + 1, someCard);

        someCard = JSON.parse(someCard)

        console.log(i + 1, someCard);

        someCard.count = someCard.count ?? 0;
        count.innerHTML = someCard.count;

        localStorage.setItem('card_' + cardId, JSON.stringify(someCard));
    }

})