//All functionallity shoudl be for carousel
var names = ["Grand Canyon National Park", "Bryce Canyon National Park", 
"Yosemite National Park", "Wilson's Creek National Park"];

var desc = ['Believe it or not I was only at this park for about 1 hour and a half.  My buddy and I drove from Las Vegas over midnight to see this place at the crack of dawn.  I won’t ever forget driving into the national park from the interstate.  It was about an hour drive North of the interstate near Falstaff.   This is definitely a place I want to venture back out to and further into.',

'This was the coldest place I’ve ever camped and hiked at.  There were numerous trails and so many arches to see and play around with. This was my favorite national park that I’ve been to.',

'This place was absolutely stunning to drive through. My friend and I were going to camp here but the park was overcrowded and we would have had to camp about an hour and a half away from the park.  From what I remember, the temperature was very hot in the valley but there were natural rivers that felt ice cold that I could have swam in if needed.',


'This place is actually very close to my home town.  It is a very historical spot for the Civil war.  I like to go here during the cooler months to enjoy the nature and the history of the place.  This makes it a great place to ride a bike as well.'
];

//Make an array for all the images, figure out how to access the images folder form this js file
//Should be able to use indexes from this array relay the information to each albumn function
var images = [''];


// Grab id's for replacing albumn information

let name,description;

name = document.getElementById('trailName');
description = document.getElementById('trailInfo');

var grandAlbum = document.getElementById("grandCanyonImg").addEventListener('click',grandCanyonInfo);
var bryceAlbum = document.getElementById("bryceImg").addEventListener('click',bryceCanyon);
var yosemiteAlbum = document.getElementById("yosemiteImg").addEventListener('click',yosemite);
var wilsonsAlbum = document.getElementById("wilsonsImg").addEventListener('click',wilsonsCreek);

//replace album information
function grandCanyonInfo(){

    name.innerHTML = names[0];
    description.innerHTML = desc[0];
    console.log('test');
    //Figure out how to set images in carrousel through DOM Manipulation
}

function bryceCanyon(){
    name.innerHTML = names[1];
    description.innerHTML = desc[1];
    console.log('test');
}

function yosemite(){
    name.innerHTML = names[2];
    description.innerHTML = desc[2];
    console.log('test');
}

function wilsonsCreek(){
    name.innerHTML = names[3];
    description.innerHTML = desc[3];
    console.log('test');
}
