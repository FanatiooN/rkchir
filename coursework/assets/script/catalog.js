let cardArr = document.querySelectorAll('.card')

for (let i = 0; i < cardArr.length; i++) {

    let count = cardArr[i].querySelector('.count');
    let someCard = localStorage.getItem('card_' + (i+1));
    someCard = JSON.parse(someCard)
    someCard.count = someCard.count ?? 0;
    count.innerHTML = someCard.count;

    localStorage.setItem('card_' + (i+1), JSON.stringify(someCard));
}
