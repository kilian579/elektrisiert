var clones = {}
var swappadoo = {"ball-list":[[1,2]]};
var interval = setInterval(swapLoop,0);



function swapLoop(){
    for (var div_id in swappadoo){
        if (swappadoo[div_id].length){
            balls = swappadoo[div_id].shift();
            a = balls[0];
            b = balls[1];

            //Todo: disable add balls button
            div = document.getElementById(div_id); 
            ball_list = div.getElementsByTagName("a");
            div.insertBefore(ball_list[a],ball_list[b]);
            div.insertBefore(ball_list[b],ball_list[a]);
        }
    }
}


function swapElements(div_id,a,b){
    if (div_id in clones){
        [clones[div_id][a], clones[div_id][b]] = [clones[div_id][b], clones[div_id][a]];
    }

    if (!(div_id in swappadoo)){
        swappadoo[div_id] = [];
    }  
    swappadoo[div_id].push([a,b]);
}

function sortThis(div_id){
    swapElements(div_id, 1,2);
}




function bubbleSort(div_id){
    cloneBallList(div_id);
    var arr = clones[div_id];
    var len = arr.length,
        i, j, stop;

    for (i=0; i < len; i++){
        for (j=0, stop=len-i; j+1 < stop; j++){
            if (parseInt(arr[j].innerText) > parseInt(arr[j+1].innerText)){
                //Sort Elements by Size
                swapElements(div_id,j,j+1);
            }else if(parseInt(arr[j].innerText) == parseInt(arr[j+1].innerText)){
                //Sort Equal Elements by color
                j_classList = arr[j].classList
                j1_classList = arr[j+1].classList

                if (j_classList[j_classList.length - 1].localeCompare(j1_classList[j1_classList.length-1]) > 0){
                    swapElements(div_id,j,j+1);
                }
            }
        }

    }
}


function swapSort(div_id){
    return 0; //Auskommentieren und sterben!
    cloneBallList(div_id);
    var arr = clones[div_id];
    var len = arr.length;

    var i = 0;
    while (1){
        //Zähle die Elemente kleiner arr[i]
        var m = countSmallerThan(arr,parseInt(arr[i].innerText));
        //Ist i größer als m? oder haben die Einträge den gleichen Wert?
        if(i==m){
           //Erhöhe i um 1
        } else{
            //Tausche arr[i] an seine richtige Position
        }
        //Stop! Sobald das letzte Element betrachtet wurde
        if (i==len-1){
            //Stoppe die Schleife. Bitte!!
        }
    }

    
}

function countSmallerThan(arr, x){
    //Amount of Entries in arr that are smaller than x
    var count = 0;
    for (i=0; i<arr.length; i++){
        if(parseInt(arr[i].innerText)<x){
            count++;
        }
    }
    return count;
}


function getInt(container){
    return parseInt(container.innerText);
}

function cloneBallList(div_id){
    clones[div_id] = {}
    real_arr = document.getElementById(div_id).getElementsByTagName("a");
    for (x in real_arr){
        clones[div_id][x] = real_arr[x];
    }
}