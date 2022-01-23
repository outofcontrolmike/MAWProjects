import React from 'react';

//Main timeline component
export default function Timeline() {

    let currentAge, yearContainer = "";
    let birthYear = 1996;
    let startAge = 5;


    function loadVariables() {
      yearContainer = document.getElementById('printYears');
      positives.forEach(item => {
        generateYear(item);
      })
    }

    setTimeout(loadVariables, 1000);

    let positives = ["I was finally somewhere actually learning skills to survive in society."," I realized that some people have to work two jobs to make ends meet.","I learned what it was like to make neighborhood friends.","People were very nice to me, even if I didn’t have much to offer.","People may move away but there are chances that you can see them again.","Glad I had friends to stay busy with at the time.","I learned about what I didn’t want to become when I grew up.","Some people really care more than they have to.","I’m very happy I was able to have a great time with Jaime","Life sometimes has a mysterious way of turning around.","Started learning the value of money","I drove and bought my first car - Mercury Sable 1997"," I was staying super busy and experiencing a lot of memories.","I was able to move onto continuing my education. ","I learned to let go, even if it does hurt someone else.","I figured out who my true friends were"," I learned that taking a vacation from life is very important.","I really enjoyed the chance to feel closer to my family."," I started noticing that I could motivate myself to do what I thought was impossible.","I really got to know Jessica.","I started a life with Jessica","I was working towards a lot of goals and was becoming responsible."," I found a job related to my career choice.  ","I started to see things that I did not like about myself.  Change is always good.","I learned how much Jessica meant to me through the crazy year of 2021."]
    //Function for Determining current age

    function generateYear(positive) {

      
      let year = document.createElement('span');
      year.className = "ui text large";
      year.id = "timelineYear";
      year.innerHTML = birthYear;

      let age = document.createElement('span');
      age.className = "ui text large";
      age.id = "timelineAge";
      age.innerHTML = startAge;

      let positiveText = document.createElement('p');
      positiveText.id = "timelinePositive";
      positiveText.className = "ui text large";

      console.log(positive, "positive");

      positiveText.innerHTML = positive;
      yearContainer.append(year,age,positiveText);

      //increment year
      birthYear++;
      startAge++;
    }

  return (
  <div className='ui' id="timelineContainer">
  <div className='ui piled segment container raised' id="timeline">
      <div>
      <span className='ui text huge red'>Michael's Timeline -> </span>
    <span className='ui text huge blue' id="currentAge">Age: 30</span>
      </div>
      <hr></hr>

      <div id="printYears">
          <span className='ui text large' id="timelineYear">
            1991-1995
          </span>
          <span className='ui text large' id="timelineAge">0-4</span>
          <p id="timelinePostive" className='ui text large'>
          I survived the first 4 years of my life down at the 'Farm'
          </p>
      </div>
  </div>
  </div>
  )
}
