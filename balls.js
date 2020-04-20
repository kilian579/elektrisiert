function addRandomBall(div_id, amount){
    var div = document.getElementById(div_id);

    for (var i=0; i<amount; i++){
        div.appendChild(makeRandomBall());
    }
    
}

function addDifferentBall(div_id, amount){
    var div = document.getElementById(div_id);
    //Füge einen Ball hinzu, der noch nicht existiert
    
}
function makeRandomBall(){
    var colors = ["red","green","purple","orange","yellow","blue","pink"];
    ball = document.createElement("a");
    ball.classList.add("btn-floating");
    ball.classList.add("btn-large");
    ball.classList.add("waves-effect");
    ball.classList.add("waves-light");
    ball.classList.add(colors[Math.floor(Math.random() * colors.length)]);
    ball.innerText=Math.floor(Math.random() * 100);
    

    return ball;
}