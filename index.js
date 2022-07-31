//takes pickup location returns number of blocks from scuber hq on 42nd street 
let distanceFromHqInBlocks = (pickup) =>{
    if(pickup >= 42){
        return pickup - 42
    } else if(pickup<=42){
        return 42 - pickup
    }
}

function distanceFromHqInFeet(p){
    if(p >= 42){
        return (p -42) * 264
} else if(p<=42){
    return (42-p) * 264
}}

function distanceTravelledInFeet(x,y){
    if(x>y){
        return (x-y)*264
    }
    else if(x<y){
        return (y-x)*264
    }
}

function calculatesFarePrice(start, destination){
    if(destination-start<400){
        return 0
    }
     else if(2000>(destination-start)>400){
        return (destination-start)* .02
    }
    else if(2500>destination-start>2000){
        return 25
    }
    else{
        return 'cannot travel that far'
    }

    
}

