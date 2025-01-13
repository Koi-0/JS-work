// 문제 : 평점이 4.5 이상인 영화들만 필터링하여 출력하세요.
// 배열이 출력돼야 하기 때문에 find가 아니라 filter 함수를 써야해요 :)

const movies = [
    { title: "영화1", rating: 4.2 },
    { title: "영화2", rating: 4.8 },
    { title: "영화3", rating: 4.5 },
];

// 정답
const highRatedMovies = movies.filter(function (r) {
    return r.rating >= 4.5;
});

console.log(highRatedMovies); // 이렇게 나와야 합니다 => [{ title: "영화2", rating: 4.8 }, { title: "영화3", rating: 4.5 }]
