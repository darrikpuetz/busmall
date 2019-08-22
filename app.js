'Use Strict'

var container = document.getElementById('votingSection');

var thisSet = {};
var justUsed = {};
Products.productsArray = [];

var alreadyUsed = [];
var picked = 0;
var counter = 0;


function randomProducts() {
    for (var i = 0; i < productsArray.length;i++) {
        var randomEntries = Math.floor(Math.random() * Products.productsArray.length);
        Products.src = productsArray[randomEntries].src;
        Products.item = productsArray[randomEntries].item;
    }
}


function Products(url, item) {
    this.id = Math.random();
    this.src = url;
    this.item = item;
    this.clicks = 0;
    this.views = 0;
    Products.productsArray.push(this);
}

Products.prototype.updateViews = function () {
    this.views++;
}

Products.prototype.updateClicks = function() {
    this.clicks++;
}

// var localStorageData = localStorage.getItem('item');

function loadProducts() {
    new Products('img/bag.jpg', 'Bag');
    new Products('img/banana.jpg', 'Banana');
    new Products('img/bathroom.jpg', 'Bathroom');
    new Products('img/boots.jpg', 'Boots',);
    new Products('img/breakfast.jpg', 'Breakfast');
    new Products('img/bubblegum.jpg', 'Bubblegum');
    new Products('img/chair.jpg', 'Chair');
    new Products('img/cthulhu.jpg', 'Cthulhu');
    new Products('img/dog-duck.jpg', 'Dog-Duck');
    new Products('img/dragon.jpg', 'Dragon');
    new Products('img/pen.jpg', 'Pen');
    new Products('img/pet-sweep.jpg', 'Pet-Sweep');
    new Products('img/scissors.jpg', 'Scissors');
    new Products('img/shark.jpg', 'Shark');
    new Products('img/sweep.png', 'Sweep');
    new Products('img/tauntaun.jpg', 'Tauntaun');
    new Products('img/unicorn.jpg', 'Unicorn');
    new Products('img/usb.gif', 'USB');
    new Products('img/water-can.jpg', 'Water-Can');
    new Products('img/wine-glass.jpg', 'Wine-Glass');
    console.log(Products.productsArray)
}


function clickHandler(e) {
    var imageName = e.target.alt;
    counter++
    for (var i = 0; i < Products.productsArray.length; i++) {
        if (Products.productsArray[i].item === imageName) {
            Products.productsArray[i].updateClicks();
        }
    }
    if(counter < 25) {
        showRandomImages(3);
    }
    else if(counter ===25) {
        renderchart()
        localStorage.setItem('clicked', JSON.stringify(clicked))
        localStorage.setItem('views', JSON.stringify(views))
    }
}
function setupImageContainers(numImages) {
    
    var container = document.getElementById('votingSection');
    for (var i =1; i <= numImages; i++) {
        var img = document.createElement('img');
        img.id = `image-${i}`;
        img.src = 'http:/placehold.it/200x200';
        container.appendChild(img);
        
    }
}
function setupListener(e) {
    container.addEventListener('click', clickHandler);
}

function showRandomImages(numImages) {
    
}

var clicked = [];
var views = [];

function renderchart() {
    var items = [];
    for (i = 0; i < Products.productsArray.length; i++) {
        items.push(Products.productsArray[i].item);
        clicked.push(Products.productsArray[i].clicks);
        views.push(Products.productsArray[i].views);
        console.log(clicked);
    }
    
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        
        type: 'bar',
             data : {
                labels: items,
                datasets: [
                    {label: 'votes',
                    backgroundColor: 'orange',
                    strokeColor: '#ff8000',
                    data: clicked,},

                    {label: 'views',
                    backgroundColor: 'green',
                    strokeColor: '#ff8000',
                    data: views,}
                ],
            }

        });
    }



function showRandomImages(numImages) {
    thisSet = {};

    for (var i = 1; i <= numImages; i++) {
        var id = `image-${i}`;
        var img = document.getElementById(id);
        var imageObject = getRandomImage();
        imageObject.updateViews();

        img.src = imageObject.src;
        img.alt = imageObject.item;
    }

    justUsed = thisSet;


}


function getRandomImage() {
    var found = false;
    
    while (!found) {
        var n = Math.floor(Math.random() * Products.productsArray.length);
        if (!thisSet[n] && !justUsed[n]) {
            found = Products.productsArray[n];
            Products.productsArray[n].updateViews();
            thisSet[n] = true;
        }
    }
    return found;
}

loadProducts();

function loadData() {
    var savedClicked = JSON.parse(localStorage.getItem('clicked'));
    var savedViews = JSON.parse(localStorage.getItem('views'));
    if ( savedClicked) {
        for (i = 0; i < savedClicked.length; i++) {
            Products.productsArray[i].clicks = savedClicked[i];
            Products.productsArray[i].views = savedViews[i];
        }

    }
}
loadData()
setupImageContainers(3);
setupListener();
showRandomImages(3);




    