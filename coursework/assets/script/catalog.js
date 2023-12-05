let cardArr = document.querySelectorAll('.card')

for (let i = 0; i < cardArr.length; i++) {

    let count = cardArr[i].querySelector('.count');
    let someCard = localStorage.getItem('card_' + (i+1));
    someCard = JSON.parse(someCard)
    
    if (someCard.count)
        count.innerHTML = someCard.count;
    else
        count.innerHTML = 0;
}
