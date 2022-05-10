let influencerImas = [
  "https://images-static.nykaa.com/uploads/07a71bb1-711c-4535-bb2f-09f9ae573271.png?tr=w-300,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/fdf21291-640b-4e85-a777-02b2f915b52d.png?tr=w-300,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/b7decd7a-ef0d-462a-89cf-d7b0d8c8651a.png?tr=w-300,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/36b79fcc-fb58-4ed8-bdf0-cb34fcafe413.png?tr=w-300,cm-pad_resize",
];
var influencerText = [
  "Ritika Amru’s Summer Skincare Must-Haves",
  "Muskan Chanchlani's Faves Under ₹999",
  "Shantanu’s Sweat-Proof Makeup Essentials",
  "Jovita George’s Summer Picks",
];
let mainDivInfluencer = document.querySelector(
  "#influencerImageWindowTopSlider"
);

// let bankBtn1 = document.querySelector("#bankSliderBtn1");
// let bankBtn2 = document.querySelector("#bankSliderBtn2");

let leftInfluencer = 0;
let lengthOfImageOfInfluencer = influencerImas.length;
let rightInfluencer = lengthOfImageOfInfluencer - 1;
function sliderInfluencer(influencerImas) {
  mainDivInfluencer.innerHTML = "";
  for (let i = leftInfluencer; i <= rightInfluencer; i++) {
    let div_main = document.createElement("div");
    div_main.setAttribute("class", "imageBoxSliderInfluencer");
    let desciption = document.createElement("span");
    desciption.setAttribute("class", "sliderDescription1");
    desciption.innerText = influencerText[i];
    let imageInsideSlider = document.createElement("img");
    imageInsideSlider.setAttribute("src", influencerImas[i]);
    imageInsideSlider.setAttribute("class", "imageInsideSliderInfluencer");

    div_main.append(imageInsideSlider, desciption);
    mainDivInfluencer.append(div_main);
  }
}
sliderInfluencer(influencerImas);
// bankBtn2.addEventListener("click", function () {
//   //increment
//   addIncrementBank();
// });
// bankBtn1.addEventListener("click", function () {
//   //increment
//   addDecrementBank();
// });

// function addIncrementBank() {
//   leftInfluencer++;
//   rightInfluencer++;
//   if (rightInfluencer < influencerImas.length) {
//     sliderInfluencer(influencerImas);
//   } else {
//     leftInfluencer--;
//     rightInfluencer--;
//   }
// }
// function addDecrementBank() {
//   leftInfluencer--;
//   rightInfluencer--;
//   if (leftInfluencer >= 0) {
//     sliderInfluencer(influencerImas);
//   } else {
//     leftInfluencer++;
//     rightInfluencer++;
//   }
// }
