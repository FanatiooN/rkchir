
let st = window.location.href;
let filename = st.substring(st.lastIndexOf('/') + 1);


let buttons = document.querySelector('.cart_items') ||
              document.querySelector('.card') 

buttons.addEventListener('click', (e) => {
    let target = e.target;
    
    let count = target.parentElement.parentElement.querySelector('.count');

    if (target.classList.contains('increase')) 
    {
        count.innerHTML++;
    }
    else if (target.classList.contains('decrease') &&
             count.innerHTML != 0) 
    {    
        count.innerHTML--;
    }
})
console.log(filename);