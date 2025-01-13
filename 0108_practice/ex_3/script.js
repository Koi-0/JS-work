// 논리 연산자를 활용하여 두 값이 모두 true일 때 "접근 허용"이 출력되도록 구현하세요.

const isLoggedIn = true;
const hasPermission = false;

if (isLoggedIn && hasPermission) {
    console.log("접근 허용");
    return;
} else {
    console.log("접근 불가");
    return;
}
