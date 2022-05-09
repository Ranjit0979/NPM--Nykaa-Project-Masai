let imasBank = [
  "https://images-static.nykaa.com/uploads/5a5ebf95-a947-48b2-9830-3305c0af0a54.jpg?tr=w-600,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/0d5d3ec0-1aa1-41d7-921b-5d7a7bcdb720.jpg?tr=w-600,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/3fcc26d6-3de7-488b-9435-5dc283ba6ee3.jpg?tr=w-600,cm-pad_resize",
];


let mainDivBank = document.querySelector("#bankImageWindowTopSlider");

let bankBtn1 = document.querySelector("#bankSliderBtn1");
let bankBtn2 = document.querySelector("#bankSliderBtn2");

let leftBank = 0;
let lengthOfImageOfBank = 2;
let rightBank = lengthOfImageOfBank - 1;
function sliderBank(imasBank) {
  mainDivBank.innerHTML = "";
  for (let i = leftBank; i <= rightBank; i++) {
    let div_main = document.createElement("div");
    div_main.setAttribute("class", "imageBoxSlider");

    let imageInsideSlider = document.createElement("img");
    imageInsideSlider.setAttribute("src", imasBank[i]);
    imageInsideSlider.setAttribute("class", "imageInsideSlider");

    div_main.append(imageInsideSlider);
    mainDivBank.append(div_main);
  }
}
sliderBank(imasBank);
bankBtn2.addEventListener("click", function () {
  //increment
  addIncrementBank();
});
bankBtn1.addEventListener("click", function () {
  //increment
  addDecrementBank();
});

function addIncrementBank() {
  leftBank++;
  rightBank++;
  if (rightBank < imasBank.length) {
    sliderBank(imasBank);
  } else {
    leftBank--;
    rightBank--;
  }
}
function addDecrementBank() {
  leftBank--;
  rightBank--;
  if (leftBank >= 0) {
    sliderBank(imasBank);
  } else {
    leftBank++;
    rightBank++;
  }
}
