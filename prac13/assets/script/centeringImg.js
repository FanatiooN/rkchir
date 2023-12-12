let parent = document.querySelector(".parent");
let element = document.createElement("div");

element.setAttribute.id = "element";
parent.appendChild(element);
element.style.border = "solid 2px pink";
element.style.height = "100vh";
element.style.width = "100vh";
element.style.position = "absolute";

element.style.left = (parent.clientWidth / 2) - (element.clientWidth / 2) + 'px';
element.style.top = (parent.clientHeight / 2) - (element.clientHeight / 2) + 'px';

let img = new Image();
img.src = "assets/image/koshka-256x200.png";
img.style.width = "40vh";
element.appendChild(img);
console.log('appended');
img.style.border = "solid 2px red";

img.style.position = "absolute";
img.onload = function() {
    img.style.left = (element.clientWidth - img.clientWidth) / 2 + 'px';
    img.style.top = (element.clientHeight - img.clientHeight) / 2 + 'px';
};


// вывод координат
parent.addEventListener('click', function(event) {
    var x = event.clientX;
    var y = event.clientY;
    console.log(x, y);
});


// // делегирование

// document.addEventListener('click', function(event){
//     if (event.target.id == "delBtn"){
//         event.target.parentNode.parentNode.removeChild(event.target.parentNode)
//         updateCounter();
//     }
// })

