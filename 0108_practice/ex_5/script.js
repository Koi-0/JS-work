// 두 입력 값이 모두 채워졌을 때만 "유효한 입력"을 출력하도록 코드를 작성하세요.

const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const checkBtn = document.querySelector(".check-btn");

checkBtn.addEventListener("click", function () {
    if (!!input1.value && !!input2.value) {
        console.log("유효한 입력");
        return;
    } else {
        console.log("입력이 부족합니다.");
        return;
    }
});
