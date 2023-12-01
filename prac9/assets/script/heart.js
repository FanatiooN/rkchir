var heartButton = document.getElementById("heart");
var isDrawing = false;

heartButton.onclick = function() {
    if (!isDrawing) {
        isDrawing = true;
        document.addEventListener("mousemove", drawHeart);
    } else {
        isDrawing = false;
        document.removeEventListener("mousemove", drawHeart);
    }
};

function drawHeart(e) {
    var heart = document.createElement('img');
    heart.style.backgroundColor = "red";
    heart.style.position = "absolute";
    heart.style.zIndex = "-1";
    heart.style.left = e.clientX + "px";
    heart.style.top = e.clientY + "px";
    heart.style.width = "20px";
    heart.style.height = "20px";
    heart.style.borderRadius = "20px"
    heart.src = "assets/image/like.png";
    document.body.appendChild(heart);
};

