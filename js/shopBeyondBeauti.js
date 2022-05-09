var topSpan = [
  "Flat 15% Off",
  "Up To 50% Off",
  "Upto 50% off",
  "Up To 80% Off",
  "Up To 65% Off",
  "Up To 60% Off",
  "Upto 60% off",
  "Up To 70% Off",
];
var span = [
  "Up To 35% Off",
  "Free Gifts On Purchase",
  "Buy Worth ₹1499 Get Flat ₹150 Off",
  "Up To 65% Off",
  "Extra 5% Off On Rs.1499",
  "Buy 2 get extra 5% off",
  "Extra 10% Off On Rs.999",
  "Exciting Offers!",
];

var imgs = [
    "https://images-static.nykaa.com/uploads/2d4ff2a0-ad9f-4ceb-8298-b6a049a95a86.jpg?tr=w-240,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/76ad3979-6951-4e5c-ac46-8842d97fd71a.jpg?tr=w-240,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/5028458e-b0cb-4561-8025-b347932d2eda.jpg?tr=w-240,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/5267f091-2e97-4da0-884c-94acfe735b7c.jpg?tr=w-240,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/9287d4fd-e3c8-49bc-95d6-8acbd50278a9.jpg?tr=w-240,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/28bee40d-1151-40f6-9414-cf73d72a51cd.jpg?tr=w-240,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/dbc1616e-8788-41df-a3f0-0b832a9bacf5.jpg?tr=w-240,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/c5c85232-cb48-4d10-b96e-6b823c12ded1.jpg?tr=w-240,cm-pad_resize",
];

// var overFLow = [
//   "Up To 50% Off",
//   "Up To 50% Off",
//   "On ₹2500: Free Lipstick",
//   "Up To 50% Off",
//   "Up To 40% Off",
//   "Buy 2 Get 1 Free",
//   "Buy 2 Get 1 Free",
//   "Up To 50% Off",
//   "Get 20% Off",
//   "Flat 25% Off",
//   "Up To 30% Off",
//   "Up To 44% Off",
//   "Free Hair Mask",
//   "Up To 25% Off",
//   "Up To 50% Off",
// ];

for (var i = 0; i < imgs.length; i++) {
  var box = document.createElement("div"); //big box
  var boxIn = document.createElement("div"); //insode box
  boxIn.setAttribute("class", "bigGridBox");
  var image = document.createElement("img"); // produc image
  image.setAttribute("src", imgs[i]);
  var spanBold = document.createElement("span"); // first text
  spanBold.style.fontSize = "1.4rem";
  spanBold.innerText = topSpan[i];
  var spanRegular = document.createElement("span"); // second text
  spanRegular.innerText = span[i];
  spanRegular.style.color = "grey";
  boxIn.append(image, spanBold, spanRegular);
  box.append(boxIn);
  document.querySelector("#shopBeyondBeautiBottomIn").append(box);
}
