'use strict'

const exit = () => {
    const buttonSair = document.querySelector('.button-leave')
    buttonSair.onclick = function (){
        window.location.href = 'http://127.0.0.1:5500/'
    }
}


exit();