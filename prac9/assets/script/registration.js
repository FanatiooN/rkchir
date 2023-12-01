let registrationButton = document.getElementById("registrationButton");

registrationButton.addEventListener("click", () => {
  let result = prompt("Желаете пройти регистрацию на сайте?", "");

  if (result != "Да") {
    alert("Попробуй ещё раз");
  } else {
    alert("Круто!");
  }
});
