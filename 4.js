let money=document.querySelector(".amounts")
let lets=document.querySelector("#convert")
let result=document.querySelector(".res")
let input1=document.querySelector("#first")
let input2=document.querySelector(".second")
lets.addEventListener("click", () => {
    let a = input1.value;
    let b = input2.value;
    currency(a,b,money.value);


})


const refreshBtn = document.getElementById("btnRefresh");

function handleClick() {
  window.location.reload();
}

refreshBtn.addEventListener("click", handleClick);





function currency(p,q,r) {
    if (p === q) {
        if (q === "1") {
            result.textContent = r + " " + "Rupees";
        }
        else if (q === "2") {
            result.textContent = r + " " + "Euros";
        }
        else if (q === "3") {
            result.textContent = r + " " + "Dollars";
        }
        else if (q === "4") {
            result.textContent = r + " " + "Pounds";
        }
        else {
            result.textContent = r + " " + "Peso";
        }
        
    }
    else if (p ==="1" && q ==="2") {
        result.textContent = r * 0.011 + " " + "Euros";
    }
    else if (p ==="1" && q ==="3") {
        result.textContent = r * 0.012 + " " + "Dollars" ;
    }
    else if (p ==="1" && q ==="4") {
        result.textContent = r * 0.0095 + " " + "Pounds" ;
    }
    else if (p ==="1" && q ==="5") {
        result.textContent = r * 0.68 + " " + "Peso" ;
    }
    else if (p ==="2" && q ==="1") {
        result.textContent = r / 0.011 + " " + "Rupees" ;
    }
    else if (p ==="2" && q ==="3") {
        result.textContent = r * 1.08 + " " + "Dollars" ;
    }
    else if (p ==="2" && q ==="4") {
        result.textContent = r * 0.85 + " " + "Pounds" ;
    }
    else if (p ==="2" && q ==="5") {
        result.textContent = r * 61.05 + " " + "Peso" ;
    }
    else if (p ==="3" && q ==="1") {
        result.textContent = r / 0.012 + " " + "Rupees" ;
    }
    else if (p ==="3" && q ==="2") {
        result.textContent = r / 1.08 + " " + "Euros" ;
    }
    else if (p ==="3" && q ==="4") {
        result.textContent = r * 0.79 + " " + "Pounds" ;
    }
    else if (p ==="3" && q ==="5") {
        result.textContent = r * 56.33 + " " + "Peso" ;
    }
    else if (p ==="4" && q ==="1") {
        result.textContent = r / 0.0095 + " " + "Rupees" ;
    }
    else if (p ==="4" && q ==="2") {
        result.textContent = r / 0.85 + " " + "Euros" ;
    }
    else if (p ==="4" && q ==="3") {
        result.textContent = r / 0.79 + " " + "Dollars" ;
    }
    else if (p ==="4" && q ==="5") {
        result.textContent = r * 71.75 + " " + "Peso" ;
    }
    else if (p ==="5" && q ==="1") {
        result.textContent = r / 0.68 + " " + "Rupees" ;
    }
    else if (p ==="5" && q ==="2") {
        result.textContent = r / 61.05 + " " + "Euros" ;
    }
    else if (p ==="5" && q ==="3") {
        result.textContent = r / 56.33 + " " + "Dollars" ;
    }
    else {
        result.textContent = r / 71.75 + " " + "Pounds" ;
    }


}



