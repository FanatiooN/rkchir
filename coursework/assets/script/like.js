const cards = document.querySelector('.cards');
let cardArr = Array(cards.querySelectorAll('.card'));
console.log(cardArr, typeof cardArr);


cards.addEventListener('click', (e) => {
    let target = e.target;
    if (target.closest('.like')) {
        let likedCards = localStorage.getItem('likedCards') || [];
        let cardId = target.parentElement.parentElement.parentElement;

        console.log(likedCards, typeof likedCards);


        if (target.closest('.like').classList.contains('liked'))
        {
            target.closest('.like').classList.remove('liked');
            likedCards.remove(likedCards.indexOf(cardId));
            localStorage.setItem('likedCards', likedCards);
        }
        else
        {
            target.closest('.like').classList.add('liked');
            likedCards.push(cardId);
            localStorage.setItem('likedCards', likedCards);
        }
        
        console.log(cardArr, cardArr.length);
    }
});