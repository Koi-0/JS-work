// 모달 열기 버튼 가져오기
// const modalBtn = document.querySelector(".modal-btn");
// const modal = document.querySelector(".modal");
// const closeBtn = document.querySelector(".close-btn");

// const toggleModal = function () {
//     modal.classList.toggle("hide");
// };

// modalBtn.addEventListener("click", toggleModal);
// closeBtn.addEventListener("click", toggleModal);

// 위 내용과 아래 내용은 같지만, 작성법이 다르다.

// const toggleModal = function () {
//     modal.classList.toggle("hide");
// };

// modalBtn.addEventListener("click", function () {
//     return toggleModal();
// });

// closeBtn.addEventListener("click", function () {
//     return toggleModal();
// });

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// 함수를 하나 만들어보자!
// 함수 이름 : 걷기반 좋은지 확인하는 함수

// function 걷기반좋은지확인하는함수(a) {
//     console.log(a);
// }

// 실행
// 걷기반좋은지확인하는함수("걷기반 짱");
// 걷기반좋은지확인하는함수("걷기반 별로");

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

function 더하기1(number) {
    return number + 1; // return 값이 있다.
}

function 더하기2(number) {
    console.log(number + 2); // return 값이 없다.
}

// 결과1과 결과2라는 변수엔 어떤 값이 들어있을까요?
const 결과1 = 더하기1(2);
const 결과2 = 더하기2(3);

console.log("결과1 : ", 결과1); // 출력값 : 3
console.log("결과2 : ", 결과2); // 출력값 : undefined

// console.log vs return
// console.log : 그냥 콘솔에 데이터 **확인용**
// return : **실제로 사용**하기 위함 (변수에 담거나, 추후에 다른 곳에서 사용 가능)

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //
