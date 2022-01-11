import React from 'react'

export default function SpringfieldGallery() {

    const spfImages = ["img/spfPhotos/1.jpg","img/spfPhotos/2.jpg","img/spfPhotos/3.jpg","img/spfPhotos/4.jpg","img/spfPhotos/5.jpg","img/spfPhotos/6.jpg","img/spfPhotos/7.jpg","img/spfPhotos/8.jpg","img/spfPhotos/9.jpg","img/spfPhotos/10.jpg","img/spfPhotos/11.jpg","img/spfPhotos/12.jpg","img/spfPhotos/13.jpg","img/spfPhotos/14.jpg","img/spfPhotos/15.jpg","img/spfPhotos/16.jpg","img/spfPhotos/17.jpg","img/spfPhotos/18.jpg","img/spfPhotos/20.jpg"];

    function createImages() {
        for(let i = 1; i <= spfImages.length; i++ )
        {
           let spfImage =  document.createElement('img');
           spfImage.src = spfImages[i];
           spfImage.classList="ui huge image centered padded ";
           console.log("spfImage", spfImage.src);
           document.getElementById('spfList').appendChild(spfImage);
        }
    }
    setTimeout(() => {
        createImages()
    }, 10);
    
    return (
        <div>
        <div id="spfList" className='ui images'>
            
        </div>
        </div>
    )
}
