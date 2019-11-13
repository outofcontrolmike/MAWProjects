
//Array of images to print to fanArt div

var charImages = ['images/cecil.jpg','images/zidane.jpg', 'images/tifa.jpg', 'images/tidus.jpeg', 'images/squall.jpg', 'images/shadow.jpg', 'images/ramzda.jpg', 'images/quina.jpg', 'images/freya.jpg', 'images/cloud.jpeg'];

var charDescriptions = ['Cecil Harvey is the main protagonist of Final Fantasy IV, and, as such, is the only character to remain in the character\'s control for the entire duration of the game. Cecil is a unique character, as he is one of very few characters in the Final Fantasy series to change class, shedding his Dark Knight persona to become a Paladin. He is also possibly the darkest protagonist in the series so far, an anti-hero responsible committing atrocities in the name of his kingdom,before seeking redemption for his dark past.', 'Cloud Strife, the main character in Squaresoft\'s Final Fantasy VII, is a quiet EX SOLDIER. Cloud was born in the small mountainside town of Nibelheim, and was treated as an outcast by the other children in the village, making him become a loner. He believes himself generally superior to them, but wants to befriend a particular girl from the village named Tifa Lockhart . One day Tifa convinces her reluctant group of friends to climb Mt. Nibel to look for the spirit of Tifa\'s mother. Cloud hears of this plan and decides to follow the group of children. During the ascent, Tifa\'s friends abandon her one by one to run back towards Nibelheim leaving only Tifa and Cloud. A bridge carrying the two breaks and they fall down a section of the mountain. Tifa\'s father blames Cloud for the accident. After this, Cloud begins to see himself as weak and decides to join the Shinra Corporation\'s elite fighting unit SOLDIER to be able to protect Tifa and become as strong as its most legendary member, Sephiroth. He travels to the capital city of Midgar and enrolls in SOLDIER, but quickly fails out of the program, and is forced to become a lowly Shinra infantryman.', 'Freya Crescent is a playable character from Final Fantasy IX. She is Burmecian, a race of anthropomorphic rats who live in two cities, Burmecia and Cleyra. She hails from Burmecia, but left several years ago in search of her lost love, Sir Fratley. Zidane meets her in Lindblum just before the Festival of the Hunt.', 'Quina Quen is a playable character in Final Fantasy IX. S/he* is apparently a genderless Qu who specializes in blue magic, and loves eating frogs. Quina serves as comic relief, often failing in his/her eternal quest to consume new cuisine. S/he speaks in broken English, as all Qu do, and will often eat anything s/he sees. Quina\'s eating habits are one of his/her greatest skills, as Quina learns Blu Mag by consuming an enemy. ', 'Ramza Beoulve, also known as Ramza Lugria (ラムザ・ルグリア, Ramuza Ruguria?), is the main protagonist in Final Fantasy Tactics. He is a member of the respected House Beoulve. Ramza\'s father, Barbaneth Beoulve, was a Knight Gallant of the Fifty Year\'s War. Ramza has one sister, Alma, whom he loves dearly and is close to. Ramza also has two half-brothers, General Zalbaag of the Order of the Northern Sky, and Dycedarg, who serves directly under Duke Larg. ' , 'Shadow is an infamous mercenary, and according to Edgar, he is so cold he would "kill his best friend for the right price" (or "slit his mama\'s throat for a nickel" in the original release). Shadow has a mysterious, troubled past. He appears to fight only for the highest bidder, and circumstances lead him to sometimes fight with the Returners. ', 'Squall Leonhart is the main protagonist of Final Fantasy VIII. A young and aloof SeeD mercenary, others view him as cold and focused until he begins to question the way he has chosen to live his life. Squall\'s weapon, the gunblade, is one of the iconic weapons of the Final Fantasy series. Squall is later given the title Commander (委員長, Iinchō?, lit. Chairman).', 'Tidus is the main protagonist of Final Fantasy X. He can be acquired as a Creature Creator ally in the International + Last Mission and HD versions Final Fantasy X-2, and plays a pivotal role in the extended universe audio drama and novella.  He is a rising star blitzball player from Zanarkand, and the son of major blitzball star Jecht. After the gargantuan monster known as Sin attacks his hometown, Tidus is transported to the world of Spira. Lost, confused, and seemingly out of place, Tidus meets a newly-fledged summoner named Yuna, and her guardians. Yuna is to set out on a pilgrimage to put an end to Sin, and by joining Yuna on her pilgrimage Tidus hopes he will find his way home. Tidus is upbeat and initially childish and naive to the world of Spira. He is also selfless and will do what he believes is right even if he doesn\'t think it through first. Throughout the pilgrimage, he matures and becomes more level-headed and grounded', 'Tifa Lockhart, alternatively known with the last name Lockheart, is a playable character in Final Fantasy VII, and the deuteragonist of Final Fantasy VII: Advent Children. She also plays a supportive role in Dirge of Cerberus -Final Fantasy VII- and Crisis Core -Final Fantasy VII-. She is Cloud Strife\'s childhood friend, and a member of AVALANCHE. Tifa is Cloud\'s childhood friend from Nibelheim, but lost contact with him years ago. When she meets him again, she convinces him to join AVALANCHE, the resistance group she is a member of, to fight Shinra Electric Power Company, whom she bears hatred for due to the destruction of their hometown. She supports Cloud as his comrade and helps him and his allies fight Sephiroth. Tifa is emotionally shy and empathic, acting as a motherly figure towards her allies when providing encouragement and emotional support. ', 'Zidane Tribal [ziˈdɑːn] is the main protagonist of Final Fantasy IX. He is a thief who works for the Tantalus Theater Troupe set to kidnap the princess of Alexandria, an event that escalates to a quest to protect the planet of Gaia. Zidane is a laid-back, casual, and outgoing, generally friendly to those around him. He is flirtatious with women, but develops feelings for Garnet specifically. When the situation calls for it, he can be more serious, particularly in the face of danger. Zidane cares for those around him, often offering them advice on life, and is selfless in his actions. He tries to conceal his insecurities and fight them alone. '];

//Need to sort and display every image
// Create an element for every string?
// Place this all into a div

function displayImages()
{
  //sorts by name, works with how the xml is sorted currently as well
  charImages.sort();

  var fanArt = document.getElementById('fanArt');
  var arraylength = charImages.length;

  for(var i = 0;  i < arraylength; i++)
  {

    var imageMaker = "<ul><img src='" + charImages[i] + "' onclick='displayBio(" + i + ")' width='200' height='200'</ul>";
    fanArt.innerHTML += imageMaker;
    console.log(imageMaker);

  }
  
}//end display images


function displayBio(charImages)
{
	
  document.getElementById('charText').innerHTML = charDescriptions[charImages];
 
	
}




//Implement some javascript to load data from XML into HTMl




//1st function 

    //This loads the XML document with an XMLHttpRequest

    function loadXMLDoc(filename)
    {
    if (window.ActiveXObject)
      {
      xhttp = new ActiveXObject("Msxml2.XMLHTTP");
      }
    else
      {
      xhttp = new XMLHttpRequest();
      }
    xhttp.open("GET", filename, false);
    try {xhttp.responseType = "msxml-document"} catch(err) {} // Helping IE11
    xhttp.send("");
    return xhttp.responseXML;
    }
    

    //Displays xml with xsl styling
    function displayResult()
    {
    xml = loadXMLDoc("characters.xml");
    xsl = loadXMLDoc("style.xsl");
    // code for IE
    if (window.ActiveXObject || xhttp.responseType == "msxml-document")
      {
      ex = xml.transformNode(xsl);
      document.getElementById("demo").innerHTML = ex;
      }
    // code for Chrome, Firefox, Opera, etc.
    else if (document.implementation && document.implementation.createDocument)
      {
      xsltProcessor = new XSLTProcessor();
      xsltProcessor.importStylesheet(xsl);
      resultDocument = xsltProcessor.transformToFragment(xml, document);
      document.getElementById("demo").appendChild(resultDocument);
      }
    }
    