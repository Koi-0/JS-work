// 문제 4 : try/catch를 사용한 에러 처리

let err = document.querySelector("#error");

async function getPost() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        err.innerHTML = "error입니다";
    }
}

getPost();
