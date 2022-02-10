function compute()
{
    var principal = document.getElementById("principal").value;
    // alert user if value is not positive
    if (principal <=0) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var amount = principal*years*rate/100;
    var year = new Date().getFullYear()+parseInt(years);
    // show interest calculation result
    document.getElementById("result").innerHTML=
    "If you deposit \<mark\>"
    +principal+"\</mark\>,\<br\>at an interest rate of \<mark\>"+rate+
    "%\</mark\>\<br\>You will receive an amount of \<mark\>"+amount+
    "\</mark\>,\<br\>in the year <mark>"+year+"\</mark>\<br\>"
    

}
function updateRate() 
{
    // show rate value selected in range
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
        