var i = Math.floor((Math.random()*6)+1);
var j = Math.floor((Math.random()*6)+1);

if(i>j){
    document.querySelector("h1").innerHTML = "🚩Player 1 wins!"
}
else if (i<j) {
    document.querySelector("h1").innerHTML = "Player 2 wins!🚩"
} 
else {
    document.querySelector("h1").innerHTML = "Draw!"
}

document.querySelector(".img1").setAttribute("src","./images/dice"+ i +".png");
document.querySelector(".img2").setAttribute("src", "./images/dice"+ j +".png");;
