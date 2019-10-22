
let balance = 319.20;
let pincode = 1234;
let userinput2;
let operation;


let userinput = parseInt(prompt("PIN-CODE"));
if(userinput==pincode)
{
    operation= prompt("1) ანგარიშის ნაშთი\n2) თანხის გამოტანა")

    switch(operation)
    {
        case '1' : alert(balance+"GEL "); break;
        case '2' :  userinput2=parseInt(prompt("შეიყვანეთ თანხა")); if(userinput2<balance){
        alert("ანგარიშზე დარჩა"+ (balance- userinput2));}
        else { alert("არასაკმარისი თანხა");}
     break;
   default: alert("wrong input");

    }
    

}



