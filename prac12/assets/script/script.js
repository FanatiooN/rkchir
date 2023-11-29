// №1-2
let notificationCounter = 0;
let notificationInterval;

const N_TIMEOUT = 1000;
const S_TIMEOUT = 5000;


const fabIcon = document.querySelector('.fab-icon');

function delay(f, ms) {
  return function () {
    setTimeout(() => f.apply(this, arguments), ms);
  };
}

function generateNotification() {
  notificationCounter++;
  const notificationsList = document.querySelector('.notifications-list');
  const newNotification = document.createElement('li');
  const fabBadge = document.querySelector('.badge');
  newNotification.textContent = `Notification ${notificationCounter}`;
  fabBadge.textContent = notificationCounter;
  notificationsList.appendChild(newNotification);
}

function startNotificationInterval() {
  notificationInterval = setInterval(generateNotification, N_TIMEOUT);
  fabIcon.textContent = "N";
}

function stopNotificationInterval() {
  clearInterval(notificationInterval);
  fabIcon.textContent = "S";
}

function toggleNotifications() {
  const panel = document.querySelector('.notifications-panel');
  panel.style.display = panel.style.display === 'none' || panel.style.display === '' ? 'block' : 'none';
  if (panel.style.display === 'block' && fabIcon.textContent != "S") {
    stopNotificationInterval();
    let startAgain = delay(startNotificationInterval, S_TIMEOUT);
    startAgain();
  }
}

startNotificationInterval();

// №3
function addListItems() {
  var userInput;

  var interval = setInterval(function () {
    userInput = prompt('Введите содержимое пункта списка:');
    if (userInput !== null && userInput !== '') {
      var listItem = document.createElement('li');
      var textNode = document.createTextNode(userInput);
      listItem.appendChild(textNode);

      var list = document.querySelector('.list');
      list.appendChild(listItem);
    } else {
      clearInterval(interval);
    }
  }, 0);
}


const listButton = document.querySelector('.list_btn');
listButton.addEventListener('click', addListItems);

// №4
function showNotification(options) {
  var notification = document.createElement('div');
  notification.classList.add(options.type);
  notification.classList.add('toast-notification');
  setTimeout(() => {
    notification.classList.add('show');
  }, 100);
  notification.textContent = options.content;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => {
      notification.remove();
    }, 500);
  }, 1000);
}

function generateRandomString(length) {
  const characters = 'A BCDEF GHIJ KLMNOPQ RSTUV WXYZabcdefgh ijklmno pqrstu vwx y z012 3456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}
const notificationTypes = ['warning', 'danger', 'info'];

const showButton = document.querySelector('.show_btn');
showButton.addEventListener('click', function () {
  showNotification(
    {
      content: generateRandomString(20),
      type: notificationTypes[Math.floor(Math.random() * notificationTypes.length)]
    }
  );
});