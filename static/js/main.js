const showPassword = document.getElementById('show-password');
const hidePassword = document.getElementById('hide-password');
const password = document.getElementById('password');

window.onload = () => {
    window.history.forward();
    setHidePassword(true);
}

const setHidePassword = (state = false) => {
    showPassword.style.display = state ? 'block' : 'none';
    hidePassword.style.display = state ? 'none' : 'block';
    password.setAttribute('type', state ? 'password' : 'text');
}

showPassword.addEventListener('click', function() {
    setHidePassword(false)
});

hidePassword.addEventListener('click', function() {
    setHidePassword(true)
});
