

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

function decreaseDb(id){
    let cycleCart = JSON.parse(localStorage.getItem('cycle-cart') || "{}");
    if(cycleCart[id]>0){
        cycleCart[id] = cycleCart[id] - 1;
    }else if(cycleCart[id] <=0){
        let prop = id;
        delete cycleCart[prop];
    }
    localStorage.setItem('cycle-cart', JSON.stringify(cycleCart));
}

function removeAll(){
    let cycleCart = JSON.parse(localStorage.getItem('cycle-cart') || "{}");
    localStorage.removeItem('cycle-cart');
}


export{
    addToDb,
    removeAll,
    decreaseDb,
    getCartValue
}