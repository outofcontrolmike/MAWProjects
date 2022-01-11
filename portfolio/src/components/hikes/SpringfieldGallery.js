import React from 'react'
import HikeNavigation
 from './HikeNavigation';

 import HikeHeader from './HikeHeader';
//Springfield photo gallery
export default function SpringfieldGallery() {

    //images to loop through
    const spfImages = ["img/spfPhotos/1.jpg","img/spfPhotos/2.jpg","img/spfPhotos/3.jpg","img/spfPhotos/4.jpg","img/spfPhotos/5.jpg","img/spfPhotos/6.jpg","img/spfPhotos/7.jpg","img/spfPhotos/8.jpg","img/spfPhotos/9.jpg","img/spfPhotos/10.jpg","img/spfPhotos/11.jpg","img/spfPhotos/12.jpg","img/spfPhotos/13.jpg","img/spfPhotos/14.jpg","img/spfPhotos/15.jpg","img/spfPhotos/16.jpg","img/spfPhotos/17.jpg","img/spfPhotos/18.jpg","img/spfPhotos/19.jpg","img/spfPhotos/20.jpg"];

    //Create images and append to spfList
    function createImages() {
        for(let i = 0; i < spfImages.length; i++ )
        {
           let spfImage =  document.createElement('img');
           spfImage.src = spfImages[i];
           spfImage.classList="ui huge image centered";
           spfImage.style.padding = "1rem"
           console.log("spfImage", spfImage.src);
           document.getElementById('spfList').appendChild(spfImage);
        }
    }
    //Run this after page render
    setTimeout(() => {
        createImages()
    }, 10);
    
    return (
        <div className="ui" style={{backgroundColor: "white"}}>
             <HikeHeader />
                <HikeNavigation />
        <div id="spfList" className='ui images centered'>
            {/* Images will be listed here */}
        </div>
        </div>
    )
}
