const cards = document.querySelector('.cards');
let cardArr = Array(cards.querySelectorAll('.card'));
console.log(cardArr, typeof cardArr);


cards.addEventListener('click', (e) => {
    let target = e.target;
    if (target.closest('.like')) {
        let cardsArr = localStorage.getItem('cardsArr') || [];
        let cardId = target.parentElement.parentElement.parentElement;
        console.log(cardArr, cardId, cardArr.indexOf(cardId));
        
        if (target.closest('.like').classList.contains('liked'))
        {
            target.closest('.like').classList.remove('liked');
        }
        else
        {
            target.closest('.like').classList.add('liked');
        }
        
    }
});