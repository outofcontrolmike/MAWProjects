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

//Array of rocket images
var galleryPics = ["images/falcon.jpg", "images/launcherone.gif", "images/otherRocket.jpg", "images/rocket.gif"];
var galleryId = ["0", "1", "2", "3"];

//#region Variables 
var rocketReport; // Used in the rocketRender - will eventually be turned into response data as a string
var x; //Variable x clears the timer 
var launchInfoRow = document.getElementById("launchRow"); 

// This will instert info into the heading of each rocket launch
var myHeading = document.getElementById("myHeading");

// variables that will eventually display launch info
var pageLoadRequest = window;
var falconRequest = document.getElementById("falcon"); // grabs the falcon button - Launch info should swap for falcon
var launcheroneRequest = document.getElementById("launcherone"); // grabs launcherone button - just like previous
var arianeRequest = document.getElementById("ariane"); // grabs ariane button - and again
var defaultRequest = document.getElementById("nextFive"); // grabs the nextFive button - This will display the oringinal 
var launchObject;

//#endregion

//Events that are supposed to insert the API info into a certain div
falconRequest.addEventListener("click", loadFalcon); // When Falcon button is clicked - loadFalcon is run
launcheroneRequest.addEventListener("click", loadLauncherOne); // when Launcher one is clicked - loadLauncherOne is referenced
arianeRequest.addEventListener("click", loadAriane); // when ariane is clicked - loadAriane is ran
defaultRequest.addEventListener("click", loadLaunches);
pageLoadRequest.addEventListener("load", launchDisplay);



var httpRequest = new XMLHttpRequest(); // creates a variable that makes a  HMLHttpRequest  it will request data from where it's sent

function launchDisplay()
{
    httpRequest.open("get", "https://launchlibrary.net/1.4/launch?next=5?");
    httpRequest.send();
    myHeading.innerHTML = "<h1>Next Launches<h1>";
    httpRequest.onreadystatechange = rocketRender;
}

// function that displays original 5 launches
function loadLaunches() 
{
    httpRequest.open("get", "https://launchlibrary.net/1.4/launch?next=5?");
    httpRequest.send();
    myHeading.innerHTML = "<h1>Upcoming Launches<h1>";
    httpRequest.onreadystatechange = rocketRender();
    document.getElementById('rocketImage').src = galleryPics[3];
}


// function that switches to next five from falcon
function loadFalcon() 
{
    httpRequest.open("get", " https://launchlibrary.net/1.4/launch?next=5&name=falcon"); //specifies the type of request, get's the info from API
    httpRequest.send(); // Sends the request string to the server
    myHeading.innerHTML = "<h1>Next Falcon Launches<h1>";
    httpRequest.onreadystatechange = rocketRender(); //When the status of XMLHttpRequest is finished it will run to rocketRender
    document.getElementById('rocketImage').src = galleryPics[0];
  
}

// function that swithces to next launches form launcherone 
function loadLauncherOne() 
{
    httpRequest.open("get", "https://launchlibrary.net/1.4/launch?name=launcherone&next=5");
    httpRequest.send();
    myHeading.innerHTML = "<h1>Next LauncherOne Launches<h1>";
    httpRequest.onreadystatechange = rocketRender(); // This will run rocketRender
    document.getElementById('rocketImage').src = galleryPics[1];
}

//function that swithces to launches from ariane
function loadAriane() // same as above but for ariane
{
    httpRequest.open("get", "https://launchlibrary.net/1.4/launch?name=ariane&next=5");
    httpRequest.send();
    myHeading.innerHTML = "<h1>Next Ariane Launches<h1>";
    httpRequest.onreadystatechange = rocketRender();
    document.getElementById('rocketImage').src = galleryPics[2];
}


function rocketRender() {
    if (httpRequest.readyState === 4 && httpRequest.status === 200) // this only runs if the readyStae of the request client is Done === 4.  :)
    {
        rocketReport = httpRequest.responseText;
        console.log(rocketReport);
        launchObject = JSON.parse(rocketReport); 
        console.log(launchObject.launches[0].name);
        renderHTML(launchObject);
        timer(launchObject);
    }

    //Create timer
    function timer(launchObject) // Timer function that will run when launchObject is passed
    {
        var countdown = document.getElementById('countdown');
        clearInterval(x);

        // Set the date we're counting down to
        countDownDate = new Date(launchObject.launches[0].net).getTime();

        // Update the count down every 1 second
        var x = setInterval(function () {

            // Get todays date and time
            var now = new Date().getTime();

            // Find the distance between now and the count down date
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display the result in the element with id="demo"
            countdown.innerHTML = "Countdown Until Next Launch - " + days + "d " + hours + "h " +
                minutes + "m " + seconds + "s ";

            // If the count down is finished, write some text 
            if (distance < 0) {
                clearInterval(x);
                countdown.innerHTML = "Rocket Launched";
            }
        }, 1000);

    }

    function renderHTML(data) {
        launchInfoRow.innerHTML = "";
        var htmlString = "";
        for (i = 0; i < data.launches.length; i++) {
            htmlString += "<p>" + data.launches[i].net + data.launches[i].name + "</p>";
        }

        launchInfoRow.insertAdjacentHTML("beforeend", htmlString);
    }
}