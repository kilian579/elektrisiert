function addRandomBall(div_id){
    var div = document.getElementById(div_id);
    div.appendChild(makeRandomBall())


}

function makeRandomBall(){
    var colors = ["red","green","purple","orange","yellow","blue","pink"];
    ball = document.createElement("a");
    ball.classList.add("btn-floating");
    ball.classList.add("btn-large");
    ball.classList.add("waves-effect");
    ball.classList.add("waves-light");
    ball.classList.add(colors[Math.floor(Math.random() * colors.length)]);
    ball.innerText=Math.floor(Math.random() * 30);
    

    return ball;
}