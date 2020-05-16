// Code to remove the fees input textfield if it is a free event
document.getElementById("event-type-id").addEventListener('click',()=>{
    let chargeOption = document.getElementById("event-type-id").value;
    let feesInput = document.querySelectorAll(".event-charge");
    if(chargeOption === "Free") {
        feesInput.forEach((item)=> item.style.display = "none");
    }
    else{
        feesInput[0].style.display= "inline-block";
        feesInput[1].style.display= "inline-block";
    }
});