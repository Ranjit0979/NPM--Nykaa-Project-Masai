
//this is for navbar section
var loginMail="ranjitlagad111@gmail.com";

localStorage.setItem("login",loginMail);
var loginData=localStorage.getItem("login")||null;
if(loginData!=null)
{
    document.querySelector("#login").innerText=loginData;
}






//this will store all the saved addresses 
var savedAddress = JSON.parse(localStorage.getItem("savedAddress")) || [];

//this will show the fixed buttons on the left inside #addNew div
displayAddressButtons();


//this for showing saved address
if (savedAddress.length == 0) {
  inputForm();
  localStorage.setItem("finalAddress","");
}
else
{
  showAddress();
  document.querySelector("#selectedAdd").innerText=savedAddress[savedAddress.length-1].address+savedAddress[savedAddress.length-1].country||"";
}


//this is for showing the add new address input form and getting new address from user and storing and showing it.
function inputForm() {
  var head = document.createElement("h3");
  head.innerText = "New Address";

  var form = document.createElement("form");
  form.setAttribute("id", "form");

  var label1 = document.createElement("label");
  label1.innerText = "Select Country";

  var break1 = document.createElement("br");

  var input1 = document.createElement("input");
  input1.setAttribute("id", "country");
  input1.value = "India";

  var break2 = document.createElement("br");

  var input2 = document.createElement("input");
  input2.setAttribute("id", "name");
  input2.setAttribute("placeholder", "Name");
  input2.value = "";

  var break3 = document.createElement("br");

  var label3 = document.createElement("label");
  label3.innerText = "Phone Number";

  var break4 = document.createElement("br");

  var input3 = document.createElement("input");
  input3.setAttribute("id", "number");
  input3.setAttribute("type", "number");
  input3.value = "";

  var break5 = document.createElement("br");

  var input4 = document.createElement("input");
  input4.setAttribute("id", "pincode");
  input4.setAttribute("type", "number");
  input4.setAttribute("placeholder", "Postal Code");
  input4.value = "";

  var break6 = document.createElement("br");

  var input5 = document.createElement("input");
  input5.setAttribute("class", "add");
  input5.setAttribute("placeholder", "Address");
  input5.value = "";

  var break7 = document.createElement("br");

  var span = document.createElement("span");
  
  var checkbox = document.createElement("div");
  checkbox.setAttribute("id","checkbox");
  
  var p1 = document.createElement("p");
  p1.innerText = "Use this as my default shipping address";
  span.append(checkbox, p1);

  var break8 = document.createElement("br");

  var input6 = document.createElement("input");
  input6.setAttribute("id", "submit_add");
  input6.setAttribute("type", "submit");
  input6.value = "SHIP TO THIS ADDRESS";

  form.append(
    label1,
    break1,
    input1,
    break2,
    input2,
    break3,
    label3,
    break4,
    input3,
    break5,
    input4,
    break6,
    input5,
    break7,
    span,
    break8,
    input6
  );
  document.querySelector("#shippingAddress").append(head, form);

  document.querySelector("#form").addEventListener("submit", addAddress);
}


//bug @archiesmandas
//this is for default button to store address as default
// document.querySelector("#checkbox").addEventListener("click",greenBox);
// function greenBox(){
//   event.preventDefault();
//   document.querySelector("#checkbox").style.backgroundColor="green";
// }

//this function is for adding new address
function addAddress() {
  event.preventDefault();

  var obj = {
    country: form.country.value,
    name: document.querySelector("#name").value,
    number: document.querySelector("#number").value,
    pin: document.querySelector("#pincode").value,
    address: document.querySelector(".add").value,
  };

  savedAddress.push(obj);
  localStorage.setItem("savedAddress", JSON.stringify(savedAddress));
  displayAddressButtons();
  showAddress();
  //this is for showing the address in navbar
  document.querySelector("#selectedAdd").innerText=savedAddress[savedAddress.length-1].address+savedAddress[savedAddress.length-1].country||"";
  window.location.reload();
}

//this will show the buttons of addresses i.e.New Adress and Saved Address
function displayAddressButtons() {
  document.querySelector("#addNew").innerHTML = "";

  if (savedAddress.length == 0) {
    var addNewAddress = document.createElement("button");
    addNewAddress.innerText = "New Address";
    addNewAddress.style.color = "#fc2779";
    addNewAddress.setAttribute("id", "add_address");
    document.querySelector("#addNew").append(addNewAddress);
  } else {
    var btn1 = document.createElement("button");

    var p1 = document.createElement("p");
    p1.innerText = "Saved Address";
    p1.style.color = "#fc2779";

    var p2 = document.createElement("p");
    p2.innerText = savedAddress.length;

    btn1.style.display = "flex";
    btn1.style.justifyContent = " space-between";

    var btn2 = document.createElement("button");
    btn2.innerText = "New Address";
    btn2.setAttribute("id", "add_address");

    btn1.append(p1, p2);

    document.querySelector("#addNew").append(btn1, btn2);
  }
}

document.querySelector("#add_address").addEventListener("click", addNew);

//this function is for adding one more new address

function addNew() {
  document.querySelector("#addNew>button>p").style.color = "black";

  document.querySelector("#addNew>button+button").style.color = "#fc2779";

  document.querySelector("#shippingAddress").innerHTML = "";

  inputForm();
}

document.querySelector("#addNew>button").addEventListener("click", showAddress);

//this function shows the saved addresses in local storage
function showAddress() {
  document.querySelector("#shippingAddress").innerHTML = "";

  savedAddress.forEach(function (ele, index) {
    var addDiv = document.createElement("div");
    addDiv.setAttribute("class", "addDiv");

    var div1 = document.createElement("div");

    var btn = document.createElement("button");
    btn.innerText = "delete";
    btn.addEventListener("click", function () {
      deleteAddress(ele, index);
    });

    var name = document.createElement("h4");
    name.innerText = ele.name;

    div1.append(name, btn);

    var address = document.createElement("p");
    address.innerText = ele.address + "," + ele.pin + "," + ele.country;

    var mobile = document.createElement("h4");
    mobile.innerText = "+91-" + ele.number;

    var buttonsDiv = document.createElement("div");

    var Edit = document.createElement("button");
    Edit.innerText = "Edit";
    Edit.setAttribute("id", "editButton");
    Edit.addEventListener("click", function () {
      editAddress(ele, index);
    });

    var shipAddress = document.createElement("button");
    shipAddress.addEventListener("click", function () {
      getAddress(ele);
      
    });
    shipAddress.innerText = "SHIP TO THIS ADDRESS";
    shipAddress.style.backgroundColor = "#fc2779";
    shipAddress.style.color = "white";

    buttonsDiv.append(Edit, shipAddress);

    addDiv.append(div1, address, mobile, buttonsDiv);

    document.querySelector("#shippingAddress").append(addDiv);
    document.querySelector("#addNew>button>p").style.color = "#fc2779";
    document.querySelector("#addNew>button+button").style.color = "black";
  });
}


//this function will delete the saved address from local storage
function deleteAddress(ele, index) {
  savedAddress.splice(index, 1);
  localStorage.setItem("savedAddress", JSON.stringify(savedAddress));
  window.location.reload();
}


//this is for editing the already saved address
function editAddress(ele, index) {
  document.querySelector("#shippingAddress").innerHTML = "";
  var head = document.createElement("h3");
  head.innerText = "Edit Address";

  var form = document.createElement("form");
  form.setAttribute("id", "form");

  var label1 = document.createElement("label");
  label1.innerText = "Select Country";

  var break1 = document.createElement("br");

  var input1 = document.createElement("input");
  input1.setAttribute("id", "country");
  input1.value = "India";

  var break2 = document.createElement("br");

  var input2 = document.createElement("input");
  input2.setAttribute("id", "name");
  input2.setAttribute("placeholder", "Name");
  input2.value = ele.name;

  var break3 = document.createElement("br");

  var label3 = document.createElement("label");
  label3.innerText = "Phone Number";

  var break4 = document.createElement("br");

  var input3 = document.createElement("input");
  input3.setAttribute("id", "number");
  input3.setAttribute("type", "number");
  input3.value = ele.number;

  var break5 = document.createElement("br");

  var input4 = document.createElement("input");
  input4.setAttribute("id", "pincode");
  input4.setAttribute("type", "number");
  input4.setAttribute("placeholder", "Postal Code");
  input4.value = ele.pin;

  var break6 = document.createElement("br");

  var input5 = document.createElement("input");
  input5.setAttribute("class", "add");
  input5.setAttribute("placeholder", "Address");
  input5.value = ele.address;

  var break7 = document.createElement("br");

  var span = document.createElement("span");
  var btn = document.createElement("button");
  var p1 = document.createElement("p");
  p1.innerText = "Use this as my default shipping address";
  span.append(btn, p1);

  var break8 = document.createElement("br");

  var input6 = document.createElement("input");
  input6.setAttribute("id", "submit_add");
  input6.setAttribute("type", "submit");
  input6.value = "SHIP TO THIS ADDRESS";

  form.append(
    label1,
    break1,
    input1,
    break2,
    input2,
    break3,
    label3,
    break4,
    input3,
    break5,
    input4,
    break6,
    input5,
    break7,
    span,
    break8,
    input6
  );
  document.querySelector("#shippingAddress").append(head, form);
  
  //this will delete the previous address at the index and stores the new address
  document.querySelector("#form").addEventListener("submit", function () {
    deleteAddress(ele, index);
    addAddress();
  });
}


//this will set a new local storage finalAddress and get us to the payments page
function getAddress(ele){
 var finalAddress=[];
 finalAddress.push(ele);
 localStorage.setItem("finalAddress",JSON.stringify(finalAddress));
 window.location.href="payment.html";
}


//this is temperory data which is used for showing cart items in products
var cartBag = [
  {
    img:
      "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/6/5/65107430000_1.jpg",
    name: "Calvin Klein CK one for Women & Men Eau De Toilette",
    size: "200ml",
    quantity: 1,
    strikedOffPrice: 4750,
    price: 4513,
  },
  {
    img:
      "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/6/5/65107430000_1.jpg",
    name: "Calvin Klein CK one for Women & Men Eau De Toilette",
    size: "200ml",
    quantity: 1,
    strikedOffPrice: 4750,
    price: 4513,
  },
 
];


localStorage.setItem("myCartData", JSON.stringify(cartBag));

// this cartProducts array get the data of products which are added in cart from localStorage "mycartData"
var cartProducts = JSON.parse(localStorage.getItem("myCartData")) || [];

document.querySelector("#totalProducts>p").innerText =
  cartProducts.length + "Items in your Bag";
document.querySelector("#totalProducts>p").style.marginLeft = "10px";

// this display() function show the cart items in cartProducts div
display(cartProducts);

function display(productsData) {
  document.querySelector("#cartProducts").innerHTML = "";
  productsData.forEach(function (ele,index) {
    var card = document.createElement("div");
    card.setAttribute("class", "card");

    var image = document.createElement("img");
    image.setAttribute("src", ele.img);

    var details = document.createElement("div");
    details.setAttribute("class", "details");

    var btn = document.createElement("button");
    btn.innerText = "delete";
    btn.style.height="30px";
    btn.style.marginTop="10px"
    btn.style.marginRight="5px"
    btn.addEventListener("click", function () {
      deleteProduct(ele, index);
    });


    var name = document.createElement("p");
    name.innerText = ele.name;

    var size = document.createElement("p");
    size.innerText = ele.size;

    var line = document.createElement("p");
    line.setAttribute("class", "line");

    var quant_prices = document.createElement("div");
    quant_prices.setAttribute("class", "quant_prices");

    var quant = document.createElement("p");
    quant.innerText = "Qty:" + ele.quantity;

    var prices = document.createElement("div");
    prices.setAttribute("class", "prices");

    var strikedPrice = document.createElement("h5");
    strikedPrice.innerText = "₹" + ele.strikedOffPrice;
    strikedPrice.style.textDecoration = "line-through";
    strikedPrice.style.color = "grey";

    var price = document.createElement("h3");
    price.innerText = "₹" + ele.price;

    prices.append(strikedPrice, price);

    quant_prices.append(quant, prices);

    details.append(name, size, line, quant_prices);

    card.append(image, details,btn);

    document.querySelector("#cartProducts").append(card);
  });
}

//this function is used for deleting an item from cart
function deleteProduct(ele,index)
{
    cartProducts.splice(index,1);
    localStorage.setItem("cartList",JSON.stringify(cartProducts));
    display(cartProducts);
    
}

//this subTotal function will give the total price of cart items
var subTotal = cartProducts.reduce(function (acc, ele) {
  return acc + ele.price * ele.quantity;
}, 0);

localStorage.setItem("subTotal",subTotal);

document.querySelector("#subTotal").innerText = "₹" + subTotal;

// this is for checking shipping charges
var shippingCharge = 0;
if (subTotal > 499) {
  document.querySelector("#shipCharge").innerText = "free";
  shippingCharge = 0;
} else {
  document.querySelector("#shipCharge").innerText = 50;
  shippingCharge = 50;
}

localStorage.setItem("shippingCharge",shippingCharge);

var grandTotal = subTotal - shippingCharge - discountPoints;

// this is for checking disocunt points are used or not
var discountPoints= localStorage.getItem("discPrice")||0;

document.querySelector("#discount").innerText = discountPoints;

var grandTotal = subTotal - shippingCharge - discountPoints;//calculating overall amount


var count = localStorage.getItem("dis") || 0;
localStorage.setItem("dis", count);

//this is for getting discount if apply button is clicked and calucalting grandTotal
function discount() {
  count++;
  if (count % 2 != 0) {
    discountPoints = 20;
    document.querySelector("#discount").innerText = discountPoints;
    localStorage.setItem("discPrice",discountPoints)
    grandTotal = subTotal - shippingCharge - discountPoints;
    localStorage.setItem("grandTotal",grandTotal);
    document.querySelector("#grandTotal").innerText = "₹" + grandTotal;
  } else {
    count = 0;

     discountPoints = 0;
     document.querySelector("#discount").innerText = discountPoints;
     localStorage.setItem("discPrice",discountPoints)
    grandTotal = subTotal - shippingCharge - discountPoints;
    document.querySelector("#grandTotal").innerText = "₹" + grandTotal;
    localStorage.setItem("grandTotal",grandTotal);
   
  }
  localStorage.setItem("dis", count);
}



//this is for showing the grand Total value
document.querySelector("#grandTotal").innerText = "₹" + grandTotal;
localStorage.setItem("grandTotal",grandTotal);

