const cards = document.querySelector('.cards');

cards.addEventListener('click', (e) => {
    let target = e.target;
    if (target.closest('.like')) {
        if (target.closest('.like').classList.contains('liked'))
        {
            target.closest('.like').classList.remove('liked');
        }
        else
        {
            target.closest('.like').classList.add('liked');
        }
        console.log('click');
    }
});