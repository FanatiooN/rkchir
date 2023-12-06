let buttons = document.querySelector('.cards') ||
              document.querySelector('.cart_items')

buttons.addEventListener('click', (e) => {
    let target = e.target;
    let targetPP = e.target.parentElement.parentElement;
    
    let count = targetPP.querySelector('.count');
    console.log(target);
    if (target.classList.contains('increase')) 
    {
        let cardId = target.getAttribute('data-id');
        let someCard = JSON.parse(localStorage.getItem('card_'+cardId))
        someCard.count = ++count.innerHTML;
        localStorage.setItem('card_' + cardId, JSON.stringify(someCard));
        
        console.log('click');
        
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


})