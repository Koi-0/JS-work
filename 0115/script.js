// fetch 함수
// 외부에서 데이터(정보)를 가져오는 함수

// 1. fetch 함수는 promise 객체를 반환한다.
// 2. promise 객체는 then 메서드를 가지고 있다.
// 3. then 메서드는 파라미터(input(인자))으로 콜백함수를 받는다.
// 4. 이 콜백함수는 인자로 promise 객체가 fulfilled 되었을 때(즉, 요청이 성공했을 때) 반환된 데이터를 담는다.

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// const response = fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (res) {
//         console.log(res);
//     });

// console.log(response);

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// fetch를 통해서 받는 데이터는 json() 형태이다.

// return response.json(); : json() 형태를 받기 때문에 json()으로 적는 것이다.
// text() 형태로 받게 되면, return response.text(); 라고 적어야 한다.

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// [ HTTP 메서드 종류 ]

// 1. Get : 데이터를 가지고 오는 것(read) - 생략 가능
// 2. Post : 데이터를  입력하는 것(create) - 데이터 추가
// 3. Patch : 데이터를 수정하는 것(update) - 데이터 일부 수정
// 4. Put : 데이터를  수정하는 것(update) - 데이터 전체 수정
// 5, Delete : 데이터를 삭제하는 것(delete) - 데이터 삭제

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// catch : 오류 발생으로 인해 어떻게 처리할 지 조작하는 메서드이다.

// fetch("httpss://jsonplaceholder.typicode.com/todos/1")
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (res) {
//         console.log(res);
//     })
//     .catch(function () {
//         console.log("error 발생");
//     });

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// async/await

// 변경 전
fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    });

// 변경 후
async function getPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data);
}

getPosts();

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// try/catch

// 변경 전
async function getPost() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await response.json();
    console.log(data);
}

getPost();

// 변경  후
async function getPost() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("error입니다.");
    }
}

getPost();

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //
