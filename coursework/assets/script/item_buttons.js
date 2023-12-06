let buttons = document.querySelector('.cards') ||
              document.querySelector('.cart_items')

buttons.addEventListener('click', (e) => {
    let target = e.target;
    let targetPP = e.target.parentElement.parentElement;
    let cardId = targetPP.getAttribute('data-id');
    let count = targetPP.querySelector('.count');
    
    if (target.classList.contains('increase')) 
    {
        
        let someCard = JSON.parse(localStorage.getItem('card_'+cardId))
        console.log('card_'+cardId, someCard);
        someCard.count = ++count.innerHTML;
        localStorage.setItem('card_' + cardId, JSON.stringify(someCard));
        
        
        if (buttons.classList.contains('cart_items')) {
            let price = targetPP.querySelector('.price');
            let cost = targetPP.querySelector('.cost');
            totalCnt += price.innerHTML;
            cost.innerHTML = `${price.innerHTML * count.innerHTML} р`;
        }
    }
    else if (target.classList.contains('decrease') &&
             count.innerHTML != 0) 
    {    
        let someCard = JSON.parse(localStorage.getItem('card_'+cardId))
        someCard.count = --count.innerHTML;
        localStorage.setItem('card_' + cardId, JSON.stringify(someCard));
        
    }
    console.log(localStorage.getItem('card_' + (cardId )));


})