'use strict';
//** Globals */



let productarray = [];

let votingrounds = 3;

// let productgenarray = [];

//** DOM Window */

let oddducks = document.getElementById('oddducks_page');
let imageone = document.getElementById('imageone_page');
let imagetwo = document.getElementById('imagetwo_page');
let imagethree = document.getElementById('imagethree_page');
let viewresults = document.getElementById('viewresults_page');
let voteresults = document.getElementById('voteresults_page');


//** Constructor */

function OddDuckProducts(imagename, image_ext = 'jpg'){
  this.name = imagename;
  this.image = `images/${imagename}.${image_ext}`;
  this.views = 0;
  this.votes = 0;
}

//** Helper functions (Random Generator, image generator) */   For redesign with any variable number

function randomarraynumber (){
  return Math.floor(Math.random() * productarray.length);
}

function renderimages (){
  let choiceimage1 = randomarraynumber();
  let choiceimage2 = randomarraynumber();
  let choiceimage3 = randomarraynumber();

  while (choiceimage2 === choiceimage1){
    choiceimage2 = randomarraynumber();
  }

  while (choiceimage3 === choiceimage1 || choiceimage3 === choiceimage2){
    choiceimage3 = randomarraynumber();
  }


  imageone.src = productarray[choiceimage1].image;
  imageone.title = productarray[choiceimage1].name;
  imagetwo.src = productarray[choiceimage2].image;
  imagetwo.title = productarray[choiceimage2].name;
  imagethree.src = productarray[choiceimage3].image;
  imagethree.title = productarray[choiceimage3].name;

  productarray[choiceimage1].views++;
  productarray[choiceimage2].views++;
  productarray[choiceimage3].views++;
}

//** Event Handler */

function votehandler(event){
  //** Pull name from clicked item */
  let votedimage = event.target.title;

  for(let i = 0; i < productarray.length; i++){
    if (productarray[i].name === votedimage){
      productarray[i].votes++;
      votingrounds--;
      renderimages();
    }
  }
}

function resultshandler(){
  if (votingrounds === 0){
    for(let i = 0; i < productarray.length; i++){
      let odditem = document.createElement('li');
      odditem.textContent = `${productarray[i].name} - ${productarray[i].votes} votes, ${productarray[i].views} views`;
      voteresults.appendChild(odditem);
    }
    // viewresults.removeEventListener('click', resultshandler);
  }
}

//** Event Listener */

oddducks.addEventListener('click', votehandler);

viewresults.addEventListener('click', resultshandler);


//** Instantiations */

let product1 = new OddDuckProducts('bag');
let product2 = new OddDuckProducts('bag');
let product3 = new OddDuckProducts('bathroom');
let product4 = new OddDuckProducts('boots');
let product5 = new OddDuckProducts('breakfast');
let product6 = new OddDuckProducts('bubblegum');
let product7 = new OddDuckProducts('chair');
let product8 = new OddDuckProducts('cthulhu');
let product9 = new OddDuckProducts('dog-duck');
let product10 = new OddDuckProducts('dragon');
let product11 = new OddDuckProducts('pen');
let product12 = new OddDuckProducts('pet-sweep');
let product13 = new OddDuckProducts('scissors');
let product14 = new OddDuckProducts('shark');
let product15 = new OddDuckProducts('sweep', 'png');
let product16 = new OddDuckProducts('tauntaun');
let product17 = new OddDuckProducts('unicorn');
let product18 = new OddDuckProducts('water-can');
let product19 = new OddDuckProducts('wine-glass');

productarray.push(product1, product2, product3, product4, product5, product6, product7, product8, product9, product10, product11, product12, product13, product14, product15, product16, product17, product18, product19);


//** Function Call */

renderimages();


