//Beast wars functional component
export default function BeastWars() {
  

  //Call to load all the functions for page
  setTimeout(loadScript, 100);

  //Loads all of our functionallity
  function loadScript() {
     document.getElementById("here").innerHTML = "";
         
     //Assigning event listerns to sorting buttons
     function assignEventListeners() {

     let sortMaximalsBtn = document.getElementById('sortMaximals');
     sortMaximalsBtn.addEventListener("click", () => {sortMaximals(characters)});

     let sortPredaconsBtn = document.getElementById('sortPredacons');
     sortPredaconsBtn.addEventListener("click", () => {sortPredacons(characters)});

     let sortAlphaBtn = document.getElementById('sortAlpha');
     sortAlphaBtn.addEventListener("click", () => {sortByName(characters)});

     let sortRandomBtn = document.getElementById('sortRandom');
     sortRandomBtn.addEventListener("click", () => {sortRandom(characters)});

     let sortAnimalBtn = document.getElementById('sortAnimal');
     sortAnimalBtn.addEventListener("click", () => {sortByAnimal(characters)});
    }

    assignEventListeners();

    //Transformers Array
    var characters = [
      //maximals
      {
        name: "Optimus Primal",
        team: "Maximal",
        animal: "Gorilla",
        personallity: "Well rounded behavior",
        role: "Maximal Leader",
        img: "optimus1.jpg",
        img2: "optimus2.jpg",
      },

      {
        name: "Rhinox",
        team: "Maximal",
        animal: "Rhinoceros",
        personallity: "Always lookingout for the team",
        role: "Systems Admin",
        img: "rhinox1.jpg",
        img2: "rhinox2.jpg",
      },

      {
        name: "Cheetor",
        team: "Maximal",
        animal: "Cheetah",
        personallity: "In over his head",
        role: "Scouter",
        img: "cheetor1.jpg",
        img2: "cheetor2.jpg",
      },

      {
        name: "Rattrap",
        team: "Maximal",
        animal: "Rat",
        personallity: "very cocky",
        role: "Bomb specialist / spy",
        img: "rat1.jpg",
        img2: "rat2.jpg",
      },

      {
        name: "Dinobot",
        team: "Maximal",
        animal: "Velociraptor",
        personallity: "Honerable",
        role: "Second in command",
        img: "dino1.jpg",
        img2: "dino2.jpg",
      },

      {
        name: "Tigatron",
        team: "Maximal",
        animal: "White Tiger",
        personallity: "Trustworthy",
        role: "Backup spy",
        img: "tiga1.jpg",
        img2: "tiga2.jpg",
      },

      {
        name: "Airazor",
        team: "Maximal",
        animal: "Peregrine falcon",
        personallity: "Restoring",
        role: "Navigator",
        img: "air1.jpg",
        img2: "air2.jpg",
      },

      {
        name: "Silverbolt",
        team: "Maximal",
        animal: "Timberwolf-golden eagle condor",
        personallity: "Galliant",
        role: "Melee Fighter",
        img: "silver1.jpg",
        img2: "silver2.jpg",
      },

      {
        name: "Depth Charge",
        team: "Maximal",
        animal: "Manta ray",
        personallity: "Egalitarian",
        role: "Defender",
        img: "depth1.jpg",
        img2: "depth2.jpg",
      },

      //Predacons
      {
        name: "Megatron",
        team: "Predacon",
        animal: "Dinosaur",
        personallity: "Meniachal",
        role: "Predacon Leader",
        img: "megatron11.jpg",
        img2: "megatron1.jpg",
      },

      {
        name: "Waspinator",
        team: "Predacon",
        animal: "Wasp",
        personallity: "Deceptable",
        role: "Spy",
        img: "wasp1.jpg",
        img2: "wasp2.jpg",
      },

      {
        name: "Scorponok",
        team: "Predacon",
        animal: "Scorpion",
        personallity: "Sneaky",
        role: "Missle Launcher",
        img: "scorp1.jpg",
        img2: "scorp2.jpg",
      },

      {
        name: "Terrosaur",
        team: "Predacon",
        animal: "Pterodactyl",
        personallity: "Betraying",
        role: "Scout",
        img: "p1.jpg",
        img2: "p2.jpg",
      },

      {
        name: "Tarrantulas",
        team: "Predacon",
        animal: "Tarantula",
        personallity: "Mad Scientist",
        role: "Predacon Leader",
        img: "tara1.jpg",
        img2: "tara2.jpg",
      },

      {
        name: "Blackarachnia",
        team: "Predacon",
        animal: "Black Widow Spider",
        personallity: "Trickster",
        role: "Maximal in Disguise",
        img: "black1.jpg",
        img2: "black2.jpg",
      },

      {
        name: "Inferno",
        team: "Predacon",
        animal: "Fire Ant",
        personallity: "Obnoxious",
        role: "Cheif Commander",
        img: "inferno1.jpg",
        img2: "inferno2.jpg",
      },

      {
        name: "Quickstrike",
        team: "Predacon",
        animal: "Scorpion / Cobra",
        personallity: "Loud",
        role: "Fighter",
        img: "quick1.jpg",
        img2: "quick2.jpg",
      },

      {
        name: "Rampage",
        team: "Predacon",
        animal: "Red King Crab",
        personallity: "Insane",
        role: "Conscript",
        img: "rampage1.jpg",
        img2: "rampage2.jpg",
      },
    ];

    //User for Transformer Icon
    var team = "";

    //Sort by Random
    function sortRandom() {
      document.getElementById("here").innerText = "";
      var shuffleArray = characters;
      shuffleArray.sort(() => Math.random() - 0.5);
      mainFunction(shuffleArray);
    }
    //Sort by name
    function sortByName() {
      var name = characters.sort((a, b) => a.name.localeCompare(b.name));
      document.getElementById("here").innerHTML = "";
      mainFunction(name);
    }
    //Sort by animal
    function sortByAnimal() {
      var animals = characters.sort((a, b) => a.animal.localeCompare(b.animal));
      document.getElementById("here").innerText = "";
      mainFunction(animals);
    }
    
    //Sort predacons
     function sortPredacons() {
      var predacons = characters.filter(function (predacon) {
        return predacon.team === "Predacon";
      });
      document.getElementById("here").innerText = "";
      mainFunction(predacons);
    }

    //sort by Maxmials
    function sortMaximals() {
      console.log("working")
      var maximals = characters.filter(function (maximal) {
        return maximal.team === "Maximal";
      });
      document.getElementById("here").innerText = "";
      mainFunction(maximals);
    }

    //Handles Creation of Transformer card accepts a type of sort
    function mainFunction(sort) {
      //Determine which symbol to use
      for (var i = 0; i < sort.length; i++) {
        if (sort[i].team === "Maximal") {
          team = "maximal.jpg";
        } else {
          team = "predacon.jpg";
        }
        var htmlCode =
          '<div class="ui card" id="beastCard">' +
          '<div class="ui slide masked reveal"><img class="visible content image" id="beastImage" src="img/beastWars/' +
          sort[i].img +
          '"><img class="hidden content image" id="beastImage"  src="img/beastWars/' +
          sort[i].img2 +
          '"></div><div class="content"><span class="header">' +
          sort[i].name +
          '</span><div class="meta"><span class="date"> ' +
          sort[i].role +
          "</span></div> " +
          '<hr id="beastHr">' +
          ' <div class="description">' +
          "Animal: " +
          sort[i].animal +
          '</div><div class="description">' +
          "Personallity: " +
          sort[i].personallity +
          '</div></div><div id="symbolColor" class="extra content"><i class=""><img style="height:25px; width:25px;" src="img/beastWars/' +
          team +
          '"></i><button style="float:right;"';
        var info = (document.getElementById("here").innerHTML += htmlCode);
      } //end for
    }



    //Call for Initial Display of Transformers
    mainFunction(characters);     
  }

  return (
    <div className="ui grid">
    <div className="ui" id="beastBackground">

      {/* //main Content*/}
      <div className="ui" id="main"></div>
        <div className="ui container fluid padded stackable" id="beastMenu">
          <p id="beastP">
           <span className="ui text huge" id="beastP" style={{textAlign: "center"}}>Beast Wars</span>
          </p>
          <div className="ui center aligned container" id="beastContainer">
          <button className="button ui red medium redBtn"
                id="sortAlpha"
                      >
            Sort by Alphabetical
          </button>
          <button
            className="button ui blue medium blueBtn"
            id="sortMaximals"
          >
            Maximals Only
          </button>
          <button
            className="button ui yellow medium yellowBtn"
            id="sortPredacons"
          >
            Predacons Only
          </button>
          <button
            className="button ui green medium greenBtn"
            id="sortAnimal"
          >
            Sort by Animal
          </button>
          <button
            className="button ui black medium blackBtn"
            id="sortRandom"
          >
            Sort Randomly
          </button>
          <a className="ui" id="bIcon" data-tooltip="Navigate back to projects" data-inverted="" data-variation="large" href="/projects">
          <i className="map signs icon huge black" style={{marginBottom: "1rem"}}></i>
          </a>
            </div>
      </div>
      <div className="ui cards stackable"  style={{marginLeft: "2rem"}} id="here">
        {/*Print cards here */}
      </div>
      <div className="content">
      {/* <!--video here--> */}
      <div className="ui " style={{textAlign: "center", marginTop: "5rem", marginBottom:"5rem"}}>
      <iframe width="360" height="315"
src="https://www.youtube.com/embed/ffUXChZ13dE?autoplay=1&cc_load_policy=1"></iframe>
  </div>
    </div>
    </div>
</div>    
  );
}



