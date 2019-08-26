// Connect to an API

// create xmlHttp object
    //get URL
        //Create a function for JSON
            // Send the request




var weather = document.createElement('p');
weather.setAttribute("id", "Div1");

var weatherInfo = document.getElementById('Div1');


var request = new XMLHttpRequest();

request.open('GET', 'https://api.darksky.net/forecast/b07431fb31f0d5dce323ac70c78103d1/37.1792956,-93.2923', true);

request.onload = function () {
    //Access JSON
    var data = JSON.parse(this.response)
   console.log(data);

   weatherInfo.innerHTML = data;
   

}
request.send();