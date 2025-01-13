// 사용자로부터 이름, 나이, 그리고 이메일을 입력받아 아래 조건을 만족하는 메시지를 출력하세요.
// 1. 이름, 나이, 이메일 중 하나라도 입력되지 않은 경우: `alert` "모든 정보를 입력해주세요."
// 2. 나이가 18세 미만일 경우: `alert` "미성년자는 가입할 수 없습니다."
// 3. 이메일에 `@`가 포함되지 않은 경우: `alert` "유효한 이메일 주소를 입력해주세요."
// 4. 모든 조건을 만족하면: `alert` "가입 성공!"

const nameInput = document.querySelector("#name");
const ageInput = document.querySelector("#age");
const emailInput = document.querySelector("#email");
const submitBtn = document.querySelector(".submit-btn");

submitBtn.addEventListener("click", function () {
    if (nameInput.value === "" || ageInput.value === "" || emailInput.value === "") {
        alert("모든 정보를 입력해주세요.");
        return;
    }

    if (ageInput.value < 18) {
        alert("미성년자는 가입할 수 없습니다.");
        return;
    }

    if (!emailInput.value.includes("@")) {
        alert("유효한 이메일 주소를 입력해주세요.");
        return;
    }

    alert("가입 성공!");
});

// includes() : 인자로 전달된 문자열이 문자열 안에 존재한다면 true가 리턴, 존재하지 않는다면 false를 리턴한다.
