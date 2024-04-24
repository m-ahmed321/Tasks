const products = ["eggs", "milk", "cheese"];
const productPrices = [2.89, 3.29, 5.79];
const soldProducts = ["eggs", "eggs", "cheese", "milk"];
const soldPrice = [2.89, 2.98, 5.97, 3.29];

function wrongPrice(products, productPrices, soldProducts, soldPrice) {
  let wrongCount = 0;

  for (let i = 0; i < soldProducts.length; i++) {
    const productName = soldProducts[i];
    const productIndex = products.indexOf(productName);

    if (productIndex !== -1) {
      const expectedPrice = productPrices[productIndex];
      const actualSoldPrice = soldPrice[i];
      if (expectedPrice !== actualSoldPrice) {
        wrongCount++;
        console.log(
          `${productName} has wrong price. Expected: ${expectedPrice}, Got: ${actualSoldPrice}`
        );
      }
    }
  }
  return wrongCount;
}

const numWrongPriced = wrongPrice(
  products,
  productPrices,
  soldProducts,
  soldPrice
);
console.log("Total number of wrong priced items:", numWrongPriced);
