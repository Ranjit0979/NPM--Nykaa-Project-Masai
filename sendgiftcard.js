var picdata=JSON.parse(localStorage.getItem("pic"));
var headingdata=JSON.parse(localStorage.getItem("heading"));
var topicdata=JSON.parse(localStorage.getItem("topic"));

var image=document.createElement("img");
image.setAttribute("src",picdata.pic);
image.style.width="100%";
document.querySelector("#imagediv").append(image);
document.querySelector("#heading").append(headingdata.heading);
document.querySelector("#quote").append(topicdata.topic);

// on clicking money section
var money1=document.querySelector("#money1").innerText;
document.querySelector("#insidepaisadiv1").addEventListener("click",function(){

    document.querySelector("#moneyfilling").value=money1;
    document.querySelector("#paisafilling").innerText=money1;
    var x= document.querySelector("#paisafilling").innerText;
    localStorage.setItem("money",JSON.stringify(x));
})

var money2=document.querySelector("#money2").innerText;
document.querySelector("#insidepaisadiv2").addEventListener("click",function(){

    document.querySelector("#moneyfilling").value=money2;
    document.querySelector("#paisafilling").innerText=money2;
    var x= document.querySelector("#paisafilling").innerText;
    localStorage.setItem("money",JSON.stringify(x));
})

var money3=document.querySelector("#money3").innerText;
document.querySelector("#insidepaisadiv3").addEventListener("click",function(){

    document.querySelector("#moneyfilling").value=money3;
    document.querySelector("#paisafilling").innerText=money3;
    var x= document.querySelector("#paisafilling").innerText;
    localStorage.setItem("money",JSON.stringify(x));
})

var money4=document.querySelector("#money4").innerText;
document.querySelector("#insidepaisadiv4").addEventListener("click",function(){

    document.querySelector("#moneyfilling").value=money4;
    document.querySelector("#paisafilling").innerText=money4;
    var x= document.querySelector("#paisafilling").innerText;
    localStorage.setItem("money",JSON.stringify(x));
})

// on typing something in money input 
// bug here 
document.querySelector("#moneyfilling").addEventListener("keyup",function(e){
    // document.querySelector("#moneyfilling").addEventListener("keydown",function(e){
        var bag=e.target.value;
        if(bag.length<=7)
        {
            if(e.key=="e" || e.key=="-" || e.key=="+")
            {
               e.preventDefault();
            }
            // else if()
        // })
       else{
    
        document.querySelector("#paisafilling").innerText=e.target.value;
        var x= document.querySelector("#paisafilling").innerText;
        localStorage.setItem("money",JSON.stringify(x));
       }
        }
        // else{
        //     e.preventDefault();
        // }
       
       
   
})

// on typing "To" section 
document.querySelector("#To").addEventListener("keyup",function(e){
    document.querySelector("#Receiver").innerText=e.target.value;
    localStorage.setItem("To",JSON.stringify(e.target.value));
})

 
// on typing "From" section 
document.querySelector("#From").addEventListener("keyup",function(e){
    document.querySelector("#Sender").innerText=e.target.value;
    localStorage.setItem("From",JSON.stringify(e.target.value));
})

