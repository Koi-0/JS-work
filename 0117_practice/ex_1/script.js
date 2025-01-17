// 문제 2 : 모달 만들기

// 다음 요구사항이 만족될 수 있도록 모달을 만들어주세요.
function showHide() {
    document.querySelector(".modal").classList.toggle("show");
}

// 1. 모달열기 버튼이 눌리면 모달이 뜹니다.
const modalBtn = document.querySelector(".modal-btn");
modalBtn.addEventListener("click", showHide);

// 2. 닫기 버튼을 누를 때 모달이 닫힙니다.
// 3. 모달 컨텐츠의 외부 영역(회색 영역)이 클릭이 되면, 모달이 닫힙니다.
// 4. 모달 컨텐츠의 내부 영역이 클릭이 되면, 모달이 닫히면 안 됩니다.
const closeBtn = document.querySelector(".close-btn");
const modal = document.querySelector(".modal");
modal.addEventListener("click", function (e) {
    if (e.target === modal || e.target === closeBtn) {
        showHide();
    }
});
