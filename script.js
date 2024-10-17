let pizzas = 0

let pizzasShroomMultiple= 0.01

let pizzasTomatoeMultiple= 0.5

let pizzasBellPepperMultiple = 1

let pizzasOliveMultiple = 2

let shrooms = 0

let tomatos = 0

let bellPepper = 0

let olive = 0

let compteur = 0

let costOfShroom = 10

let costOfTomatoe = 20

let costOfBellPepper = 50

let costOfOlive = 100

let images = [
"./public/pizza.png", //Image par default
"./public/pizza1.png",
"./public/pizza2.png",
"./public/pizza3.png",
"./public/pizza4.png",
"./public/pizza5.png",
"./public/pizza6.png",
"./public/pizza7.png"
];

////////////////////////////////////////////////////////////////////////
// Maxence 
// function addPizzaSlice(){
//   pizzas = pizzas+1;
//   document.getElementById("sliceOfPizza_count").innerHTML = parseInt(pizzas);
// }
// Vincent 
// function pizzaClick(){
//   compteur= compteur +1;
//     if(compteur >= images.length){
//       compteur = 0;
//     } 
//   let image = document.getElementById ("pizza_img");
//   image.src=images[compteur];
// }

function pizzaClick(){
  compteur= compteur +1;
  pizzas = pizzas+1;
  document.getElementById("sliceOfPizza_count").innerHTML = parseInt(pizzas);
    if(compteur >= images.length){
      compteur = 0;
    } 
  let image = document.getElementById ("pizza_img");
  image.src=images[compteur];
}


////////////////////////////////////////////////////////////////////////

function ShroomAddPizzaSlice(){
  pizzas = pizzas + (shrooms * pizzasShroomMultiple);
  document.getElementById("sliceOfPizza_count").innerHTML = parseInt(pizzas);
}

function addShroom() {if (pizzas >= costOfShroom){
  shrooms = shrooms +1;
    setInterval(function(){
      ShroomAddPizzaSlice()
}, 1000)
  document.getElementById("shroomCount").innerHTML = shrooms;
  document.getElementById("shroomCount1").innerHTML = shrooms;
  pizzas -= costOfShroom;
}}

//////////////

function tomatosAddPizzaSlice(){
  pizzas = pizzas + (tomatos * pizzasTomatoeMultiple);
  document.getElementById("sliceOfPizza_count").innerHTML = parseInt(pizzas);
}

function addTomatos(){if( pizzas >= costOfTomatoe){ 
  tomatos = tomatos +1;
    setInterval(function(){
      tomatosAddPizzaSlice()
    }, 1000)
  document.getElementById("tomatosCount").innerHTML = tomatos;
  document.getElementById("tomatosCount1").innerHTML = tomatos;
  pizzas -= costOfTomatoe;
}}
    
////////////////////////////////////////////////////////////////////////
    
function bellPepperAddPizzaSlice(){
  pizzas = pizzas + (bellPepper * pizzasBellPepperMultiple);
  document.getElementById("sliceOfPizza_count").innerHTML = parseInt(pizzas);
}

function addBellPepper(){if (pizzas >= costOfBellPepper){
  bellPepper = bellPepper +1;
    setInterval(function(){
      bellPepperAddPizzaSlice()
    }, 1000)
    document.getElementById("bellPepperCount").innerHTML = bellPepper;
    document.getElementById("bellPepperCount1").innerHTML = bellPepper;
    
  
  pizzas -= costOfBellPepper
}}
      
    
////////////////////////////////////////////////////////////////////////


function oliveAddPizzaSlice(){
  pizzas = pizzas + (olive * pizzasOliveMultiple);
  document.getElementById("sliceOfPizza_count").innerHTML = parseInt(pizzas);
}

function addOlive(){if (pizzas >= costOfOlive){
  olive = olive +1;
    setInterval(function(){
  oliveAddPizzaSlice()


      }, 1000)
      document.getElementById("oliveCount").innerHTML = olive;
      document.getElementById("oliveCount1").innerHTML = olive;
      pizzas -= costOfOlive;
}}

///////////////////////FENETRE MODAL ONCLICK///////////////////////

// const openModalShopBtn = document.querySelector("#openModalShopBtn");
// const modalShop = document.querySelector("#modalShop");
// const closeModalShopBtn = document.querySelector("#closeModalShopBtn");
// const pizza_img = document.querySelector("#pizza_img");


///////////////MODALE PIZZA//////////////

ModalPizzaBtn.addEventListener("click" , () => {
  modalShop.className = "modalHidden";
  modalStats.className = "modalHidden";
  modalMisc.className = "modalHidden";
})


///////////////MODALE SHOP//////////////
openModalShopBtn.addEventListener("click" , () => {
  modalShop.className = "modal";
})

closeModalShopBtn.addEventListener("click" , () => {
  modalShop.className = "modalHidden";
})

///////////////MODALE STATS//////////////
openModalStatsBtn.addEventListener("click" , () => {
  modalStats.className = "modal";
})

closeModalStatsBtn.addEventListener("click" , () => {
  modalStats.className = "modalHidden";
})

///////////////MODALE MISC//////////////
openModalMiscBtn.addEventListener("click" , () => {
  modalMisc.className = "modal";
})

closeModalMiscBtn.addEventListener("click" , () => {
  modalMisc.className = "modalHidden";
})

