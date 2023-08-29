'use strict';
//** Globals */



let productarray = [];

let votingrounds = 25;
// let productgenarray = [];

//** DOM Window */

let oddducks = document.getElementById('oddducks_page');
let imageone = document.getElementById('imageone_page');
let imagetwo = document.getElementById('imagetwo_page');
let imagethree = document.getElementById('imagethree_page');
let viewresults = document.getElementById('viewresults_page');
let voteresults = document.getElementById('voteresults_page');

let ctx = document.getElementById('OddDuckChart');

//** Constructor */

function OddDuckProducts(imagename, image_ext = 'jpg'){
  this.name = imagename;
  this.image = `images/${imagename}.${image_ext}`;
  this.views = 0;
  this.votes = 0;
}

//** Helper functions (Random Generator, image generator) */   For redesign with any variable number

function randomarraynumber (){
  let somenumber = Math.floor(Math.random() * productarray.length);
  return somenumber;
}


let imagerenderarray = [];


function renderimages (){
  console.log(imagerenderarray);
  while (imagerenderarray.length < 6){
    let selectrandom = randomarraynumber();
    if ((!imagerenderarray.includes(selectrandom))){
      imagerenderarray.push(selectrandom);
    }
  }
  console.log(imagerenderarray);

  let choiceimage1 = imagerenderarray[3];
  let choiceimage2 = imagerenderarray[4];
  let choiceimage3 = imagerenderarray[5];

  imageone.src = productarray[choiceimage1].image;
  imageone.title = productarray[choiceimage1].name;
  imagetwo.src = productarray[choiceimage2].image;
  imagetwo.title = productarray[choiceimage2].name;
  imagethree.src = productarray[choiceimage3].image;
  imagethree.title = productarray[choiceimage3].name;

  productarray[choiceimage1].views++;
  productarray[choiceimage2].views++;
  productarray[choiceimage3].views++;

  imagerenderarray.shift();
  imagerenderarray.shift();
  imagerenderarray.shift();
  console.log(imagerenderarray);
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
      let oddduckcache = JSON.stringify(productarray);
      localStorage.setItem('stored_oddduck_array', oddduckcache);
    }
  }
}

function resultshandler(){
  voteresults.innerHTML = '';
  let totalvotes = 0;
  for (let i in productarray){
    totalvotes += productarray[i].votes;
  }

  if (votingrounds <= 0){
    let totalvotesprint = document.createElement('div');
    totalvotesprint.id = 'totalvotesprint';
    totalvotesprint.textContent = `Total Votes: ${totalvotes}`;
    voteresults.appendChild(totalvotesprint);
    for(let i = 0; i < productarray.length; i++){
      let odditem = document.createElement('li');
      odditem.textContent = `${productarray[i].name} - ${productarray[i].votes} votes, ${productarray[i].views} views`;
      voteresults.appendChild(odditem);
    }
    chartrender();
    // viewresults.removeEventListener('click', resultshandler);
  }
}

let surverychart = null;

function chartrender(){
  if (surverychart !== null){
    surverychart.destroy();
  }
  let oddducknames = [];
  let oddduckviews = [];
  let oddduckvotes = [];

  for(let i = 0; i < productarray.length; i++){
    oddducknames.push(productarray[i].name);
    oddduckviews.push(productarray[i].views);
    oddduckvotes.push(productarray[i].votes);
  }
  console.log(oddducknames);

  let chartObj = {
    type: 'bar',
    data: {
      labels: oddducknames,
      datasets: [{
        label: '# of Views',
        data: oddduckviews, // array that will hold the views
        borderWidth: 5,
        backgroundColor: 'red',
        borderColor: 'red'
      },
      {
        label: '# of Votes',
        data: oddduckvotes, // array that will hold the # of votes
        borderWidth: 5,
        backgroundColor: 'blue',
        borderColor: 'blue'
      }
      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 1,
          }
        }
      }
    }
  };

  surverychart = new Chart(ctx, chartObj);
}


//** Event Listener */

oddducks.addEventListener('click', votehandler);

viewresults.addEventListener('click', resultshandler);

let oddduckcache = JSON.parse(localStorage.getItem('stored_oddduck_array'));


//** Instantiations */

if (oddduckcache) {
  for(let i = 0; i < oddduckcache.length; i++){
    if (oddduckcache.name === 'sweep'){
      let reconstructedproductspecial = new OddDuckProducts(oddduckcache[i].name, 'png');
      reconstructedproductspecial.votes = oddduckcache[i].votes;
      reconstructedproductspecial.views = oddduckcache[i].views;
      productarray.push(reconstructedproductspecial);
    } else {
      let reconstructedproduct = new OddDuckProducts(oddduckcache[i].name);
      reconstructedproduct.votes = oddduckcache[i].votes;
      reconstructedproduct.views = oddduckcache[i].views;
      productarray.push(reconstructedproduct);
    }
  }
  // productarray = oddduckcache;
  console.log(productarray);

} else {

  let product1 = new OddDuckProducts('bag');
  let product2 = new OddDuckProducts('banana');
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

}

//** Function Call */

renderimages();


