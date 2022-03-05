const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSumbit(event) {
    // 브랑줘의 기본 동작을 막는 함수
    event.preventDefault();
    // const username = loginInput.value;
    // console.log(username);
    console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginSumbit);