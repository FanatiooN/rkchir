function truncate(some = "", maxlength) {
  if (some.length > maxlength) {
    some = some.slice(0, maxlength - 3) + "...";
  }
  return some;
}

let cards = document.querySelectorAll(".catalog_item h3");

for (let card of cards) {
  card.textContent = truncate(card.textContent, 30);
}
