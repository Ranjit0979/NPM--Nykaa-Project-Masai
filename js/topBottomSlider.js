let bottomImas = [
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
  
  let bottomUl_master = [
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
  
//   let url = {};
  
  let bottomMainDiv = document.querySelector("#imagebottomTopSlider");
  
  let bottomBtn1 = document.querySelector("#bottomTopSliderBtn1");
  let bottomBtn2 = document.querySelector("#bottomTopSliderBtn2");
  
  let bottomLeft = 0;
  let bottomLengthOfImage = 9;
  let bottomRight = bottomLengthOfImage - 1;
  function slider(bottomImas, bottomUl_master, bottomLengthOfImage) {
    bottomMainDiv.innerHTML = "";
    for (let i = bottomLeft; i < bottomRight; i++) {
      let div_main = document.createElement("div");
      div_main.setAttribute("class", "imageBoxSlider");
      div_main.style.cursor ="pointer";
      let imageInsideSlider = document.createElement("img");
      imageInsideSlider.setAttribute("src", bottomImas[i]);
      imageInsideSlider.setAttribute("class", "imageInsideSlider");
      let desciption = document.createElement("span");
      desciption.setAttribute("class", "sliderDescription");
      desciption.innerText = bottomUl_master[i];
      div_main.append(imageInsideSlider, desciption);
      bottomMainDiv.append(div_main);
    }
  }
  slider(bottomImas, bottomUl_master, bottomLengthOfImage);
  bottomBtn2.addEventListener("click", function () {
    //increment
    addIncrementBot();
  });
  bottomBtn1.addEventListener("click", function () {
    //increment
    addDecrementBot();
  });
  
  function addIncrementBot() {
    bottomLeft++;
    bottomRight++;
    if (bottomRight < bottomImas.length) {
      slider(bottomImas, bottomUl_master, bottomLengthOfImage);
    } else {
      bottomLeft--;
      bottomRight--;
    }
  }
  function addDecrementBot() {
    bottomLeft--;
    bottomRight--;
    if (bottomLeft >= 0) {
      slider(bottomImas, bottomUl_master, bottomLengthOfImage);
    } else {
      bottomLeft++;
      bottomRight++;
    }
  }
  