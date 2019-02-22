let turn =true;
let player1={
  symbol:"x"
}
let player2={
  symbol:"o"
}

let move=(e,player)=>{
  
  e.target.value=player.symbol
  e.target.classList.add('test')
  
}

let square=document.querySelectorAll('.square');
  for(var i=0;i<square.length;i++){
    square[i].addEventListener('click',(e)=>{
    
     
      if(turn){
        move(e,player1)
        turn=false
     
    }
      else{
        move(e,player2)
        turn=true
     
    }
      checkWinner()
    
  })
  
}

function checkRows(first,second,third){
  
   if(first.value===second.value && second.value===third.value){
    let arr=[first,second,third]
    winner(arr)
  }
}

let checkWinner=()=>{
  let s1=document.getElementById('1')
  let s2=document.getElementById('2')
  let s3=document.getElementById('3')
  let s4=document.getElementById('4')
  let s5=document.getElementById('5')
  let s6=document.getElementById('6')
  let s7=document.getElementById('7')
  let s8=document.getElementById('8')
  let s9=document.getElementById('9')
  
  checkRows(s1,s2,s3)
  checkRows(s4,s5,s6)
  checkRows(s7,s8,s9)
  checkRows(s1,s4,s7)
  checkRows(s2,s5,s8)
  checkRows(s3,s6,s9)
  checkRows(s3,s5,s7)
  checkRows(s1,s5,s9)
  
    
 
    
  }
  
  
  
let winner=(arr)=>{
  
   for(var i=0;i<arr.length;i++){
      arr[i].classList.add('style');
     
  }
 

}


  
