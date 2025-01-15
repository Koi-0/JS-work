// 문제 3 : async/await 변환

async function fetchTest() {
    const response = await fetch("https://jsonplaceholder.typicode.com/comments");
    const data = await response.json();
    console.log(data);
}

fetchTest();
