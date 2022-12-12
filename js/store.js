/*****************************************************************************
* WEB222 – Project
* I declare that this assignment is my own work in accordance with SenecaAcademic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Group member Name: Atinder Kour, Lovejeet Singh Student IDs: 165571217, 163010218  Date: 07-12-22
*****************************************************************************/

const { products, categories } = window;

window.onload = () => {
  // VARIABLE DECLARATION.
  let x = document.getElementById("menu");
  let i = 0;
  categories.forEach(() => {
    // VARIABLE DECLARATION
    let temp = categories[i].name;
    let button = document.createElement("button");
    button.setAttribute("id", "btn" + i);
    button.setAttribute("onclick", "clk(id);");
    button.innerHTML = temp;
    x.appendChild(button);
    i++;
  });
};

function clk(id) {
  // VARIABLE DECLARATION
  let button = document.getElementById(id),
    name,
    prod,
    title = document.getElementById("selected-category"),
    table = document.getElementById("category-products");
  if (button.innerHTML == categories[0].name) {
    name = categories[0].name;
    table.innerHTML = "";
    prod = products.filter(
      (element) => element.categories == categories[0].id && element.discontinued == false
    );
    prod.forEach(function (element) {
      createCard(element);
    });
  } else if (button.innerHTML == categories[1].name) {
    name = categories[1].name;
    table.innerHTML = "";
    prod = products.filter(
      (element) => element.categories == categories[1].id && element.discontinued == false
    );
    prod.forEach(function (element) {
      createCard(element);
    });
  } else {
    name = categories[2].name;
    table.innerHTML = "";
    prod = products.filter(
      (element) => element.categories == categories[2].id && element.discontinued == false
    );
    prod.forEach(function (element) {
      createCard(element);
    });
  }
  title.innerText = name;
}

function createCard(element) {
  // VARIABLE DECLARATION.
  let cardDiv = document.createElement("div");
  let innerDiv = document.createElement("div");
  let frontDiv = document.createElement("div");
  let imageOfProduct = document.createElement("img");
  let backDiv = document.createElement("div");
  let title = document.createElement("h4");
  let description = document.createElement("p");
  let price = document.createElement("p");
  let mainDiv = document.getElementById("category-products");
  let btnn = document.createElement("button");

  cardDiv.setAttribute("class", "flip-card");
  innerDiv.setAttribute("class", "flip-card-inner");
  frontDiv.setAttribute("class", "flip-card-front");
  backDiv.setAttribute("class", "flip-card-back");
  imageOfProduct.setAttribute("src", element.image);
  imageOfProduct.setAttribute("alt", element.title);
  imageOfProduct.setAttribute("style", "width:300px;height:300px;");
  title.innerHTML = element.title;
  description.innerHTML = element.description;
  price.innerHTML = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "CAD"
  }).format(element.price);
  btnn.innerHTML = "Buy Now"
  btnn.onclick=function(){
    alert("Product added to cart!");
  }

  frontDiv.appendChild(imageOfProduct);
  backDiv.appendChild(title);
  backDiv.appendChild(description);
  backDiv.appendChild(price);
  backDiv.appendChild(btnn);
  innerDiv.appendChild(frontDiv);
  innerDiv.appendChild(backDiv);
  cardDiv.appendChild(innerDiv);
  mainDiv.appendChild(cardDiv);
  console.log(mainDiv);
}

// For debugging, display all of our data in the console
console.log({ products, categories }, "Store Data");