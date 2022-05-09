var lis_f = [
  [
    "Who are we?",
    "Careers",
    "Authenticity",
    "Press",
    "Testimonials",
    "Nykaa CSR",
    "Responsible Disclosure",
    "Investor Relations",
  ],
  [
    "Contact Us",
    "Frequently asked questions",
    "Store Locator",
    "Cancellation & Return",
    "Shipping & Delivery",
    "Sell on Nykaa",
  ],
  ["Beauty Book", "Nykaa TV", "Nykaa Network", "Buying Guides"],
  [
    "Offer Zone",
    "New Launches",
    "Nykaa Man",
    "Nykaa Fashion",
    "Nykaa Pro",
    "Nykaa femina beauty awards winners 2019",
    "Sitemap",
  ],
  [
    "Makeup",
    "Skin",
    "Hair",
    "Personal Care",
    "Appliances",
    "Mom and Baby",
    "Wellness",
    "Fragrance",
    "Natura",
    "Luxe",
  ],
];

var url = [["#"], ["#"], ["#"], ["#"], ["#"]];

var head = ["NYKAA", "Help", "Inspire Me", "Quick Links", "Top Categories"];

for (var i = 0; i < head.length; i++) {
  var box_bottom_grey = document.createElement("div");
  box_bottom_grey.setAttribute("class", "boxBottomGrey");

  var box_bottom_grey_in = document.createElement("div");
  box_bottom_grey_in.setAttribute("class", "boxBottomGreyIn");

  var h3 = document.createElement("span");
  h3.innerText = head[i];
  h3.style.color = "white";
  h3.style.cursor ="pointer";
  var ul = document.createElement("div");

  lis_f[i].forEach(function (elem) {
    var li = document.createElement("div");
    var ancr = document.createElement("a");
    ancr.style.display="block";
    ancr.setAttribute("href", url[i][0]);
    ancr.innerText = elem;
    ancr.style.textDecoration = "none";
    ancr.style.color = "white";
    li.append(ancr);
    ul.append(li);
  });

  box_bottom_grey_in.append(h3, ul);
  box_bottom_grey.append(box_bottom_grey_in);
  document.querySelector("#greyNavIn").append(box_bottom_grey);
}
