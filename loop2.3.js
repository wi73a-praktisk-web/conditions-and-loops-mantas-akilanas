/*
var numre = [5,7,8,10,12,15,28,60,50,30];

numre.forEach(function(tal,index){
    if(tal < numre[index+1]){
        console.log(tal + " er laver end " + numre[index+1])
    }
    else{
        console.log(tal + " er højere end " + numre[index+1])
    }
});
*/
var numre = [5,7,8,10,12,15,28,60,50,30];
numre.forEach(function(tal,index){
    if (numre[index+1] != undefined){
        if(tal < numre[index+1]){
            console.log(tal + " er laver end " + numre[index+1])
        }
        else{
            console.log(tal + " er højere end " + numre[index+1])
        }
    }
    else{
    console.log(tal + " er den sisdste tal");
    }
})