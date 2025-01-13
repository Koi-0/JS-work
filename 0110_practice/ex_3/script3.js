// 함수의 return과 반복문

/* 문제 3 : 문자열을 매개변수로 받아 그 문자열을 뒤집어 반환하는 함수 'reverseString'을 작성하세요. */

function reverseString(str) {
    // 여기에 코드를 작성하세요.
    let revers = "";
    for (let i = str.length - 1; i >= 0; i--) {
        revers += str[i];
    }
    return revers;
}

const result1 = reverseString("olleh");
const result2 = reverseString("tpircSavaJ");
console.log(result1 + " " + result2); // hello Javascript를 출력해야 합니다.
