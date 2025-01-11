// 반복문과 함수의 return

/* 문제 3 : 1부터 n까지의 모든 정수의 합을 계산하여 반환하는 함수 'sumToN'을 for 문을 사용하여 작성하세요. */

function sumToN(n) {
    // 여기에 코드를 작성하세요
    let sumToN = 0;

    for (let i = 1; i <= n; i++) {
        sumToN += i;
    }

    return sumToN;
}

console.log(sumToN(5)); // 15를 출력해야 합니다 (1 + 2 + 3 + 4 + 5 = 15)
console.log(sumToN(3)); // 6을 출력해야 합니다 (1 + 2 + 3 = 6)
