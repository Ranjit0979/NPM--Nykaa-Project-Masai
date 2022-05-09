let imas = [
  "https://images-static.nykaa.com/uploads/7f12e789-83ce-4a44-8a0b-ac778582f2c1.png?tr=w-150,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/f116a424-27b3-4812-a9eb-2f198fb42d0a.png?tr=w-150,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/a2212275-11a6-4497-a56d-34c48f722cfd.png?tr=w-150,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/d9a58c98-68bd-4a0f-be2e-17eaff318e94.png?tr=w-150,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/43414e29-b414-446c-b27b-3bd628da03cc.png?tr=w-150,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/eadccd61-3a75-41ad-bae2-efaa7c775520.png?tr=w-150,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/22b8500a-8e23-4f8e-a0ee-14ca58b7a8a6.jpg?tr=w-150,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/acdd4596-5b32-4d74-a92d-4235f75cbdc2.png?tr=w-150,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/7127f739-5dcb-40a5-af80-30e879f066b0.jpg?tr=w-150,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/f3cd6008-8b36-411f-bb3c-2314128aafad.png?tr=w-150,cm-pad_resize",
];

let ul_master = [
  "Makeup",
  "Skin",
  "Hair",
  "Natural",
  "Personal Care",
  "Fragrance",
  "Appliances",
  "LUXE",
  "Mom & Baby",
  "Men's",
];

let url = {};

let mainDiv = document.querySelector("#imageWindowTopSlider");

let btn1 = document.querySelector("#topSliderBtn1");
let btn2 = document.querySelector("#topSliderBtn2");

let left = 0;
let lengthOfImage = 9;
let right = lengthOfImage - 1;
function slider(imas, ul_master, lengthOfImage) {
  mainDiv.innerHTML = "";
  for (let i = left; i < right; i++) {
    let div_main = document.createElement("div");
    div_main.setAttribute("class", "imageBoxSlider");
    let imageInsideSlider = document.createElement("img");
    imageInsideSlider.setAttribute("src", imas[i]);
    imageInsideSlider.setAttribute("class", "imageInsideSlider");
    let desciption = document.createElement("span");
    desciption.setAttribute("class", "sliderDescription");
    desciption.innerText = ul_master[i];
    div_main.append(imageInsideSlider, desciption);
    mainDiv.append(div_main);
  }
}
slider(imas, ul_master, lengthOfImage);
btn2.addEventListener("click", function () {
  //increment
  addIncrement();
});
btn1.addEventListener("click", function () {
  //increment
  addDecrement();
});

function addIncrement() {
  left++;
  right++;
  if (right < imas.length) {
    slider(imas, ul_master, lengthOfImage);
  } else {
    left--;
    right--;
  }
}
function addDecrement() {
  left--;
  right--;
  if (left >= 0) {
    slider(imas, ul_master, lengthOfImage);
  } else {
    left++;
    right++;
  }
}
