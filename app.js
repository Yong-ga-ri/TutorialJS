const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSumbit(event) {
    event.preventDefault();
    // const username = loginInput.value;
    // console.log(username);
    console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginSumbit);