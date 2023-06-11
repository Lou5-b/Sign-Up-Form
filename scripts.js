const createbutton = document.querySelector(".bottom")
const pass1 = document.querySelector("#pass")
const pass2 = document.querySelector("#conf-pass")
const errormsg = document.querySelector("#error-msg")

createbutton.addEventListener('click', function (e) {
    if (pass1.value == pass2.value) {
        
    } else {
        pass1.setAttribute('style', 'border: 1px solid darkred')
        pass2.setAttribute('style', 'border: 1px solid darkred')
        errormsg.setAttribute('style', 'opacity: 1')
    }
})