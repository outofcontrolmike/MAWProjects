/*
    Project: Rocket Launch API
    Purpose: Access data from a Rocket Launch schedule API
    Date: 11/02/2020
    Author: Michael Wilson
*/

//Functionallity List
/*
 1. Access the api by an Http request
 2. Manipulate that data and turn it into JSON Format
 3. Create a function that inserts replaces the html of the rocket launch card
 4. Function that loads data into the Launch table
 5. Function for the buttons (maybe pass in button id as a paramter?)

*/

//Onload events
window.addEventListener('load', nextFive);
//Event listeners
var btnDefault = document.getElementById('btnDefault').addEventListener('click', cardManip);
var btnOne = document.getElementById('btnOne').addEventListener('click', cardManip);
var btnTwo = document.getElementById('btnTwo').addEventListener('click', cardManip);
var btnThree = document.getElementById('btnThree').addEventListener('click', cardManip);
var btnFour = document.getElementById('btnFour').addEventListener('click', cardManip);

//Variables
var httpRequest = new XMLHttpRequest();

//api call for the next 5 luanches
function nextFive() {
    httpRequest.open("get","https://ll.thespacedevs.com/2.0.0/launch/upcoming/?limit=5");
    httpRequest.send();
    console.log(httpRequest);
    console.log(httpRequest.name);
    console.log('test');
}



//function for buttons
function buttonAction(btnId) {
    
}

//function for card manipulation
function cardManip() {
    console.log('hello/testing');
}

//function for buttons