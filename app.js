//** Globals */



let productarray = [];

let votingrounds = 25;

// let productgenarray = [];

//** DOM Window */

let oddducks = document.getElementByID('oddducks_page');
let imageone = document.getElementByID('imageone_page');
let imagetwo = document.getElementByID('imagetwo_page');
let imagethree = document.getElementByID('imagethree_page');
let viewresults = document.getElementByID('viewresults_page');
let voteresults = document.getElementById('voteresults_page')

//** Helper functions (Random Generator, image generator) */   For redesign with any variable number

function randomnumber (){
  return Math.floor(Math.random * productarray.length);
}

function renderimages (){
  let choiceimage1 = randomnumber();
  let choiceimage2 = randomnumber();
  let choiceimage3 = randomnumber();

  while (choiceimage2 === choiceimage1){
    choiceimage2 = randomnumber();
  }

  while (choiceimage3 === choiceimage1 | choiceimage3 === choiceimage2){
    choiceimage3 = randomnumber();
  }

  imageone.src = productarray[choiceimage1].image;
  imageone.title = productarray[choiceimage1].image;
  imagetwo.src = productarray[choiceimage2].image;
  imageone.title = productarray[choiceimage2].image;
  imagethree.src = productarray[choiceimage3].image;
  imageone.title = productarray[choiceimage3].image;

  productarray[choiceimage1].views++
  productarray[choiceimage2].views++
  productarray[choiceimage3].views++
}

//** Constructor */

function OddDuckProducts(productname, image, image_ext = 'jpg'){
  this.name = productname;
  this.image = `images/${imgage}.${image_ext}`;
  this.view = 0
  this.votes = 0
}

//** Event Handler */

function votehandler(event){
  //** Pull name from clicked item */
  let votedimage = event.target.title;

  for(let i = 0; i < productarray; i++){
    if (productarray[i].name === votedimage)
    productarray[i].votes++
    votingrounds--
    renderimages();
  }
}

function resultshandler(event){
  if (votingrounds === 0){
    for(i=0; i < productarray.length; i++){
      let odditem = document.createElement('li');
      odditem.textContent = `${productarray[i].name} - ${productarray[i].name} votes, ${productarray[i].views} views`
      voteresults.appendChild(odditem);
    }
    viewresults.removeEventListener('click', resultshandler);
  }
}

//** Event Listener */

oddducks.addEventListener('click', votehandler);

viewresults.addEventListener('click', resultshandler);

//** Instantiations */

let product1 = new OddDuckProducts(product1, 'bag');
let product2 = new OddDuckProducts(product2, 'banana');
let product3 = new OddDuckProducts(product3, 'bathroom');
let product4 = new OddDuckProducts(product4, 'boots');
let product5 = new OddDuckProducts(product5, 'breakfast');
let product6 = new OddDuckProducts(product6, 'bubblegum');
let product7 = new OddDuckProducts(product7, 'chair');
let product8 = new OddDuckProducts(product8, 'cthulhu');
let product9 = new OddDuckProducts(product9, 'dog-duck');
let product10 = new OddDuckProducts(product10, 'dragon');
let product11 = new OddDuckProducts(product11, 'pen');
let product12 = new OddDuckProducts(product12, 'pet-sweep');
let product13 = new OddDuckProducts(product13, 'scissors');
let product14 = new OddDuckProducts(product14, 'shark');
let product15 = new OddDuckProducts(product15, 'sweep');
let product16 = new OddDuckProducts(product16, 'tauntaun');
let product17 = new OddDuckProducts(product17, 'unicorn');
let product18 = new OddDuckProducts(product18, 'water-can');
let product19 = new OddDuckProducts(product19, 'wine-glass');

productarray.push(product1, product2, product3, product4, product5, product6, product7, product8, product9, product10, product11, product12, product13, product14, product15, product16, product17, product18, product19)


//** Function Call */

renderimages()
