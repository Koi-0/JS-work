// 문제 : 주어진 products 배열의 각 상품에 가격을 10% 할인한 새로운 배열을 만들어서 출력하세요.

const products = [
    { name: "상품1", price: 10000 },
    { name: "상품2", price: 20000 },
    { name: "상품3", price: 30000 },
];

// 정답
const discountedProducts = products.map(function (p) {
    return {
        name: p.name,
        price: p.price * 0.9,
    };
});

console.log(discountedProducts); // 이렇게 나와야 합니다 => [{ name: "상품1", price: 9000 }, ...]
