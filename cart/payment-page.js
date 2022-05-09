var loginData=localStorage.getItem("login")||null;
if(loginData!=null)
{   //this is for showing the login details in navbar
    document.querySelector("#login").innerText=loginData;
}




    //this function will show the card payment method by default when user gets to the payment page
    displayCard();
    function displayCard(){

        document.querySelector("#cardDetails").innerHTML="";
        
       var head=document.createElement("h3");
       head.innerText="Credit/Debit Card";
       
       var cardNumber=document.createElement("input");
       cardNumber.setAttribute("id","cardNumber");
       cardNumber.setAttribute("placeholder","Card Number");
       cardNumber.setAttribute("type","number");

       var mainDiv=document.createElement("div");
       mainDiv.setAttribute("id","main");

       var subDiv=document.createElement("div");

       var expiry=document.createElement("p");
       expiry.innerText="expiry";

       var div1=document.createElement("div");
       div1.setAttribute("id","expiry");

       var i1=document.createElement("input");
       i1.setAttribute("id","month");
       i1.setAttribute("placeholder","MM");

       var span=document.createElement("span");
       span.innerText="/";

       var i2=document.createElement("input");
       i2.setAttribute("id","year");
       i2.setAttribute("placeholder","YY");

       var i3=document.createElement("input");
       i3.setAttribute("id","cvv");
       i3.setAttribute("placeholder","CVV");

       div1.append(i1,span,i2,i3);
       subDiv.append(expiry,div1);

       var div2=document.createElement("div");
       div2.setAttribute("id","note");

       var image=document.createElement("img");
       image.setAttribute("src","https://www.nykaa.com/assets/desktop/images/checkout/bank-card-back-side.png");

       var p1=document.createElement("p");
       p1.innerText="last 3 digits at the back of the card"

       div2.append(image,p1);

       mainDiv.append(subDiv,div2);

       var div3=document.createElement("div");
       
       var btn1=document.createElement("button");
       btn1.setAttribute("id","default");

       var p2=document.createElement("p");
       p2.innerText="save this card for future"

       div3.append(btn1,p2);
       
       //this is final paying button in creadit/debit card block
       var btn2=document.createElement("button");
       btn2.setAttribute("id","pay");

       document.querySelector("#cardDetails").append(head,cardNumber,mainDiv,div3,btn2);  

       //this will show the total grand amount to be paid in pay button
       document.querySelector("#pay").innerText="Pay ₹"+grandTotal+"Now  >";
       
       document.querySelector("#payment-method>button").style.color="#fc2779";
 
       document.querySelector("#payment-method>button").style.borderRight="1px #fc2779 solid";

    }

    

    //this will store the data of products present in localStorage of myCartData
    var cartProducts = JSON.parse(localStorage.getItem("myCartData")) || [];

    //this is for showing total no of items in our cart
    document.querySelector("#totalProducts>p").innerText =
    cartProducts.length + "Items in your Bag";
    document.querySelector("#totalProducts>p").style.marginLeft = "10px";
   
   //this is for showing total prices and charges,offers and gift cards applied
    var subTotal=localStorage.getItem("subTotal");
    document.querySelector("#subTotal").innerText = "₹" + localStorage.getItem("subTotal");

    var shippingCharge=localStorage.getItem("shippingCharge");
    if(shippingCharge==0)
    {
        document.querySelector("#shipCharge").innerText = "free";
    }
    else
    {
        document.querySelector("#shipCharge").innerText = "₹"+shippingCharge;
    }

    var discountPoints=localStorage.getItem("discPrice");
    document.querySelector("#discount").innerText = "₹"+localStorage.getItem("discPrice");
    
    
    var grandTotal=localStorage.getItem("grandTotal");

    //this is for showing the total grand value in its div
    document.querySelector("#grandTotal").innerText = "₹" + localStorage.getItem("grandTotal");





    //this is for checking if discount points are applied or not
    var count = localStorage.getItem("dis") || 0;
    localStorage.setItem("dis", count);
    function discountPrices() {
     count++;
    if (count % 2 != 0) {
    discountPoints = 20;
    document.querySelector("#discount").innerText = discountPoints;
    localStorage.setItem("discPrice",discountPoints)
    grandTotal = subTotal - shippingCharge - discountPoints;
    localStorage.setItem("grandTotal",grandTotal);
    document.querySelector("#grandTotal").innerText = "₹" + grandTotal;
    document.querySelector("#pay").innerText="Pay ₹"+grandTotal+"Now  >";

    }
     else {
    count = 0;

     discountPoints = 0;
     document.querySelector("#discount").innerText = discountPoints;
     localStorage.setItem("discPrice",discountPoints)
    grandTotal = subTotal - shippingCharge - discountPoints;
    document.querySelector("#grandTotal").innerText = "₹" + grandTotal;
    localStorage.setItem("grandTotal",grandTotal);
    document.querySelector("#pay").innerText="Pay ₹"+grandTotal+"Now  >";
  
    }

    }

    //this is for showing the text in pay button
    document.querySelector("#pay").innerText="Pay ₹"+grandTotal+"Now  >";

    //this will get the address from local storage with key finalAddress
    var finalAddress=JSON.parse(localStorage.getItem("finalAddress"))||[];

    //this function will show the address stored in local storage finalAddress and display it in box
    
    finalAddress.forEach(function(ele) {
        document.querySelector("#userName").innerText=ele.name;
        document.querySelector("#completeAddress").innerText=ele.address+"-"+ele.pin+" "+ele.country;
        document.querySelector("#completeAddress+h4").innerText="+91"+ele.number;

        document.querySelector("#selectedAdd").innerText=ele.address+"-"+ele.pin+" "+ele.country;
    });



    //dummy credit/debit card info
    var credit={
        cardNum:123412341234,
        expMonth:12,
        expYear:23,
        cvv:777
    };

    //this for adding event to pay button of credit/debit card section 
    document.querySelector("#pay").addEventListener("click",payMoney);

    //this function checks the cardData entered by user is correct or not if yes then it will place order successfully
    function payMoney(){
        var debitCardNumber=document.querySelector("#cardNumber").value;

        var expiryMonth=document.querySelector("#month").value;

        var expiryYear=document.querySelector("#year").value;

        var cardCvv=document.querySelector("#cvv").value;

        if(debitCardNumber==credit.cardNum && expiryMonth==credit.expMonth && expiryYear==credit.expYear && cardCvv==credit.cvv)
        {
            alert("your order is placed successfully");
        }
        else
        {
            alert("wrong card details");
        }
    }


    //this is for adding event onClick to each and every button in selected query
    var buttons=document.querySelectorAll("#payment-method>button");
    buttons.forEach(function(ele){
        ele.addEventListener("click",selectButton);
    })


    //this function is for changing the color of text and borderRight of targeted button in payment-method
    function selectButton(){
        
        buttons.forEach(function(ele){
        ele.style.color="black";
        ele.style.borderRight="0";
        })
        event.target.style.color="#fc2779";
        event.target.style.borderRight="1px #fc2779 solid";
    }

    //this is for getting Credit/debit card layout on clicking cod option
    document.querySelector("#credit").addEventListener("click",function(){
        displayCard();
    })


   //this is for getting COD layout on clicking cod option
    document.querySelector("#cod").addEventListener("click",displayData);

    function displayData(){
        document.querySelector("#cardDetails").innerHTML="";

        var head=document.createElement("h3");
        head.innerText="CASH ON DELIEVERY";

        var btn=document.createElement("button");
        btn.setAttribute("id","pay");
        btn.innerText="Pay ₹"+grandTotal+"By Cash  >";
        btn.style.textAlign="center";
        btn.addEventListener("click",function(){
            alert("Order placed successfully");
        })

        document.querySelector("#cardDetails").append(head,btn);

    }


    //this is for showing the gift card layout on clicking gift card option

    document.querySelector("#gift").addEventListener("click",displayGift);

    function displayGift(){
    document.querySelector("#cardDetails").innerHTML="";
    

    var head=document.createElement("h3");
    head.innerText="Redeem Gift Card";

    var div1=document.createElement("div");
    div1.setAttribute("id","giftDiv")


    var giftCardNumber=document.createElement("input");
    giftCardNumber.setAttribute("id","giftCardNo");
    giftCardNumber.setAttribute("placeholder","Gift Card Number");

    var giftPin=document.createElement("input");
    giftPin.setAttribute("id","giftPin");
    giftPin.setAttribute("placeholder","PIN");
    giftPin.setAttribute("type","number");
    div1.append(giftCardNumber,giftPin);

    var btn=document.createElement("button");
    btn.setAttribute("id","pay");
    btn.innerText="Submit";
    btn.style.textAlign="center";
    btn.addEventListener("click",function(){

        var giftNo=document.querySelector("#giftCardNo").value;
        var giftpin=document.querySelector("#giftPin").value;
    
        if(giftNo==1234 && giftpin==7)
        {
        alert("Order placed successfully");
        }
    })

    document.querySelector("#cardDetails").append(head,div1,btn);

}







    

