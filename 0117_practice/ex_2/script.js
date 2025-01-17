// 원본 데이터를 기반으로 아래 요구사항을 만족시킬 수 있도록 로직을 작성해주세요.
const originalList = [
    { id: 1, name: "상품1", price: 1000 },
    { id: 2, name: "상품2", price: 2000 },
    { id: 3, name: "상품3", price: 3000 },
];

localStorage.setItem("product", JSON.stringify(originalList));

// 요구사항

// 1. printRemovedProduct : id가 1인 상품을 제거하고 출력합니다.
function printRemovedProduct(productList) {
    const removedProduct = productList.filter(function (product) {
        return product.id !== 1;
    });
    console.log("removedProduct => ", removedProduct);
}

// 2. printAddedProduct : id가 4인 상품을 추가하고 출력합니다.
function printAddedProduct(productList, newProduct) {
    const addedProduct = [...productList, newProduct];
    console.log("addedProduct => ", addedProduct);
}

// 3. id가 2인 상품의 가격을 2500으로 업데이트하고 출력합니다.
function printUpdatedProduct(productList) {
    const updatedProduct = productList.map(function (product) {
        return product.id === 2 ? { ...product, price: 2500 } : product;
    });
    console.log("updatedProduct => ", updatedProduct);
}

printRemovedProduct(originalList);
printAddedProduct(originalList, { id: 4, name: "상품4", price: 4000 });
printUpdatedProduct(originalList);
