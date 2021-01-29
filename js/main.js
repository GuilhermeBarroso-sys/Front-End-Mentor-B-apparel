var emailField = document.getElementById('emailField');
var buttonForm = document.getElementById('buttonForm');
var response = document.getElementById('response');

buttonForm.addEventListener('click', function() {
    var email = emailField.value;
    if(!(validateEmail(email))) {
        response.innerHTML = '<br><p style = "color:pink; margin-left:-1px;  font-size: 1.3rem;"> Invalid email! </p>';
    }

})

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}