let prices = [0, 5, 7, 5, 8];
let counts = [0, 0, 0, 0, 0];
let names = ["none", "Mac & cheese", "Pasta", "Taco", "Enchilada"];
let totalPrice = 0;

const update = (val, index) =>{
    counts[index] += val;
    if(counts[index] < 0){
        counts[index] = 0;
    }
    document.getElementById(`count${index}`).innerHTML = counts[index];

    totalPrice = 0;
    for(let i = 1; i < 5; i++){
        totalPrice += counts[i] * prices[i];
    }

    document.getElementById("total").innerHTML = totalPrice;
}

const clearAll = () => {
    console.log("clear");
    for(let i = 1; i < 5; i++){
        counts[i] = 0;
        document.getElementById(`count${i}`).innerHTML = counts[i];
    }
    totalPrice = 0;
    document.getElementById("total").innerHTML = totalPrice;
}

const placeOrder = () => {
    let s = "";
    for(let i = 1; i < 5; i ++){
        if(counts[i] > 0){
            s += counts[i] + " " + names[i] + " ";
        }
    }
    if(s === ""){
        s = "No items in cart";
    }
    alert(s);
    clearAll();
}