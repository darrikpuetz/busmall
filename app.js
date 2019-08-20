'Use Strict'

var itemOne = document.getElementById('firstPic');
var itemTwo = document.getElementById('secondPic');
var itemThree = document.getElementById('thirdPic');

var alreadyUsed = [];
var justUsed = [];
var picked = 0;
var counter = 0;
var votes = 0;
// var figure = document.createElement('figure');
// var imageElement = document.createElement('img');
// var imageCaption = document.createElement('figcaption');
// var section = document.getElementsByTagName('section')[0];
// section.appendChild(figure);
// figure.appendChild(imageElement);
// figure.appendChild(imageCaption);
Products.productsArray = [];

function Products(file, item, counter, votes) {
    this.file = file;
    this.item = item;
    this.counter = 0;
    this.votes = 0;
    Products.productsArray.push(this);
}

    new Products('img/bag.jpg', 'Bag');
    new Products('img/banana.jpg', 'Banana');
    new Products('Bathroom','img/bathroom.jpg');
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
;




function imageCreator() {

    var randomNumber1 = Math.floor(Math.random() *Products.productsArray.length);
    var randomNumber2 = Math.floor(Math.random() * Products.productsArray.length);
    var randomNumber3 = Math.floor(Math.random() * Products.productsArray.length);
    while(randomNumber1 === randomNumber2){
        randomNumber1 = Math.floor(Math.random() * Products.productsArray.length);
    }
    while(randomNumber2 === randomNumber3){
        randomNumber2 = Math.floor(Math.random() * Products.productsArray.length);
    }
    while(randomNumber3 === randomNumber1){
        randomNumber3 = Math.floor(Math.random() * Products.productsArray.length);
    }


    itemOne.item = Products.productsArray[randomNumber1].item;
    itemOne.src = Products.productsArray[randomNumber1].file;
    itemOne.index = randomNumber1;

    itemTwo.item = Products.productsArray[randomNumber2].item;
    itemTwo.src = Products.productsArray[randomNumber2].file;
    itemTwo.index = randomNumber2;

    itemThree.item = Products.productsArray[randomNumber3].item;
    itemThree.src = Products.productsArray[randomNumber3].file;
    itemThree.index = randomNumber3;
};




function newPictures() {
    if (counter <=25) {
        imageCreator()
        counter = counter++
        console.log(counter);
        }
    else if(counter < 27){
        printResult();
    }
}

function scoreboard() {

}
itemOne.addEventListener('click' , newPictures)
itemTwo.addEventListener('click' , newPictures)
itemThree.addEventListener('click' , newPictures)

imageCreator();