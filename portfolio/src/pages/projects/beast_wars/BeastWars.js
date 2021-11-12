export default function BeastWars() {
  //Create our characters array with Transfomer objects

  setTimeout(loadScript, 100);
  function loadScript() {
    // document.getElementById("here").innerHTML = "";
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

    // mainFunction(characters);

    //Variables
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

    //sort by Maxmials
    function sortMaximals() {
      var maximals = characters.filter(function (maximal) {
        return maximal.team === "Maximal";
      });
      document.getElementById("here").innerText = "";
      mainFunction(maximals);
    }

    function sortPredacons() {
      var predacons = characters.filter(function (predacon) {
        return predacon.team === "Predacon";
      });
      document.getElementById("here").innerText = "";
      mainFunction(predacons);
    }

    //***FUNCTIONS****//

    //Main Function
    //Accepts a sorted array
    //
    function mainFunction(sort) {
      //Determine which symbol to use
      for (var i = 0; i < sort.length; i++) {
        if (sort[i].team === "Maximal") {
          team = "maximal.jpg";
        } else {
          team = "predacon.jpg";
        }
        var htmlCode =
          '<div class="ui card  fluid">' +
          '<div class="ui slide masked reveal"><img class="visible content image" src="img/beastWars/' +
          sort[i].img +
          '"><img class="hidden content image" src="img/beastWars/' +
          sort[i].img2 +
          '"></div><div class="content"><span class="header">' +
          sort[i].name +
          '</span><div class="meta"><span class="date"> ' +
          sort[i].role +
          "</span></div> " +
          "<hr>" +
          ' <div class="description">' +
          "Animal: " +
          sort[i].animal +
          '</div><div class="description">' +
          "Personallity: " +
          sort[i].personallity +
          '</div></div><div id="symbolColor" class="extra content"><i class=""><img style="height:25px; width:25px;" src="img/beastWars/' +
          team +
          '"></i><button style="float:right;"'; //class="button ui small orange">Transformation</button></div></div>';
        var info = (document.getElementById("here").innerHTML += htmlCode);
      } //end for
    }
    mainFunction(characters);
  }

  return (
    <div>
      {/* //main Content*/}
      <div className="ui raised very padded" id="main"></div>
      <div className="ui ">
        <div className="container">
          <p>
            <span className="ui text massive center">Beast Wars</span>
          </p>
          <hr />
          <h2 className="text center ui">Sorting options</h2>
          <button className="button ui red large redBtn" onclick="sortByName()">
            Sort by Alphabetical
          </button>
          <button
            className="button ui blue large blueBtn"
            onclick="sortMaximals"
          >
            Maximals Only
          </button>
          <button
            className="button ui yellow large yellowBtn"
            onclick="sortPredacons()"
          >
            Predacons Only
          </button>
          <button
            className="button ui green large greenBtn"
            onclick="sortByAnimal()"
          >
            Sort by Animal
          </button>
          <button
            className="button ui black large blackBtn"
            onclick="sortRandom()"
          >
            Sort Randomly
          </button>
          <i className="map signs icon huge float right"></i>
        </div>
      </div>
      <div className="ui link cards four stackable" id="here">
        {/*Print cards here */}
      </div>
    </div>
  );
}
