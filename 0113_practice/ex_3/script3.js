// 문제 : 배열의 강아지 이름들을 <ul> 요소 안에 <li>로 추가하세요.

const 강아지이름들 = ["밤송이", "재롱이", "밤비", "행성이"];
const container = document.querySelector(".puppies-container");

// 정답
강아지이름들.forEach((name) => {
    const puppyItem = document.createElement("li");
    puppyItem.innerHTML = name;
    container.append(puppyItem);
});
