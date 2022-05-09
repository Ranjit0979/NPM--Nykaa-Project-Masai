var newAtNykaaImgs = [
  "https://images-static.nykaa.com/uploads/ee703f6e-b5ca-4908-8386-097a3173ed22.jpg?tr=w-200,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/96532e97-7ab8-48b2-8611-12b8808ec004.jpg?tr=w-200,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/25d1c8b4-f06d-4cb8-8239-8cd5c39a7a7e.jpg?tr=w-200,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/f157f8d1-be89-482b-8dee-6e6717a7303c.jpg?tr=w-200,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/e14af518-70e8-482f-9ceb-5c4d8b574ca0.jpg?tr=w-200,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/8f510936-c93c-48ba-990a-d2f91a290129.jpg?tr=w-200,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/e14af518-70e8-482f-9ceb-5c4d8b574ca0.jpg?tr=w-200,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/c9c41760-d400-4013-8362-b870eb3b0fc1.jpg?tr=w-200,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/96532e97-7ab8-48b2-8611-12b8808ec004.jpg?tr=w-200,cm-pad_resize",
];

let newAtNykaaHead = [
  "Caramel Popcorn Range",
  "Cica Range",
  "Matte Long Wear Liquid Foundation",
  "Expert Ultra Smoothing Range",
  "Glow All Day Kit",
  "Skin Concealer Stick",
  "UV Defender Serum Protector Sunscreen",
  "Loves Becca Range",
  "IYKYK by Nykaa Fashion",
];

let descriptionnewAtNykaae = [
  "Flat 25% Off",
  "On Bestselling Combos",
  "On ₹2100+",
  "Up To 25% Off",
  "Free Lip Crayon On ₹1299+",
  "Free Blender On ₹799+",
  "Flat 20% Off",
  "Save 55%",
  "Free Lipstick On ₹2500",
];

// let url = {};

let mainDivnewAtNykaa = document.querySelector("#newAtNykaaWindowTopSlider");

let newAtNykaaBtn1 = document.querySelector("#newAtNykaaSliderBtn1");
let newAtNykaaBtn2 = document.querySelector("#newAtNykaaSliderBtn2");

let newAtNykaaLeft = 0;
let newAtNykaaLengthOfImage = 7;
let newAtNykaaRight = newAtNykaaLengthOfImage;
function slidernewAtNykaa() {
  mainDivnewAtNykaa.innerHTML = "";
  for (let i = newAtNykaaLeft; i <= newAtNykaaRight; i++) {
    let div_main = document.createElement("div");
    div_main.setAttribute("class", "imageBoxSliderLux");
    let imageInsideSlider = document.createElement("img");
    imageInsideSlider.setAttribute("src", newAtNykaaImgs[i]);
    imageInsideSlider.setAttribute("class", "imageInsideSlider");
    let desciption = document.createElement("span");
    desciption.setAttribute("class", "sliderDescription1");
    desciption.innerText = newAtNykaaHead[i];
    let desciption2 = document.createElement("span");
    desciption2.setAttribute("class", "sliderDescription2");
    desciption2.innerText = descriptionnewAtNykaae[i];
    div_main.append(imageInsideSlider, desciption, desciption2);
    mainDivnewAtNykaa.append(div_main);
  }
}
slidernewAtNykaa();
newAtNykaaBtn2.addEventListener("click", function () {
  //increment
  addIncrementnewAtNykaa();
});
newAtNykaaBtn1.addEventListener("click", function () {
  //increment
  addDecrementnewAtNykaa();
});

function addIncrementnewAtNykaa() {
  newAtNykaaLeft++;
  newAtNykaaRight++;
  if (newAtNykaaRight <= newAtNykaaImgs.length) {
    slidernewAtNykaa();
  } else {
    newAtNykaaLeft--;
    newAtNykaaRight--;
  }
}
function addDecrementnewAtNykaa() {
  newAtNykaaLeft--;
  newAtNykaaRight--;
  if (newAtNykaaLeft >= -1) {
    slidernewAtNykaa();
  } else {
    newAtNykaaLeft++;
    newAtNykaaRight++;
  }
}
