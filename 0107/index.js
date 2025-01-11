// (1) 변수 선언
// const plusBtn = document.querySelector(".plus-btn");
// const minusBtn = document.querySelector(".minus-btn");
// const number = document.querySelector(".number");

// plusBtn.addEventListener("click", function () {
//     number.innerHTML = Number(number.innerHTML) + 1; // 형 변환 : string 타입 -> number 타입
// });

// minusBtn.addEventListener("click", function () {
//     if (Number(number.innerHTML) < 1) {
//         alert("최소 1개 이상 있어야 합니다.");
//         return;
//     } else {
//         number.innerHTML = Number(number.innerHTML) - 1;
//     }
// });

// 함수는 return을 만나면, 더 이상 실행하지 않는다. (중요!!)

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// 사칙 연산자
// + 연산자 : 문자열 타입 > 숫자열 타입
// - 연산자 : 문자열 타입 < 숫자열 타입
// * 연산자 : 문자열 타입 < 숫자열 타입
// / 연산자 : 문자열 타입 < 숫자열 타입
// % 연산자 : 문자열 타입 < 숫자열 타입

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// 할당 연산자
// let x = 10;
// console.log(x);

// x += 5; // x = x + 5;
// x -= 10; // x = x - 10;

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// 비교 연산자 : boolean 타입
// const a = 1 === 1;
// console.log(a); // console.log(1 === 1);

// const a = 2 < 1;
// console.log(a); // 출력값 : false

// const a = 2 >= 2;
// console.log(a); // 출력값 : true

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// 조건문
// if (조건) {
//     // 조건이 참일 때 실행
// } else {
//     // 조건이 거짓일 때 실행
// }

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// AND(&&), OR(||)

// AND(&&) : A '그리고' B 모두가 만족해야 한다.
// const a = 3 > 2 && 1 > 2;
// console.log(a); // 출력값 : false

// OR(||) : A '또는' B 둘 중 하나만 만족해도 된다.
// const b = 3 > 2 || 1 > 2;
// console.log(b); // 출력값 : true

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// const email = document.querySelector("#email");
// const password = document.querySelector("#password");
// const loginBtn = document.querySelector("button");

// loginBtn.addEventListener("click", function () {
//     if (email.value === "" || password.value === "") {
//         alert("이메일과 비밀번호를 입력해주세요.");
//         return;
//     }
// });

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// 삼항 연산자
// const email = document.querySelector("#email");
// const password = document.querySelector("#password");
// const loginBtn = document.querySelector("button");

// loginBtn.addEventListener("click", function () {
//     if (email.value === "" || password.value === "") {
//         alert("이메일과 비밀번호를 입력해주세요.");
//         // return;
//     } else {
//         alert("로그인 성공입니다.");
//         // return;
//     }

//     // 삼항 연산자
//     email.value === "" || password.value === "" ? alert("이메일과 비밀번호를 입력해주세요.") : alert("로그인 성공입니다.");
// });

// const randomNumber = Math.floor(Math.random() * 100) + 1;

// if (randomNumber > 20) {
//     console.log("값이 20보다 크다.");
// } else {
//     console.log("값이 20보다 작다.");
// }

// randomNumber > 20 ? console.log(`${randomNumber} : 값이 20보다 크다`) : console.log(`${randomNumber} : 값이 20보다 작다`);
