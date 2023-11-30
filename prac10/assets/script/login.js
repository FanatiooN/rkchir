let captchaCheckbox = document.querySelector('#check');
let captchaInput = document.querySelector('#captchaSubmit');
let sum;

captchaCheckbox.addEventListener('click', () => {
    let captchaBox = document.querySelector('.captchaBox');
    let captchaText = document.querySelector('#captchaText');
    captchaText.innerHTML = generateStringCaptcha();
    captchaBox.style.display = 'block';
})

captchaInput.addEventListener('click', () => {
    
    let captchaBox = document.querySelector('.captchaBox');
    captchaBox.style.display = 'none';

    let captchaInput = document.querySelector('#captchaInput');
    let captchaText = document.querySelector('#captchaText');
    if  (!captchaText.innerHTML.includes('+')) {   
        if (captchaText.innerHTML == captchaInput.value) {
            let button = document.querySelector('#captcha');
            button.removeAttribute('disabled');
            captchaCheckbox.setAttribute('disabled');
        } 
        else {
            alert('Неверно!')
            captchaInput.value = '';
            let captchaBox = document.querySelector('.captchaBox');
            let captchaText = document.querySelector('#captchaText');
            
            numbers = generateNumberCaptcha();
            sum = Number(numbers.x) + Number(numbers.y);
            captchaText.innerHTML = `${numbers.x} + ${numbers.y}`;
            captchaBox.style.display = 'block';
        }
    }
    else
    {
        if (sum == captchaInput.value) {
            let button = document.querySelector('#captcha');
            button.removeAttribute('disabled');
            captchaCheckbox.setAttribute('disabled');
        }
        else {
            captchaCheckbox.checked = 0;
        }
    }

})

function generateStringCaptcha(size = 5) {
    let result = '';
    let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    for (let i = 0; i < size; i++) {
        let id = (Math.random() * (letters.length-1)).toFixed(0);
        result += letters[id];
    }

    return result;
}

function generateNumberCaptcha() {
    let x = (Math.random() * 90 + 10).toFixed(0);
    let y = (Math.random() * 90 + 10).toFixed(0);
    return { x, y };
}


