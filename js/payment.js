var picdata=JSON.parse(localStorage.getItem("pic"));
var headingdata=JSON.parse(localStorage.getItem("heading"));
var topicdata=JSON.parse(localStorage.getItem("topic"));

var image=document.createElement("img");
image.setAttribute("src",picdata.pic);
image.style.width="100%";
document.querySelector("#imagediv").append(image);
document.querySelector("#heading").append(headingdata.heading);
document.querySelector("#quote").append(topicdata.topic);

var money=JSON.parse(localStorage.getItem("money"));
document.querySelector("#paying").innerText=money;
document.querySelector("#paisafilling").innerText=money;

var To=JSON.parse(localStorage.getItem("To"));
document.querySelector("#Receiver").innerText=To;

var From=JSON.parse(localStorage.getItem("From"));
document.querySelector("#Sender").innerText=From;