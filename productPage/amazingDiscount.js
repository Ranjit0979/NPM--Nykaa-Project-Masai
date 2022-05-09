var amazingGrid = [
  "https://images-static.nykaa.com/uploads/1eaa5327-637b-48c0-83b1-8fc4cd843bbb.png?tr=w-600,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/48e40378-017d-4049-a3af-87a5e4823a02.png?tr=w-600,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/4a436717-df7a-47fa-9098-d734614e1a50.png?tr=w-600,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/ab553c05-70ac-4081-943a-54f50f3be651.png?tr=w-600,cm-pad_resize",
];

amazingGrid.forEach(function(a)
{
    var mainDocAmez = document.createElement("div");
    mainDocAmez.setAttribute("class", "amezMain");
    var imgs = document.createElement("img");
    imgs.style.width="100%";
    imgs.style.height="100%";
    imgs.setAttribute("src", a);
    mainDocAmez.append(imgs);
    document.querySelector("#amagingDiscountGridIn").append(mainDocAmez);
})