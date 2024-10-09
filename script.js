let pizzas = 0

let pizzasMultiple= 1

let shrooms = 0

let tomatos = 0

let cheese = 0

let anchoy = 0

let areMulpier = false

function addPizzaSlice(){pizzas = pizzas+1;
  document.getElementById("sliceOfPizza_count").innerHTML = pizzas;


}
function ShroomAddPizzaSlice(){pizzas = pizzas + (shrooms * pizzasMultiple);
  document.getElementById("sliceOfPizza_count").innerHTML = pizzas;


}
function addShroom(){shrooms = shrooms +1;
  if (areMulpier == false){
    areMulpier=true
    setInterval(function(){
      ShroomAddPizzaSlice()
  
  
     }, 1000)
     
    }
    document.getElementById("shroomCount").innerHTML = shrooms;
  }

 


   function tomatosAddPizzaSlice(){pizzas = pizzas + (tomatos * pizzasMultiple);
    document.getElementById("sliceOfPizza_count").innerHTML = pizzas;
  
  
  }

  function addTomatos(){tomatos = tomatos +1;
    if (areMulpier==false){areMulpier=true

      setInterval(function(){
        tomatosAddPizzaSlice()
    
    
       }, 1000)
       document.getElementById("tomatosCount").innerHTML = tomatos;
      }
      document.getElementById("tomatosCount").innerHTML = tomatos;
    }
   
     ////////////////////////
     

     function cheeseAddPizzaSlice(){pizzas = pizzas + (cheese * pizzasMultiple);
      document.getElementById("sliceOfPizza_count").innerHTML = pizzas;
    
    
    }
  
    function addCheese(){cheese = cheese +1;
      if (areMulpier==false){areMulpier=true
        setInterval(function(){
          cheeseAddPizzaSlice()
      
      
         }, 1000)
         
        }
        document.getElementById("cheeseCount").innerHTML = cheese;
      }
      


       ///////

       function anchoyAddPizzaSlice(){pizzas = pizzas + (anchoy * pizzasMultiple);
        document.getElementById("sliceOfPizza_count").innerHTML = pizzas;
      
      
      }
    
      function addAnchoy(){anchoy = anchoy +1;

        if (areMulpier==false){areMulpier=true
          setInterval(function(){
            anchoyAddPizzaSlice()
        
        
           }, 1000)
           
          
          }
          document.getElementById("anchoyCount").innerHTML = anchoy;
        }
        
     

   


   
