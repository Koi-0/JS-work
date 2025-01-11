// "증가" 버튼을 클릭하면 숫자가 증가하고, "감소" 버튼을 클릭하면 숫자가 감소하도록 구현하세요. 단, 숫자는 1보다 작아질 수 없습니다.

const plusBtn = document.querySelector(".plus-btn");
const minusBtn = document.querySelector(".minus-btn");
const number = document.querySelector(".number");

plusBtn.addEventListener("click", function () {
    number.innerHTML = Number(number.innerHTML) + 1;
});

minusBtn.addEventListener("click", function () {
    if (Number(number.innerHTML) > 1) {
        number.innerHTML = Number(number.innerHTML) - 1;
        return;
    } else {
        alert("1보다 작을 수 없습니다.");
        return;
    }
});
