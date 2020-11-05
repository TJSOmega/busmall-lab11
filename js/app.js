'use strict'
// Global Variables
var productsList = [];
var chosenProducts = [];

var imageOne = document.getElementById('imageOne');
var imageTwo = document.getElementById('imageTwo');
var imageThree = document.getElementById('imageThree');

var mainSection = document.getElementById('mainSection')
var list = document.getElementById('list')

var click = 0
var totalClicks = 25
//Constructor

function Product(name) {
  this.name = name;
  this.src = `img/${name}.jpg`;
  productsList.push(this);
  this.views = 0;
  this.votes = 0;
};

//Functions (Algorithm for 3 random products, Event Listener
//Event Handler, )

function getRandomproduct() {
  return Math.floor(Math.random() * productsList.length)
};

//declaration of objects
new Product('bag');
new Product('banana');
new Product('bathroom');
new Product('boots');
new Product('breakfast');
new Product('bubblegum');
new Product('chair');
new Product('cthulhu');
new Product('dog-duck');
new Product('dragon');
new Product('pen');
new Product('pet-sweep');
new Product('scissors');
new Product('shark');
new Product('sweep');
new Product('tauntaun');
new Product('unicorn');
new Product('usb');
new Product('water-can');
new Product('wine-glass');

console.log(productsList)

function productRandomAssignment() {
    while (chosenProducts.length < 3) {
    var uniqueProduct = getRandomproduct();
    while (chosenProducts.includes(uniqueProduct)) {
      uniqueProduct = getRandomproduct();
    }
    chosenProducts.push(uniqueProduct);
  }
  console.log('ChosenProduct Array', chosenProducts)
}


function renderProducts(){

  chosenProducts = []

  productRandomAssignment()
  
  var prod1 = chosenProducts[0]
  var prod2 = chosenProducts[1]
  var prod3 = chosenProducts[2]

  imageOne.src = productsList[prod1].src;
  imageOne.alt = productsList[prod1].name;
  productsList[prod1].views++;

  imageTwo.src = productsList[prod2].src;
  imageTwo.alt = productsList[prod2].name;
  productsList[prod2].views++;

  imageThree.src = productsList[prod3].src;
  imageThree.alt = productsList[prod3].name;
  productsList[prod3].views++;
};

function renderResults() {
  for (var i = 0; i < productsList.length; i++){
    var li = document.createElement('li')
  li.textContent = `${productsList[i].name} had ${productsList[i].votes} votes, and was seen ${productsList[i].views} times`
  list.appendChild(li)
  }

};





renderProducts()

// productRandomAssignment()

// console.log(chosenProducts)


function eventHandler(event) {

  var productClick = event.target.alt;
  click++;


  for (var i = 0; i < productsList.length; i++) {
    if (productClick === productsList[i].name) {
      productsList[i].votes++;
      
    }

    
  }
  renderProducts();

  if (click === totalClicks) {
    mainSection.removeEventListener('click', eventHandler);

    renderResults();
  }
}


mainSection.addEventListener('click', eventHandler);


