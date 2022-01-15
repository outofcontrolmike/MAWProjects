import React from 'react'
import HikeFooter from './HikeFooter';
import HikeNavigation
    from './HikeNavigation';

import HikeHeader from './HikeHeader';
import BackToTopBtn from './BackToTopBtn';

//Springfield photo gallery
export default function SpringfieldGallery() {

    //images to loop through
    const spfImages = ["img/spfPhotos/1.jpg", "img/spfPhotos/2.jpg", "img/spfPhotos/3.jpg", "img/spfPhotos/4.jpg", "img/spfPhotos/5.jpg", "img/spfPhotos/6.jpg", "img/spfPhotos/7.jpg", "img/spfPhotos/8.jpg", "img/spfPhotos/9.jpg", "img/spfPhotos/10.jpg", "img/spfPhotos/11.jpg", "img/spfPhotos/12.jpg", "img/spfPhotos/13.jpg", "img/spfPhotos/14.jpg", "img/spfPhotos/15.jpg", "img/spfPhotos/16.jpg", "img/spfPhotos/17.jpg", "img/spfPhotos/18.jpg", "img/spfPhotos/19.jpg", "img/spfPhotos/20.jpg"];

    let imgArray = new Array()
    //Create images and append to spfList
    function setUpImages() {

        //Alternate way of setting up array
        let count = 35;

        //Create array indexes for images
        for (let i = 0; i <= count; i++) {
            imgArray[i] = new Image();
        }
    }


    function createImages() {

        for (let i = 0; i < spfImages.length; i++) {
            imgArray[i].classList = "ui huge image centered rounded";
            imgArray[i].id = "spfImage";

            let link = document.createElement('a');
            link.classList = "ui container";
            link.target = "_blank";
            link.style.width = "800px";
            link.href = imgArray.src;

            link.appendChild(imgArray[i]);
            document.getElementById('spfList').appendChild(link);
        }

        //hercules glades
        imgArray[0].src = spfImages[0];
        imgArray[1].src = spfImages[1];
        imgArray[2].src = spfImages[2];

        //busiek
        imgArray[3].src = spfImages[3];
        imgArray[4].src = spfImages[4];
        imgArray[5].src = spfImages[5];

        //piney
        imgArray[6].src = spfImages[6];
        imgArray[7].src = spfImages[7];
        imgArray[8].src = spfImages[8];

        //compton
        imgArray[9].src = spfImages[9];
        imgArray[10].src = spfImages[10];
        imgArray[11].src = spfImages[11];

        //hening
        imgArray[12].src = spfImages[12];
        imgArray[13].src = spfImages[13];
        imgArray[14].src = spfImages[14];

        //lake spf
        imgArray[15].src = spfImages[15];
        imgArray[16].src = spfImages[16];
        imgArray[17].src = spfImages[17];

        //lost hill
        imgArray[18].src = spfImages[18];
        imgArray[19].src = spfImages[19];
        imgArray[20].src = spfImages[20];

        //pleasant hope
        imgArray[21].src = spfImages[21];
        imgArray[22].src = spfImages[22];;
        imgArray[23].src = spfImages[23];

        //nature center
        imgArray[24].src = spfImages[24];
        imgArray[25].src = spfImages[25];
        imgArray[26].src = spfImages[26];

        //twoRivers
        imgArray[27].src = spfImages[27];
        imgArray[28].src = spfImages[28];
        imgArray[29].src = spfImages[29];


        //valley water mill
        imgArray[30].src = spfImages[30];
        imgArray[31].src = spfImages[31];
        imgArray[32].src = spfImages[32];

        //wilson's creek
        imgArray[33].src = spfImages[33];
        imgArray[34].src = spfImages[34];
        imgArray[35].src = spfImages[35];
    }
    //Run this after page render
    setTimeout(() => {
        createImages()
    }, 10);

    setUpImages();

    return (
        <div className="ui" id="spfGallery">
            <HikeHeader />
            <HikeNavigation />
            <div id="spfList" className='ui image centered'>
                {/* Images will be listed here */}
            </div>
            <BackToTopBtn />
            <HikeFooter />

        </div>
    )
}
