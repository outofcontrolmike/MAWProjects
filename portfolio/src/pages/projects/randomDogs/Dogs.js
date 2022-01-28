import React from 'react';
// - https://dog.ceo/dog-api/
export default function Dogs() {

  function handleClick() {
    let url = "https://dog.ceo/api/breeds/image/random";
    fetch(url).then((response) => response.json())
    .then((dog) => {
      console.log("dog", dog);
      document.getElementById('dogImage').src = dog.message;
      
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  };

  return <div style={{backgroundColor: "white", height: "100vh", color: "black"}}>
       <span className='ui text massive black centered align"'>Random Dog Viewer</span>
       <hr></hr>
      <div className='dogContainer'>
          <img id="dogImage" src="" alt="dog image">

          </img>
      </div>
        <button className='ui button huge blue' onClick={handleClick}>Grab a random Dog</button>
  </div>;
}
