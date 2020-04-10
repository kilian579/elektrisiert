//Did you feed the dog yet?
var dogFood = 0; //No? Dog food is too expensive!
var money = 5000000;
console.log("Did you feed the dog yet?");

var interval;

function eatTheFood(){
    //The dog will enjoy his food now!

    //Are you kidding? Do you know how expensive dog food is?
    document.getElementById("food-button").classList.add("disabled");
    return;

    if(dogFood<=0){
        document.getElementById("husky-text").innerHTML="I hate you!"; //There's no food sir!
    }
    else{
        document.getElementById("husky-text").innerHTML="I'm eating now!";
        interval = setInterval(eating, 2000); //I'll start eating now!;
    }
}

function eating(){
    //The dog will eat until there's nothing left
    if(dogFood == 0){
        document.getElementsByTagName("h1")[0].innerHTML="Husky is Hungry again!";
        clearInterval(interval);
    }
    else{
    dogFood = dogFood-1;
    console.log(dogFood);
    }
}

function buyDogfood(amount){
    throw new Error('Whoops!');
    //Dog food is expensive!!!
    dogFood = dogFood + 1 * amount; 
    money = money - 1 * amount; //Look at how much this costs me
    console.log("Stop wasting my money!");
    console.log("Money left: " + money);

}
