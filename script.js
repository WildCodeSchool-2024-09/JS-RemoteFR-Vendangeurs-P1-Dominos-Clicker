let pizzas = 0

let pizzasMultiple= 0.01

let shrooms = 0

let tomatos = 0

let cheese = 0

let anchoy = 0



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
    document.getElementById("sliceOfPizza_count").innerHTML = parseInt(pizzas);
  
  
  }

  function addTomatos(){tomatos = tomatos +1;


      setInterval(function(){
        tomatosAddPizzaSlice()
    
    
       }, 1000)
       document.getElementById("tomatosCount").innerHTML = tomatos;
      }
      
    
   
     ////////////////////////
     

     function cheeseAddPizzaSlice(){pizzas = pizzas + (cheese * pizzasMultiple);
      document.getElementById("sliceOfPizza_count").innerHTML = parseInt(pizzas);
    
    
    }
  
    function addCheese(){cheese = cheese +1;
      
        setInterval(function(){
          cheeseAddPizzaSlice()
      
      
         }, 1000)
         document.getElementById("cheeseCount").innerHTML = cheese;
        }
       
      


       ///////

       function anchoyAddPizzaSlice(){pizzas = pizzas + (anchoy * pizzasMultiple);
        document.getElementById("sliceOfPizza_count").innerHTML = parseInt(pizzas);
      
      
      }
    
      function addAnchoy(){anchoy = anchoy +1;
        setInterval(function(){
          anchoyAddPizzaSlice()
      
      
         }, 1000)
         document.getElementById("anchoyCount").innerHTML = anchoy;}
     

   


   
