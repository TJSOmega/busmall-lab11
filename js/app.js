'use strict'
// Global Variables
var productsList = [];
var chosenProducts = [];

var imageOne = document.getElementById('imageOne');
var imageTwo = document.getElementById('imageTwo');
var imageThree = document.getElementById('imageThree');

var mainSection = document.getElementById('mainSection')

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

function productRandomAssignment(){
  var prod1 = getRandomproduct();
  var prod2 = getRandomproduct();
  var prod3 = getRandomproduct();

  prod1 = removeDuplicates(prod1, prod2, prod3);
  prod2 = removeDuplicates(prod2, prod3, prod1);
  prod3 = removeDuplicates(prod3, prod1, prod2);
  
  chosenProducts.push(prod1, prod2, prod3);

  imageOne.src = productsList[prod1].src;
  imageOne.alt = productsList[prod1].name;

  imageTwo.src = productsList[prod2].src;
  imageTwo.alt = productsList[prod2].name;
  
  imageThree.src = productsList[prod3].src;
  imageThree.alt = productsList[prod3].name;

  }

  
  
  function removeDuplicates(a, b, c) {
    while (a === b || a === c) {
      getRandomproduct(a);
    }
    return a;
  }

productRandomAssignment()

// console.log(chosenProducts)
 function eventHandler(event){

   var productClick = event.target.alt;
   click++;


  for (var i = 0; i < productsList.length; i++){
    if (productClick === productsList[i].name) {
      productsList[i].votes++;

      productRandomAssignment()
    }
  }
 }
  

mainSection.addEventListener('click', eventHandler);


