var picdata=JSON.parse(localStorage.getItem("pic"));
var headingdata=JSON.parse(localStorage.getItem("heading"));


var image=document.createElement("img");
image.setAttribute("src",picdata.pic);
image.style.width="100%";
document.querySelector("#imagediv").append(image);
document.querySelector("#heading").append(headingdata.heading);