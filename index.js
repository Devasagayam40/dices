
var val=Math.floor ( Math.random() * 6)+1;
var alterImg="images/dice"+val+".png";
document.querySelectorAll("img")[0].setAttribute("src", alterImg);

var value=Math.floor ( Math.random() * 6)+1;
var alterIm="images/dice"+value+".png";
document.querySelectorAll("img")[1].setAttribute("src", alterIm);

if(val>value){
  document.querySelector("h1").innerHTML = " 🚩player 1 won";
  }
else if (value>val)
 {
    document.querySelector("h1").innerHTML = " player 2 won 🚩";
 }
else {
    document.querySelectorAll("h1").innerHTML = "draw";
}
