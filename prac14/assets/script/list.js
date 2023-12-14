let list = document.querySelector('#myList');

list.onmousedown = (event) => {
  event.preventDefault();
};


list.addEventListener('click', function (event) {
  let target = event.target;
  if (target.tagName != 'LI') return;

  let isCtrl = event.metaKey || event.ctrlKey;
  if (isCtrl) {
    target.classList.toggle('selected');
  }
  else {
    let selected = list.querySelectorAll('.selected');

    for (let elem of selected) {
      elem.classList.remove('selected');
    }
    target.classList.add('selected');
  }
}, false);
