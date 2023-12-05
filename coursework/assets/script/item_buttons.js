let buttons = document.querySelector('.cart_items') ||
              document.querySelector('.cards') 

buttons.addEventListener('click', (e) => {
    let target = e.target;
    
    let count = target.parentElement.parentElement.querySelector('.count');
    console.log(count);
    if (target.classList.contains('increase')) 
    {
        let cardId = target.parentElement.parentElement.getAttribute('data-id');
        
        let someCard = JSON.parse(localStorage.getItem('card_'+cardId))
        someCard.count = ++count.innerHTML;
        localStorage.setItem('card_' + cardId, JSON.stringify(someCard));
        
        console.log(`upd local storage, ${localStorage.getItem('card_'+cardId)}`);
    }
    else if (target.classList.contains('decrease') &&
             count.innerHTML != 0) 
    {    
        let someCard = JSON.parse(localStorage.getItem('card_'+cardId))
        someCard.count = --count.innerHTML;
        localStorage.setItem('card_' + cardId, JSON.stringify(someCard));
    }
})