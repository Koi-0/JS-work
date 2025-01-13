// 입력 값이 하나라도 비어있으면 경고 메시지를 띄우세요.

const nameInput = document.querySelector("#name");
const ageInput = document.querySelector("#age");
const submitBtn = document.querySelector(".submit-btn");

submitBtn.addEventListener("click", function () {
    if (nameInput.value === "" || ageInput.value === "") {
        alert("모든 값을 입력해주세요.");
    } else {
        console.log("입력 완료");
    }
});
