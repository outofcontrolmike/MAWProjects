import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";


export default function HikeCarousel(props) {
    console.log("props from hikecarosuel", props)
    let hike1 = props.data[0];

    return (
        <div className='ui column'>
            <p id="hikePhotos">
                <Carousel carouselData={props}>
                    <div>
                        <img id="hikeImage1" src={props.imgs[3].src} />
                        <p id="legend1" className="legend">{hike1.legend1}</p>
                    </div>
                    <div>
                        <img id="hikeImage2" src={props.imgs[4].src} />
                        <p id="legend2" className="legend">{hike1.legend2}</p>
                    </div>
                    <div>
                        <img id="hikeImage3" src={props.imgs[5].src} />
                        <p id="legend3" className="legend">{hike1.legend3}</p>
                    </div>
                </Carousel>
            </p>
        </div>
    )
}
