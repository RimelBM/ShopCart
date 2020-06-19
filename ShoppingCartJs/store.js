
function Welcome(){
    alert("WELCOME .. RImEL") ;
}


/*  declarer array of remove buttons */
var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i];
        button.addEventListener('click', removeCartItem);
    }


//declarer array of heart 
var heartButtons = document.getElementsByClassName("fas")
    for (var i = 0; i < heartButtons.length; i++) {
        var button = heartButtons[i];
        
        button.addEventListener('click', heart);
    }


//declarer array of minus buttons


var minudButtons = document.getElementsByClassName('minus-btn')
    for (var i = 0; i < minudButtons.length; i++) {
        var button = minudButtons[i];
        button.addEventListener('click', minus);
    }


//declarer array of plus buttons


var plusButtons = document.getElementsByClassName('plus-btn')
    for (var i = 0; i < plusButtons.length; i++) {
        var button = plusButtons[i];
        button.addEventListener('click', plus);
    }

    /*-----------------------------functions ---------------------------------------------*/

//function delete
    function removeCartItem(event) {
        var buttonClicked = event.target;
        buttonClicked.parentElement.parentElement.remove();
        Total();
       
    }
    


//function heart
function heart(event) {
    
    var buttonClicked = event.target;
  
    buttonClicked.style.color = "red" ; 

   
}




// function minus
    function minus(event)
    {
        var buttonMinus = event.target;
        var x = buttonMinus.parentElement.children[1].innerHTML ;
        var y = Number(x);
        if(x > 1)
        {
            
        
        buttonMinus.parentElement.children[1].innerHTML =(y-1) ;
        }
        var prixOnePiece = buttonMinus.parentElement.parentElement.children[4].innerHTML ; 
        var z = Number(prixOnePiece)
        if(z <= 50)
        {
         z = 50 ;
        }
        else{
        buttonMinus.parentElement.parentElement.children[4].innerHTML = (z-50) ;
        }
        Total();
    }



// function plus
    function plus(event)
    {
       

        var buttonPlus = event.target;
        var x = buttonPlus.parentElement.children[1].innerHTML ;
        var y = Number(x);
        if(x <= 10 )
        {
            
        buttonPlus.parentElement.children[1].innerHTML =(y+1) ;
        }
        else {
            alert("you depassed stock");
        }
          var prixOnePiece = buttonPlus.parentElement.parentElement.children[4].innerHTML ; 
          var z = Number(prixOnePiece);
          if (z >= 550)
          {
              Z=550;
          }
          else{
          buttonPlus.parentElement.parentElement.children[4].innerHTML =((y+1)*50) ;
          }
          Total();
    }


    //Total Prix
   function Total (){
    var total = 0 ; 
    
    prix = document.getElementsByClassName('total-price')
    for(var i=0 ; i<prix.length;i++)
    {
        var price = prix[i].innerHTML ;
        price = Number(price) ;
        total += price ;  

    }
    

    document.getElementById("Total").innerHTML = total ;
}
