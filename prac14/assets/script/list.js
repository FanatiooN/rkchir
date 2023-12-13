let list = document.querySelector('#myList');

list.addEventListener('click', function(event) {
  let target = event.target; // где был клик?

  if (target.tagName != 'LI') return; // не на LI? тогда не интересует

  // Ctrl или Cmd нажат?
  let isCtrl = event.metaKey || event.ctrlKey;

  if (isCtrl) {
    toggleSelect(target);
  } else {
    singleSelect(target);
  }

}, false);

list.onmousedown = function() {
  return false; // отключить выделение текста (действие браузера по умолчанию)
};

function toggleSelect(li) {
  li.classList.toggle('selected');
}

function singleSelect(li) {
  let selected = list.querySelectorAll('.selected');

  for(let elem of selected) {
    elem.classList.remove('selected');
  }
  li.classList.add('selected');
}