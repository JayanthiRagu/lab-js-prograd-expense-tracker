function addTrans(){
    var key = document.getElementById("text").value;
    var value = document.getElementById("amount").value;
    localStorage.setItem(key,value);
    console.log("stored");
}
window.onload = (event) => {
    let values=[],balance=0,money_plus=0,money_minus=0;
    for(let i=0;i<localStorage.length;i++)
    {
        values[i]=localStorage.getItem(localStorage.key(i));
        var element = document.createElement("li");
        var list = document.getElementById("list");
        list.appendChild(element);
        if(values[i].charAt(0)=='+')
        {
            element.innerHTML=localStorage.key(i)+" "+values[i];
            element.className="plus";
            money_plus+=parseInt(values[i]);
        }
        else if(values[i].charAt(0)=='-')
        {
            element.innerHTML=localStorage.key(i)+" "+values[i];
            element.className="minus";
            money_minus+=parseInt(values[i]);
        }
        balance+=parseInt(values[i]);
        console.log(balance);
        

    }
    document.getElementById("balance").innerHTML="$"+balance;
    document.getElementById("money-plus").innerHTML="$"+money_plus;
    document.getElementById("money-minus").innerHTML="$"+money_minus;
  };
