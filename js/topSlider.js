let topSliderJstimas = [
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

// let url = {};

let topSlidemainDiv = document.querySelector("#imageWindowTopSlider");

let btn1 = document.querySelector("#topSliderBtn1");
let btn2 = document.querySelector("#topSliderBtn2");

let leftTopSlider = 0;
let lengthOfImagetopSlider = 9;
let rightTopSlider = lengthOfImagetopSlider - 1;
function sliderTop(topSliderJstimas, ul_master, lengthOfImagetopSlider) {
  topSlidemainDiv.innerHTML = "";
  for (let i = leftTopSlider; i < rightTopSlider; i++) {
    let div_main = document.createElement("div");
    div_main.setAttribute("class", "imageBoxSlider");
    div_main.style.cursor="pointer";
    div_main.addEventListener("click", function(){
      // temp route to product page 
      window.location.href="./allProducts.html";
    })
    let imageInsideSlider = document.createElement("img");
    imageInsideSlider.setAttribute("src", topSliderJstimas[i]);
    imageInsideSlider.setAttribute("class", "imageInsideSlider");
    let desciption = document.createElement("span");
    desciption.setAttribute("class", "sliderDescription");
    desciption.innerText = ul_master[i];
    div_main.append(imageInsideSlider, desciption);
    topSlidemainDiv.append(div_main);
  }
}
sliderTop(topSliderJstimas, ul_master, lengthOfImagetopSlider);
btn2.addEventListener("click", function () {
  //increment
  addIncrementTop();
});
btn1.addEventListener("click", function () {
  //increment
  addDecrementTop();
});

function addIncrementTop() {
  leftTopSlider++;
  rightTopSlider++;
  if (rightTopSlider < topSliderJstimas.length) {
    sliderTop(topSliderJstimas, ul_master, lengthOfImagetopSlider);
  } else {
    leftTopSlider--;
    rightTopSlider--;
  }
}
function addDecrementTop() {
  leftTopSlider--;
  rightTopSlider--;
  if (leftTopSlider >= 0) {
    sliderTop(topSliderJstimas, ul_master, lengthOfImagetopSlider);
  } else {
    leftTopSlider++;
    rightTopSlider++;
  }
}
