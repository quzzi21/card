// объявляем функцию, именуем ее, в данном случае - swipe()
// внутри скобок (...) пишем имена входных переменных
// внутри { ... } пишем алгоритм программы
function swipe(go) {
    // создаем переменную локального уровня с помощью команды let
    // присваем переменной front объект с селектором ".card__front"
    // то есть команда querySelector ищет элемент с таким классом по всему документу
    let front = document.querySelector('.card__front');
    let back = document.querySelector('.card__back');
    // пишем условие:
    // ЕСЛИ входная переменная go равняется 1, то...
    // внутри { ... } пишем алгоритм программы
    if (go == 1) {
        // обращаемся к элементу, которая задана переменной card__front
        // обращаемся к ее атрибуту style - то есть стилизации
        // и ее свойству transform
        // и изменяем ее на значение, которое пишем после = ,
        // то есть присваиваем некое значение, в данном случае rotateY(180deg)
        front.style.transform = 'rotateY(180deg)';
        back.style.transform = 'rotateY(360deg)';
    }
    // ИНАЧЕ, то есть если входная переменная go НЕ равняется 1, то...
    else {
        front.style.transform = 'rotateY(0deg)';
        back.style.transform = 'rotateY(180deg)';

    }
}

function openPonel() {
    let cardBtnYes = document.querySelector('.card__btn_yes');
    let panel = document.querySelector('.card__panel');
    if (cardBtnYes.innerHTML == 'Хочу посмотреть') {
        panel.style.display='flex';
        setTimeout(
            function() {
                panel.style.marginLeft = '36px';
            }, 100
        );
    console.log('yes');
    cardBtnYes.innerHTML = 'Скрыть панель';
    cardBtnYes.style.background = '#C7C7C7';
    cardBtnYes.style.color = '#8B8B8B';
}
else {
    setTimeout(
        function() {
            panel.style.display = 'none';
        }, 500
    );
    panel.style.marginLeft = '-100px';
    cardBtnYes.innerHTML = 'Хочу посмотреть';
    cardBtnYes.style.background = '#FF6600';
    cardBtnYes.style.color = '#FFFFFF';
}

}


var cardYes = document.querySelector('.card__btn_yes');
cardYes.onclick  = function() {
    openPonel();
}
