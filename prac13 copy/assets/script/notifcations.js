const notifications = document.createElement('div');
notifications.classList.add('notifications')
document.body.appendChild(notifications)

const svgIcon = `<svg class="notification__close" width="16px" height="16px" viewBox="0 0 0.32 0.32" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" fill-rule="evenodd" d="M0.226 0.066a0.02 0.02 0 1 1 0.028 0.028L0.188 0.16l0.066 0.066a0.02 0.02 0 0 1 -0.028 0.028L0.16 0.188l-0.066 0.066a0.02 0.02 0 0 1 -0.028 -0.028L0.132 0.16 0.066 0.094a0.02 0.02 0 0 1 0.028 -0.028L0.16 0.132l0.066 -0.066Z"/></svg>`;


document.addEventListener('click', function(event) {
  if (event.target.classList.contains('notification__close')) {
    const item = event.target.closest('.toast-notification');
    item.remove();
  }
  else{
  
    showNotification({content: `Я - уведомление!!!`, type: "info"});

  }
});

function showNotification(options) {
  var notification = document.createElement('div');
  notification.classList.add(options.type);
  notification.classList.add('toast-notification');
  setTimeout(() => {
    notification.classList.add('show');
  }, 100);
  notification.innerHTML = `
    <p>${options.content}</p>
    <a class="notification__close">
      ${svgIcon}
    </a>
  `

  notifications.appendChild(notification);

  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => {
      notification.remove();
    }, 600);
  }, 4000);
}




window.addEventListener("scroll", function(){
  let value = Number(this.window.scrollY) / 1;
  console.log(value);
  if (value % 20 == 0) {
    showNotification({content: `Я - уведомление!!!`, type: "info"});
    console.log(value);
  }

})