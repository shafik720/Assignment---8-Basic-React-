

function addToDb(id){
    let cycleCart = JSON.parse(localStorage.getItem('cycle-cart') || "{}");
    if(cycleCart[id]){
        cycleCart[id] = cycleCart[id] + 1 ;        
    }else{
        cycleCart[id] = 1 ;
    }
    localStorage.setItem('cycle-cart', JSON.stringify(cycleCart));
}

function getCartValue(){
    let cycleCart = JSON.parse(localStorage.getItem('cycle-cart') || "{}");
    return cycleCart;
}




export{
    addToDb,
    getCartValue
}