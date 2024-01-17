let gameSequence= [];
let userSequence=[];
let btns = ["yellow" ,"purple" ,"red" ,"blue"];
let started = false;
 let level =0;
let h2 =document.querySelector("h2");
document.addEventListener("keypress" ,function () {    // step 1
 if(started== false) {
    console.log("game is started");
    started =true;
   levelUP();
 }
 
})

function gameFlash(btn) {
 btn.classList.add("flash")
setTimeout(function () {
    btn.classList.remove("flash")
 } , 25);
}


function userFlesh(btn) {
   btn.classList.add("userflesh")
  setTimeout(function () {
      btn.classList.remove("userflesh")
   } , 25);
  }







function  levelUP() {
   userSequence = [];
    level ++ ;
    h2.innerText= `level ${level}`;
    let randIdx = Math.floor(Math.random ()*3);
    let randColor = btns[randIdx];;
    let randbtn = document.querySelector(`.${randColor}`);  
   /*
    console.log(randIdx);
     console.log(randColor);
    console.log(randbtn)    ; */
    gameSequence.push(randColor);
    console.log(gameSequence)  ;                             //Random button flash
    gameFlash(randbtn);

}

function checkAns(idx) {
 
 // console.log("current level : ", level);
 
 if(userSequence[idx]=== gameSequence[idx]) {
    if(userSequence.length == gameSequence.length) {
     setTimeout(levelUP, 1000);
    }
}
   else{
      h2.innerHTML = `Game over! Your score was <b> ${level} </b> <br> please press any key to restart` ;
      reset();
      document.querySelector("body").style.backgroundColor= "red";
      setTimeout(() => {
        document.querySelector("body").style.backgroundColor = "white"; 
      }, 150);
   }
}





//
function btnPress() {
let btn = this;
userFlesh(btn);


userColor = btn.getAttribute("id");
userSequence.push(userColor);
checkAns(userSequence.length-1);
}


let allBtn = document.querySelectorAll(".btn");
for ( btn of allBtn) {
   btn.addEventListener("click" , btnPress);
}



// To takle the two arrays 


function reset() {
   gameSequence = [];
   userSequence = [];
   started = false;
   level =0;
}