// 문제 : 배열에서 "재롱이"를 삭제하고 콘솔에 새로운 배열을 출력하세요.
// filter 메서드를 이용하여 여기를 작성해주세요.

const 강아지이름들 = ["밤송이", "재롱이", "밤비", "행성이"];

// 정답
const updatedNames = 강아지이름들.filter(function (name) {
    return name !== "재롱이";
});

console.log(updatedNames); // 이렇게 나와야 합니다 => ["밤송이", "밤비", "행성이"]
