// 이메일과 비밀번호가 모두 입력되지 않았을 때 경고창을 띄우고, 입력이 완료되면 "로그인 성공!"이라는 메시지를 띄우세요.

const email = document.querySelector("#email");
const password = document.querySelector("#password");
const loginBtn = document.querySelector(".login-btn");

loginBtn.addEventListener("click", function () {
    if (email.value === "" || password.value === "") {
        alert("이메일과 비밀번호를 입력해주세요.");
        return;
    } else {
        alert("로그인 성공!");
        return;
    }
});
