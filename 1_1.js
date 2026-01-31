const products = [
  { name: "Wireless Headphones", category: "electronics", price: 5000 },
  { name: "Bluetooth Speaker", category: "electronics", price: 500 },
  { name: "Cotton T-Shirt", category: "fashion", price: 2000 },
  { name: "Denim Jeans", category: "fashion", price: 4000 }
];

const container = document.getElementById("productContainer");
const filter = document.getElementById("categoryFilter");

function displayProducts(list) {
  container.innerHTML = "";

  for (let i = 0; i < list.length; i++) {
    container.innerHTML +=
      "<div class='card'>" +
      "<h3>" + list[i].name + "</h3>" +
      "<p>₹" + list[i].price + "</p>" +
      "</div>";
  }
}


filter.addEventListener("change", function () {
  var value = filter.value;
  var filteredProducts = [];

  if (value === "all") {
    filteredProducts = products;
  } else {
    for (var i = 0; i < products.length; i++) {
      if (products[i].category === value) {
        filteredProducts.push(products[i]);
      }
    }
  }

  displayProducts(filteredProducts);
});


displayProducts(products);
