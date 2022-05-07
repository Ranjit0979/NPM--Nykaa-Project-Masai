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
document.querySelector("#money1").addEventListener("click",function(){

    localStorage.setItem("money",money1);
    window.location.reload();
})


var money2=document.querySelector("#money2").innerText;
document.querySelector("#money2").addEventListener("click",function(){

    localStorage.setItem("money",money2);
    window.location.reload();
})


var money3=document.querySelector("#money3").innerText;
document.querySelector("#money3").addEventListener("click",function(){

    localStorage.setItem("money",money3);
    window.location.reload();
})


var money4=document.querySelector("#money4").innerText;
document.querySelector("#money4").addEventListener("click",function(){

    localStorage.setItem("money",money4);
    window.location.reload();
})
document.querySelector("#moneyfilling").value=localStorage.getItem("money");
