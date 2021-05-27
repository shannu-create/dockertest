var p1button = document.querySelector("#p1");
var p2button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
var p1score = document.querySelector("#p1display");
var p2score = document.querySelector("#p2display");
var numInput = document.querySelector("#inp");
var winningScoreDisplay1 = document.querySelector("#winningScoreDisplay");
var score1=0;
var score2=0;
var targetScore=5;
var gameOver =false;
p1button.addEventListener("click",function(){
  if (!gameOver){
  score1 +=1;
  if (score1===targetScore){
    p1score.classList.add("winner");
    alert("You win");
    gameOver = true;
}
  p1score.textContent=score1;
}
});

p2button.addEventListener("click",function(){
  if (!gameOver){
  score2 +=1;
  if (score2===targetScore){
    p2score.classList.add("winner");
    alert("You win");
    gameOver = true;
}
  p2score.textContent=score2;
}
});

resetButton.addEventListener("click",function(){
score1=0;
score2=0;
p1score.textContent=0;
p2score.textContent=0;
p1score.classList.remove("winner");
p2score.classList.remove("winner");
gameOver=false;
});

numInput.addEventListener("change", function(){
winningScoreDisplay1.textContent=this.value;
targetScore = Number(this.value);

}
);
