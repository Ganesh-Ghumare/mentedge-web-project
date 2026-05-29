let quantities = [1, 1];
let prices = [4999, 8999];

let couponDiscount = 0;
let appliedCoupon = "";

// UPDATE TOTALS
function updateTotals() {

    let subtotal = 0;

    for(let i = 0; i < quantities.length; i++){

        let total = quantities[i] * prices[i];

        document.getElementById(`qty${i}`).innerText = quantities[i];

        document.getElementById(`total${i}`).innerText = `₹${total}`;

        subtotal += total;
    }

    // EXTRA DISCOUNT LOGIC
    let autoDiscount = 0;

    if(subtotal >= 15000){
        autoDiscount = 3000;
    }
    else if(subtotal >= 10000){
        autoDiscount = 2000;
    }
    else if(subtotal >= 5000){
        autoDiscount = 1000;
    }

    // TOTAL DISCOUNT
    let totalDiscount = autoDiscount + couponDiscount;

    let grandTotal = subtotal - totalDiscount;

    if(grandTotal < 0){
        grandTotal = 0;
    }

    // UPDATE UI
    document.getElementById("subtotal").innerText = `₹${subtotal}`;

    document.getElementById("discountAmount").innerText = `− ₹${totalDiscount}`;

    document.getElementById("grandTotal").innerText = `₹${grandTotal}`;

    document.getElementById("saveText").innerText =
        `You will save ₹${totalDiscount} on this order`;
}

// INCREASE QTY
function increaseQty(index){

    quantities[index]++;

    updateTotals();
}

// DECREASE QTY
function decreaseQty(index){

    if(quantities[index] > 1){

        quantities[index]--;

        updateTotals();
    }
}

// APPLY COUPON
function applyCoupon(){

    let couponInput = document
        .getElementById("couponInput")
        .value
        .trim()
        .toUpperCase();

    couponDiscount = 0;

    if(couponInput === "LUXE500"){
        couponDiscount = 500;
        appliedCoupon = couponInput;
        alert("Coupon Applied Successfully!");
    }
    else if(couponInput === "MEGA1000"){
        couponDiscount = 1000;
        appliedCoupon = couponInput;
        alert("Mega Coupon Applied!");
    }
    else{
        appliedCoupon = "";
        alert("Invalid Coupon Code");
    }

    updateTotals();
}

// INITIAL LOAD
updateTotals();

function goToPayment(){

    // Get total amount
    let total = document.getElementById("grandTotal").innerText;

    // Remove ₹ symbol
    total = total.replace("₹","").trim();

    // Save total
    localStorage.setItem("cartAmount", total);

    // Redirect to payment page
    window.location.href = "payment5.html";

}