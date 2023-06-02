'use strict'

const exit = () => {
    const buttonSair = document.querySelector('.button-leave')
    buttonSair.onclick = function (){
        window.location.href = './index.html'
    }
}


exit();