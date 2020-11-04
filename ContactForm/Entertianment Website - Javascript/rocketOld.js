

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
    myHeading.innerHTML = "'<h1>Next Launches<h1>";
    httpRequest.onreadystatechange = rocketRender;

}

// function that displays original 5 launches
function loadLaunches() 
{
    httpRequest.open("get", "https://launchlibrary.net/1.4/launch?next=5?");
    httpRequest.send();
    myHeading.innerHTML = "<h1>Upcoming Launches<h1>";
    httpRequest.onreadystatechange = rocketRender;
    document.getElementById('ff7').src = galleryPics[3];
}


// function that switches to next five from falcon
function loadFalcon() 
{
    httpRequest.open("get", " https://launchlibrary.net/1.4/launch?next=5&name=falcon"); //specifies the type of request, get's the info from API
    httpRequest.send(); // Sends the request string to the server
    myHeading.innerHTML = "<h1>Next Falcon Launches<h1>";
    httpRequest.onreadystatechange = rocketRender; //When the status of XMLHttpRequest is finished it will run to rocketRender
    document.getElementById('ff7').src = galleryPics[0];
  
}


// function that swithces to next launches form launcherone 
function loadLauncherOne() 
{

    httpRequest.open("get", "https://launchlibrary.net/1.4/launch?name=launcherone&next=5");
    httpRequest.send();
    myHeading.innerHTML = "'<h1>Next LauncherOne Launches<h1>";
    httpRequest.onreadystatechange = rocketRender; // This will run rocketRender
    document.getElementById('ff7').src = galleryPics[1];
}

//function that swithces to launches from ariane
function loadAriane() // same as above but for ariane
{
    httpRequest.open("get", "https://launchlibrary.net/1.4/launch?name=ariane&next=5");
    httpRequest.send();
    myHeading.innerHTML = "'<h1>Next Ariane Launches<h1>";
    httpRequest.onreadystatechange = rocketRender;
    document.getElementById('ff7').src = galleryPics[2];
}

//function converts string into an object and accesses the first launch and name of it. 
function rocketRender() {
    if (httpRequest.readyState === 4 && httpRequest.status === 200) // this only runs if the readyStae of the request client is Done === 4.  :)
    {
        rocketReport = httpRequest.responseText; // stores response text in a variable
        console.log(rocketReport); // this logs the variable that holds response text
        launchObject = JSON.parse(rocketReport); // converts this string of data that is returned to an object that we can later access
        console.log(launchObject.launches[0].name); // accesses the array first value from the array and it's name value.

        renderHTML(launchObject);//Runs function we created for placing the data requested in your html
        timer(launchObject); // timer takes the info from launchObject
    }



    // Creating a timer - w3 Schools
    function timer(launchObject) // Timer function that will run when launchObject is passed
    {
        clearInterval(x); // Method that clears our timer incase there are no more launches

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
            document.getElementById("countdownSection").innerHTML ="Countdown Until Next Launch - " + days + "d " + hours + "h " +
                minutes + "m " + seconds + "s ";

            // If the count down is finished, write some text 
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("countdownSection").innerHTML = "Rocket Launched";
            }
        }, 1000);

    }


    function renderHTML(data) {
        launchInfoRow.innerHTML = ""; //Clears data from previous request
        var htmlString = "";//Sets an empty string where your launch data will be added

        for (i = 0; i < data.launches.length; i++) {//Loops through launches and adds each line to the empty string created
            htmlString += "<p>" + data.launches[i].net + data.launches[i].name + "</p>";
        } //end of for

        launchInfoRow.insertAdjacentHTML("beforeend", htmlString);//Inserts data to html element we want it in
    }
}