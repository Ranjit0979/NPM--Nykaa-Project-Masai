var singleProduct = [
  { productId: 1234 }, // for cart======================>
  { productImage: [1, 2, 3, 4, 5, 6] },
  { productName: "Nykaa Fashion Top" },
  { productCatagory: "Makeup" },
  { brandName: "xyz" },
  { productQuantity: 2 }, // for cart======================>
  { rating: 4 },
  { ratingCountTotal: 200 },
  { reviewTotal: 10 },
  { MRP: 200 }, //  for cart ======================>
  { OfferPrice: 150 }, // for cart======================>
  { discount: 45 }, // for cart %======================>
  { taxInfo: "Inclusive of all taxes" },
  { featured: true },
  { bestSeller: true },
  { new: true },
];

localStorage.setItem("myCartData", JSON.stringify(cartBag)); //===================>
JSON.parse(localStorage.getItem("myCartData")); //======================>

// Storage Name will be mycartData

var garments = [];
var lipstick = [];
var makeup = [];
var skin = [];
var hair = [];
var luxe = [];
var personal_care = [];
var fragrance = [];
var appliance = [];
var welness = [];
var mom_baby = [];
var mens = [];
