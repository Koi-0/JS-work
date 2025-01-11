// 삼항연산자를 활용하여 입력 값에 따라 다른 메시지를 출력하세요.

const input = document.querySelector("#input");
const submitBtn = document.querySelector(".submit-btn");

submitBtn.addEventListener("click", function () {
    !!input.value ? alert("값을 입력했습니다.") : alert("값을 입력하세요.");
});