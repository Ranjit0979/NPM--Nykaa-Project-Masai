var topSpan = [
  "Up To 30% Off",
  "Up To 30% Off",
  "Flat 25% Off",
  "Up To 30% Off",
];

var span = ["", "Buy 3 Get A Nykaa Kajal Free", "Upto 50% off", ""];

var imgs = [
  "https://images-static.nykaa.com/uploads/7fe74a55-d0fc-4a73-95ff-0c08dacf542a.jpg?tr=w-240,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/f06e37fb-eed2-491a-96af-c1c3dc9765c7.jpg?tr=w-240,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/0c7a45dd-b31b-4929-988d-bca0ea326159.jpg?tr=w-240,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/4359b619-267f-4fa1-8827-bd54dea3f453.jpg?tr=w-240,cm-pad_resize",
];

for (var i = 0; i < imgs.length; i++) {
  var box = document.createElement("div"); //big box
  var boxIn = document.createElement("div"); //insode box
  boxIn.setAttribute("class", "bigGridBox");
  var image = document.createElement("img"); // produc image
  image.setAttribute("src", imgs[i]);
  var spanBold = document.createElement("span"); // first text
  spanBold.style.fontWeight = "bold";
  spanBold.innerText = topSpan[i];
  var spanRegular = document.createElement("span"); // second text
  spanRegular.innerText = span[i];
  boxIn.append(image, spanBold, spanRegular);
  box.append(boxIn);
  document.querySelector("#houseOfNykaaBottomIn").append(box);
}
