'use strict'
// Global Variables
var productsList = [];
var chosenProducts = [];

var imageOne = document.getElementById('imageOne');
var imageTwo = document.getElementById('imageTwo');
var imageThree = document.getElementById('imageThree');

var mainSection = document.getElementById('mainSection')
var list = document.getElementById('list')
var viewsArray = []
var votesArray = []
var namesArray = []
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

// console.log(productsList)

function productRandomAssignment() {
    while (chosenProducts.length < 6) {
    var uniqueProduct = getRandomproduct();
    while (chosenProducts.includes(uniqueProduct)) {
      uniqueProduct = getRandomproduct();
    }
    chosenProducts.push(uniqueProduct);
  }
  // console.log('ChosenProduct Array', chosenProducts)
};


function renderProducts(){



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


function productChangeOver() {
  if (chosenProducts.includes(chosenProducts[0,1,2])) {
    chosenProducts.shift();
    chosenProducts.shift();
    chosenProducts.shift();
  };
};

function calculateViewsVotesName() {
  var views
  var votes
  var names

  for (var i = 0; i < productsList.length; i++) {
    views = productsList[i].views
    viewsArray.push(views)
  }

  for (var i = 0; i < productsList.length; i++) {
    votes = productsList[i].votes
    votesArray.push(votes)
  }

  for (var i = 0; i < productsList.length; i++) {
    names = productsList[i].name
    namesArray.push(names)
  }
}

function eventHandler(event) {

  var productClick = event.target.alt;

 if (click !== totalClicks) {
   click++;
  productChangeOver()
  renderProducts()
  };


  for (var i = 0; i < productsList.length; i++) {
    if (productClick === productsList[i].name) {
      productsList[i].votes++;
      
    };

    
  };
  // productChangeOver();
  // renderProducts();

  if (click === totalClicks) {
    mainSection.removeEventListener('click', eventHandler);

    renderResults();
    calculateViewsVotesName();
    getChart();
    // console.log ('Views Array', viewsArray, 'Votes Array', votesArray)
  };
};


function getChart() { 
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: namesArray,

        datasets: [{
            label: '# of Views',
            data: viewsArray,

            backgroundColor:
                'rgba(255, 99, 132, 0.2)',
                
            borderColor:
                'rgba(255, 99, 132, 1)',

            borderWidth: 1,
        },
      {
            label: '# of Votes',

            data: votesArray,

            backgroundColor:

                'rgba(54, 162, 235, 0.2)',

            borderColor: 

                'rgba(54, 162, 235, 1)',

            borderWidth: 1,
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
}
renderProducts();

mainSection.addEventListener('click', eventHandler);


