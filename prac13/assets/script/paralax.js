let cat = document.querySelector(".cat");
let turtle = document.querySelector(".turtle");

window.addEventListener("scroll", function(){
    var value = this.window.scrollY;

    cat.style.top =  100 + value * 0.7 + 'px';
    cat.style.rotate = -value * 1 + 'deg';
    cat.style.left = 100 + value * 3 + 'px';

    turtle.style.right = 100 + value * 3 + 'px';

})


