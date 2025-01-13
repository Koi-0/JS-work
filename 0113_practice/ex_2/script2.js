// 문제 : 주어진 객체 product의 하위 속성인 price의 가격을 20% 할인한 새로운 객체를 만들어서 출력해주세요

const product = { name: "셔츠", price: 10000 };

// 정답
const discountedProduct = {
    ...product,
    price: product.price * 0.8,
};

console.log(discountedProduct); // 이렇게 나와야 합니다 => { name: "셔츠", price: 8000 }
