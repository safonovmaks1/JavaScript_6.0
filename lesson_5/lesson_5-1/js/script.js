let menu = document.querySelector('.menu'),
    li = document.createElement('li'),
    title = document.getElementById('title'),
    column = document.getElementsByClassName('column'),
    adv = document.getElementsByClassName('adv'),
    box = document.getElementById('prompt'),
    question = prompt('Как вы относитесь к технике apple?', '');

li.classList.add('menu-item');
li.innerText = 'Пятый пункт';
menu.appendChild(li);

document.body.style.backgroundImage ='url(img/apple_true.jpg)';

title.innerText = 'Мы продаем только подлинную технику Apple';

column[1].removeChild(adv[0]);

if (question) {
    box.innerText = question;
}
