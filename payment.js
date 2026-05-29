function payNow(){

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    if(!name || !email || !phone){
        alert("Please fill all fields");
        return;
    }

    var options = {
        "key": "YOUR_RAZORPAY_KEY_ID",
        "amount": 109800,
        "currency": "INR",
        "name": "My Website",
        "description": "Premium Plan Payment",

        "handler": function (response){
            document.getElementById("popup").style.display = "flex";
        },

        "prefill": {
            "name": name,
            "email": email,
            "contact": phone
        },

        "theme": {
            "color": "#667eea"
        }
    };

    var rzp1 = new Razorpay(options);
    rzp1.open();
}

function closePopup(){
    document.getElementById("popup").style.display = "none";
}