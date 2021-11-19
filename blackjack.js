// data to get started 
// console.log(true == true &&  false )
let startToendButton       = document.getElementById('start') ;
let selectedcard           = document.getElementById('selectedcard') ;
let totalNumber            = 0 ;
let total                  = document.getElementById('total');
let startToendMessage      = document.getElementById('message') ;

let randomPick             = Math.ceil(Math.random()*13) ; 
// alert('mssg'); make sure it work

function start(){
    
    startToendMessage.textContent = 'continue GAME BY PICKING NEW CARD' ;
    startToendButton.textContent = 'continue' ;
    
   let toaddoncards = selectedcard.textContent = 'CARD :' + randomPick ; 
   //toAddoncards is used at card function
    
    // shifting random pick to total number as sum(assume)
    totalNumber  = randomPick;
   
    console.log(` from start `+ totalNumber,randomPick); 
    total.textContent = 'TOTAL :' + totalNumber  ;

    // if(totalNumber  >  0){
        
    //     return true  ;      THIS CONDITION FAILS ,SO SEPARATED THIS AS FUNCTION
    // }


    
    // console.log(start());  ALERT  do not uncomment it because the function keep on calling....
}

// console.log(start())      TO CHECK wheather start function returning 'string' or not if you uncomment it . the value in card never get earsed

function _falseor(){
      
    if(totalNumber > 0){
        
        return true  ;
    }
}

function card(){

    //   _falseor = !start();
      if(_falseor()){

            // console.log(Boolean(start()))
            //   console.log(selectedcard);
   
            
            let  newcardPicked = randomCard();
            //  let addoncardPicked = ' ';
            totalNumber += newcardPicked;
            
            selectedcard.textContent = 'CARDS : '+randomPick + ', ' + newcardPicked;
        //   selectedcard.textContent += newcardPicked;
        // toaddoncards += newcardPicked;

          total.textContent = 'TOTAL : '+ totalNumber;
        //   console.log(newcardPicked, totalNumber);
          
           decideWinorLoss();
        }

        else {

            return alert('please start at StartBUTTON')
        }

}

function decideWinorLoss(){
          
         if(totalNumber === 21){
            startToendMessage.textContent = ' you win' ;
            

         }
          else if (totalNumber >21 ){
            startToendMessage.textContent = ' you lose ,please refresh page to start new game' ;
           
                  
         }
         else {

             startToendMessage.textContent = '  continue picking card ' ;

         }


}

function randomCard(){

     let random0= Math.ceil(Math.random()*13) ;
     console.log("rando before condition 1 ,11", random0);      
     console.log(random0 < 11 && 3 );
      if(random0 >= 12 ){
          return 10;
      }

      else if(random0 === 1 || 11 ){   // here i fucked with short circuit evalution
        //   let toreturn1_11 = Number(prompt('you got ACE card choose the value to be 1 or 11 '))

            return random0;

          
      }
    
     else return random0;


}
     
