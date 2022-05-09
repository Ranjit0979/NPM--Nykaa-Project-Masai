var luxImgs = [
  "https://images-static.nykaa.com/uploads/f738b255-a191-4c58-832f-e228fb846741.jpg?tr=w-200,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/3558e6c1-92c2-45a2-9e46-1cbdfe314250.jpg?tr=w-200,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/07fa9989-51d2-4dde-87f4-76e16d26ebcd.jpg?tr=w-200,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/30fc6d26-a057-4f60-bb2c-2023d6195870.jpg?tr=w-200,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/a6b2ac5b-681a-4376-a932-838a8307bc12.jpg?tr=w-200,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/c17a6a58-9828-48cf-b569-852fee3081ea.jpg?tr=w-200,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/4f4399f0-0c8b-4ea9-b2c9-4724c7cde0eb.jpg?tr=w-200,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/5b70697f-3bc2-4900-ab9c-46d1bb76d235.jpg?tr=w-200,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/ae28c8d4-88ec-4b79-9b31-44fb221a5590.jpg?tr=w-200,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/444385a1-a352-4ae1-82de-cd3ffe274bc9.jpg?tr=w-200,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/6dbc95e4-8cf6-47ed-9abc-c664a6405ef1.jpg?tr=w-200,cm-pad_resize",
];

let luxHead = [
  "Summer Skincare Kit",
  "Fix+ & Mehr",
  "Ultra Facial Duo",
  "Benetint & Hoola Duo",
  "Serum 20ml Duo",
  "3 Piece Hydrate Kit",
  "Everyday Pink Kit At ₹1435 (Save 30%)",
  "Lip Mask Duo",
  "Glow All Day Set",
  "Mini Matte Lip Duo",
  "Lip & Mascara Combo",
];

let descriptionLuxe = [
  "At ₹1346 (Save 35%)",
  "At ₹2210 (Save 40%)",
  "At ₹1800 (Save 25%)",
  "At ₹2500 (Save 45%)",
  "At ₹5850 (Save 25%)",
  "At ₹2950 (Save 40%)",
  "At ₹1380",
  "At ₹1299 (Save 55%)",
  "At ₹1090 (Save 21%)",
  "At ₹1700 (Save ₹1150)",
  "At ₹2200 (Save 40%)",
];

// let url = {};

let mainDivLux = document.querySelector("#luxImageWindowTopSlider");

let luxBtn1 = document.querySelector("#luxSliderBtn1");
let luxBtn2 = document.querySelector("#luxSliderBtn2");

let luxLeft = 0;
let luxLengthOfImage = 9;
let luxRight = luxLengthOfImage;
function sliderLux() {
  mainDivLux.innerHTML = "";
  for (let i = luxLeft; i <= luxRight; i++) {
    let div_main = document.createElement("div");
    div_main.setAttribute("class", "imageBoxSliderLux");
    let imageInsideSlider = document.createElement("img");
    imageInsideSlider.setAttribute("src", luxImgs[i]);
    imageInsideSlider.setAttribute("class", "imageInsideSlider");
    let desciption = document.createElement("span");
    desciption.setAttribute("class", "sliderDescription1");
    desciption.innerText = luxHead[i];
    let desciption2 = document.createElement("span");
    desciption2.setAttribute("class", "sliderDescription2");
    desciption2.innerText = descriptionLuxe[i];
    div_main.append(imageInsideSlider, desciption, desciption2);
    mainDivLux.append(div_main);
  }
}
sliderLux();
luxBtn2.addEventListener("click", function () {
  //increment
  addIncrementLux();
});
luxBtn1.addEventListener("click", function () {
  //increment
  addDecrementLux();
});

function addIncrementLux() {
  luxLeft++;
  luxRight++;
  if (luxRight <= luxImgs.length) {
    sliderLux();
  } else {
    luxLeft--;
    luxRight--;
  }
}
function addDecrementLux() {
  luxLeft--;
  luxRight--;
  if (luxLeft >= -1) {
    sliderLux();
  } else {
    luxLeft++;
    luxRight++;
  }
}
