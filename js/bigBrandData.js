var topSpan = [
  "Free Lipstick Worth ₹349",
  "Free Lipstick On ₹799",
  "Free Highlighter Worth ₹3200 On ₹3500+",
  "Buy 2 Products Get A Mini Lipstick Free",
  "Free Body Mist worth ₹525 on orders above ₹599",
  "On Entire Range",
  "On Singles | Add 3 To Bag Pay For 2",
  "On Bestselling Combos",
  "Free Base of Glory Primer and Makeup Pouch",
  "Free Makeup Remover Wipes on ₹599+",
  "On Bestsellers",
  "Free ₹625 Green Tea Serum On All Orders",
  "On ₹1199 | 10% Off on Combos",
  "Free Eyeshadow Worth ₹599",
  "Free Shower Gel Worth ₹399 on ₹700",
];
var span = [
  "on Orders Over ₹700",
  "Free Face Primer On ₹999",
  "Extra 10% Off On ₹5500+",
  "Combos Starting At ₹270",
  "Combos At Min 30% Off",
  "Add 1 to Cart & Get 10% Off",
  "Flat 15% Off On Combos",
  "Starting At ₹270",
  "On Orders Of ₹999+",
  "Free Nail Polish Remover On ₹799+",
  "",
  "Combos at Min.30% Off (Only for Today)",
  "Free L'Oreal Paris Gel cream on ₹1849",
  "On Orders Of ₹1200+",
  "Buy 2 Get 2 Free Sheetmasks",
];

var imgs = [
  "https://images-static.nykaa.com/uploads/27014577-4f80-4d0a-8d87-62c8b007cda2.jpg?tr=w-400,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/8e4e09ce-ed6c-4ae9-8d46-ad4d24985da7.jpg?tr=w-400,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/48856c48-e34f-4684-bb57-f2670ebbdcd2.jpg?tr=w-400,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/94ab236c-b899-460f-882c-9e60d125cd00.jpg?tr=w-400,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/069f231d-ef3c-40c8-a103-c656e2e90442.jpg?tr=w-400,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/b8270a04-0987-4917-8ec5-3d5a93141d43.jpg?tr=w-400,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/93b13c53-8d18-4e51-9c78-9c2409044a52.jpg?tr=w-400,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/3f4d4264-6e8f-4248-bfbb-7cb319c80823.jpg?tr=w-400,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/66a2ed58-36ef-44ca-8ed8-e7aa57ee16a8.jpg?tr=w-400,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/8273d391-d188-4af9-b9e8-a45c2455a39d.jpg?tr=w-400,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/b750a456-438c-4f23-8e31-08294c3264bb.jpg?tr=w-400,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/2dfdf12f-239b-4264-97db-2a7ef24e8dd1.jpg?tr=w-400,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/9c5e60e1-d264-463d-a25e-40b323ef19d1.jpg?tr=w-400,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/f4c220ef-194e-41b9-80bd-b3760be7b079.jpg?tr=w-400,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/c8e28059-f48f-4461-8fd1-630d8f59999e.jpg?tr=w-400,cm-pad_resize",
];

var overFLow = [
  "Up To 50% Off",
  "Up To 50% Off",
  "On ₹2500: Free Lipstick",
  "Up To 50% Off",
  "Up To 40% Off",
  "Buy 2 Get 1 Free",
  "Buy 2 Get 1 Free",
  "Up To 50% Off",
  "Get 20% Off",
  "Flat 25% Off",
  "Up To 30% Off",
  "Up To 44% Off",
  "Free Hair Mask",
  "Up To 25% Off",
  "Up To 50% Off",
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
  document.querySelector("#bigBrandGridIn").append(box);
}
