var iconName = '';
var title = 'tic-tac-toe';
var isCross = false;
var winMessage = '';
var itemArray= new Array(9).fill('empty')
var fapen = '/';
var facircle = 'o';
var facross = 'x'

var box = document.getElementById('box');
box.innerHTML = '';

itemArray.forEach((val,i)=>{
	box.innerHTML+=`<div class="card box" onclick="handleClick(${i})">${val}</div>`
})

var empty = document.getElementById('empty')
var circle = document.getElementById('circle')
var cross = document.getElementById('cross')

var one = document.getElementById('one')
var two = document.getElementById('two')
 
 function handleClick(itemNumber){
 	//console.log(itemNumber)

    if(winMessage){
      var over = document.getElementById('over');
		var game = document.getElementById('game');
		over.innerHTML = winMessage
		if(itemArray[itemNumber]==='empty'){
			
			game.innerHTML = `click reload to play again`
			return;
		}
    }
	
    if(itemArray[itemNumber]==='empty'){
      itemArray[itemNumber] = isCross?'X':'O';
      box.children[itemNumber].textContent = itemArray[itemNumber]
      box.children[itemNumber].style.fontSize = "8rem"
      if(isCross){
      //console.log(one.textContent)
      	one.style.display = "block";
      	two.style.display = "none"
      }
      if(!isCross){
      	two.style.display = "block"
      	one.style.display = "none"
      }
      checkIsWinner();
      isCross = !isCross;
      //checkIsWinner();
         }else{
      alert('already filled')
    }
    
  }



function checkIsWinner(){
    if(itemArray[0]!=='empty'&&
    itemArray[0]===itemArray[1]&&
    itemArray[0]===itemArray[2]
    ){
      winMessage = `${itemArray[0]} won`
    }

    else if(itemArray[3]!=='empty'&&
    itemArray[3]===itemArray[4]&&
    itemArray[3]===itemArray[5]
    ){
      winMessage = `${itemArray[3]}  won`
    }
    
    else if(itemArray[6]!=='empty'&&
    itemArray[6]===itemArray[7]&&
    itemArray[6]===itemArray[8]
    ){
      winMessage = `${itemArray[6]} won`
    }
    else if(itemArray[0]!=='empty'&&
    itemArray[0]===itemArray[3]&&
    itemArray[0]===itemArray[6]
    ){
      winMessage = `${itemArray[0]} won`
    }
    else if(itemArray[1]!=='empty'&&
    itemArray[1]===itemArray[4]&&
    itemArray[1]===itemArray[7]
    ){
      winMessage = `${itemArray[1]} won`
    }
    else if(itemArray[2]!=='empty'&&
    itemArray[2]===itemArray[5]&&
    itemArray[2]===itemArray[8]
    ){
      winMessage = `${itemArray[2]} won`
    } 
    else if(itemArray[0]!=='empty'&&
    itemArray[0]===itemArray[4]&&
    itemArray[0]===itemArray[8]
    ){
      winMessage = `${itemArray[0]} won`
    }
    else if(itemArray[2]!=='empty'&&
    itemArray[2]===itemArray[4]&&
    itemArray[2]===itemArray[6]
    ){
      winMessage = `${itemArray[2]} won`
    }
    
  }
   function reloadGame(){

    winMessage = '';
    isCross = false;
    itemArray = new Array(9).fill('empty');
   window.location.reload();
  }







