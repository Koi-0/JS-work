// 문제 : 좋아요 수가 100,000 이상인 상품을 찾아 출력하세요.

const products = [
    { name: "상품1", likes: 30000 },
    { name: "상품2", likes: 150000 },
    { name: "상품3", likes: 50000 },
];

// 정답
const popularProduct = products.find(function (g) {
    return g.likes >= 100000;
});

console.log(popularProduct); // 이렇게 나와야 합니다 => { name: "상품2", likes: 150000 }
