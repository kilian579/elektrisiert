function swapElements(div_id,a,b){
    div = document.getElementById(div_id);
    console.log(div.getElementsByTagName("a").length);
    ball_list = div.getElementsByTagName("a");
    //console.log(div.childNodes);
    div.insertBefore(ball_list[a],ball_list[b]);
    div.insertBefore(ball_list[b],ball_list[a]);
    //console.log(div.childNodes);
    
}

function sortThis(div_id){
    swapElements(div_id, 1,2);
}

function bubbleSort(div_id){
    var arr = document.getElementById(div_id).getElementsByTagName("a");
    var len = arr.length,
        i, j, stop;

    for (i=0; i < len; i++){
       swapElements(div_id,i,j);
       //Something seems wrong here :/
    }

    return arr;
}



function getInt(container){
    return parseInt(container.innerText);
}