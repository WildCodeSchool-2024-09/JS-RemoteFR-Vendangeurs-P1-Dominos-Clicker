let pizzas = 0

let pizzasMultiple= 0.01

let shrooms = 0

let tomatos = 0

let bellPepper = 0

let olive = 0

let compteur = 0


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


function addPizzaSlice(){pizzas = pizzas+1;
  document.getElementById("sliceOfPizza_count").innerHTML = parseInt(pizzas);
  
  
}
function ShroomAddPizzaSlice(){pizzas = pizzas + (shrooms * pizzasMultiple);
  document.getElementById("sliceOfPizza_count").innerHTML = parseInt(pizzas);


}
function addShroom(){shrooms = shrooms +1;
 
    setInterval(function(){
      ShroomAddPizzaSlice()
     
  
     }, 1000)
     document.getElementById("shroomCount").innerHTML = shrooms;
     
    }
    
  

 


   function tomatosAddPizzaSlice(){pizzas = pizzas + (tomatos * pizzasMultiple);
    document.getElementById("sliceOfPizza_count").innerHTML = parseInt(pizzas );
  
  
  }

  function addTomatos(){tomatos = tomatos +1;


      setInterval(function(){
        tomatosAddPizzaSlice()
    
    
       }, 1000)
       document.getElementById("tomatosCount").innerHTML = tomatos;
      }
      
    
   
     ////////////////////////
     

     function bellPepperAddPizzaSlice(){pizzas = pizzas + (bellPepper * pizzasMultiple);
      document.getElementById("sliceOfPizza_count").innerHTML = parseInt(pizzas);
    
    
    }
  
    function addBellPepper(){bellPepper = bellPepper +1;
      
        setInterval(function(){
          bellPepperAddPizzaSlice()
      
      
         }, 1000)
         document.getElementById("bellPepperCount").innerHTML = bellPepper;
        }
       
      


       ///////

       function oliveAddPizzaSlice(){pizzas = pizzas + (olive * pizzasMultiple);
        document.getElementById("sliceOfPizza_count").innerHTML = parseInt(pizzas);
      
      
      }
    
      function addOlive(){olive = olive +1;
        setInterval(function(){
          oliveAddPizzaSlice()
      
      
         }, 1000)
         document.getElementById("oliveCount").innerHTML = olive;}
     

      function pizzaClick(){

        compteur= compteur +1;
        if(compteur >= images.length){
          compteur = 0;
        } 
        let image = document.getElementById ("pizza_img");
        image.src=images[compteur];

         }


   
