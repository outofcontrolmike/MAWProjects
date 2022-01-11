import React from 'react'
import HikeNavigation
 from './HikeNavigation';

 import HikeHeader from './HikeHeader';
//Hiking Gallery
export default function HikeGallery(props) {
   
    //Same code from 
    let imgArray = new Array()

    function setupImages() {
  //Alternate way of setting up array
  let count = 35;
  
  //Create array indexes for images
  for (let i = 0; i <= count; i++) {
    imgArray[i] = new Image();
  }
  
  //hercules glades
  imgArray[0].src = "img/hikes/herculesGlades.jpg";
  imgArray[1].src = "img/hikes/herculesglades2.jpg";
  imgArray[2].src = "img/hikes/herculesGlades3.jpg";
  
  //busiek
  imgArray[3].src = "img/hikes/busiek1.jpg";
  imgArray[4].src = "img/hikes/busiek2.jpg";
  imgArray[5].src = "img/hikes/busiek3.jpg";
  
  //piney
  imgArray[6].src = "img/hikes/piney1.jpg";
  imgArray[7].src = "img/hikes/piney2.jpg";
  imgArray[8].src = "img/hikes/piney3.jpeg";
  
  //compton
  imgArray[9].src = "img/hikes/compton1.jpg";
  imgArray[10].src = "img/hikes/compton2.jpg";
  imgArray[11].src = "img/hikes/compton3.jpg";
  
  //hening
  imgArray[12].src = "img/hikes/hening1.jpg";
  imgArray[13].src = "img/hikes/hening2.jpg";
  imgArray[14].src = "img/hikes/hening3.jpg";
  
  //lake spf
  imgArray[15].src = "img/hikes/lakeSpf1.jpg";
  imgArray[16].src = "img/hikes/lakeSpf2.jpg";
  imgArray[17].src = "img/hikes/lakeSpf3.jpg";
  
  //lost hill
  imgArray[18].src = "img/hikes/lost1.jpg";
  imgArray[19].src = "img/hikes/lost2.jpg";
  imgArray[20].src = "img/hikes/lost3.jpg";
  
  //pleasant hope
  imgArray[21].src = "img/hikes/pleasant1.jpg";
  imgArray[22].src = "img/hikes/pleasant2.jpg";
  imgArray[23].src = "img/hikes/pleasant3.jpg";
  
  //nature center
  imgArray[24].src = "img/hikes/natureCenter1.jpg";
  imgArray[25].src = "img/hikes/natureCenter2.jpg";
  imgArray[26].src = "img/hikes/natureCenter3.jpg";
  
  //twoRivers
  imgArray[27].src = "img/hikes/twoRivers1.jpg";
  imgArray[28].src = "img/hikes/twoRivers2.jpg";
  imgArray[29].src = "img/hikes/twoRivers3.jpg";
  
  
  //valley water mill
  imgArray[30].src = "img/hikes/valley1.jpg";
  imgArray[31].src = "img/hikes/valley2.jpg";
  imgArray[32].src = "img/hikes/valley3.jpg";
  
   //wilson's creek
   imgArray[33].src = "img/hikes/wilson1.jpg";
   imgArray[34].src = "img/hikes/wilson2.jpg";
   imgArray[35].src = "img/hikes/wilson3.jpg";
  
    }

        //Create images and append to galleryList
        function createImages() {
            for(let i = 0; i < imgArray.length; i++ )
            {
                imgArray[i].className="ui huge image centered";
                imgArray[i].id = "hikeImage"
               document.getElementById('galleryList').appendChild(imgArray[i]);
            }
        }
        //Run this after page render
        setTimeout(() => {
            createImages()
        }, 10);
    
    setupImages();

    console.log('imagArray from hike gallery', imgArray);
    return (
        <div className="ui" style={{backgroundColor: "white"}}>
                <HikeHeader />
                <HikeNavigation />
        <div id="galleryList" className='ui images centered'>
            {/* Images will be listed here */}
        </div>
        </div>
    )
}
