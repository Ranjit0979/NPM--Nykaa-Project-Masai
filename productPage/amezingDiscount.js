var topSpan = [
  "On Entire Range",
  "On Serums & Moisturizers",
  "On Entire Range",
  "On ₹4500 - Full Size Product Worth ₹2100",
  "Bestseller Trio Kit On ₹999",
  "Extra 10% Off On Orders Of ₹499+",
  "On Expert Skincare",
  "Collagen Gummies",
  "Free Product On ₹899+",
  "On Entire Range",
  "Starting At Just ₹99",
  "Glow Tonic 100ml At ₹1050",
  "On Entire Range",
  "On International Bestsellers",
  "On Entire Range | Free Gift",
  "Get That Inner Glow",
  "On Entire Range",
  "Extra 5% Off On ₹1099+",
  "by L’Oréal Paris on ₹599+",
  "Buy 3 Get 3 Free On Sheetmasks",
  "On Bestselling Combos",
  "On Entire Range",
  "3 Gifts On ₹1500",
  "On Entire Range",
  "On Entire Range",
];

var span = [
  "Free Lipgloss On Orders Of ₹599+",
  "",
  "",
  "3 Piece Kit On All Orders",
  "Buy 5 Get 5 Free On Sheetmasks",
  "Free Glowner Worth ₹249 on ₹699+",
  "Free Sheetmask Worth ₹299 On ₹799+",
  "For Hydrated & Glowing Skin",
  "",
  "",
  "Summer Care Bath Essentials!",
  "",
  "Add 1 To Bag Get Flat 20% Off",
  "",
  "Extra 10% Off On Orders Of ₹399",
  "Biotin, Collagen, GlutAthione, Vitamin C",
  "",
  "",
  "Flat 10% Off on all haircare regimes",
  "",
  "",
  "",
  "3-Piece Gift Set On ₹4000",
  "Free Mini Shampoo On Orders Above ₹399",
  "",
];

var imgs = [
  "https://images-static.nykaa.com/uploads/af8dbf7c-6d38-4b1a-b2b7-fc7bbd2f248c.jpg?tr=w-400,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/ec877350-e693-4641-9182-64db66f4b0ab.JPG?tr=w-400,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/031993ba-d27d-458d-aaff-d3291575f93f.jpg?tr=w-400,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/6254b021-84a5-4c92-839e-70e1716adc0c.jpg?tr=w-400,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/02aff89d-ccbe-4e3a-a83b-8ba845194f40.jpg?tr=w-400,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/290779d5-f5c8-4e6e-883f-d5b742a5c627.jpg?tr=w-400,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/6ff98004-198b-4693-9e4c-440d8524c5c2.jpg?tr=w-400,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/08b50116-5c54-4dec-86ca-67bacf84e5fb.jpg?tr=w-400,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/791da25c-fe2c-4134-9ca4-8ecdb197f77c.jpg?tr=w-400,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/b8fcdf83-6ba3-4cd5-93b2-188bf7d6999e.jpg?tr=w-400,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/faeb1ca5-c499-4f39-84b6-5f0c08be9451.jpg?tr=w-400,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/448027e5-e02f-4bb4-86dd-18f1afdc85ba.jpg?tr=w-400,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/f12bc59b-e308-49af-94e9-1e6807d47380.jpg?tr=w-400,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/1cf65909-a8ce-44f7-875d-cdcf823d9f92.jpg?tr=w-400,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/11fb988a-8108-45cd-bf31-5984803de345.jpg?tr=w-400,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/3ee4a487-59ac-495f-be37-c247ab94009e.jpg?tr=w-400,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/a4d1224c-3b24-4dad-a2cf-9ca2d1430885.jpg?tr=w-400,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/5187f920-1e34-4a73-9e8b-f10137e81f50.jpg?tr=w-400,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/5cdb6212-4037-4ec7-9004-19c161bd14ad.jpg?tr=w-400,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/3d86c9d6-9899-42c3-859f-7500b99a8e9b.jpg?tr=w-400,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/a9f3baa5-55e3-4607-b7c3-d00b4eab72ac.jpg?tr=w-400,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/358a843c-ba01-4493-aef4-e7095c886174.jpg?tr=w-400,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/fe901da3-6f68-4041-9b4c-d1e68a0df7cb.jpg?tr=w-400,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/00d76c8f-1bbc-4c75-bac4-1a7d21c08dda.jpg?tr=w-400,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/4472ebad-52c8-4b83-9c9a-a30b286a5cd7.jpg?tr=w-400,cm-pad_resize",
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
  document.querySelector("#amagingDiscountGridIn").append(box);
}
