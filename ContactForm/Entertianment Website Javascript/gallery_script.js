// Javascript again!

//Event Listeners



// created an Array of images
var galleryPics = ["images/naturecenter.jpg", "images/seqouia.jpg", "images/yosemitie.jpg", "images/wilson.jpg", "images/deathValley.jpg"];
var galleryId = ["0", "1", "2", "3", "4"];

// Array for image descriptions.
var pictureDesc = ["Nature Center of Springfield Missouri. Springfield is where I live and this trail is probably the best around Springfield.",
"This is in Sequoia National Park, California. This park offers some of the best scenery that America has to offer.",
"This is also in California, Yoseimite National park. I only drove through here, I'm very dissapointed that I wasn't able to camp there.",
"Wilson's Creek Natinal Park, Missouri. This holds the location of the Battle of Bloddy Hill. It's very historical and a place great to visit if you're near Springfield mo",
"Death Valley California is one of the hottest places to be on earth. I can't imagine trying to camp or hike around the valley, even in the Winter."]

var pictureId = ["0", "1", "2", "3", "4"];


   //function for changing Image
    function changeImage(galleryImage)
      {
            document.getElementById('big').src=galleryPics[galleryImage];
            document.getElementById('aboutImage').innerText = pictureDesc[galleryImage];

      }//end changeImage


    var aryLength = galleryPics.length;
               
    for (var i = 0; i < aryLength; i++)
    {
     var htmlString = "<img class= 'row'  height='125' width ='85'   src='" + galleryPics[i] + "' alt='" + i + "'  id='" + galleryId[i] + "' onclick='changeImage(" + i + ")' />";
     document.write( htmlString );
     
                 
    }//provides onclick events for each



   



    


   