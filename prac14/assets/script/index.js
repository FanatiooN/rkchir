let gallery_side = document.querySelector('.gallery_side')
let main_img = document.querySelector('.main_img')
let gallery = document.querySelector('.gallery')

gallery_side.addEventListener('click', (e) => {
    let target = e.target;
    if (target.closest('img')) {
        let element = document.createElement('img');
        
        element.src = target.src;
        
        main_img.innerHTML = ''
        main_img.appendChild(element)

    }
})