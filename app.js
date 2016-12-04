'use strict';

function Application() {
    var startButton = document.querySelector('#start');
    var stopButton = document.querySelector('#stop');
    var element = document.querySelector('#element');
    var span = document.querySelector('span');
    var left = parseInt(element.style.left);
    const minLeft = left;
    var top = parseInt(element.style.top);
    const minTop = top;
    var rotate = parseInt(element.style.transform.split(/\D+/g)[1]);
    var isPlaying = false;
    var num = 0;

    function start () {
        num = Number(document.querySelector("#number").value);
        if (isNaN(num)) {
            document.querySelector("#number").value = '';
            span.innerHTML = 'Неверное значение';
            num = null;
        }
        else {
            isPlaying = true;
            span.innerHTML = '';
            num < 10 ? num = 10 : false;
            num > 50 ? num = 50 : false;
        }
    };

    function stop() {
        isPlaying = false;
        document.removeEventListener('keydown', false);
    };

    startButton.addEventListener('click', function () {
        start();
    });

    stopButton.addEventListener('click', function () {
        stop();
    });

    document.addEventListener('keydown', function (event) {
        if (isPlaying === true) {
            switch (event.keyCode) {
                case 37:
                    if (event.shiftKey) {
                        rotate = rotate - 10;
                        element.style.transform = 'rotate(' + rotate + 'deg)';
                    }
                    else {
                        left - num < minLeft ? left = minLeft : left = left - num;
                        element.style.left = left + 'px';
                    }
                    break;

                case 38:
                    top - num < minTop ? top = minTop : top = top - num;
                    element.style.top = top + 'px';
                    break;

                case 39:
                    if (event.shiftKey) {
                        rotate = rotate + 10;
                        element.style.transform = 'rotate(' + rotate + 'deg)';
                    }
                    else {
                        left = left + num;
                        element.style.left = left + 'px';
                    }
                    break;

                case 40:
                    top = top + num;
                    element.style.top = top + 'px';
                    break;
            }
        }
    });

};

var app = new Application();


