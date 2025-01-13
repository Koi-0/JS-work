// 반복문

/* 문제 2 : 주어진 배열의 모든 요소를 for 문을 사용하여 콘솔에 출력하는 함수 'printArray'를 작성하세요.
  
  예시:
  printArray(['apple', 'banana', 'cherry']);
  
  예상 출력:
  apple
  banana
  cherry
  
*/

function printArray(arr) {
    // 여기에 코드를 작성하세요
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

printArray(["apple", "banana", "cherry"]);
