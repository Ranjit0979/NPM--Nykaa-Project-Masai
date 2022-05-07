var brands =[
    {
        Image:"https://images-static.nykaa.com/uploads/2f666b70-200a-4c37-bb16-07e4a4516990.jpg?tr=w-300,cm-pad_resize",
        off: 'Up To 20% Off'
    },
    {
        Image:"https://images-static.nykaa.com/uploads/e1c1ca1f-9a70-4185-8abb-11fe856c96fa.png?tr=w-300,cm-pad_resize",
        off: 'Up To 20% Off'
    },
    {
        Image:"https://images-static.nykaa.com/uploads/3a1c4def-522f-47bd-8504-14e4c0dc34c2.jpg?tr=w-300,cm-pad_resize",
        off: 'Up To 30% Off'
    },
    {
        Image:"https://images-static.nykaa.com/uploads/8b5747a1-f602-4ea1-8262-6a00cee73315.png?tr=w-300,cm-pad_resize",
        off: 'Up To 20% Off'
    },
    
    
    {
        Image:"https://images-static.nykaa.com/uploads/a2ce7ddb-3a12-4fa3-9f82-ee1790e3c0ed.jpeg?tr=w-600,cm-pad_resize",
        off: 'Up To 20% Off'
    },
    {
        Image:"https://images-static.nykaa.com/uploads/229dbdac-41d9-4e42-85c2-0653d219b6f9.jpeg?tr=w-600,cm-pad_resize",
        off: 'On Rs.1299+'
    },
    {
        Image:"https://images-static.nykaa.com/uploads/478a93f4-cb58-48eb-9068-10bbc180b7af.jpeg?tr=w-600,cm-pad_resize",
        off: 'clin skincare'
    },
    {
        Image:"https://images-static.nykaa.com/uploads/9fe362d7-175c-494b-a9d6-81f573d343be.jpg?tr=w-600,cm-pad_resize",
        off: 'Buy any 2 Get 1 Free'
    },

];

function display(data){
    data.forEach(function(ele){

        var card =document.createElement('div');
        card.className ='card';
    
        var image = document.createElement('img');
        image.src = ele.Image;

        var off = document.createElement('p');
        off.innerText = ele.off;

        card.append(image,off);
        console.log(card);

        document.querySelector(".brandcontainer").append(card)
    })
}

display(brands);


// categories

var categories =[
    {
        Image:"https://images-static.nykaa.com/uploads/523d7014-5e8b-4eee-a2dc-d237d3099ea3.png?tr=w-300,cm-pad_resize",
        category:'cleansers'
    },
    {
        Image:"https://images-static.nykaa.com/uploads/2e100c07-4244-4492-8e07-dcea640d72cc.png?tr=w-300,cm-pad_resize",
        category: 'Toners'
    },
    {
        Image:"https://images-static.nykaa.com/uploads/01764611-c997-477c-8dcb-cb59a832a9c1.png?tr=w-300,cm-pad_resize",
        category: 'serums'
    },
    {
        Image:"https://images-static.nykaa.com/uploads/5cb9240c-dcb6-4611-afda-9bdca7e83da0.png?tr=w-300,cm-pad_resize",
        category: 'moisturizers'
    },
    
    
    {
        Image:"https://images-static.nykaa.com/uploads/827cc6f1-aac8-4b26-8783-dcc0e17f744a.png?tr=w-300,cm-pad_resize",
        category: 'night creams'
    },
    {
        Image:"https://images-static.nykaa.com/uploads/99836a18-3459-485c-889b-b610d828a743.png?tr=w-300,cm-pad_resize",
        category: 'masks'
    },
    {
        Image:"https://images-static.nykaa.com/uploads/4619d014-4c2d-4836-a89a-fdcdca3c746c.png?tr=w-300,cm-pad_resize",
        category: 'sunscreens'
    },
    {
        Image:"https://images-static.nykaa.com/uploads/d979218d-69fd-4a74-8847-87a5e733d7ef.jpg?tr=w-300,cm-pad_resize",
        category: 'lotions'
    },

]


function categories_display(data){
    data.forEach(function(ele){

        var card =document.createElement('div');
        card.className ='ct_card';
    
        var image = document.createElement('img');
        image.src = ele.Image;

        // var off = document.createElement('p');
        // off.innerText = ele.off;

        card.append(image);
        console.log(card);

        document.querySelector("#categories").append(card)
        console.log(card);
    })
}

categories_display(categories)


// scroll

// Top
var left = document.querySelector('.fa-angle-left')
left.addEventListener('click',function(event){
    var imgages = document.querySelector('#top');
    imgages.scrollBy(-1700,0)
})

var right = document.querySelector('.fa-angle-right')
right.addEventListener('click',function(event){
    var imgages = document.querySelector('#top');
    imgages.scrollBy(1700,0)
})


////shop by skin concern

var left = document.querySelector('.skinconcern>.fa-angle-left')
left.addEventListener('click',function(event){
    var imgages = document.querySelector('.concern_card');
    imgages.scrollBy(-1700,0)
})

var right = document.querySelector('.skinconcern>.fa-angle-right')
right.addEventListener('click',function(event){
    var imgages = document.querySelector('.concern_card');
    imgages.scrollBy(1700,0)
})


///////LUXE INDULGENCES
var left = document.querySelector('.luxe>.fa-angle-left')
left.addEventListener('click',function(event){
    var imgages = document.querySelector('.luxe_card');
    imgages.scrollBy(-1700,0)
})

var right = document.querySelector('.luxe>.fa-angle-right')
right.addEventListener('click',function(event){
    var imgages = document.querySelector('.luxe_card');
    imgages.scrollBy(1700,0)
})



///////////only at nykaa
var left = document.querySelector('.atnykaa>.fa-angle-left')
left.addEventListener('click',function(event){
    var imgages = document.querySelector('.atnykaa>div');
    imgages.scrollBy(-1700,0)
})

var right = document.querySelector('.atnykaa>.fa-angle-right')
right.addEventListener('click',function(event){
    var imgages = document.querySelector('.atnykaa>div');
    imgages.scrollBy(1700,0)
})
