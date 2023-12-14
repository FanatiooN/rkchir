let sliderThumb = document.querySelector('.slider-thumb');
let sliderTrack = document.querySelector('.slider-track');

sliderThumb.addEventListener('mousedown', function (event) {
    event.preventDefault();

    let shiftX = event.clientX - sliderThumb.getBoundingClientRect().left;

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    function onMouseMove(event) {
        let newLeft = event.clientX - shiftX - sliderTrack.getBoundingClientRect().left;

        if (newLeft < 0) {
            newLeft = 0;
        }
        let rightEdge = sliderTrack.offsetWidth - sliderThumb.offsetWidth;
        if (newLeft > rightEdge) {
            newLeft = rightEdge;
        }

        sliderThumb.style.left = newLeft + 'px';
    }

    function onMouseUp() {
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
    }

});
