//functions for my blog

//Alerts
//onload(alert("Testing 123"));

//changing nav bar
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  function setRandomColor() {
    $("#colorpad").css("background-color", getRandomColor());
  }

  //change opacity of background
  function cardHover(){
    var changeMe = document.getElementById('changeOpacity');
    changeMe.style.backgroundColor = "white";
  }