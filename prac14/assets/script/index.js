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

let contents = document.querySelector('#contents')
contents.addEventListener('click', function (event) {
    var target = event.target;
    while (target != this) {
        if (target.tagName == 'A') {
            if (!confirm('Вы уверены, что хотите покинуть страницу?')) {
                event.preventDefault();
            }
            return;
        }
        target = target.parentNode;
    }
});

let spinElement = document.querySelector('.loader');
let rotation = 0;

setInterval(() => {
  rotation = (rotation + 7) % 360; 
  spinElement.style.transform = `rotate(${rotation}deg)`;
}, 1);