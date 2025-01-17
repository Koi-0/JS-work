// 특정 간격마다 실행되는 setInterval

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

const adBox = document.querySelector(".ad-box");
const timer = document.querySelector(".timer");

let count = Number(timer.textContent);

const intervalId = setInterval(function () {
    console.log("setInterval : 실행 중");
    if (count > 1) {
        count = count - 1;
        timer.textContent = count;
    } else {
        adBox.style.display = "none";
        clearInterval(intervalId);
    }
}, 1000);

// setInterval(() => {
//     if (count > 1) {
//         count = count - 1;
//         timer.textContent = count;
//     } else {
//         adBox.style.display = "none";
//     }
// }, 1000);

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //
