// 문제 2 : Promise 체이닝 연습

const Test = fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(function (response) {
        return response.json();
    })
    .then(function (res) {
        console.log(res);
    })
    .catch(function () {
        console.log("error");
    });

console.log(Test);
