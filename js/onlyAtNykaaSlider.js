var onlyAtNykaaImgs = [
  "https://images-static.nykaa.com/uploads/16dccfa0-33c8-482a-a5bf-4ee21df16621.jpg?tr=w-200,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/34ccefc7-5182-4466-b3d4-d5fd5c8b2951.jpg?tr=w-200,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/fc182074-b95e-42b3-969a-70885b6b0226.jpg?tr=w-200,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/d3170be2-0068-45ee-af62-8b017d1165f3.jpg?tr=w-200,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/c3213104-c1d2-4f09-bbcb-f8dc2501cd6c.jpg?tr=w-200,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/9956a669-55e9-4472-8312-02629640233f.jpg?tr=w-200,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/c803ff3d-3534-42ed-9a5c-19c807966fe7.jpg?tr=w-200,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/bd19bfef-0f5e-4af0-a8d8-6aacc62c3a0c.jpg?tr=w-200,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/fc182074-b95e-42b3-969a-70885b6b0226.jpg?tr=w-200,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/34ccefc7-5182-4466-b3d4-d5fd5c8b2951.jpg?tr=w-200,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/ea39a203-02a6-43f2-be39-fd815b200645.jpg?tr=w-200,cm-pad_resize"
];

let onlyAtNykaaHead = [
    "Up To 30% Off",
    "Flat 20% Off",
    "Up To 35% Off",
    "Free Lipstick On ₹2500",
    "2 Minis Worth ₹1775",
    "Buy 1 Get 1 Free",
    "Buy 2 Get 1 Free",
    "Up To 40% Off",
    "Buy 2 Get 1 Free",
    "Up To 40% Off",
    "Up To 40% Off"
];

let descriptiononlyAtNykaae = [
  "At ₹1246 (Save 35%)",
  "At ₹2210 (Save 40%)",
  "At ₹1800 (Save 25%)",
  "At ₹2400 (Save 45%)",
  "At ₹5850 (Save 25%)",
  "At ₹2950 (Save 40%)",
  "At ₹1280",
  "At ₹1299 (Save 55%)",
  "At ₹1090 (Save 21%)",
  "At ₹1400 (Save ₹1150)",
  "At ₹2100 (Save 40%)"
];

// let url = {};

let mainDivonlyAtNykaa = document.querySelector("#onlyAtNykaaWindowTopSlider");

let onlyAtNykaaBtn1 = document.querySelector("#onlyAtNykaaSliderBtn1");
let onlyAtNykaaBtn2 = document.querySelector("#onlyAtNykaaSliderBtn2");

let onlyAtNykaaLeft = 0;
let onlyAtNykaaLengthOfImage = 7;
let onlyAtNykaaRight = onlyAtNykaaLengthOfImage;
function slideronlyAtNykaa() {
  mainDivonlyAtNykaa.innerHTML = "";
  for (let i = onlyAtNykaaLeft; i <= onlyAtNykaaRight; i++) {
    let div_main = document.createElement("div");
    div_main.setAttribute("class", "imageBoxSliderLux");
    let imageInsideSlider = document.createElement("img");
    imageInsideSlider.setAttribute("src", onlyAtNykaaImgs[i]);
    imageInsideSlider.setAttribute("class", "imageInsideSlider");
    let desciption = document.createElement("span");
    desciption.setAttribute("class", "sliderDescription1");
    desciption.innerText = onlyAtNykaaHead[i];
    let desciption2 = document.createElement("span");
    desciption2.setAttribute("class", "sliderDescription2");
    desciption2.innerText = descriptiononlyAtNykaae[i];
    div_main.append(imageInsideSlider, desciption, desciption2);
    mainDivonlyAtNykaa.append(div_main);
  }
}
slideronlyAtNykaa();
onlyAtNykaaBtn2.addEventListener("click", function () {
  //increment
  addIncrementonlyAtNykaa();
});
onlyAtNykaaBtn1.addEventListener("click", function () {
  //increment
  addDecrementonlyAtNykaa();
});

function addIncrementonlyAtNykaa() {
  onlyAtNykaaLeft++;
  onlyAtNykaaRight++;
  if (onlyAtNykaaRight <= onlyAtNykaaImgs.length) {
    slideronlyAtNykaa();
  } else {
    onlyAtNykaaLeft--;
    onlyAtNykaaRight--;
  }
}
function addDecrementonlyAtNykaa() {
  onlyAtNykaaLeft--;
  onlyAtNykaaRight--;
  if (onlyAtNykaaLeft >= -1) {
    slideronlyAtNykaa();
  } else {
    onlyAtNykaaLeft++;
    onlyAtNykaaRight++;
  }
}
