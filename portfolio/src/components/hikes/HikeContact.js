import React from 'react'

//Hike contact form
export default function HikeContact() {
    return (
        <div className='ui' id="hikeContactContainer">
            {/* Form  - Name, Email, Question box, submit (use placeholders as labels) */}
            <div className='ui container form segment relaxed padded very raised' id="hikeContactForm">
                <h1 id="hikeFormText" style={{color: "black", letterSpacing: ".2rem", fontSize: "1.6rem"}}>Hiking Contact Form</h1>
                <div class="field">
                    <input type="text" id="hikeFormText" name="first-name" placeholder="First Name or name preferred" />
                </div>
                <div class="field">
                    <input type="text"  id="hikeFormText" name="last-name" placeholder="Contact Email" />
                </div>
                <div class="field">
                    <textarea type="text" id="hikeFormText" placeholder='Ask about something hiking related or anything else...' />
                </div>
                <button id="hikeFormText" class="ui button right floated basic" type="submit">Submit</button>
            </div>
        </div>
    )
}
