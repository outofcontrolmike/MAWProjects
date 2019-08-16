// Javascript again!

// created an Array of images
var galleryPics = ["naturecenter.jpg", "seqouia.jpg", "yosemitie.jpg", "wilson.jpg", "deathValley.jpg"];
var galleryId = ["0", "1", "2", "3", "4"];

    function changeImage(galleryImage)
    {
         document.getElementById('big').src=galleryPics[galleryImage];

    }//end changeImage


    var aryLength = galleryPics.length;
               
    for (var i = 0; i < aryLength; i++)
    {
     var htmlString = "<img class = 'row' height='125 width ='85'   src='" + galleryPics[i] + "' alt='" + i + "'  id='" + galleryId[i] + "' onclick='changeImage(" + i + ")' />";
     document.write( htmlString );
                 
    }//provides onclick events for each

var pictureDesc = ["Nature Center of Springfield Missoui.  This is where I live and it's probably the best trail in springfield",
"This is in Sequoia National Park, California. This park offers some of the best scenery that America has to offer.",
"This is also in California, Yoseimite National park. I only drove through here, I'm very dissapointed that I wasn't able to camp there.",
"Wilson's Creek Natinal Park, Missouri. This holds the location of the Battle of Bloddy Hill. It's very historical and a place great to visit if you're near Springfield mo",
"Death Valley California is one of the hottest places to be on earth. I can't imagine trying to camp or hike around the valley, even in the Winter."]

var pictureId = ["0", "1", "2", "3", "4"];

function changeDescription(imageDesc)
{
    document.getElementsByClassName('aboutImage').src=pictureDesc[imageDesc];
}//end changeDescription

var arrayLength = pictureDesc.length;

for(var i = 0; i < arrayLength; i++)
{
    var htmlString =  pictureDesc[i] + "' alt='" + i + "'  id='" + pictureId[i] + "' onclick='changeDescription(" + i + ")' />";
    document.write (htmlString );
}

    // //This works compeletely
    // myTimer = setInterval(getRandomImage, 3000);

    // function getRandomImage() {
    //     var num = Math.floor(Math.random() *5 );
    //     var img = galleryPics[num];
    //     document.getElementById('bigImage').src=[img];
    // }
    


   