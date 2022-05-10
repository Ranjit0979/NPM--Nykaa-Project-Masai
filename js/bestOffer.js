var topSpan = [
  "Flat 30% Off On Serums",
  "Limited Edition Kit of 4 minis at ₹600",
  "Flat 25% Off*",
  "Buy 2 Get 2 Free",
  "Upto 48% off",
  "Flat 20% Off",
  "Full Size Product + Kit On ₹3500",
  "Flat 10% Off",
  "Up To 40% Off",
  "Buy 1 Get 1 Free",
  "Up To 50% off",
  "Flat 33% Off",
  "Up To 50% Off",
  "Up To 25% Off",
  "Flat 10% Off",
  "Flat 10% Off +",
  "Flat 10% Off",
  "Buy 1 Get 1 Free*",
  "Flat 25% Off",
  "Flat 30% Off On Singles",
];

var span = [
  "Flat 35% Off On Combos",
  "On Entire Range",
  "Add 2 To Bag Pay For 1",
  "On Entire Range",
  "Free Product On ₹599+",
  "Free Priming Water On ₹1299+",
  "Get a Free Gift On ₹899+",
  "On Entire Range",
  "2 Products On All Orders",
  "On Entire Range",
  "Up To 30% Off",
  "Extra 5% Off On 2+ Products",
  "Flat 40% Off On Combos",
  "Buy 1 Get 1 Free On Lipsticks",
  "On Entire Range",
  "Up To 35% Off",
  "3 Piece Kit On All Orders",
  "3 Gifts On All Orders",
  "Full Size Product + Kit On ₹3500",
  "On Entire Range",
];

var imgs = [
  "https://images-static.nykaa.com/uploads/786e665f-3788-4cc3-b7cd-013c3cc2bd75.jpg?tr=w-240,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/def97b3b-add1-419b-9d31-14872c2d28e3.jpg?tr=w-240,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/67826fdc-3c01-4c58-be3b-17fc59c7fc40.jpg?tr=w-240,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/40486c31-485c-476b-9a59-2c83f567a10a.jpg?tr=w-240,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/27c55355-c3a1-4fb2-84c3-92d3f4164269.jpg?tr=w-240,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/ea988fd1-a260-4508-aa55-19e0b5782f33.jpg?tr=w-240,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/00147c6f-429b-456c-8e94-9648e9ea8ef9.jpg?tr=w-240,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/a4262074-e268-4559-a4c6-ee2149fb2b84.jpg?tr=w-240,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/dfd97957-0846-436c-8a14-3b9a80089554.jpg?tr=w-240,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/1fd5af9a-afe2-47f4-a6d0-52d33df248cc.jpg?tr=w-240,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/b1dcb677-0427-4695-97ab-fab6160f6807.jpeg?tr=w-240,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/2239e2a3-1554-4a56-a602-fe2ab9d4a2f7.jpg?tr=w-240,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/5b158056-89a1-4597-aec7-c6a72774ee91.jpg?tr=w-240,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/41f8bcb9-9f87-4549-a0d9-99eed448df51.jpg?tr=w-240,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/68486602-d922-49e5-8b84-f8cdbc0e364f.jpg?tr=w-240,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/82786659-24fd-4682-a92d-b32942b48948.jpeg?tr=w-240,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/a0b708ef-fa23-4bf3-b0d5-a13c20772ffd.jpg?tr=w-240,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/65b826c9-ee1a-4aed-9a96-8f6729c174bf.jpg?tr=w-240,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/23a1bd30-a1e9-4b51-8c47-23f1ce755120.jpg?tr=w-240,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/0821a113-2fb7-4cfc-8b5b-60668f03c7c6.jpg?tr=w-240,cm-pad_resize"
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
  document.querySelector("#bestOfferGridIn").append(box);
}
