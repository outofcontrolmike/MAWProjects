import React from 'react'

//Page View for after Email Submission
export default function HikeThankYou() {
    return (
        <div className='ui' id="hikeThankYouContainer">
            <div className='ui container form segment relaxed padded very raised' id="hikeContactForm">
                <img className='ui image medium centered' src="img/hikes/mountains.png"></img>
                <p className='ui text' style={{ color: "black", fontSize: "2.5rem", textAlign: "center" }}>Your Email Was Successfully Sent!</p>
                <div style={{ padding: "1rem", textAlign: "center" }}>
                    <a href="/hikes">
                        <button className='ui button black basic center aligned large' style={{ width: "75%" }}>Back to Hikes Page</button>
                    </a>
                </div>
            </div>
        </div>
    )
}
