console.log("안녕하세요");

// DOM : Document Object Model
// Document === HTML / Object === 객체
// 객체의 특징은 점(.)으로 내부 데이터로 접근할 수 있다.

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// document.getElementsByTagName(선택자)[index 번호];
// document.getElementById(선택자);
// document.getElementsByClassName(선택자)[index 번호];
// document.querySelector(선택자);
// document.querySelectorAll(선택자)[index 번호];

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// document.getElementsByTagName("div")[0].innerHTML = "Tag로 변경하는 방법";
// document.getElementById("hello_id").innerHTML = "ID로 변경하는 방법";
// document.getElementsByClassName("hello_class")[0].innerHTML = "Class로 변경하는 방법";
// document.querySelector("#hello_id").innerHTML = "이거 하나로 다 변경하는 방법 (#hello_id 사용)";
// document.querySelector(".hello_class").innerHTML = "이거 하나로 다 변경하는 방법 (.hello_class 사용)";
// document.querySelectorAll(".hello_class")[0].innerHTML = "이거 하나로 다 변경하는 방법 (querySelectorAll 사용)";

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// getElementById 같은 경우 애초에 하나만 가져오기 때문에 [index 번호]가 필요없다.

// 하지만 "getElementsByTagName, getElementsByClassName" 같은 경우에는 배열로 가져오면서 배열 아이템으로 접근하기 때문에 [index 번호]가 필요하다.

// "getElementsByTagName, getElementById, getElementsByClassName" 를 사용하기 어려우면 querySelector만 사용해도 된다. (id, class, tag를 모두 다 가져올 수 있기 때문이다.)

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// 예제 1 : 글자 색깔 변경해보기
// document.getElementsByTagName("div")[0].style.color = "red";
// document.getElementById("hello_id").style.color = "blue";
// document.getElementsByClassName("hello_class")[0].style.color = "orange";
// document.querySelector("#hello_id").style.color = "navy";
// document.querySelector(".hello_class").style.color = "green";

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// 예제 2 : 이미지 주소 변경하기
// document.querySelector(".img").src = "https://static-cdn.sporki.com/news/spotv/202411/2389661/c_715501_1127885_499.jpg";

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// 예제 3 : href 속성에 값이 없는 a 태그에 href를 넣어보기
// document.querySelector(".a").href = "https://www.naver.com/";

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// addEventListener: addEventListener((이벤트), (이벤트가 실행할 함수 : function () { }));

// const a1 = document.querySelectorAll(".a1")[0];
// const a2 = document.querySelectorAll(".a1")[1];
// const a3 = document.querySelectorAll(".a1")[2];
// const a4 = document.querySelectorAll(".a2")[0];

// a1.addEventListener("click", function () {
//     a1.style.color = "red";
// });

// a2.addEventListener("click", function () {
//     a2.style.color = "green";
// });

// a3.addEventListener("click", function () {
//     a3.style.color = "navy";
// });

// a4.addEventListener("click", function () {
//     a4.style.color = "orange";
// });

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// const btn = document.querySelector(".btn");
// const warning_text = document.querySelector(".warning-text");

// btn.addEventListener("click", function () {
//     alert("버튼을 클릭했습니다.");
//     warning_text.style.display = "block";
// });

// btn.addEventListener("mouseover", function () {
//     btn.innerHTML = "마우스 올렸다.";
// });

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// const 스타벅스커피 = 4500;
// const 투썸커피 = 5500;
// const 메가커피 = 2000;
// const 총가격 = 스타벅스커피 + 투썸커피 + 메가커피;
// console.log(총가격);

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// var, const, let
// 항상 const를 쓰자!
// 만약 변경할 이유가 생기면 let으로 바꾸자!

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// const name = "김전역";

// function fn() {
//     const name = "이지역";
//     console.log(name);
// }

// fn();

// console.log(name);

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //
